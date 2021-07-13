let env = "staging";
let ownlyContractAddress;
let ownlyMarketplaceAddress;
let url;
let bscRPCEndpoint;
let web3;
let ownlyContract;
let ownlyMarketplaceContract;
let alertProcessing;
let alertError;
let approveButton;
let marketItemsForSale;
let listingPrice;
let currentPage;
let address = false;
let loading_interval;

let initializeEnvVariables = () => {
    if(env === "production") {
        ownlyContractAddress = "0x5239d0d09839208b341c6C17A36a3AEcB78745De";
        ownlyMarketplaceAddress = "0x027ED5D715367fF1947200669FD130c47aD6989a";
        url = "https://ownly.io/marketplace/";
        bscRPCEndpoint = "https://dataseed1.binance.org/";
    } else if(env === "staging") {
        ownlyContractAddress = "0x5239d0d09839208b341c6C17A36a3AEcB78745De";
        ownlyMarketplaceAddress = "0x027ED5D715367fF1947200669FD130c47aD6989a";
        url = "https://ownly.io/dev-marketplace/";
        bscRPCEndpoint = "https://data-seed-prebsc-1-s1.binance.org:8545/";
    } else {
        ownlyContractAddress = "0x5239d0d09839208b341c6C17A36a3AEcB78745De";
        ownlyMarketplaceAddress = "0x027ED5D715367fF1947200669FD130c47aD6989a";
        url = "http://ownlyio.dev-marketplace.test/";
        bscRPCEndpoint = "https://data-seed-prebsc-1-s1.binance.org:8545/";
    }
};
let initiate_loading_page = () => {
    loading_interval = setInterval(function() {
        if($("#loading-ownly").css('opacity') === "1") {
            $("#loading-ownly").css('opacity', '0.3');
        } else {
            $("#loading-ownly").css('opacity', '1');
        }
    }, 1100);

    let all = document.getElementsByTagName("*");
    for (let i=0, max=all.length; i < max; i++)
    {
        loading_set_ele(all[i]);
    }
};
let loading_check_element = (ele) => {
    let all = document.getElementsByTagName("*");
    let per_inc=100/all.length;

    if($(ele).on())
    {
        let prog_width=per_inc+Number(document.getElementById("progress_width").value);
        document.getElementById("progress_width").value=prog_width;
        $("#loading-page-progress-bar").css("width", prog_width + "%")
    } else {
        loading_set_ele(ele);
    }
}
let loading_set_ele = (set_element) => {
    loading_check_element(set_element);
}
let close_loading_page = () => {
    let loadingOwnlyContainer = $("#loading-ownly-container");

    loadingOwnlyContainer.removeClass("d-flex");
    loadingOwnlyContainer.addClass("d-none");

    clearInterval(loading_interval);
};
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
            displayTokens(token);
            app.removeClass("d-none");
        });
    } else {
        pageContent.load(url + "js/../home.html", function() {
            currentPage = "home";
            displayTokens(token);

            app.removeClass("d-none");
        });
    }
};
let connectToMetamask = async () => {
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            await ethereum.request({ method: 'eth_requestAccounts' });
            updateConnectToWallet();

            ethereum.on('accountsChanged', (accounts) => {
                address = (accounts.length > 0) ? accounts[0] : false;

                updateConnectToWallet();
                initializePage();
            });
        } catch (error) {

        }
    } else if (window.web3) { // Legacy dapp browsers...
        window.web3 = new Web3(web3.currentProvider);
        updateConnectToWallet();
    } else {
        $("#modal-no-metamask-installed").modal("show");
    }
};
let updateConnectToWallet = async () => {
    let accounts = await web3.eth.getAccounts();
    address = (accounts.length > 0) ? accounts[0] : false;

    if(!address) {
        try {
            await ethereum.enable();
            address = ethereum.selectedAddress;
        } catch(e) {}
    }

    if(address) {
        $("#connect-to-metamask").addClass("d-none");

        let accountAddress = $("#account-address");
        accountAddress.text(shortenAddress(address, 5, 5));
        accountAddress.removeClass("d-none");
    } else {
        $("#account-address").addClass("d-none");
        $("#connect-to-metamask").removeClass("d-none");
    }
};
let initializeWeb3 = async () => {
    try {
        ethereum.on('accountsChanged', (accounts) => {
            address = (accounts.length > 0) ? accounts[0] : false;

            updateConnectToWallet();
            initializePage();
        });

        if(ethereum.networkVersion === "97") {
            web3 = new Web3(ethereum);

            if (typeof web3 !== 'undefined') { // metamask is not injected
                web3 = new Web3(web3.currentProvider);
            } else {

            }
        } else {
            web3 = new Web3(bscRPCEndpoint);
        }
    } catch(e) {
        web3 = new Web3(bscRPCEndpoint);
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
let displayTokens = (excludedToken) => {
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
                        content += '    <div class="col-md-6 col-xl-4 mb-5 pb-md-3 px-md-4">';
                        content += '        <div class="token-card" data-token-id="' + i + '">';
                        content += '            <a href="#" class="link">';
                        content += '                <div class="w-100 background-image-cover token-image shadow-sm border-1 mb-3" style="background-image:url(\'img/thumbnails/token.webp\'); padding-top:100%"></div>';
                        content += '            </a>';
                        content += '            <div class="font-size-160 neo-bold token-name mb-1"></div>';
                        content += '            <div class="font-size-110 mb-2">1 of 1 - Single Edition</div>';
                        content += '            <div class="font-size-90 mb-4">Inspired by Coinbase founder, Brian Armstrong\'s rise from an unknown crypto startup back in 201x to a multi-billion dollar public company</div>';
                        if(marketItemsForSale[ownlyContractAddress] && marketItemsForSale[ownlyContractAddress][i]) {
                            if(marketItemsForSale[ownlyContractAddress][i].seller.toLowerCase() !== address) {
                                content += '        <div class="row align-items-center">';
                                content += '            <div class="col-6">';
                                content += '                <div class="font-size-100 font-size-md-110">Price:</div>';
                                content += '                <div class="font-size-160 font-size-md-180 neo-black">' + web3.utils.fromWei(marketItemsForSale[ownlyContractAddress][i].price, "ether") + ' BNB</div>';
                                content += '            </div>';
                                content += '            <div class="col-6">';
                                content += '                <button class="btn btn-custom-2 w-100 font-size-100 font-size-md-120 neo-bold link create-market-sale-confirmation" data-item-id="' + marketItemsForSale[ownlyContractAddress][i].itemId + '" data-price="' + marketItemsForSale[ownlyContractAddress][i].price + '" style="border-radius:15px">OWN NOW</button>';
                                content += '            </div>';
                                content += '        </div>';
                                content += '        <div class="owner d-none"></div>';
                            }
                        }
                        content += '        </div>';
                        content += '    </div>';
                    }

                    $("#tokens-container").html(content);

                    for(let i = 1; i <= result; i++) {
                        getTokenURI(i)
                            .then(function(tokenURI) {
                                $.get(tokenURI, function(metadata) {
                                    let tokenCard = $(".token-card[data-token-id='" + i + "']");

                                    tokenCard.find(".link").attr("href", "?contract=" + ownlyContractAddress + "&token=" + i);
                                    tokenCard.find(".token-name").text(metadata.name);
                                    tokenCard.find(".token-image").css("background-image", "url('" + metadata.thumbnail + "')");
                                    tokenCard.find("img").removeClass("d-none");
                                    tokenCard.find(".view-original").attr("href", metadata.image);

                                    getOwnerOf(i)
                                        .then(function(owner) {
                                            let tokenCard = $(".token-card[data-token-id='" + i + "']");
                                            tokenCard.find(".owner").text(owner);

                                            if(owner.toLowerCase() === address) {
                                                tokenCard.find("#create-market-item-confirmation").removeClass("d-none");
                                            }

                                            if(currentPage === "token") {
                                                loadRelatedTokens(excludedToken);
                                            }
                                        });
                                });
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

                        if(owner.toLowerCase() !== address) {
                            let createMarketSaleConfirmationButton = $(".create-market-sale-confirmation");
                            createMarketSaleConfirmationButton.attr("data-item-id", marketItem.itemId);
                            createMarketSaleConfirmationButton.attr("data-price", marketItem.price);
                            createMarketSaleConfirmationButton.closest("div").removeClass("d-none");
                        }
                    } else {
                        if(owner.toLowerCase() === address) {
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
let loadRelatedTokens = (excludedToken) => {
    let tokenCards = [];
    let _break = false;

    $("#tokens-container .token-card").closest("div").each(function() {
        if($(this).find(".owner").html() === "") {
            _break = true;
            return 0;
        }
        tokenCards.push($(this).html());
    });

    if(_break) {
        return 0;
    }

    let content = '';
    for(let i = 0; i < tokenCards.length; i+=3) {
        content += '    <div class="carousel-item ' + ((i === 0) ? 'active' : '') + '">';
        content += '        <div class="row">';
        for(let j = i; j < i + 3 && j < tokenCards.length; j++) {
            content += '        <div class="col-4">';
            content +=              tokenCards[j];
            content += '        </div>';
        }
        content += '        </div>';
        content += '    </div>';
    }
    $("#related-tokens-container-xl .carousel-inner").html(content);

    content = '';
    for(let i = 0; i < tokenCards.length; i+=2) {
        content += '    <div class="carousel-item ' + ((i === 0) ? 'active' : '') + '">';
        content += '        <div class="row">';
        for(let j = i; j < i + 2 && j < tokenCards.length; j++) {
            content += '        <div class="col-6">';
            content +=              tokenCards[j];
            content += '        </div>';
        }
        content += '        </div>';
        content += '    </div>';
    }
    $("#related-tokens-container-md .carousel-inner").html(content);

    content = '';
    for(let i = 0; i < tokenCards.length; i+=2) {
        content += '    <div class="carousel-item ' + ((i === 0) ? 'active' : '') + '">';
        content +=          tokenCards[i];
        content += '    </div>';
    }
    $("#related-tokens-container-xs .carousel-inner").html(content);

    new bootstrap.Carousel($('#related-tokens-container-xl'));
    new bootstrap.Carousel($('#related-tokens-container-md'));
    new bootstrap.Carousel($('#related-tokens-container-xs'));
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
        from: address,
    });
};

let getListingPrice = () => {
    return ownlyMarketplaceContract.methods.getListingPrice().call();
};
let createMarketItem = (id, price) => {
    return ownlyMarketplaceContract.methods.createMarketItem(ownlyContractAddress, id, web3.utils.toWei(price, 'ether')).send({
        from: address,
        value: listingPrice
    });
};
let createMarketSale = (id, price) => {
    return ownlyMarketplaceContract.methods.createMarketSale(id).send({
        from: address,
        value: price
    });
};
let fetchMarketItems = () => {
    return ownlyMarketplaceContract.methods.fetchMarketItems().call();
};
let fetchMarketItem = (address, id) => {
    return ownlyMarketplaceContract.methods.fetchMarketItem(address, id).call();
};

$(window).on("load", async () => {
    initializeWeb3();
    initializeContracts();
    initializeListingPrice();
    initializePage();
    updateConnectToWallet();
    close_loading_page();
});

$(document).ready(function() {
    initializeEnvVariables();
    initiate_loading_page();
});

$(document).on("click", "#install-metamask", () => {
    $("#modal-no-metamask-installed").modal("hide");
});

$(document).on("click", "#connect-to-metamask", () => {
    connectToMetamask();
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

$(document).on("click", ".create-market-sale-confirmation", function() {
    if(!address) {
        connectToMetamask();
    } else {
        let createMarketSaleButton = $("#create-market-sale");

        createMarketSaleButton.attr("data-price", $(this).attr("data-price"));
        createMarketSaleButton.val($(this).attr("data-item-id"));

        $("#modal-create-market-sale").modal("show");
    }
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


