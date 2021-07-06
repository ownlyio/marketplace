let web3;
let ownlyContract;
let ownlyContractAddress = "0x5239d0d09839208b341c6C17A36a3AEcB78745De";

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

let getTokenURI = (id) => {
    return ownlyContract.methods.tokenURI(id).call();
};

let getTotalSupply = () => {
    return ownlyContract.methods.totalSupply().call();
};

$(window).on("load", async () => {
    await ethereum.request({ method: 'eth_requestAccounts' });
    updateConnectToWallet();
});

$(document).ready(function() {
    web3 = new Web3(ethereum);

    if (typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider);
        console.log("connected");
    } else {
        console.log("not connected");
    }

    ownlyContract = new web3.eth.Contract(ownlyTokenABI, ownlyContractAddress);

    getTotalSupply(1)
        .then(function(result) {
            let content = '';
            for(let i = 1; i <= result; i++) {
                content += '    <div class="col-sm-6 col-md-4 mb-5">';
                content += '        <div class="card token-card" data-token-id="' + i + '">';
                content += '            <div class="card-header">';
                content += '                <div class="token-name"></div>';
                content += '            </div>';
                content += '            <div class="card-body">';
                content += '                <img class="w-100" alt="Token ' + i + '" />';
                content += '            </div>';
                content += '        </div>';
                content += '    </div>';

                $("#tokens-container").html(content);
            }

            for(let i = 1; i <= result; i++) {
                getTokenURI(i)
                    .then(function(tokenURI) {
                        $.get(tokenURI, function(metadata) {
                            $(".token-card[data-token-id='" + i + "']").find("img").attr("src", metadata.image);
                            $(".token-card[data-token-id='" + i + "']").find(".token-name").text(metadata.name);
                        });
                    });
            }
        });

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