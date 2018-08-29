const QCNSRegistrar = artifacts.require('QCNSRegistrar.sol');
const QCNSRegistry = artifacts.require('QCNSRegistry.sol');
const QCNSResolver = artifacts.require('QCNSResolver.sol');
const namehash = require('eth-ens-namehash');
const Web3 = require('web3');
let web3 = new Web3();

contract('QCNS', function (accounts) {
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

});
