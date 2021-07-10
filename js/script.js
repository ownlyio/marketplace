let env = "production";
let ownlyContractAddress = "0x5239d0d09839208b341c6C17A36a3AEcB78745De";
let ownlyMarketplaceAddress = "0x027ED5D715367fF1947200669FD130c47aD6989a";
let url = (env === "production") ? "https://ownly.io/dev-marketplace/" : "http://ownlyio.dev-marketplace.test/";
let web3;
let ownlyContract;
let ownlyMarketplaceContract;
let alertProcessing;
let alertError;
let approveButton;
let marketItemsForSale;
let listingPrice;
let currentPage;

let findGetParameter = (parameterName) => {
    let result = null,
        tmp = [];
    let items = location.search.substr(1).split("&");
    for (let index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
};
let initializePage = () => {
    let app = $("#app");
    let pageContent = $("#page-content");

    let contract = findGetParameter("contract");
    let token = findGetParameter("token");

    if(contract && token) {
        pageContent.load(url + "js/../token.html", function() {
            currentPage = "token";

            displayToken(token);
            app.removeClass("d-none");
        });
    } else {
        pageContent.load(url + "js/../home.html", function() {
            currentPage = "home";
            displayTokens();

            app.removeClass("d-none");
        });
    }
};
let updateConnectToWallet = () => {
    if(ethereum.selectedAddress) {
        $("#connect-to-metamask").addClass("d-none");

        let accountAddress = $("#account-address");
        accountAddress.text(shortenAddress(ethereum.selectedAddress, 5, 5));
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
                        content += '        <div class="token-card" data-token-id="' + i + '">';
                        content += '            <a href="#" class="link">';
                        content += '                <div class="w-100 background-image-cover token-image" style="padding-top:100%"></div>';
                        content += '            </a>';
                        content += '            <div class="font-size-180 py-2 token-name"></div>';
                        // content += '                <a href="" target="_blank" class="btn btn-primary w-100 view-original mb-2">View Original</a>';
                        if(marketItemsForSale[ownlyContractAddress] && marketItemsForSale[ownlyContractAddress][i]) {
                            if(marketItemsForSale[ownlyContractAddress][i].seller.toLowerCase() !== ethereum.selectedAddress) {
                                content += '    <div class="font-size-130 token-price">' + web3.utils.fromWei(marketItemsForSale[ownlyContractAddress][i].price, "ether") + ' BNB</div>';
                                // content += '        <button class="btn btn-secondary w-100 create-market-sale-confirmation" data-item-id="' + marketItemsForSale[ownlyContractAddress][i].itemId + '" data-price="' + marketItemsForSale[ownlyContractAddress][i].price + '">Buy | ' + web3.utils.fromWei(marketItemsForSale[ownlyContractAddress][i].price, "ether") + ' BNB</button>';
                            }
                        } else {
                            // content += '        <button class="btn btn-secondary w-100 sell-token-confirmation d-none" data-token-id="' + i + '">Sell</button>';
                        }
                        // content += '                <small>Owner: <span class="owner"></span></small>';
                        content += '        </div>';
                        content += '    </div>';
                    }

                    $("#tokens-container").html(content);

                    for(let i = 1; i <= result; i++) {
                        getTokenURI(i)
                            .then(function(tokenURI) {
                                $.get(tokenURI, function(metadata) {
                                    let tokenCard = $(".token-card[data-token-id='" + i + "']");

                                    tokenCard.find(".link").attr("href", "?contract=0x5239d0d09839208b341c6C17A36a3AEcB78745De&token=" + i);
                                    tokenCard.find(".token-name").text(metadata.name);
                                    tokenCard.find(".token-image").css("background-image", "url('" + metadata.thumbnail + "')");
                                    tokenCard.find("img").removeClass("d-none");
                                    tokenCard.find(".view-original").attr("href", metadata.image);
                                });
                            });

                        getOwnerOf(i)
                            .then(function(owner) {
                                let tokenCard = $(".token-card[data-token-id='" + i + "']");
                                tokenCard.find(".owner").text(owner);

                                if(owner.toLowerCase() === ethereum.selectedAddress) {
                                    tokenCard.find("#create-market-item-confirmation").removeClass("d-none");
                                }
                            });
                    }
                });
        });
};
let displayToken = (token) => {
    let createMarketItemConfirmationButton = $("#create-market-item-confirmation");

    getTokenURI(token)
        .then(function(tokenURI) {
            $.get(tokenURI, function(metadata) {
                console.log(metadata);

                $("#token-image").attr("src", metadata.thumbnail);
                $("#token-name").text(metadata.name);
                $("#token-description").text(metadata.description);
                $("#token-original-image").attr("href", metadata.image);
                createMarketItemConfirmationButton.attr("data-token-id", token);

                let content = '';
                for(let i = 0; i < metadata.attributes.length; i++) {
                    content += '    <div class="col-md-6 col-xl-4 mb-4">';
                    content += '        <div class="card bg-light h-100">';
                    content += '            <div class="card-body h-100">';
                    content += '                <div class="d-flex justify-content-center align-items-center h-100">';
                    content += '                    <div class="text-center">';
                    content += '                        <div class="neo-bold font-size-80 mb-1 text-uppercase text-color-7">' + metadata.attributes[i].trait_type + '</div>';
                    content += '                        <div class="font-size-100">' + metadata.attributes[i].value + '</div>';
                    content += '                    </div>';
                    content += '                </div>';
                    content += '            </div>';
                    content += '        </div>';
                    content += '    </div>';
                }
                $("#token-attributes").html(content);
            });
        });

    fetchMarketItem(ownlyContractAddress, token)
        .then(function(marketItem) {
            getOwnerOf(token)
                .then(function(owner) {
                    $("#token-owner").text(owner);

                    if(parseInt(marketItem.itemId)) {
                        let tokenPrice = $("#token-price");
                        tokenPrice.text(web3.utils.fromWei(marketItem.price, "ether") + " BNB");
                        tokenPrice.removeClass("d-none");

                        if(owner.toLowerCase() !== ethereum.selectedAddress) {
                            let createMarketSaleConfirmationButton = $("#create-market-sale-confirmation");
                            createMarketSaleConfirmationButton.attr("data-item-id", marketItem.itemId);
                            createMarketSaleConfirmationButton.attr("data-price", marketItem.price);
                            createMarketSaleConfirmationButton.closest("div").removeClass("d-none");
                        }
                    } else {
                        if(owner.toLowerCase() === ethereum.selectedAddress) {
                            createMarketItemConfirmationButton.closest("div").removeClass("d-none");
                        }
                    }
                });

        });
};
let shortenAddress = (address, prefixCount, postfixCount) => {
    let prefix = address.substr(0, prefixCount);
    let postfix = address.substr(address.length - postfixCount, address.length);

    return prefix + "..." + postfix;
};

let getTokenURI = (id) => {
    console.log(id);
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
let fetchMarketItem = (address, id) => {
    return ownlyMarketplaceContract.methods.fetchMarketItem(address, id).call();
};

ethereum.on('accountsChanged', (accounts) => {
    updateConnectToWallet();
    initializePage();
});

$(window).on("load", async () => {
    await ethereum.request({ method: 'eth_requestAccounts' });
    updateConnectToWallet();
});

$(document).ready(function() {
    initializeWeb3();
    initializeContracts();
    initializeListingPrice();
    initializePage();
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

$(document).on("click", "#create-market-item-confirmation", function() {
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

    $("#modal-approve").modal("hide");

    approve(tokenID)
        .on('transactionHash', function(hash){
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
                initializePage();
            });
    }
});

$(document).on("click", "#create-market-sale-confirmation", function() {
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
            initializePage();
        });
});