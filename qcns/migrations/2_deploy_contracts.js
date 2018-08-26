const QCNSRegistry = artifacts.require("./QCNSRegistry.sol");
const QCNSRegistrar = artifacts.require('./QCNSRegistrar.sol');
const QCNSResolver = artifacts.require('./QCNSResolver.sol');

const web3 = new (require('web3'))();
const namehash = require('eth-ens-namehash');

const QCNS = 'qcns';

module.exports = function(deployer) {
  // deploy registry
  deployer.deploy(QCNSRegistry)
    .then(() => {
      // deploy registrar
      return deployer.deploy(QCNSRegistrar, QCNSRegistry.address, namehash.hash(QCNS));
    })
    .then(() => {
      // deploy resolver
      return deployer.deploy(QCNSResolver, QCNSRegistry.address);
    })
    .then(function() {
      QCNSRegistry.at(QCNSRegistry.address).setSubnodeOwner('0x0', web3.sha3(QCNS), QCNSRegistrar.address);
    });
};
