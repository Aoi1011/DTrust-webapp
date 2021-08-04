export const CONTROLKEY_ADDRESS = "0x5def76E9Cd63D0da2031f4c20042414595e53d2a";

export const CONTROLKEY_ABI = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "controlKeyId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "privateKey",
                "type": "string"
            }
        ],
        "name": "GenerateControlKey",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "numControlKey",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_privateKey",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "_settlor",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_beneficiary",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_trustee",
                "type": "address"
            }
        ],
        "name": "generateControlKey",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "controlKeyId",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_controlKeyId",
                "type": "uint256"
            }
        ],
        "name": "getControlKey",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "privateKey",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "settlor",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "beneficiary",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "trustee",
                        "type": "address"
                    },
                    {
                        "internalType": "bool",
                        "name": "usable",
                        "type": "bool"
                    },
                    {
                        "internalType": "bool",
                        "name": "burnable",
                        "type": "bool"
                    }
                ],
                "internalType": "struct ControlKey.StructControlKey",
                "name": "existControlKey",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_controlKeyId",
                "type": "uint256"
            }
        ],
        "name": "handleUsableControlKey",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_controlKeyId",
                "type": "uint256"
            }
        ],
        "name": "handleBurnableControlKey",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_controlKeyId",
                "type": "uint256"
            }
        ],
        "name": "destroyControlKey",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];