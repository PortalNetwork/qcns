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
    function QCNSRegistrar(QCNS qcnsAddr, bytes32 node) public {
        qcns = qcnsAddr;
        rootNode = node;
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