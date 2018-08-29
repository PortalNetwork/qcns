# Implementation

## QCNS Smart Contracts

The link of QCNS smart contract as below:
- [QCNSRegsitry.sol](../qcns/QCNSRegistry.sol)
- [QCNSRegistrar.sol](../qcns/QCNSRegistrar.sol)
- [QCNSResolver.sol](../qcns/QCNSResolver.sol)

| Network    | Contract Name | Contract address                                   | Transaction hash
|------------|---------------|----------------------------------------------------|---------------------
| Testnet    | QCNS Registry | [0x4BD29090F74A257a51b2695a263A453b1A1a57D8fF1a972e](http://testnet.quarkchain.io/address/0x4BD29090F74A257a51b2695a263A453b1A1a57D8fF1a972e) | [0x8067cb8c6be2abf72254779bcc8b21f26e0ad4460b66b639d82c86ece76b6b1aff1a972e](http://testnet.quarkchain.io/tx/0x8067cb8c6be2abf72254779bcc8b21f26e0ad4460b66b639d82c86ece76b6b1aff1a972e)
| Testnet    | QCNS Registrar | [0xA5bfaEDF5D34efCe839A3d1705F25b8c9ab72fF1fF1a972e](http://testnet.quarkchain.io/address/0xA5bfaEDF5D34efCe839A3d1705F25b8c9ab72fF1fF1a972e) | [0x534925133d978f2005f37bfde184341d65763c31596f9e0f2c20aeb1fe7e3760ff1a972e](http://testnet.quarkchain.io/tx/0x534925133d978f2005f37bfde184341d65763c31596f9e0f2c20aeb1fe7e3760ff1a972e)

- namehash.hash('qkc'): 0x594a477ed3f0b042faff347a58ea6074459e468efbb5aa3a2c51f7c3673be7cf
- qkc sha3: 0x9cb936029f91a315e742fdfeb1c0d18b0c9cc56e512b5821c4dfe9bac7f3dd78

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
