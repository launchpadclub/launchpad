const spaceship = document.getElementById('spaceship');

document.addEventListener('mousemove', (event) => {
    spaceship.style.left = ${event.pageX - 25}px;
    spaceship.style.top = ${event.pageY - 25}px;
});
const spaceship = document.getElementById('spaceship');

// تحريك السفينة بناءً على حركة الماوس
document.addEventListener('mousemove', (event) => {
    anime({
        targets: spaceship,
        translateX: event.pageX - 30,
        translateY: event.pageY - 30,
        easing: 'easeOutExpo',
        duration: 300
    });
});

// التفاعل عند الدخول إلى الأقسام المختلفة
const sections = document.querySelectorAll('.section');
sections.forEach(section => {
    section.addEventListener('mouseenter', () => {
        anime({
            targets: spaceship,
            scale: 1.2,
            easing: 'easeInOutQuad',
            duration: 200
        });
    });

    section.addEventListener('mouseleave', () => {
        anime({
            targets: spaceship,
            scale: 1,
            easing: 'easeInOutQuad',
            duration: 200
        });
    });
});
const contractAddress = "0x9EED2f06b2a42bdecf43B4650Fc6C1CEf6a7a347";
const contractABI = /* [
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
    "type": "u */;

let web3;
let contract;

async function connectWallet() {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      contract = new web3.eth.Contract(contractABI, contractAddress);
      console.log("Wallet connected and contract initialized.");
    } catch (error) {
      console.error("Connection failed", error);
    }
  } else {
    alert("MetaMask is not installed!");
  }
}

document.getElementById("connectWallet").onclick = connectWallet;

async function mintNFT() {
  const accounts = await web3.eth.getAccounts();
  const account = accounts[0];
  try {
    const receipt = await contract.methods.mint().send({ from: account });
    console.log("NFT minted:", receipt);
  } catch (error) {
    console.error("Minting failed", error);
  }
}

async function buyTokens() {
  const accounts = await web3.eth.getAccounts();
  const account = accounts[0];
  try {
    const receipt = await contract.methods.buyTokens().send({ from: account, value: web3.utils.toWei("0.01", "ether") });
    console.log("Tokens purchased:", receipt);
  } catch (error) {
    console.error("Buying tokens failed", error);
  }
}

document.getElementById("mintNFT").onclick = mintNFT;
document.getElementById("buyTokens").onclick = buyTokens;

document.addEventListener('mousemove', (event) => {
    anime({
        targets: spaceship,
        translateX: event.pageX - 25,
        translateY: event.pageY - 25,
        easing: 'easeOutExpo',
        duration: 300
    });
});
