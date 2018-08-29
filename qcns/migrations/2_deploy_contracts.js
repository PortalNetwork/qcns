const QCNSRegistry = artifacts.require("./QCNSRegistry.sol");
const QCNSRegistrar = artifacts.require('./QCNSRegistrar.sol');
const QCNSResolver = artifacts.require('./QCNSResolver.sol');

const web3 = new (require('web3'))();
const namehash = require('eth-ens-namehash');

const QKC = 'qkc';

module.exports = async (deployer) => {
  // deploy registry
  let qcnsResgirty = await deployer.deploy(QCNSRegistry);
  // deploy registrar
  let qcnsRegistrar = await deployer.deploy(QCNSRegistrar, QCNSRegistry.address, namehash.hash(QKC));
  // deploy resolver
  let qcnsResolver = await deployer.deploy(QCNSResolver, QCNSRegistry.address);
  QCNSRegistry.at(QCNSRegistry.address).setSubnodeOwner('0x0', web3.sha3(QKC), QCNSRegistrar.address);
};
