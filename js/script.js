let env = "testnet"
let web3;
let ownlyContract;
let ownlyContractAddress = "0x65Ad09fd4579D2b1a716198a9794b13dFBB1b7Ed";
let userAccount;

let getTokenURI = (id) => {
    return ownlyContract.methods.tokenURI(id).call();
};

let updateConnectToWallet = () => {
    if(ethereum.selectedAddress) {
        $("#connect-to-metamask").addClass("d-none");

        $("#account-address").html(ethereum.selectedAddress);
        $("#account-address").removeClass("d-none");
    } else {
        $("#account-address").addClass("d-none");
        $("#connect-to-metamask").removeClass("d-none");
    }
};

$(window).on("load", async () => {
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            updateConnectToWallet();
        } catch (error) {

        }
    } else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
});

$(document).ready(function() {
    // web3 = new Web3(new Web3.providers.HttpProvider(bsc));
    //
    // if (typeof web3 !== 'undefined') {
    //     web3 = new Web3(web3.currentProvider);
    //     console.log("connected");
    // } else {
    //     console.log("not connected");
    // }
    //
    // userAccount = web3.eth.getAccounts();
    // ownlyContract = new web3.eth.Contract(ownlyTokenABI, ownlyContractAddress);
    //
    // console.log(userAccount);
    //
    // getTokenURI(1212)
    //     .then(function(result) {
    //         console.log(result);
    //     });
});

$(document).on("click", "#connect-to-metamask", async() => {
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            await ethereum.request({ method: 'eth_requestAccounts' });
            updateConnectToWallet();
        } catch (error) {

        }
    } else if (window.web3) { // Legacy dapp browsers...
        window.web3 = new Web3(web3.currentProvider);
        updateConnectToWallet();
    } else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
});

ethereum.on('accountsChanged', (accounts) => {
    updateConnectToWallet();
});