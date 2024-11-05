const contractABI = [ /* [
 {
  "inputs": [
   {
    "internalType": "address",
    "name": "to",
    "type": "address"
   },
   {
    "internalType": "uint256",
    "name": "tokenId",
    "type": "uint256"
   }
  ],
  "name": "approve",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
 },
 {
  "inputs": [
   {
    "internalType": "string",
    "name": "tokenURI",
    "type": "string"
   }
  ],
  "name": "createNFT",
  "outputs": [
   {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
   }
  ],
  "stateMutability": "nonpayable",
  "type": "function"
 },
 {
  "inputs": [],
  "stateMutability": "nonpayable",
  "type": "constructor"
 },
 {
  "inputs": [
   {
    "internalType": "address",
    "name": "sender",
    "type": "address"
   },
   {
    "internalType": "uint256",
    "name": "tokenId",
    "type": "uint256"
   },
   {
    "internalType": "address",
    "name": "owner",
    "type": "address"
   }
  ],
  "name": "ERC721IncorrectOwner",
  "type": "error"
 },
 {
  "inputs": [
   {
    "internalType": "address",
    "name": "operator",
    "type": "address"
   },
   {
    "internalType": "uint256",
    "name": "tokenId",
    "type": "uint256"
   }
  ],
  "name": "ERC721InsufficientApproval",
  "type": "error"
 },
 {
  "inputs": [
   {
    "internalType": "address",
    "name": "approver",
    "type": "address"
   }
  ],
  "name": "ERC721InvalidApprover",
  "type": "error"
 },
 {
  "inputs": [
   {
    "internalType": "address",
    "name": "operator",
    "type": "address"
   }
  ],
  "name": "ERC721InvalidOperator",
  "type": "error"
 },
 {
  "inputs": [
   {
    "internalType": "address",
    "name": "owner",
    "type": "address"
   }
  ],
  "name": "ERC721InvalidOwner",
  "type": "error"
 },
 {
  "inputs": [
   {
    "internalType": "address",
    "name": "receiver",
    "type": "address"
   }
  ],
  "name": "ERC721InvalidReceiver",
  "type": "error"
 },
 {
  "inputs": [
   {
    "internalType": "address",
    "name": "sender",
    "type": "address"
   }
  ],
  "name": "ERC721InvalidSender",
  "type": "error"
 },
 {
  "inputs": [
   {
    "internalType": "uint256",
    "name": "tokenId",
    "type": "uint256"
   }
  ],
  "name": "ERC721NonexistentToken",
  "type": "error"
 },
 {
  "inputs": [
   {
    "internalType": "address",
    "name": "owner",
    "type": "address"
   }
  ],
  "name": "OwnableInvalidOwner",
  "type": "error"
 },
 {
  "inputs": [
   {
    "internalType": "address",
    "name": "account",
    "type": "address"
   }
  ],
  "name": "OwnableUnauthorizedAccount",
  "type": "error"
 },
 {
  "anonymous": false,
  "inputs": [
   {
    "indexed": true,
    "internalType": "address",
    "name": "owner",
    "type": "address"
   },
   {
    "indexed": true,
    "internalType": "address",
    "name": "approved",
    "type": "address"
   },
   {
    "indexed": true,
    "internalType": "uint256",
    "name": "tokenId",
    "type": "uint256"
   }
  ],
  "name": "Approval",
  "type": "event"
 },
 {
  "anonymous": false,
  "inputs": [
   {
    "indexed": true,
    "internalType": "address",
    "name": "owner",
    "type": "address"
   },
   {
    "indexed": true,
    "internalType": "address",
    "name": "operator",
    "type": "address"
   },
   {
    "indexed": false,
    "internalType": "bool",
    "name": "approved",
    "type": "bool"
   }
  ],
  "name": "ApprovalForAll",
  "type": "event"
 },
 {
  "anonymous": false,
  "inputs": [
   {
    "indexed": false,
    "internalType": "uint256",
    "name": "_fromTokenId",
    "type": "uint256"
   },
   {
    "indexed": false,
    "internalType": "uint256",
    "name": "_toTokenId",
    "type": "uint256"
   }
  ],
  "name": "BatchMetadataUpdate",
  "type": "event"
 },
 {
  "anonymous": false,
  "inputs": [
   {
    "indexed": false,
    "internalType": "uint256",
    "name": "_tokenId",
    "type": "u */ ];
const contractAddress = "0x9EED2f06b2a42bdecf43B4650Fc6C1CEf6a7a347";
