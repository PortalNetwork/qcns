![QuarkChain Name Service](./assets/title.jpg)

> 📖🔍 Documents of the QuarkChain Name Service.

## 💡 What is QuarkChain?
QuarkChain is a secure, permission-less, scalable, and decentralized blockchain. One of the goals of QuarkChain is to utilize sharding technology to deliver over 1 million transactions per second (tps). Essentially, QuarkChain markets itself as a peer-to-peer blockchain with a high capacity throughput to help deliver fast and secure decentralized applications.

## 💡 What is BNS?
BNS – or blockchain name system – is the protocol on the internet that turns human-comprehensible decentralized website names such as ‘website.perl’ or ‘mywebsite.eth’ into addresses understandable by decentralized network machines.

## 📝 Description

QCNS is the QuarkChain Name Service, a distributed, open, and extensible naming system based on the QuarkChain blockchain.

## 📚 Documents

#### Table of Contents
-  [Introduction](./docs/INTRODUCTION.md)
-  [Implementation](./docs/IMPLEMENTATION.md)
    - [Registry](./docs/REGISTRY.md)
    - [Registrar](./docs/REGISTRAR.md)
    - [Resolver](./docs/RESOLVER.md)
-  [Integration](./docs/INTEGRATION.md)

## 📝 Guideline
- [Smart Contract Deploy](./docs/SMART_CONTRACT_DEPLOY.md)
- [Smart Contract Testing](./qcns/README.md)
- [Smart Contract Design Principle](./docs/SMART_CONTRACT_DESIGN_PRINCIPLE.md)

## Testnet Contract
| Network    | Contract Name | Contract address                                   | Transaction hash
|------------|---------------|----------------------------------------------------|---------------------
| Testnet    | QCNS Registry | [0xf0A2efAa0B5dbc592CcF8F6d12Ffd6c2C6332240f05d8fc2](http://testnet.quarkchain.io/address/0xf0A2efAa0B5dbc592CcF8F6d12Ffd6c2C6332240f05d8fc2) | [0x4b1021cb8f3ff112971ec4df8ef5a425fc5bc6a0f852d45b97c15383ac64a02ff05d8fc2](http://testnet.quarkchain.io/tx/0x4b1021cb8f3ff112971ec4df8ef5a425fc5bc6a0f852d45b97c15383ac64a02ff05d8fc2)
| Testnet    | QCNS Registrar | [0xCC1df8b8435C4860863C8ECAc5a72b4891bFf935f05d8fc2](http://testnet.quarkchain.io/address/0xCC1df8b8435C4860863C8ECAc5a72b4891bFf935f05d8fc2) | [0xa338709faceb75ab098c38b7ddd31a070f98b827e48a809a58e3026778bceae4f05d8fc2](http://testnet.quarkchain.io/tx/0xa338709faceb75ab098c38b7ddd31a070f98b827e48a809a58e3026778bceae4f05d8fc2)
| Testnet    | QCNS Resolver | [0x0c5077C1f90658f392844533CEa0e34313908aC6f05d8fc2](http://testnet.quarkchain.io/address/0x0c5077C1f90658f392844533CEa0e34313908aC6f05d8fc2) | [0xb82af29b275d791fa71907c704d820906090274a2cf55207348beb1c921fa297f05d8fc2](https://testnet.quarkchain.io/tx/0xb82af29b275d791fa71907c704d820906090274a2cf55207348beb1c921fa297f05d8fc2)

## 📝 QCNS in Web3.0
QCNS plays an connecting and entry layer in Web3.0 services. It connects with QuarkChain wallet, blockchain server, decentralized content resources, and decentralized database.
![QCNS](./assets/QCNS.png)

## QuarkChain Technical Stack
![QuarkChain Tech Stack](./assets/QuarkChain-layer.png)

## ⚙️ QCNS smart contract test coverage
__Continuous updating__
- [Coverage Report](./tns/coverage/)

```
Launched testrpc on port 8555
Running: truffle test
(this can take a few seconds)...
Using network 'development'.



  Contract: QCNS
    ✓ should allow registration of names (96ms)
    ✓ should register a domain (122ms)
    ✓ should check resolver interfaces (103ms)
    ✓ should not support a random interface
    ✓ should set resolver for node (139ms)
    ✓ should set text (197ms)
    ✓ should set address (179ms)
    ✓ should set multihash (187ms)


  8 passing (3s)

--------------------|----------|----------|----------|----------|----------------|
File                |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
--------------------|----------|----------|----------|----------|----------------|
 contracts/         |       75 |       50 |       76 |     77.5 |                |
  QCNS.sol          |      100 |      100 |      100 |      100 |                |
  QCNSRegistrar.sol |      100 |       50 |      100 |      100 |                |
  QCNSRegistry.sol  |    78.57 |       50 |    77.78 |       80 |       68,69,96 |
  QCNSResolver.sol  |    66.67 |       50 |    69.23 |    68.42 |... ,98,129,140 |
--------------------|----------|----------|----------|----------|----------------|
All files           |       75 |       50 |       76 |     77.5 |                |
--------------------|----------|----------|----------|----------|----------------|

Istanbul coverage reports generated
Cleaning up...
Shutting down testrpc-sc (pid 87275)
Done.
```

## 🗃 Changelog
See [CHANGELOG.md](./CHANGELOG.md).

## 📣 Contributing
See [CONTRIBUTING.md](./CONTRIBUTING.md) for how to help out.

## 🗒 Licence
See [LICENSE](./LICENSE) for details.
