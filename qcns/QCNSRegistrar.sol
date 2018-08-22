pragma solidity ^0.4.18;

import './QCNS.sol';

/**
 * A registrar that allocates subdomains to the first person to claim them.
 */
contract QCNSRegistrar {
    QCNS qcns;
    bytes32 rootNode;

    modifier only_owner(bytes32 subnode) {
        address currentOwner = qcns.owner(keccak256(rootNode, subnode));
        require(currentOwner == 0 || currentOwner == msg.sender);
        _;
    }

    /**
     * Constructor.
     */
    function QCNSRegistrar() public {
        qcns = QCNS(0xFCb7BdFAf92e1114EA023fe2d5e420A4FF1A972e);
        rootNode = 0x594a477ed3f0b042faff347a58ea6074459e468efbb5aa3a2c51f7c3673be7cf;
    }

    /**
     * Register a name, or change the owner of an existing registration.
     * @param subnode The hash of the label to register.
     * @param owner The address of the new owner.
     */
    function register(bytes32 subnode, address owner) public only_owner(subnode) {
        qcns.setSubnodeOwner(rootNode, subnode, owner);
    }
}