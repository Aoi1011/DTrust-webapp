export const ADDRESS = "0xf3B6A0F4560cD929dF31DE716e476D81801c419a";

export const ABI = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "string",
                "name": "contractSymbol",
                "type": "string"
            },
            {
                "indexed": true,
                "internalType": "string",
                "name": "newuri",
                "type": "string"
            },
            {
                "indexed": true,
                "internalType": "string",
                "name": "contractName",
                "type": "string"
            }
        ],
        "name": "CreateDTRUST",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "prTokenId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "prTokenKey",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "isSucceed",
                "type": "bool"
            }
        ],
        "name": "CreatePrToken",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "deployedDTRUSTs",
        "outputs": [
            {
                "internalType": "contract DTRUST",
                "name": "",
                "type": "address"
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
                "name": "_contractSymbol",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_newuri",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_contractName",
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
        "name": "createDTRUST",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function",
        "payable": true
    },
    {
        "inputs": [
            {
                "internalType": "contract DTRUST",
                "name": "_dtrust",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_tokenKey",
                "type": "string"
            }
        ],
        "name": "createPrToken",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function",
        "payable": true
    },
    {
        "inputs": [
            {
                "internalType": "contract DTRUST",
                "name": "_dtrust",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_tokenKey",
                "type": "string"
            }
        ],
        "name": "usePrToken",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "contract DTRUST",
                "name": "_dtrust",
                "type": "address"
            }
        ],
        "name": "getCurrentPromoteToken",
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
        "inputs": [],
        "name": "getAllDeployedDTRUSTs",
        "outputs": [
            {
                "internalType": "contract DTRUST[]",
                "name": "",
                "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    }
];