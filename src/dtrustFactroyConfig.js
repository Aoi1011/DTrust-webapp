export const ADDRESS = '0x3a24D9E604AFB3F6eb60e36041A37e0731161560'

export const ABI = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_governanceAddress",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "contract DTRUST",
        "name": "createdDtrust",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "string",
        "name": "newuri",
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
        "indexed": false,
        "internalType": "uint256",
        "name": "basispoint",
        "type": "uint256"
      }
    ],
    "name": "UpdateBasisPoint",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bytes32[]",
        "name": "allQuestions",
        "type": "bytes32[]"
      }
    ],
    "name": "UpdateQuestion",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "basisPoint",
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
    "inputs": [],
    "name": "governanceAddress",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "getQuestions",
    "outputs": [
      {
        "internalType": "bytes32[]",
        "name": "",
        "type": "bytes32[]"
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
        "name": "_newuri",
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
      },
      {
        "internalType": "bool",
        "name": "_hasPromoter",
        "type": "bool"
      },
      {
        "internalType": "address",
        "name": "promoter",
        "type": "address"
      }
    ],
    "name": "createDTRUST",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
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
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_basisPoint",
        "type": "uint256"
      }
    ],
    "name": "updateBasisPoint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "_content",
        "type": "bytes32"
      }
    ],
    "name": "updateQuestion",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];
