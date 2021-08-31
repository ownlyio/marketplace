let cacheVersion;
let ownContractAddress;
let titansContract;
let titansContractAddress;
let titansContractAbi;
let mustachiosContract;
let mustachiosContractAddress;
let mustachiosContractAbi;
let marketplaceBinanceContractAddress;
let marketplaceBinanceContract;
let marketplaceBinanceAbi;
let marketplaceEthereumContractAddress;
let marketplaceEthereumContract;
let marketplaceEthereumAbi;
let url;
let rpcEndpointBsc;
let blockchainExplorerBsc;
let chainIDBsc;
let rpcEndpointEth;
let blockchainExplorerEth;
let chainIDEth;
let ownlyAPI;
let web3Bsc;
let web3Eth;
let ownContract;
let ownContractAbi;
let approveButton;
let listingPrice;
let currentPage;
let address = false;
let loading_interval;
let isConnectedToMetamask = false;
let content;
let hasMarketplaceEthereumContract = false;

let initializeEnvVariables = () => {
    let currentURL = window.location.href;

    if(currentURL.includes("ownly.io/marketplace")) {
    // if(true) {
        titansContractAddress = "0x804efc52BFa9B85A86219c191d51147566f3B327";
        titansContractAbi = [{"inputs":[{"internalType":"address","name":"admin_","type":"address"},{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"tokenURI","type":"string"}],"name":"createToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setPause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unsetPause","outputs":[],"stateMutability":"nonpayable","type":"function"}];

        mustachiosContractAddress = "0x9e7a3a2e0c60c70efc115bf03e6c544ef07620e5";
        mustachiosContractAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"PROVENANCE_HASH","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"flipSaleState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLastMintedTokenId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMintPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"max_mustachios","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintMustachio","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reserveMustachios","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"saleIsActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_baseUri","type":"string"}],"name":"setBaseUri","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintPrice","type":"uint256"}],"name":"setMintPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_provenanceHash","type":"string"}],"name":"setProvenanceHash","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];

        ownContractAddress = "0x7665CB7b0d01Df1c9f9B9cC66019F00aBD6959bA";
        ownContractAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}];

        marketplaceBinanceContractAddress = "0xB781092d4056FF0447C3Ef9acf25A2173CeE13a8";
        marketplaceBinanceAbi = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"beacon","type":"address"}],"name":"BeaconUpgraded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"itemId","type":"uint256"}],"name":"MarketItemCancelled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"itemId","type":"uint256"},{"indexed":true,"internalType":"address","name":"nftContract","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"address","name":"seller","type":"address"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"listingPrice","type":"uint256"}],"name":"MarketItemCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"itemId","type":"uint256"}],"name":"MarketItemSold","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"Upgraded","type":"event"},{"inputs":[{"internalType":"uint256","name":"itemId","type":"uint256"}],"name":"cancelMarketItem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"nftContractAddress","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"}],"name":"createMarketItem","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"itemId","type":"uint256"}],"name":"createMarketSale","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"nftContractAddress","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"fetchMarketItem","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"listingPrice","type":"uint256"},{"internalType":"bool","name":"cancelled","type":"bool"}],"internalType":"struct Marketplace.MarketItem","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fetchMarketItems","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"listingPrice","type":"uint256"},{"internalType":"bool","name":"cancelled","type":"bool"}],"internalType":"struct Marketplace.MarketItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fetchMyNFTs","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"listingPrice","type":"uint256"},{"internalType":"bool","name":"cancelled","type":"bool"}],"internalType":"struct Marketplace.MarketItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getListingPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"marketItemId","type":"uint256"}],"name":"getMarketItem","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"listingPrice","type":"uint256"},{"internalType":"bool","name":"cancelled","type":"bool"}],"internalType":"struct Marketplace.MarketItem","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_listingPrice","type":"uint256"}],"name":"setListingPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"}],"name":"upgradeTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"version","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"}];

        if(hasMarketplaceEthereumContract) {
            marketplaceEthereumContractAddress = "0xB781092d4056FF0447C3Ef9acf25A2173CeE13a8";
            marketplaceEthereumAbi = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"beacon","type":"address"}],"name":"BeaconUpgraded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"itemId","type":"uint256"}],"name":"MarketItemCancelled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"itemId","type":"uint256"},{"indexed":true,"internalType":"address","name":"nftContract","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"address","name":"seller","type":"address"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"listingPrice","type":"uint256"}],"name":"MarketItemCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"itemId","type":"uint256"}],"name":"MarketItemSold","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"Upgraded","type":"event"},{"inputs":[{"internalType":"uint256","name":"itemId","type":"uint256"}],"name":"cancelMarketItem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"nftContractAddress","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"}],"name":"createMarketItem","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"itemId","type":"uint256"}],"name":"createMarketSale","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"nftContractAddress","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"fetchMarketItem","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"listingPrice","type":"uint256"},{"internalType":"bool","name":"cancelled","type":"bool"}],"internalType":"struct Marketplace.MarketItem","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fetchMarketItems","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"listingPrice","type":"uint256"},{"internalType":"bool","name":"cancelled","type":"bool"}],"internalType":"struct Marketplace.MarketItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fetchMyNFTs","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"listingPrice","type":"uint256"},{"internalType":"bool","name":"cancelled","type":"bool"}],"internalType":"struct Marketplace.MarketItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getListingPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"marketItemId","type":"uint256"}],"name":"getMarketItem","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"listingPrice","type":"uint256"},{"internalType":"bool","name":"cancelled","type":"bool"}],"internalType":"struct Marketplace.MarketItem","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_listingPrice","type":"uint256"}],"name":"setListingPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"}],"name":"upgradeTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"version","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"}];
        }

        rpcEndpointEth = "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161";
        rpcEndpointBsc = "https://bsc-dataseed.binance.org/";

        blockchainExplorerEth = "https://etherscan.io/";
        blockchainExplorerBsc = "https://bscscan.com/";

        chainIDEth = 1;
        chainIDBsc = 56;

        url = "https://ownly.io/marketplace/";
        ownlyAPI = "https://ownly.tk/";
    } else {
        titansContractAddress = "0xB9f74a918d3bF21be452444e65039e6365DF9B98";
        titansContractAbi = [{"inputs":[{"internalType":"address","name":"admin_","type":"address"},{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"tokenURI","type":"string"}],"name":"createToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setPause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unsetPause","outputs":[],"stateMutability":"nonpayable","type":"function"}];

        mustachiosContractAddress = "0x421dC2b62713223491Daf075C23B39EF0E340E94";
        mustachiosContractAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"PROVENANCE_HASH","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"flipSaleState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLastMintedTokenId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMintPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"max_mustachios","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintMustachio","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reserveMustachios","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"saleIsActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_baseUri","type":"string"}],"name":"setBaseUri","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintPrice","type":"uint256"}],"name":"setMintPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_provenanceHash","type":"string"}],"name":"setProvenanceHash","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];

        ownContractAddress = "0xC3Df366fAf79c6Caff3C70948363f00b9Ac55FEE";
        ownContractAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}];

        marketplaceBinanceContractAddress = "0x8e3F3c0FFb7738e6066e708941762247B4a4D11D";
        marketplaceBinanceAbi = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"beacon","type":"address"}],"name":"BeaconUpgraded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"itemId","type":"uint256"}],"name":"MarketItemCancelled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"itemId","type":"uint256"},{"indexed":true,"internalType":"address","name":"nftContract","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"address","name":"seller","type":"address"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"},{"indexed":false,"internalType":"string","name":"currency","type":"string"},{"indexed":false,"internalType":"uint256","name":"listingPrice","type":"uint256"}],"name":"MarketItemCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"itemId","type":"uint256"}],"name":"MarketItemSold","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"Upgraded","type":"event"},{"inputs":[{"internalType":"uint256","name":"itemId","type":"uint256"}],"name":"cancelMarketItem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"a","type":"string"},{"internalType":"string","name":"b","type":"string"}],"name":"compareStrings","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"nftContractAddress","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"string","name":"currency","type":"string"}],"name":"createMarketItem","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"itemId","type":"uint256"}],"name":"createMarketSale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"nftContractAddress","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"fetchMarketItem","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"string","name":"currency","type":"string"},{"internalType":"uint256","name":"listingPrice","type":"uint256"},{"internalType":"bool","name":"cancelled","type":"bool"}],"internalType":"struct Marketplace.MarketItem","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fetchMarketItems","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"string","name":"currency","type":"string"},{"internalType":"uint256","name":"listingPrice","type":"uint256"},{"internalType":"bool","name":"cancelled","type":"bool"}],"internalType":"struct Marketplace.MarketItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fetchMyNFTs","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"string","name":"currency","type":"string"},{"internalType":"uint256","name":"listingPrice","type":"uint256"},{"internalType":"bool","name":"cancelled","type":"bool"}],"internalType":"struct Marketplace.MarketItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getListingPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"marketItemId","type":"uint256"}],"name":"getMarketItem","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"string","name":"currency","type":"string"},{"internalType":"uint256","name":"listingPrice","type":"uint256"},{"internalType":"bool","name":"cancelled","type":"bool"}],"internalType":"struct Marketplace.MarketItem","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_listingPrice","type":"uint256"}],"name":"setListingPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"}],"name":"upgradeTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"version","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"}];

        marketplaceEthereumContractAddress = "0x1861C868b6A3ebD312559888d59a08f4A8929980";
        marketplaceEthereumAbi = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"beacon","type":"address"}],"name":"BeaconUpgraded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"itemId","type":"uint256"}],"name":"MarketItemCancelled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"itemId","type":"uint256"},{"indexed":true,"internalType":"address","name":"nftContract","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"address","name":"seller","type":"address"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"},{"indexed":false,"internalType":"string","name":"currency","type":"string"},{"indexed":false,"internalType":"uint256","name":"listingPrice","type":"uint256"}],"name":"MarketItemCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"itemId","type":"uint256"}],"name":"MarketItemSold","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"Upgraded","type":"event"},{"inputs":[{"internalType":"uint256","name":"itemId","type":"uint256"}],"name":"cancelMarketItem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"a","type":"string"},{"internalType":"string","name":"b","type":"string"}],"name":"compareStrings","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"nftContractAddress","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"string","name":"currency","type":"string"}],"name":"createMarketItem","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"itemId","type":"uint256"}],"name":"createMarketSale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"nftContractAddress","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"fetchMarketItem","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"string","name":"currency","type":"string"},{"internalType":"uint256","name":"listingPrice","type":"uint256"},{"internalType":"bool","name":"cancelled","type":"bool"}],"internalType":"struct Marketplace.MarketItem","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fetchMarketItems","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"string","name":"currency","type":"string"},{"internalType":"uint256","name":"listingPrice","type":"uint256"},{"internalType":"bool","name":"cancelled","type":"bool"}],"internalType":"struct Marketplace.MarketItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fetchMyNFTs","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"string","name":"currency","type":"string"},{"internalType":"uint256","name":"listingPrice","type":"uint256"},{"internalType":"bool","name":"cancelled","type":"bool"}],"internalType":"struct Marketplace.MarketItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getListingPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"marketItemId","type":"uint256"}],"name":"getMarketItem","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"string","name":"currency","type":"string"},{"internalType":"uint256","name":"listingPrice","type":"uint256"},{"internalType":"bool","name":"cancelled","type":"bool"}],"internalType":"struct Marketplace.MarketItem","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_listingPrice","type":"uint256"}],"name":"setListingPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"}],"name":"upgradeTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"version","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"}];

        rpcEndpointEth = "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161";
        rpcEndpointBsc = "https://data-seed-prebsc-1-s1.binance.org:8545/";

        blockchainExplorerEth = "https://rinkeby.etherscan.io/";
        blockchainExplorerBsc = "https://testnet.bscscan.com/";

        chainIDEth = 4;
        chainIDBsc = 97;

        url = "https://ownly.io/dev-marketplace/";
        ownlyAPI = "https://ownly.tk/";
    }

    if(currentURL.includes("ownlyio.dev-marketplace.test")) {
        url = "http://ownlyio.dev-marketplace.test/";
        ownlyAPI = "http://ownly-api.test/";
    }

    $(".website-home-link").attr("href", url);
    cacheVersion = $("#script").attr("src").split("?v=")[1];
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
    let profile = findGetParameter("profile");
    let collection = findGetParameter("collection");

    if(contract && token) {
        pageContent.load(url + "js/../token.html?v=" + cacheVersion, function() {
            currentPage = "token";

            contract = web3Bsc.utils.toChecksumAddress(contract);

            displayToken(contract, token);

            if(contract === titansContractAddress) {
                collection = "titans-of-industry";
                $("#artist-section").load(url + "js/../artist-eugene.html?v=" + cacheVersion);
            } else if(contract === mustachiosContractAddress) {
                collection = "the-mustachios";
                $("#artist-section").load(url + "js/../artist-dan.html?v=" + cacheVersion);
            }

            displayTokens(token, "all", collection);

            app.removeClass("d-none");
        });
    } else if(profile) {
        pageContent.load(url + "js/../profile.html?v=" + cacheVersion, function() {
            currentPage = "profile";

            displayTokens(0, "owned", null);
            displayTokens(0, "favorites", null);

            app.removeClass("d-none");
        });
    } else if(collection || !collection) {
        pageContent.load(url + "js/../home.html?v=" + cacheVersion, function() {
            if(!collection) {
                collection = "titans-of-industry";
            }

            currentPage = "home";
            displayTokens(0, "all", collection);

            if(collection === "titans-of-industry") {
                $("#artist-section").load(url + "js/../artist-eugene.html?v=" + cacheVersion);
            } else if(collection === "the-mustachios") {
                $("#artist-section").load(url + "js/../artist-dan.html?v=" + cacheVersion);
            }

            $(".collection-tab[data-collection='" + collection + "']").addClass("active");

            app.removeClass("d-none");
        });
    }
};
let connectToMetamask = async () => {
    if(!isConnectedToMetamask) {
        if (window.ethereum) {
            try {
                ethereum.on('accountsChanged', (accounts) => {
                    address = (accounts.length > 0) ? accounts[0] : false;

                    updateConnectToWallet();
                    initializePage();
                });

                ethereum.on('chainChanged', (_chainId) => window.location.reload());

                web3Bsc = new Web3(ethereum);

                initializeContracts();

                return true;
            } catch (error) {
                $("#modal-no-metamask-installed").modal("show");
                return false;
            }
        } else {
            $("#modal-no-metamask-installed").modal("show");
            return false;
        }
    } else {
        return true;
    }
};
let updateConnectToWallet = async () => {
    let accounts = await web3Bsc.eth.getAccounts();
    address = (accounts.length > 0) ? accounts[0] : false;

    if(!address) {
        try {
            accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            address = (accounts.length > 0) ? accounts[0] : false;
        } catch(e) {}
    }

    if(address) {
        $("#connect-to-metamask-container").addClass("d-none");

        let accountAddress = $("#account-address");

        let content = ' <div class="d-flex align-items-center">';
        content += '        <canvas data-jdenticon-value="" class="jdenticon" width="35" height="35" style="border-radius:50%; border:2px solid #aaaaaa">';
        content += '            Fallback text or image for browsers not supporting inline svg.';
        content += '        </canvas>';
        content += '        <span class="font-size-90 ps-2">' + shortenAddress(web3Bsc.utils.toChecksumAddress(address), 5, 5) + "&nbsp;" + '</span>';
        content += '    </div>';

        accountAddress.html(content);
        accountAddress.removeClass("d-none");

        jdenticon.update(".jdenticon", address.toString());

        $("#account-address").attr("href", "?profile=" + address);
    } else {
        $("#account-address").addClass("d-none");
        $("#connect-to-metamask-container").removeClass("d-none");
    }
};
let initializeWeb3 = async () => {
    try {
        ethereum.on('accountsChanged', (accounts) => {
            address = (accounts.length > 0) ? accounts[0] : false;

            updateConnectToWallet();
            initializePage();
        });

        ethereum.on('chainChanged', (_chainId) => window.location.reload());
    } catch (error) {}

    web3Bsc = new Web3(rpcEndpointBsc);
    web3Eth = new Web3(rpcEndpointEth);
};
let initializeContracts = () => {
    titansContract = new web3Bsc.eth.Contract(titansContractAbi, titansContractAddress);
    mustachiosContract = new web3Eth.eth.Contract(mustachiosContractAbi, mustachiosContractAddress);

    marketplaceBinanceContract = new web3Bsc.eth.Contract(marketplaceBinanceAbi, marketplaceBinanceContractAddress);
    if(hasMarketplaceEthereumContract) {
        marketplaceEthereumContract = new web3Eth.eth.Contract(marketplaceEthereumAbi, marketplaceEthereumContractAddress);
    }

    ownContract = new web3Bsc.eth.Contract(ownContractAbi, ownContractAddress);
};
let initializeListingPrice = () => {
    marketplaceBinanceContract.methods.getListingPrice().call()
        .then(function(data) {
            listingPrice = data;
        });
};
let displayTokens = (excludedToken, type, collection) => {
    if(collection === "titans-of-industry") {
        displayTitanTokens(excludedToken, type);
    } else if(collection === "the-mustachios") {
        displayMustachioTokens(excludedToken, type);
    }
};
let displayTitanTokens = function(excludedToken, type) {
    titansContract.methods.totalSupply().call()
        .then(function(totalSupply) {
            content = '';
            for(let i = 1; i <= totalSupply; i++) {
                marketplaceBinanceContract.methods.fetchMarketItem(titansContractAddress, i).call()
                    .then(async function(marketItem) {
                        await titansContract.methods.tokenURI(i).call()
                            .then(async function(tokenURI) {
                                await $.get(tokenURI + "?v=" + cacheVersion, async function(metadata) {
                                    await titansContract.methods.ownerOf(i).call()
                                        .then(async function(owner) {
                                            await formatTokenCards(excludedToken, type, totalSupply, i, marketItem, metadata, owner, titansContractAddress);
                                        });
                                });
                            });
                    });
            }
        });
};
let displayMustachioTokens = function(excludedToken, type) {
    mustachiosContract.methods.totalSupply().call()
        .then(async function(totalSupply) {
            content = '';
            for(let i = 1; i <= totalSupply; i++) {
                if(hasMarketplaceEthereumContract) {
                    marketplaceEthereumContract.methods.fetchMarketItem(mustachiosContractAddress, i).call()
                        .then(async function(marketItem) {
                            await mustachiosContract.methods.tokenURI(i).call()
                                .then(async function(tokenURI) {
                                    await $.get(tokenURI + "?v=" + cacheVersion, async function(metadata) {
                                        await mustachiosContract.methods.ownerOf(i).call()
                                            .then(async function(owner) {
                                                await formatTokenCards(excludedToken, type, totalSupply, i, marketItem, metadata, owner, mustachiosContractAddress);
                                            });
                                    });
                                });
                        });
                } else {
                    let marketItem = false;
                    mustachiosContract.methods.tokenURI(i).call()
                        .then(async function(tokenURI) {
                            await $.get(tokenURI + "?v=" + cacheVersion, async function(metadata) {
                                await mustachiosContract.methods.ownerOf(i).call()
                                    .then(async function(owner) {
                                        await formatTokenCards(excludedToken, type, totalSupply, i, marketItem, metadata, owner, mustachiosContractAddress);
                                    });
                            });
                        });
                }
            }
        });
};
let formatTokenCards = async function(excludedToken, type, totalSupply, i, marketItem, metadata, owner, contractAddress) {
    let isOwned = type === "owned" && address && web3Bsc.utils.toChecksumAddress(owner) === web3Bsc.utils.toChecksumAddress(address);

    let isFavorited = false;
    if(type === "favorites") {
        if(ethereum.selectedAddress) {
            await $.post(ownlyAPI + "api/get-market-item-favorites", {
                address: ethereum.selectedAddress,
                contract_address: contractAddress,
                token_id: i
            }, function(data) {
                if(data.status) {
                    isFavorited = true;
                }
            }).fail(function(error) {
                console.log(error);
            });
        }
    }

    isFavorited = type === "favorites" && isFavorited;

    if(type === "all" || isOwned || isFavorited) {
        content += '    <div class="col-md-6 col-xl-4 mb-5 pb-md-3 px-md-4">';
        content += '        <div class="token-card" data-token-id="' + i + '">';
        content += '            <a href="?contract=' + contractAddress + '&token=' + i + '" class="link">';
        content += '                <div class="w-100 background-image-cover token-image shadow-sm border-1 mb-3 bg-secondary" style="background-image:url(\'' + metadata.image + '\'); padding-top:100%"></div>';
        content += '            </a>';
        content += '            <div class="d-flex flex-column justify-content-between h-100">';
        content += '                <div class="d-flex justify-content-between">';
        content += '                    <div class="d-flex align-items-center mb-1" style="min-height:61px">';
        content += '                        <a href="?contract=' + contractAddress + '&token=' + i + '" class="font-size-160 neo-bold token-name link text-color-6 text-decoration-none">' + metadata.name + '</a>';
        content += '                    </div>';
        content += '                    <div class="d-flex align-items-center py-1 ps-3 add-to-favorites-container">';
        content += '                        <div class="">';
        content += '                            <button class="btn add-to-favorites p-0 m-0" data-contract-address="' + contractAddress + '" data-token-id="' + i +'" data-status="0" style="width:24px; height:24px; border-radius:50%; box-shadow: none" disabled>';
        content += '                                <i class="far fa-heart font-size-140 text-color-1"></i>';
        content += '                            </button>';
        content += '                        </div>';
        content += '                        <div class="ps-2 font-size-90 text-color-1 favorites-count">0</div>';
        content += '                    </div>';
        content += '                </div>';
        content += '                <div class="font-size-110 mb-2 pb-1">1 of 1 - Single Edition</div>';
        content += '                <div class="font-size-90 mb-4 token-description-truncated overflow-hidden" style="min-height:51px; max-height:51px">' + metadata.description + '</div>';
        if(parseInt(marketItem.itemId)) {
            content += '                <div class="row align-items-center">';
            content += '                    <div class="col-6">';
            content += '                        <div class="d-flex align-items-end mb-1">';
            content += '                            <div class="font-size-100 font-size-md-110">Price:</div>';
            if(marketItem.currency === "OWN") {
                content += '                        <div class="ps-2 ms-1">';
                content += '                            <img src="img/ownly/own-token.png" width="30" />';
                content += '                        </div>';
            } else if(marketItem.currency === "BNB") {
                content += '                        <div class="ps-2 ms-1">';
                content += '                            <img src="img/bnb/bnb.webp" width="30" />';
                content += '                        </div>';
            }
            content += '                        </div>';
            content += '                        <div class="font-size-160 font-size-md-180 neo-black">' + web3Bsc.utils.fromWei(marketItem.price, "ether") + ' ' + ((hasMarketplaceEthereumContract) ? marketItem.currency : "BNB") + '</div>';
            content += '                    </div>';
            if(contractAddress === titansContractAddress) {
                content += '                <div class="col-6 button-container">';
                if(address && web3Bsc.utils.toChecksumAddress(owner) === web3Bsc.utils.toChecksumAddress(address)) {
                content += '                <button class="btn btn-custom-3 w-100 font-size-100 font-size-md-120 neo-bold link cancel-market-item-confirmation" data-item-id="' + marketItem.itemId + '" style="border-radius:15px">CANCEL</button>';
                } else {
                content += '                <button class="btn btn-custom-2 w-100 font-size-100 font-size-md-120 neo-bold link create-market-sale-confirmation" data-item-id="' + marketItem.itemId + '" data-price="' + marketItem.price + '" data-currency="' + marketItem.currency + '" style="border-radius:15px">OWN NOW</button>';
                }
            }
            content += '                    </div>';
            content += '                </div>';
            content += '                <div class="owner d-none">' + owner + '</div>';
        } else {
            let transaction_hash = "#";

            let getLatestTransaction = function(_contractAddress, _token) {
                let chainId;
                if(web3Bsc.utils.toChecksumAddress(contractAddress) === titansContractAddress) {
                    chainId = chainIDBsc;
                } else if(web3Bsc.utils.toChecksumAddress(contractAddress) === mustachiosContractAddress) {
                    chainId = chainIDEth;
                }

                $.get("https://api.covalenthq.com/v1/" + chainId + "/tokens/" + contractAddress + "/nft_transactions/" + _token + "/?&key=ckey_994c8fdd549f44fa9b2b27f59a0", function(data) {
                    if(data) {
                        let _break = false;

                        for(let j = 0; j < data.data.items[0].nft_transactions.length; j++) {
                            for(let k = 0; k < data.data.items[0].nft_transactions[j].log_events.length; k++) {
                                if(data.data.items[0].nft_transactions[j].log_events[k].decoded) {
                                    if(data.data.items[0].nft_transactions[j].log_events[k].decoded.name === "Transfer") {
                                        let transaction_hash = data.data.items[0].nft_transactions[j].log_events[k].tx_hash;
                                        let setTransactionHashInterval = setInterval(function() {
                                            if($("#tokens-container").html() !== "") {
                                                let bscscanTransactionHash = $(".token-card[data-token-id='" + _token + "'] .bscscan-transaction-hash");

                                                bscscanTransactionHash.attr("href", blockchainExplorerBsc + "tx/" + transaction_hash);
                                                bscscanTransactionHash.removeClass("d-none");
                                                clearInterval(setTransactionHashInterval);
                                            }
                                        }, 1000);
                                    }
                                }
                            }

                            if(_break) {
                                break;
                            }
                        }
                    } else {
                        setTimeout(function() {
                            getLatestTransaction(_contractAddress, _token);
                        }, 1000);
                    }
                });
            };

            getLatestTransaction(contractAddress, i);

            content += '                <div class="row align-items-center" style="min-height:69px">';
            content += '                    <div class="col-6">';
            content += '                        <div>';
            content += '                            <a href="' + blockchainExplorerBsc + "tx/" + transaction_hash + '" target="_blank" class="font-size-90 text-decoration-none bscscan-transaction-hash">View on BscScan</a>';
            content += '                        </div>';
            content += '                        <div class="font-size-100 neo-bold">Owner</div>';
            content += '                        <div class="font-size-90 owner-address">' + shortenAddress(web3Bsc.utils.toChecksumAddress(owner), 5, 5) + '</div>';
            content += '                    </div>';
            content += '                    <div class="col-6">';
            if(contractAddress === titansContractAddress) {
                if(address && web3Bsc.utils.toChecksumAddress(owner) === web3Bsc.utils.toChecksumAddress(address)) {
                    content += '                <button class="btn btn-custom-4 w-100 font-size-100 font-size-md-120 neo-bold create-market-item-confirmation" data-token-id="' + i + '" style="border-radius:15px">SELL NOW</button>';
                } else {
                    content += '                <div class="w-100 font-size-100 font-size-md-120 text-center neo-bold link" style="border-radius:5px; background-color:#e1e3e3; border-color:#c7c9c9; padding-top:6px; padding-bottom:6px; line-height:1.5">SOLD OUT</div>';
                }
            }
            content += '                    </div>';
            content += '                </div>';
        }
        content += '            </div>';
        content += '        </div>';
        content += '    </div>';

        if(address && owner.toLowerCase() === address.toLowerCase()) {
            $(".token-card[data-token-id='" + i + "']").find("#create-market-item-confirmation").removeClass("d-none");
        }

        if(currentPage === "token") {
            Ellipsis({
                class: '.token-description-truncated',
                lines: 3
            });

            setTimeout(function() {
                loadRelatedTokens(excludedToken);
            }, 1000);
        }
    }

    if(type === "all") {
        $("#tokens-container").html(content);
    } else if(i === parseInt(totalSupply) && type === "owned") {
        $("#owned-tokens-container").html(content);
    } else if(i === parseInt(totalSupply) && type === "favorites") {
        $("#favorite-tokens-container").html(content);
    }

    if($("#tokens-container .add-to-favorites").length === parseInt(totalSupply)) {
        for(let l = 1; l <= totalSupply; l++) {
            getMarketItemFavorites(l, contractAddress);
        }
    }
};
let displayToken = (contractAddress, token) => {
    if(contractAddress === titansContractAddress) {
        displayTitanToken(token);
    } else if(contractAddress === mustachiosContractAddress) {
        displayMustachioToken(token);
    }
};
let displayTitanToken = (token) => {
    titansContract.methods.tokenURI(token).call()
        .then(function(tokenURI) {
            displayTokenMetadata(tokenURI, titansContractAddress);
        });

    marketplaceBinanceContract.methods.fetchMarketItem(titansContractAddress, token).call()
        .then(function(marketItem) {
            titansContract.methods.ownerOf(token).call()
                .then(async function(owner) {
                    displayTokenDetails(marketItem, token, owner, titansContractAddress);
                });
        });
};
let displayMustachioToken = (token) => {
    mustachiosContract.methods.tokenURI(token).call()
        .then(function(tokenURI) {
            displayTokenMetadata(tokenURI, mustachiosContractAddress, token);
        });

    marketplaceEthereumContract.methods.fetchMarketItem(mustachiosContractAddress, token).call()
        .then(function(marketItem) {
            mustachiosContract.methods.ownerOf(token).call()
                .then(async function(owner) {
                    displayTokenDetails(marketItem, token, owner, mustachiosContractAddress);
                });
        });
};
let displayTokenMetadata = function(tokenURI, contractAddress, token) {
    $.get(tokenURI + "?v=" + cacheVersion, function(metadata) {
        $("#point-to-bscnetwork-message").addClass("d-none");

        $("#token-image").attr("src", metadata.image);
        $("#token-name").text(metadata.name);
        $("#token-description").text(metadata.description);
        $("#token-contract-address").html('<a href="' + blockchainExplorerBsc + 'address/' + contractAddress + '" target="_blank" class="link-color-3">' + shortenAddress(web3Bsc.utils.toChecksumAddress(contractAddress), 5, 5) + '</a>');
        $("#token-id").text(token);
        $(".create-market-item-confirmation").attr("data-token-id", token);

        $("#token-original-image").attr("href", metadata.asset);
        $("#token-original-image-preload").attr("src", metadata.asset);

        let addToFavoritesButton = $(".add-to-favorites");
        addToFavoritesButton.attr("data-contract-address", contractAddress);
        addToFavoritesButton.attr("data-token-id", token);

        let content = '';
        for(let i = 0; i < metadata.attributes.length; i++) {
            content += '    <div class="col-md-6 col-xl-4 p-2">';
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
};
let displayTokenDetails = async function(marketItem, token, owner, contractAddress) {
    $("#token-owner").html('<a href="' + blockchainExplorerBsc + 'address/' + owner + '" target="_blank" class="link-color-3">' + shortenAddress(web3Bsc.utils.toChecksumAddress(owner), 5, 5) + '</a>');

    let transaction_hashes = await getTokenTransfers(owner, contractAddress, token);

    if(parseInt(marketItem.itemId)) {
        let tokenPrice = $(".token-price");
        tokenPrice.html(web3Bsc.utils.fromWei(marketItem.price, "ether") + " " + marketItem.currency);
        tokenPrice.removeClass("d-none");

        if(marketItem.currency === "OWN") {
            $(".token-price-currency").attr("src", "img/ownly/own-token.png");
        } else {
            $(".token-price-currency").attr("src", "img/bnb/bnb.webp");
        }

        if(address && web3Bsc.utils.toChecksumAddress(owner) === web3Bsc.utils.toChecksumAddress(address)) {
            $(".cancel-market-item-confirmation").attr("data-item-id", parseInt(marketItem.itemId));
            $("#cancel-market-item-container").removeClass("d-none");
        } else {
            let createMarketSaleConfirmationButton = $(".create-market-sale-confirmation");
            createMarketSaleConfirmationButton.attr("data-item-id", marketItem.itemId);
            createMarketSaleConfirmationButton.attr("data-price", marketItem.price);
            createMarketSaleConfirmationButton.attr("data-currency", marketItem.currency);
            $("#create-market-sale-container").removeClass("d-none");
        }
    } else {
        let bscscanTransactionHash = $(".token-bscscan-transaction-hash");

        bscscanTransactionHash.attr("href", blockchainExplorerBsc + "tx/" + transaction_hashes[0].tx_hash);
        bscscanTransactionHash.removeClass("d-none");

        $(".owner-address").text(shortenAddress(web3Bsc.utils.toChecksumAddress(owner), 5, 5));

        if(address && web3Bsc.utils.toChecksumAddress(owner) === web3Bsc.utils.toChecksumAddress(address)) {
            $("#create-market-item-container").removeClass("d-none");
        } else {
            $("#sold-out-container").removeClass("d-none");
        }
    }

    $("#token-loading").addClass("d-none");

    let transfers_content = '   <thead>';
    transfers_content += '          <tr>';
    transfers_content += '              <th style="vertical-align:middle">Price</th>';
    transfers_content += '              <th style="vertical-align:middle">From</th>';
    transfers_content += '              <th style="vertical-align:middle">To</th>';
    transfers_content += '              <th style="vertical-align:middle; min-width:110px">Date</th>';
    transfers_content += '          </tr>';
    transfers_content += '      </thead>';
    transfers_content += '      <tbody>';
    for(let j = 0; j < transaction_hashes.length; j++) {
        let price = 0;
        await $.get("https://api.covalenthq.com/v1/" + chainIDBsc + "/transaction_v2/" + transaction_hashes[j].tx_hash + "/?&key=ckey_994c8fdd549f44fa9b2b27f59a0", function(data) {
            price = web3Bsc.utils.fromWei(data.data.items[0].value, "ether");
        });

        transfers_content += '      <tr>';
        transfers_content += '          <td style="vertical-align:middle">' + price + ' BNB</td>';
        transfers_content += '          <td style="vertical-align:middle">';
        transfers_content += '              <a href="' + blockchainExplorerBsc + 'address/' + transaction_hashes[j].decoded.params[0].value + '" target="_blank" class="link-color-3">' + shortenAddress(web3Bsc.utils.toChecksumAddress(transaction_hashes[j].decoded.params[0].value), 4, 4) + '</a>';
        transfers_content += '          </td>';
        transfers_content += '          <td style="vertical-align:middle">';
        transfers_content += '              <a href="' + blockchainExplorerBsc + 'address/' + transaction_hashes[j].decoded.params[1].value + '" target="_blank" class="link-color-3">' + shortenAddress(web3Bsc.utils.toChecksumAddress(transaction_hashes[j].decoded.params[1].value), 4, 4) + '</a>';
        transfers_content += '          </td>';
        transfers_content += '          <td style="vertical-align:middle">' + moment(transaction_hashes[j].block_signed_at).format('llll') + '</td>';
        transfers_content += '      </tr>';
    }
    transfers_content += '      </tbody>';
    $("#transfer-history").html(transfers_content);

    getMarketItemFavorites(token, contractAddress);
};
let shortenAddress = (address, prefixCount, postfixCount) => {
    let prefix = address.substr(0, prefixCount);
    let postfix = address.substr(address.length - postfixCount, address.length);

    return prefix + "..." + postfix;
};
let loadRelatedTokens = (excludedToken) => {
    let tokenCards = [];
    let _break = false;

    $("#tokens-container").addClass("d-none");

    $("#tokens-container .col-md-6").each(function() {
        if($(this).find(".owner").html() === "") {
            _break = true;
            return 0;
        }

        if($(this).find(".token-card").attr("data-token-id") !== excludedToken) {
            tokenCards.push($(this).html());
        }
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
let getTokenTransfers = async (owner, contractAddress, token) => {
    let transaction_hashes = [];

    await $.get("https://api.covalenthq.com/v1/" + chainIDBsc + "/tokens/" + titansContractAddress + "/nft_transactions/" + token + "/?&key=ckey_994c8fdd549f44fa9b2b27f59a0", function(data) {
        if(data) {
            for(let j = 0; j < data.data.items[0].nft_transactions.length; j++) {
                for(let k = 0; k < data.data.items[0].nft_transactions[j].log_events.length; k++) {
                    if(data.data.items[0].nft_transactions[j].log_events[k].decoded) {
                        if(data.data.items[0].nft_transactions[j].log_events[k].decoded.name === "Transfer") {
                            transaction_hashes.push(data.data.items[0].nft_transactions[j].log_events[k]);
                        }
                    }
                }
            }
        } else {
            setTimeout(function() {
                getTokenTransfers(owner, contractAddress, token);
            });
        }
    });

    return transaction_hashes;
};
let getMarketItemFavorites = (tokenId, contractAddress) => {
    $.post(ownlyAPI + "api/get-market-item-favorites", {
        address: (address) ? address : 0,
        contract_address: contractAddress,
        token_id: tokenId
    }, function(data) {
        let favorite = $(".add-to-favorites[data-contract-address='" + contractAddress + "'][data-token-id='" + tokenId + "']");

        favorite.prop("disabled", false);

        if(data.status) {
            favorite.attr("data-status", 1);
            favorite.find("i").removeClass("far");
            favorite.find("i").addClass("fas");
        }

        favorite.closest(".add-to-favorites-container").find(".favorites-count").text(data.total);
    }).fail(function(error) {
        console.log(error);
    });
};

window.onerror = function(message, url, lineNumber) {
    return false;
};

initializeEnvVariables();

$(document).ready(function() {
    initiate_loading_page();
});

$(window).on("load", async () => {
    initializeWeb3();
    initializeContracts();
    initializeListingPrice();
    initializePage();
    updateConnectToWallet();
    close_loading_page();
});

$(document).on("click", "#install-metamask", () => {
    $("#modal-no-metamask-installed").modal("hide");
});

$(document).on("click", "#connect-to-metamask", () => {
    connectToMetamask();
});

$(document).on("click", ".create-market-item-confirmation", function() {
    let button = $(this);
    button.prop("disabled", true);

    let tokenID = button.attr("data-token-id");

    titansContract.methods.getApproved($(this).attr("data-token-id")).call()
        .then(function(approved) {
            button.prop("disabled", false);

            if(web3Bsc.utils.toChecksumAddress(approved) === web3Bsc.utils.toChecksumAddress(marketplaceBinanceContractAddress)) {
                $("#create-market-item").val(tokenID);
                $("#modal-create-market-item").modal("show");
            } else {
                $("#approve").val(tokenID);
                $("#modal-approve").modal("show");
            }
        });
});

$(document).on("click", "#approve", async function() {
    approveButton = $("#approveButton");
    approveButton.prop("disabled", true);

    let tokenID = $(this).val();

    $("#modal-approve").modal("hide");

    isConnectedToMetamask = await connectToMetamask();
    if(isConnectedToMetamask) {
        let _chainID = await web3Bsc.eth.getChainId();

        if(_chainID !== chainIDBsc) {
            $("#modal-wrong-network").modal("show");
            return 0;
        }
    } else {
        return 0;
    }

    titansContract.methods.approve(marketplaceBinanceContractAddress, tokenID)
        .send({
            from: web3Bsc.utils.toChecksumAddress(address)
        }).on('transactionHash', function(hash){
            $("#modal-processing").modal("show");
        }).on('error', function(error){
            $("#modal-processing").modal("hide");

            $("#modal-error .message").text(error.code + ": " + error.message);
            $("#modal-error").modal("show");
        }).then(function(receipt) {
            $("#modal-processing").modal("hide");

            $("#create-market-item").val(tokenID);
            $("#modal-create-market-item").modal("show");
        });
});

$(document).on("click", "#create-market-item", async function() {
    let price = $("#price").val();

    if(price > 0) {
        $("#modal-create-market-item").modal("hide");

        isConnectedToMetamask = await connectToMetamask();
        if(isConnectedToMetamask) {
            let _chainID = await web3Bsc.eth.getChainId();

            if(_chainID !== chainIDBsc) {
                $("#modal-wrong-network").modal("show");
                return 0;
            }
        } else {
            return 0;
        }

        marketplaceBinanceContract.methods.createMarketItem(titansContractAddress, $(this).val(), web3Bsc.utils.toWei(price, 'ether'), $("#price-currency").val())
            .send({
                from: web3Bsc.utils.toChecksumAddress(address),
                value: listingPrice
            }).on('transactionHash', function(transactionHash){
                $("#modal-processing").modal("show");
            }).on('error', function(error){
                $("#modal-processing").modal("hide");

                $("#modal-error .message").text(error.code + ": " + error.message);
                $("#modal-error").modal("show");
            }).then(function(receipt) {
                $("#modal-processing").modal("hide");

                $("#modal-success .message").text("You have successfully posted your item for sale.");
                $("#modal-success").modal("show");

                initializePage();
            });
    }
});

$(document).on("click", ".cancel-market-item-confirmation", function() {
    let itemID = $(this).attr("data-item-id");

    $("#cancel-market-item").val(itemID);
    $("#modal-cancel-market-item").modal("show");
});

$(document).on("click", "#cancel-market-item", async function() {
    $("#modal-cancel-market-item").modal("hide");

    isConnectedToMetamask = await connectToMetamask();
    if(isConnectedToMetamask) {
        let _chainID = await web3Bsc.eth.getChainId();

        if(_chainID !== chainIDBsc) {
            $("#modal-wrong-network").modal("show");
            return 0;
        }
    } else {
        return 0;
    }

    marketplaceBinanceContract.methods.cancelMarketItem($(this).val())
        .send({
            from: web3Bsc.utils.toChecksumAddress(address)
        }).on('transactionHash', function(transactionHash){
            $("#modal-processing").modal("show");
        }).on('error', function(error){
            $("#modal-processing").modal("hide");

            $("#modal-error .message").text(error.code + ": " + error.message);
            $("#modal-error").modal("show");
        }).then(function(receipt) {
            $("#modal-processing").modal("hide");
            initializePage();
        });
});

$(document).on("click", ".create-market-sale-confirmation", function() {
    console.log(address);
    if(!address) {
        connectToMetamask();
    } else {
        if(parseInt(ethereum.networkVersion) === chainIDBsc) {
            let price = $(this).attr("data-price");
            let item_id = $(this).attr("data-item-id");

            let createMarketSaleFunction = async function(_price) {
                isConnectedToMetamask = await connectToMetamask();
                if(isConnectedToMetamask) {
                    let _chainID = await web3Bsc.eth.getChainId();

                    if(_chainID !== chainIDBsc) {
                        $("#modal-wrong-network").modal("show");
                        return 0;
                    }
                } else {
                    return 0;
                }

                marketplaceBinanceContract.methods.createMarketSale(item_id)
                    .send({
                        from: web3Bsc.utils.toChecksumAddress(address),
                        value: price
                    }).on('transactionHash', function(transactionHash){
                        $("#modal-processing").modal("show");
                    }).on('error', function(error) {
                        $("#modal-processing").modal("hide");

                        $("#modal-error .message").text(error.code + ": " + error.message);
                        $("#modal-error").modal("show");
                    }).then(function(receipt) {
                        $("#modal-processing").modal("hide");
                        initializePage();
                    });
            };

            if($(this).attr("data-currency") === "OWN") {
                ownContract.methods.allowance(address, marketplaceBinanceContractAddress).call()
                    .then(async function(allowance) {
                        if(allowance !== price) {
                            isConnectedToMetamask = await connectToMetamask();
                            if(isConnectedToMetamask) {
                                let _chainID = await web3Bsc.eth.getChainId();

                                if(_chainID !== chainIDBsc) {
                                    $("#modal-wrong-network").modal("show");
                                    return 0;
                                }
                            } else {
                                return 0;
                            }

                            ownContract.methods.approve(marketplaceBinanceContractAddress, price)
                                .send({
                                    from: web3Bsc.utils.toChecksumAddress(address)
                                }).on('transactionHash', function(transactionHash){
                                    $("#modal-processing").modal("show");
                                }).on('error', function(error){
                                    $("#modal-processing").modal("hide");

                                    $("#modal-error .message").text(error.code + ": " + error.message);
                                    $("#modal-error").modal("show");
                                }).then(function(receipt) {
                                    $("#modal-processing").modal("hide");

                                    createMarketSaleFunction(0);
                                });
                        } else {
                            createMarketSaleFunction(0);
                        }
                    });
            } else {
                createMarketSaleFunction(price);
            }
        } else {
            $("#modal-wrong-network").modal("show");
        }
    }
});

$(document).on("submit", "#newsletter-form", async (event) => {
    event.preventDefault();

    newsletter_form = $("#newsletter-form");
    newsletter_form.find("[type='submit']").prop("disabled", true);

    let data = new FormData(event.target);
    fetch(event.target.action, {
        method: "POST",
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        newsletter_form.find("input").val("");

        $("#newsletter-form [type='submit']").prop("disabled", false);

        $("#modal-subscribe-success").modal("show");
    }).catch(error => {
        console.log('Oops! There was a problem submitting your form');
    });
});

$(document).on("click", ".add-to-favorites", async function() {
    if(!address) {
        connectToMetamask();
    } else {
        web3Bsc = new Web3(ethereum);

        let message = "I am confirming this action in Ownly Marketplace.";
        let signature = await web3Bsc.eth.personal.sign(message, ethereum.selectedAddress);
        // var signing_address = await web3Bsc.eth.personal.ecRecover(message, signature)

        let button = $(this);
        let contract_address = button.attr("data-contract-address");
        let token_id = button.attr("data-token-id");
        let status = parseInt(button.attr("data-status"));

        if(signature) {
            await $.post(ownlyAPI + "api/store-market-account", {
                address: ethereum.selectedAddress,
                signature: signature
            }, function(data) {
                let new_status = (status) ? 0 : 1;

                let count = parseInt(button.closest(".add-to-favorites-container").find(".favorites-count").text());

                if(new_status === 1) {
                    button.find("i").removeClass("far");
                    button.find("i").addClass("fas");
                    button.closest(".add-to-favorites-container").find(".favorites-count").text(count + 1);
                } else {
                    button.find("i").removeClass("fas");
                    button.find("i").addClass("far");
                    button.closest(".add-to-favorites-container").find(".favorites-count").text(count - 1);
                }

                button.attr("data-status", new_status);

                $.post(ownlyAPI + "api/store-market-item-favorite", {
                    address: ethereum.selectedAddress,
                    contract_address: contract_address,
                    token_id: token_id,
                    status: new_status
                }, function(data) {

                }).fail(function(error) {
                    console.log(error);
                });
            }).fail(function(error) {
                console.log(error);
            });
        }
    }
});

$(document).on("submit", "#account-settings-form", async function(e) {
    e.preventDefault();

    let button = $(this).find("[type='submit']");

    web3Bsc = new Web3(ethereum);

    let message = "I am confirming this action in Ownly Marketplace.";
    let signature = await web3Bsc.eth.personal.sign(message, ethereum.selectedAddress);

    if(signature) {
        let form_data = new FormData($(this)[0]);
        form_data.append('address', ethereum.selectedAddress);
        form_data.append('signature', signature);

        button.prop("disabled", true);
        button.text("Saving Changes");

        $.ajax({
            url: ownlyAPI + "api/store-account-settings",
            method: "POST",
            cache: false,
            contentType: false,
            processData: false,
            data: form_data
        }).done(function(response) {
            $("#modal-success .message").text("Saving changes successful");
            $("#modal-success").modal("show");
        }).fail(function(error) {
            console.log(error);
        }).always(function() {
            button.prop("disabled", false);
            button.text("Save Changes");
        });
    }
});

$(document).on("click", ".select-price-current", async function(e) {
    $("#price-currency img").attr("src", $(this).data("image"));
    $("#price-currency span").text($(this).data("currency"));
    $("#price-currency").val($(this).data("currency"));
});