export const CONTROLKEY_ADDRESS = "0xe203B76EB2BeEEAfd4f9DA86f47B20B0e8e88cb0";

export const CONTROLKEY_ABI = [
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