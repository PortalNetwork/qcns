const QCNSRegistrar = artifacts.require('QCNSRegistrar.sol');
const QCNSRegistry = artifacts.require('QCNSRegistry.sol');
const QCNSResolver = artifacts.require('QCNSResolver.sol');
const namehash = require('eth-ens-namehash');
const Web3 = require('web3');
let web3 = new Web3();

contract('QCNS', function (accounts) {

  let registry, registrar, resolver;

  beforeEach(async () => {
    registry = await QCNSRegistry.new();
    registrar = await QCNSRegistrar.new(registry.address, 0);
    resolver = await QCNSResolver.new(registry.address);

    await registry.setOwner(0, registrar.address, {from: accounts[0]});
  });

  it('should allow registration of names', async () => {
    await registrar.register(web3.sha3('qkc'), accounts[0], {from: accounts[0]});
    assert.equal(await registry.owner(0), registrar.address);
    assert.equal(await registry.owner(namehash.hash('qkc')), accounts[0]);
  });

  it('should register a domain', async () => {
    await registrar.register(web3.sha3('qkc'), accounts[1], {from: accounts[1]});
    assert.equal(await registry.owner(namehash.hash('qkc')), accounts[1]);
    // register a subdomain
    await registry.setSubnodeOwner(namehash.hash('qkc'), web3.sha3('subdomain'), accounts[1], {from: accounts[1]});
    assert.equal(await registry.owner(namehash.hash('subdomain.qkc')), accounts[1]);
  });

  it('should check resolver interfaces', async () => {
    assert.equal(await resolver.supportsInterface('0x3b3b57de'), true);
    assert.equal(await resolver.supportsInterface('0xd8389dc5'), true);
    assert.equal(await resolver.supportsInterface('0x691f3431'), true);
    assert.equal(await resolver.supportsInterface('0xe89401a1'), true);
    assert.equal(await resolver.supportsInterface('0x59d1d43c'), true);
  });

  it('should not support a random interface', async () => {
    assert.equal(await resolver.supportsInterface('0x3b3b57df'), false);
  });

  it('should set resolver for node', async () => {
    await registrar.register(web3.sha3('qkc'), accounts[1], {from: accounts[1]});
    await registry.setSubnodeOwner(namehash.hash('qkc'), web3.sha3('subdomain'), accounts[1], {from: accounts[1]});
    await registry.setResolver(namehash.hash('qkc'), resolver.address, {from: accounts[1]});
    assert.equal(await registry.resolver(namehash.hash('qkc')), resolver.address);
  });

  it('should set text', async () => {
    await registrar.register(web3.sha3('qkc'), accounts[1], {from: accounts[1]});
    await registry.setSubnodeOwner(namehash.hash('qkc'), web3.sha3('subdomain'), accounts[1], {from: accounts[1]});
    await registry.setResolver(namehash.hash('qkc'), resolver.address, {from: accounts[1]});
    await resolver.setText(namehash.hash('qkc'), 'QCNS', 'qkcChain Name Service', {from: accounts[1]});
    assert.equal(await resolver.text(namehash.hash('qkc'), 'QCNS'), 'qkcChain Name Service');
  }); 

  it('should set address', async () => {
    await registrar.register(web3.sha3('qkc'), accounts[1], {from: accounts[1]});
    await registry.setSubnodeOwner(namehash.hash('qkc'), web3.sha3('subdomain'), accounts[1], {from: accounts[1]});
    await registry.setResolver(namehash.hash('qkc'), resolver.address, {from: accounts[1]});
    await resolver.setAddr(namehash.hash('qkc'), accounts[1], {from: accounts[1]});
    assert.equal(await resolver.addr(namehash.hash('qkc')), accounts[1]);
  });

  it('should set multihash', async () => {
    await registrar.register(web3.sha3('qkc'), accounts[1], {from: accounts[1]});
    await registry.setSubnodeOwner(namehash.hash('qkc'), web3.sha3('subdomain'), accounts[1], {from: accounts[1]});
    await registry.setResolver(namehash.hash('qkc'), resolver.address, {from: accounts[1]});
    await resolver.setMultihash(namehash.hash('qkc'), 'IPFS', '0x0000000000000000000000000000000000123456', {from: accounts[1]});
    assert.equal(await resolver.multihash(namehash.hash('qkc'), 'IPFS'), '0x0000000000000000000000000000000000123456');
  });
});
