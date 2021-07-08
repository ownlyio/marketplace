let ownlyContractAddress = "0x5239d0d09839208b341c6C17A36a3AEcB78745De";
let ownlyMarketplaceAddress = "0xE0d03cC0b307303680c4ba63a89b77689C0d8283";
let web3;
let ownlyContract;
let ownlyMarketplaceContract;
let alertProcessing;
let alertError;
let approveButton;
let marketItemsForSale;
let listingPrice;

let updateConnectToWallet = () => {
    if(ethereum.selectedAddress) {
        $("#connect-to-metamask").addClass("d-none");

        let accountAddress = $("#account-address");
        accountAddress.text(ethereum.selectedAddress);
        accountAddress.removeClass("d-none");
    } else {
        $("#account-address").addClass("d-none");
        $("#connect-to-metamask").removeClass("d-none");
    }
};
let initializeWeb3 = () => {
    web3 = new Web3(ethereum);

    if (typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider);
    } else {
    }
};
let initializeContracts = () => {
    ownlyContract = new web3.eth.Contract(nftAbi, ownlyContractAddress);
    ownlyMarketplaceContract = new web3.eth.Contract(marketplaceAbi, ownlyMarketplaceAddress);
};
let initializeListingPrice = () => {
    getListingPrice()
        .then(function(data) {
            listingPrice = data;
        });
};
let displayTokens = () => {
    fetchMarketItems()
        .then(function(data) {
            marketItemsForSale = [];

            for(let i = 0; i < data.length; i++) {
                if(data[i].owner === "0x0000000000000000000000000000000000000000") {
                    if(!marketItemsForSale[data[i].nftContract]) {
                        marketItemsForSale[data[i].nftContract] = [];
                    }

                    marketItemsForSale[data[i].nftContract][data[i].tokenId] = {
                        itemId: data[i].itemId,
                        owner: data[i].owner,
                        price: data[i].price,
                        seller: data[i].seller,
                    };
                }
            }

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
                        content += '                <img class="w-100 d-none" alt="Token ' + i + '" />';
                        content += '            </div>';
                        content += '            <div class="card-footer">';
                        content += '                <a href="" target="_blank" class="btn btn-primary w-100 view-original mb-2">View Original</a>';
                        if(marketItemsForSale[ownlyContractAddress] && marketItemsForSale[ownlyContractAddress][i]) {
                            content += '            <button class="btn btn-secondary w-100 create-market-sale-confirmation" data-item-id="' + marketItemsForSale[ownlyContractAddress][i].itemId + '" data-price="' + marketItemsForSale[ownlyContractAddress][i].price + '">Buy - ' + web3.utils.fromWei(marketItemsForSale[ownlyContractAddress][i].price, "ether")  + ' ETH</button>';
                        } else {
                            content += '            <button class="btn btn-secondary w-100 sell-token-confirmation d-none" data-token-id="' + i + '">Sell</button>';
                        }
                        content += '                <small>Owner: <span class="owner"></span></small>';
                        content += '            </div>';
                        content += '        </div>';
                        content += '    </div>';
                    }

                    $("#tokens-container").html(content);

                    for(let i = 1; i <= result; i++) {
                        getTokenURI(i)
                            .then(function(tokenURI) {
                                $.get(tokenURI, function(metadata) {
                                    let tokenCard = $(".token-card[data-token-id='" + i + "']");

                                    tokenCard.find(".token-name").text(metadata.name);
                                    tokenCard.find("img").attr("src", metadata.thumbnail);
                                    tokenCard.find("img").removeClass("d-none");
                                    tokenCard.find(".view-original").attr("href", metadata.image);
                                });
                            });

                        getOwnerOf(i)
                            .then(function(owner) {
                                let tokenCard = $(".token-card[data-token-id='" + i + "']");
                                tokenCard.find(".owner").text(owner);

                                if(owner.toLowerCase() === ethereum.selectedAddress) {
                                    tokenCard.find(".sell-token-confirmation").removeClass("d-none");
                                }
                            });
                    }
                });
        });
};

let getTokenURI = (id) => {
    return ownlyContract.methods.tokenURI(id).call();
};
let getOwnerOf = (id) => {
    return ownlyContract.methods.ownerOf(id).call();
};
let getApproved = (id) => {
    return ownlyContract.methods.getApproved(id).call();
};
let getTotalSupply = () => {
    return ownlyContract.methods.totalSupply().call();
};
let approve = (id) => {
    return ownlyContract.methods.approve(ownlyMarketplaceAddress, id).send({
        from: ethereum.selectedAddress,
    });
};

let getListingPrice = () => {
    return ownlyMarketplaceContract.methods.getListingPrice().call();
};
let createMarketItem = (id, price) => {
    return ownlyMarketplaceContract.methods.createMarketItem(ownlyContractAddress, id, web3.utils.toWei(price, 'ether')).send({
        from: ethereum.selectedAddress,
        value: listingPrice
    });
};
let createMarketSale = (id, price) => {
    return ownlyMarketplaceContract.methods.createMarketSale(id).send({
        from: ethereum.selectedAddress,
        value: price
    });
};
let fetchMarketItems = () => {
    return ownlyMarketplaceContract.methods.fetchMarketItems().call();
};

ethereum.on('accountsChanged', (accounts) => {
    updateConnectToWallet();
});

$(window).on("load", async () => {
    await ethereum.request({ method: 'eth_requestAccounts' });
    updateConnectToWallet();
});

$(document).ready(function() {
    initializeWeb3();
    initializeContracts();
    initializeListingPrice();
    displayTokens();
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

$(document).on("click", ".sell-token-confirmation", function() {
    let button = $(this);
    button.prop("disabled", true);

    let tokenID = button.attr("data-token-id");

    getApproved($(this).attr("data-token-id"))
        .then(function(approved) {
            button.prop("disabled", false);

            if(approved === ownlyMarketplaceAddress) {
                $("#create-market-item").val(tokenID);
                $("#modal-create-market-item").modal("show");
            } else {
                $("#approve").val(tokenID);
                $("#modal-approve").modal("show");
            }
        });
});

$(document).on("click", "#approve", function() {
    approveButton = $("#approveButton");
    approveButton.prop("disabled", true);

    let tokenID = $(this).val();

    approve(tokenID)
        .on('transactionHash', function(hash){
            $("#modal-approve").modal("hide");
            alertProcessing = alertify.message('Processing...', 0);
        }).then(function(receipt) {
            alertProcessing.dismiss();

            $("#create-market-item").val(tokenID);
            $("#modal-create-market-item").modal("show");
        });
});

$(document).on("click", "#create-market-item", function() {
    $("#modal-create-market-item").modal("hide");

    let price = $("#price").val();

    if(price > 0) {
        createMarketItem($(this).val(), price)
            .on('transactionHash', function(transactionHash){
                alertProcessing = alertify.message('Processing...', 0);
            }).on('error', function(error){
                alertProcessing.dismiss();
                alertError = alertify.message(error, 0);
            }).then(function(receipt) {
                alertProcessing.dismiss();
                displayTokens();
            });
    }
});

$(document).on("click", ".create-market-sale-confirmation", function() {
    let createMarketSaleButton = $("#create-market-sale");

    createMarketSaleButton.attr("data-price", $(this).attr("data-price"));
    createMarketSaleButton.val($(this).attr("data-item-id"));

    $("#modal-create-market-sale").modal("show");
});

$(document).on("click", "#create-market-sale", function() {
    $("#modal-create-market-sale").modal("hide");

    createMarketSale($(this).val(), $(this).attr("data-price"))
        .on('transactionHash', function(transactionHash){
            alertProcessing = alertify.message('Processing...', 0);
        }).on('error', function(error){
            alertProcessing.dismiss();
            alertError = alertify.message(error, 0);
        }).then(function(receipt) {
            alertProcessing.dismiss();
            displayTokens();
        });
});