# Implementation

## QCNS Smart Contracts

The link of QCNS smart contract as below:
- [QCNSRegsitry.sol](../qcns/QCNSRegistry.sol)
- [QCNSRegistrar.sol](../qcns/QCNSRegistrar.sol)
- [QCNSResolver.sol](../qcns/QCNSResolver.sol)

| Network    | Contract Name | Contract address                                   | Transaction hash
|------------|---------------|----------------------------------------------------|---------------------
| Testnet    | QCNS Registry | [0xf0A2efAa0B5dbc592CcF8F6d12Ffd6c2C6332240f05d8fc2](http://testnet.quarkchain.io/address/0xf0A2efAa0B5dbc592CcF8F6d12Ffd6c2C6332240f05d8fc2) | [0x4b1021cb8f3ff112971ec4df8ef5a425fc5bc6a0f852d45b97c15383ac64a02ff05d8fc2](http://testnet.quarkchain.io/tx/0x4b1021cb8f3ff112971ec4df8ef5a425fc5bc6a0f852d45b97c15383ac64a02ff05d8fc2)
| Testnet    | QCNS Registrar | [0xCC1df8b8435C4860863C8ECAc5a72b4891bFf935f05d8fc2](http://testnet.quarkchain.io/address/0xCC1df8b8435C4860863C8ECAc5a72b4891bFf935f05d8fc2) | [0xa338709faceb75ab098c38b7ddd31a070f98b827e48a809a58e3026778bceae4f05d8fc2](http://testnet.quarkchain.io/tx/0xa338709faceb75ab098c38b7ddd31a070f98b827e48a809a58e3026778bceae4f05d8fc2)
| Testnet    | QCNS Resolver | [0x0c5077C1f90658f392844533CEa0e34313908aC6f05d8fc2](http://testnet.quarkchain.io/address/0x0c5077C1f90658f392844533CEa0e34313908aC6f05d8fc2) | [0xb82af29b275d791fa71907c704d820906090274a2cf55207348beb1c921fa297f05d8fc2](https://testnet.quarkchain.io/tx/0xb82af29b275d791fa71907c704d820906090274a2cf55207348beb1c921fa297f05d8fc2)

- namehash.hash('qkc'): 0x594a477ed3f0b042faff347a58ea6074459e468efbb5aa3a2c51f7c3673be7cf
- qkc sha3: 0x9cb936029f91a315e742fdfeb1c0d18b0c9cc56e512b5821c4dfe9bac7f3dd78

#### Send Transaction to Registry setSubdomain to the start Registrar
Tx hash: [http://testnet.quarkchain.io/tx/0x2630e2f2a79a09c31aa3faf44eee57e715a4bd624cb2e008fd550d3e9db33b7fff1a972e](http://testnet.quarkchain.io/tx/0x2630e2f2a79a09c31aa3faf44eee57e715a4bd624cb2e008fd550d3e9db33b7fff1a972e)


## QCNS Spec

The internet HTTP protocol is using the URL below:

```
<protocol>://<subdomain>.<domain>.<top-level domain>/<path>
```

Example:
```
https://www.portal.qkc/path
```

#### Spec
- http: The QCNS and protocol will be passed separately when the service requests.
- www.portal.qkc: The content of the QCNS is used when user requests to the browser.
- path: The path is not processed at the DNS level, the same as QCNS, if there is a path, it is handled by other way or method.

## Resolving Names
Resolving names in QCNS is a three step process:
1. Normalise and hash the name you want to resolve (see [Namehash](#namehash)).
2. Query the QCNS registry for the address of the resolver responsible for the name.
3. Query the resolver for the resource you want to look up.

## Updating QCNS Records
Your application may wish to provide users with a means of updating names they own to point to resources your application provides or manages. Doing so follows a similar process to [Resolving Names](#resolving-names):

- Normalise and hash the name you want to resolve (see [Namehash](#namehash)).
- Query the QCNS registry for the address of the resolver responsible for the name.
- Call the appropriate update method on the resolver.

## Namehash
Names in QCNS are represented as 32 byte hashes, rather than as plain text. This simplifies processing and storage, while permitting arbitrary length domain names, and preserves the privacy of names onchain. The algorithm used to translate domain names into hashes is called namehash. The Namehash algorithm is defined in [EIP137](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-137.md).

In order to preserve the hierarchal nature of names, namehash is defined recursively, making it possible to derive the hash of a subdomain from the namehash of the parent domain and the name or hash of the subdomain label.

### Terminology
- domain - the complete, human-readable form of a name; eg, `wallet.portal.qkc`.
- label - a single component of a domain; eg, `portal`, `wallet`, or `qkc`. A label may not contain a period ('.').
- label hash - the output of the keccak-256 function applied to a label.
- node - the output of the namehash function, used to uniquely identify a name in QCNS.
