let cacheVersion;
let ownContractAddress;
let titansContract;
let titansContractAddress;
let titansContractAbi;
let mustachiosContract;
let mustachiosContractAddress;
let mustachiosContractAbi;
let genesisBlockContract;
let genesisBlockContractAddress;
let genesisBlockContractAbi;
let sagesRantContract;
let sagesRantContractAddress;
let sagesRantContractAbi;
let rewardsContract;
let rewardsContractAddress;
let rewardsContractAbi;
let chenInkContract;
let chenInkContractAddress;
let chenInkContractAbi;
let marketplaceBinanceContractAddress;
let marketplaceBinanceContract;
let marketplaceBinanceAbi;
let marketplaceEthereumContractAddress;
let marketplaceEthereumContract;
let marketplaceEthereumAbi;
let marketplacePolygonContractAddress;
let marketplacePolygonContract;
let marketplacePolygonAbi;
let sparkSwapContractAddress;
let sparkSwapContract;
let sparkSwapContractAbi;
let url;
let rpcEndpointBsc;
let blockchainExplorerBsc;
let chainIDBsc;
let rpcEndpointEth;
let blockchainExplorerEth;
let chainIDEth;
let rpcEndpointMatic;
let blockchainExplorerMatic;
let chainIDMatic;
let ownlyAPI;
let web3Bsc;
let web3Eth;
let web3Matic;
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
let hasMarketplacePolygonContract = false;

let initializeEnvVariables = () => {
    let currentURL = window.location.href;

    if(currentURL.includes("ownly.io/marketplace")) {
    // if(true) {
        titansContractAddress = "0x804efc52BFa9B85A86219c191d51147566f3B327";
        titansContractAbi = [{"inputs":[{"internalType":"address","name":"admin_","type":"address"},{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"tokenURI","type":"string"}],"name":"createToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setPause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unsetPause","outputs":[],"stateMutability":"nonpayable","type":"function"}];

        mustachiosContractAddress = "0x9e7a3A2e0c60c70eFc115BF03e6c544Ef07620E5";
        mustachiosContractAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"PROVENANCE_HASH","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"flipSaleState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLastMintedTokenId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMintPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"max_mustachios","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintMustachio","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reserveMustachios","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"saleIsActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_baseUri","type":"string"}],"name":"setBaseUri","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintPrice","type":"uint256"}],"name":"setMintPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_provenanceHash","type":"string"}],"name":"setProvenanceHash","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];

        genesisBlockContractAddress = "0x2C51aF2916eb9CF6392768158eAa39306779EE85";
        genesisBlockContractAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"PROVENANCE_HASH","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"uint256","name":"_quantity","type":"uint256"}],"name":"mintMultiple","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_baseUri","type":"string"}],"name":"setBaseUri","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_provenanceHash","type":"string"}],"name":"setProvenanceHash","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];

        sagesRantContractAddress = "0x6BE5A289FADfFB9BC8ad508682dffBB6Fa440298";
        sagesRantContractAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"PROVENANCE_HASH","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"uint256","name":"_quantity","type":"uint256"}],"name":"mintMultiple","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_baseUri","type":"string"}],"name":"setBaseUri","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_provenanceHash","type":"string"}],"name":"setProvenanceHash","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];

        chenInkContractAddress = "0x804efc52BFa9B85A86219c191d51147566f3B327";
        chenInkContractAbi = [{"constant":true,"inputs":[{"name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"baseURI","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"}],"name":"mintTo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"baseTokenURI","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"contractURI","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":true,"name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"approved","type":"address"},{"indexed":true,"name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"operator","type":"address"},{"indexed":false,"name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"}];

        rewardsContractAddress = "0x3E191Ed002F3e62144f488d14Acf1B0B404bDF99";
        rewardsContractAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"values","type":"uint256[]"}],"name":"TransferBatch","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"TransferSingle","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"value","type":"string"},{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"}],"name":"URI","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINTER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PAUSER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"accounts","type":"address[]"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"}],"name":"balanceOfBatch","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"values","type":"uint256[]"}],"name":"burnBatch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"mintBatch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeBatchTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"uri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}];

        ownContractAddress = "0x7665CB7b0d01Df1c9f9B9cC66019F00aBD6959bA";
        ownContractAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}];

        marketplaceBinanceContractAddress = "0xB781092d4056FF0447C3Ef9acf25A2173CeE13a8";
        marketplaceBinanceAbi = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"beacon","type":"address"}],"name":"BeaconUpgraded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"itemId","type":"uint256"}],"name":"MarketItemCancelled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"itemId","type":"uint256"},{"indexed":true,"internalType":"address","name":"nftContract","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"address","name":"seller","type":"address"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"listingPrice","type":"uint256"}],"name":"MarketItemCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"itemId","type":"uint256"}],"name":"MarketItemSold","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"Upgraded","type":"event"},{"inputs":[{"internalType":"uint256","name":"itemId","type":"uint256"}],"name":"cancelMarketItem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"nftContractAddress","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"}],"name":"createMarketItem","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"itemId","type":"uint256"}],"name":"createMarketSale","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"nftContractAddress","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"fetchMarketItem","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"listingPrice","type":"uint256"},{"internalType":"bool","name":"cancelled","type":"bool"}],"internalType":"struct Marketplace.MarketItem","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fetchMarketItems","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"listingPrice","type":"uint256"},{"internalType":"bool","name":"cancelled","type":"bool"}],"internalType":"struct Marketplace.MarketItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fetchMyNFTs","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"listingPrice","type":"uint256"},{"internalType":"bool","name":"cancelled","type":"bool"}],"internalType":"struct Marketplace.MarketItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getListingPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"marketItemId","type":"uint256"}],"name":"getMarketItem","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"listingPrice","type":"uint256"},{"internalType":"bool","name":"cancelled","type":"bool"}],"internalType":"struct Marketplace.MarketItem","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_listingPrice","type":"uint256"}],"name":"setListingPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"}],"name":"upgradeTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"version","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"}];

        marketplaceBinanceContractAddress = "0x6fCdeF3F1ee15109Aa91e7195834438264e91744";
        marketplaceBinanceAbi = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"beacon","type":"address"}],"name":"BeaconUpgraded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"itemId","type":"uint256"}],"name":"MarketItemCancelled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"itemId","type":"uint256"},{"indexed":true,"internalType":"address","name":"nftContract","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"address","name":"seller","type":"address"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"},{"indexed":false,"internalType":"string","name":"currency","type":"string"},{"indexed":false,"internalType":"uint256","name":"listingPrice","type":"uint256"}],"name":"MarketItemCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"itemId","type":"uint256"}],"name":"MarketItemSold","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"Upgraded","type":"event"},{"inputs":[{"internalType":"address","name":"_contractAddress","type":"address"},{"internalType":"address","name":"_owner","type":"address"}],"name":"addNftFirstOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"itemId","type":"uint256"}],"name":"cancelMarketItem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"a","type":"string"},{"internalType":"string","name":"b","type":"string"}],"name":"compareStrings","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"nftContractAddress","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"string","name":"currency","type":"string"}],"name":"createMarketItem","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"string","name":"currency","type":"string"}],"name":"createMarketSale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"nftContractAddress","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"fetchMarketItem","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"string","name":"currency","type":"string"},{"internalType":"uint256","name":"listingPrice","type":"uint256"},{"internalType":"bool","name":"cancelled","type":"bool"}],"internalType":"struct Marketplace.MarketItem","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fetchMarketItems","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"string","name":"currency","type":"string"},{"internalType":"uint256","name":"listingPrice","type":"uint256"},{"internalType":"bool","name":"cancelled","type":"bool"}],"internalType":"struct Marketplace.MarketItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fetchMyNFTs","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"string","name":"currency","type":"string"},{"internalType":"uint256","name":"listingPrice","type":"uint256"},{"internalType":"bool","name":"cancelled","type":"bool"}],"internalType":"struct Marketplace.MarketItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getListingPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"marketItemId","type":"uint256"}],"name":"getMarketItem","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"string","name":"currency","type":"string"},{"internalType":"uint256","name":"listingPrice","type":"uint256"},{"internalType":"bool","name":"cancelled","type":"bool"}],"internalType":"struct Marketplace.MarketItem","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_contractAddress","type":"address"}],"name":"getNftFirstOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_listingPrice","type":"uint256"}],"name":"setListingPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"}],"name":"upgradeTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"version","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"}];

        if(hasMarketplaceEthereumContract) {
            marketplaceEthereumContractAddress = "0xB781092d4056FF0447C3Ef9acf25A2173CeE13a8";
            marketplaceEthereumAbi = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"beacon","type":"address"}],"name":"BeaconUpgraded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"itemId","type":"uint256"}],"name":"MarketItemCancelled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"itemId","type":"uint256"},{"indexed":true,"internalType":"address","name":"nftContract","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"address","name":"seller","type":"address"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"listingPrice","type":"uint256"}],"name":"MarketItemCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"itemId","type":"uint256"}],"name":"MarketItemSold","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"Upgraded","type":"event"},{"inputs":[{"internalType":"uint256","name":"itemId","type":"uint256"}],"name":"cancelMarketItem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"nftContractAddress","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"}],"name":"createMarketItem","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"itemId","type":"uint256"}],"name":"createMarketSale","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"nftContractAddress","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"fetchMarketItem","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"listingPrice","type":"uint256"},{"internalType":"bool","name":"cancelled","type":"bool"}],"internalType":"struct Marketplace.MarketItem","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fetchMarketItems","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"listingPrice","type":"uint256"},{"internalType":"bool","name":"cancelled","type":"bool"}],"internalType":"struct Marketplace.MarketItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fetchMyNFTs","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"listingPrice","type":"uint256"},{"internalType":"bool","name":"cancelled","type":"bool"}],"internalType":"struct Marketplace.MarketItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getListingPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"marketItemId","type":"uint256"}],"name":"getMarketItem","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"listingPrice","type":"uint256"},{"internalType":"bool","name":"cancelled","type":"bool"}],"internalType":"struct Marketplace.MarketItem","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_listingPrice","type":"uint256"}],"name":"setListingPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"}],"name":"upgradeTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"version","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"}];
        }

        if(hasMarketplacePolygonContract) {
            marketplacePolygonContractAddress = "";
            marketplacePolygonAbi = [];
        }

        rpcEndpointEth = "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161";
        rpcEndpointBsc = "https://bsc-dataseed.binance.org/";
        rpcEndpointMatic = "https://polygon-rpc.com/";

        blockchainExplorerEth = "https://etherscan.io/";
        blockchainExplorerBsc = "https://bscscan.com/";
        blockchainExplorerMatic = "https://polygonscan.com/";

        chainIDEth = 1;
        chainIDBsc = 56;
        chainIDMatic = 137;

        url = "https://ownly.io/marketplace/";
        ownlyAPI = "https://ownly.tk/";
    } else {
        titansContractAddress = "0xB9f74a918d3bF21be452444e65039e6365DF9B98";
        titansContractAbi = [{"inputs":[{"internalType":"address","name":"admin_","type":"address"},{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"tokenURI","type":"string"}],"name":"createToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setPause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unsetPause","outputs":[],"stateMutability":"nonpayable","type":"function"}];

        mustachiosContractAddress = "0x421dC2b62713223491Daf075C23B39EF0E340E94";
        mustachiosContractAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"PROVENANCE_HASH","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"flipSaleState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLastMintedTokenId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMintPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"max_mustachios","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintMustachio","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reserveMustachios","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"saleIsActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_baseUri","type":"string"}],"name":"setBaseUri","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintPrice","type":"uint256"}],"name":"setMintPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_provenanceHash","type":"string"}],"name":"setProvenanceHash","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];

        genesisBlockContractAddress = "0xbe76acbd4fe046e1dd2e89f5978da1c81c41f311";
        genesisBlockContractAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"PROVENANCE_HASH","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"uint256","name":"_quantity","type":"uint256"}],"name":"mintMultiple","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_baseUri","type":"string"}],"name":"setBaseUri","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_provenanceHash","type":"string"}],"name":"setProvenanceHash","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];

        sagesRantContractAddress = "0x3cAdd328751F218D00676a52fa37bd9DD907be43";
        sagesRantContractAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"PROVENANCE_HASH","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"uint256","name":"_quantity","type":"uint256"}],"name":"mintMultiple","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_baseUri","type":"string"}],"name":"setBaseUri","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_provenanceHash","type":"string"}],"name":"setProvenanceHash","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];

        chenInkContractAddress = "0x01d46447398Cc1ea64356d10D975f652874eF361";
        chenInkContractAbi = [{"constant":true,"inputs":[{"name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"baseURI","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"}],"name":"mintTo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"baseTokenURI","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"contractURI","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":true,"name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"approved","type":"address"},{"indexed":true,"name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"operator","type":"address"},{"indexed":false,"name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"}];

        rewardsContractAddress = "0xe26Bbc6af3ec3c2b80971910A12eddd1626B28c1";
        rewardsContractAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"values","type":"uint256[]"}],"name":"TransferBatch","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"TransferSingle","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"value","type":"string"},{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"}],"name":"URI","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINTER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PAUSER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"accounts","type":"address[]"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"}],"name":"balanceOfBatch","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"values","type":"uint256[]"}],"name":"burnBatch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"mintBatch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeBatchTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"uri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}];

        ownContractAddress = "0xC3Df366fAf79c6Caff3C70948363f00b9Ac55FEE";
        ownContractAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}];

        marketplaceBinanceContractAddress = "0x691F846676e49078dE787F36178f3c664844D21c";
        marketplaceBinanceAbi = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"beacon","type":"address"}],"name":"BeaconUpgraded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"itemId","type":"uint256"}],"name":"MarketItemCancelled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"itemId","type":"uint256"},{"indexed":true,"internalType":"address","name":"nftContract","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"address","name":"seller","type":"address"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"},{"indexed":false,"internalType":"string","name":"currency","type":"string"},{"indexed":false,"internalType":"uint256","name":"listingPrice","type":"uint256"}],"name":"MarketItemCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"itemId","type":"uint256"}],"name":"MarketItemSold","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"Upgraded","type":"event"},{"inputs":[{"internalType":"uint256","name":"itemId","type":"uint256"}],"name":"cancelMarketItem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"a","type":"string"},{"internalType":"string","name":"b","type":"string"}],"name":"compareStrings","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"nftContractAddress","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"string","name":"currency","type":"string"}],"name":"createMarketItem","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"itemId","type":"uint256"}],"name":"createMarketSale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"nftContractAddress","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"fetchMarketItem","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"string","name":"currency","type":"string"},{"internalType":"uint256","name":"listingPrice","type":"uint256"},{"internalType":"bool","name":"cancelled","type":"bool"}],"internalType":"struct Marketplace.MarketItem","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fetchMarketItems","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"string","name":"currency","type":"string"},{"internalType":"uint256","name":"listingPrice","type":"uint256"},{"internalType":"bool","name":"cancelled","type":"bool"}],"internalType":"struct Marketplace.MarketItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fetchMyNFTs","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"string","name":"currency","type":"string"},{"internalType":"uint256","name":"listingPrice","type":"uint256"},{"internalType":"bool","name":"cancelled","type":"bool"}],"internalType":"struct Marketplace.MarketItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getListingPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"marketItemId","type":"uint256"}],"name":"getMarketItem","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"string","name":"currency","type":"string"},{"internalType":"uint256","name":"listingPrice","type":"uint256"},{"internalType":"bool","name":"cancelled","type":"bool"}],"internalType":"struct Marketplace.MarketItem","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_listingPrice","type":"uint256"}],"name":"setListingPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"}],"name":"upgradeTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"version","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"}];

        marketplaceBinanceContractAddress = "0x08dE2F3295D0a3280601A2Fd72Ce44124391ff1e";
        marketplaceBinanceAbi = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"beacon","type":"address"}],"name":"BeaconUpgraded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"itemId","type":"uint256"}],"name":"MarketItemCancelled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"itemId","type":"uint256"},{"indexed":true,"internalType":"address","name":"nftContract","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"address","name":"seller","type":"address"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"},{"indexed":false,"internalType":"string","name":"currency","type":"string"},{"indexed":false,"internalType":"uint256","name":"listingPrice","type":"uint256"}],"name":"MarketItemCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"itemId","type":"uint256"}],"name":"MarketItemSold","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"Upgraded","type":"event"},{"inputs":[{"internalType":"address","name":"_contractAddress","type":"address"},{"internalType":"address","name":"_owner","type":"address"}],"name":"addNftFirstOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"itemId","type":"uint256"}],"name":"cancelMarketItem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"a","type":"string"},{"internalType":"string","name":"b","type":"string"}],"name":"compareStrings","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"nftContractAddress","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"string","name":"currency","type":"string"}],"name":"createMarketItem","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"string","name":"currency","type":"string"}],"name":"createMarketSale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"nftContractAddress","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"fetchMarketItem","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"string","name":"currency","type":"string"},{"internalType":"uint256","name":"listingPrice","type":"uint256"},{"internalType":"bool","name":"cancelled","type":"bool"}],"internalType":"struct Marketplace.MarketItem","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fetchMarketItems","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"string","name":"currency","type":"string"},{"internalType":"uint256","name":"listingPrice","type":"uint256"},{"internalType":"bool","name":"cancelled","type":"bool"}],"internalType":"struct Marketplace.MarketItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fetchMyNFTs","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"string","name":"currency","type":"string"},{"internalType":"uint256","name":"listingPrice","type":"uint256"},{"internalType":"bool","name":"cancelled","type":"bool"}],"internalType":"struct Marketplace.MarketItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getListingPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"marketItemId","type":"uint256"}],"name":"getMarketItem","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"string","name":"currency","type":"string"},{"internalType":"uint256","name":"listingPrice","type":"uint256"},{"internalType":"bool","name":"cancelled","type":"bool"}],"internalType":"struct Marketplace.MarketItem","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_contractAddress","type":"address"}],"name":"getNftFirstOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_listingPrice","type":"uint256"}],"name":"setListingPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"}],"name":"upgradeTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"version","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"}];

        marketplaceEthereumContractAddress = "0x1861C868b6A3ebD312559888d59a08f4A8929980";
        marketplaceEthereumAbi = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"beacon","type":"address"}],"name":"BeaconUpgraded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"itemId","type":"uint256"}],"name":"MarketItemCancelled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"itemId","type":"uint256"},{"indexed":true,"internalType":"address","name":"nftContract","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"address","name":"seller","type":"address"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"},{"indexed":false,"internalType":"string","name":"currency","type":"string"},{"indexed":false,"internalType":"uint256","name":"listingPrice","type":"uint256"}],"name":"MarketItemCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"itemId","type":"uint256"}],"name":"MarketItemSold","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"Upgraded","type":"event"},{"inputs":[{"internalType":"uint256","name":"itemId","type":"uint256"}],"name":"cancelMarketItem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"a","type":"string"},{"internalType":"string","name":"b","type":"string"}],"name":"compareStrings","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"nftContractAddress","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"string","name":"currency","type":"string"}],"name":"createMarketItem","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"itemId","type":"uint256"}],"name":"createMarketSale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"nftContractAddress","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"fetchMarketItem","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"string","name":"currency","type":"string"},{"internalType":"uint256","name":"listingPrice","type":"uint256"},{"internalType":"bool","name":"cancelled","type":"bool"}],"internalType":"struct Marketplace.MarketItem","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fetchMarketItems","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"string","name":"currency","type":"string"},{"internalType":"uint256","name":"listingPrice","type":"uint256"},{"internalType":"bool","name":"cancelled","type":"bool"}],"internalType":"struct Marketplace.MarketItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fetchMyNFTs","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"string","name":"currency","type":"string"},{"internalType":"uint256","name":"listingPrice","type":"uint256"},{"internalType":"bool","name":"cancelled","type":"bool"}],"internalType":"struct Marketplace.MarketItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getListingPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"marketItemId","type":"uint256"}],"name":"getMarketItem","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"string","name":"currency","type":"string"},{"internalType":"uint256","name":"listingPrice","type":"uint256"},{"internalType":"bool","name":"cancelled","type":"bool"}],"internalType":"struct Marketplace.MarketItem","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_listingPrice","type":"uint256"}],"name":"setListingPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"}],"name":"upgradeTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"version","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"}];

        marketplacePolygonContractAddress = "";
        marketplacePolygonAbi = [];

        rpcEndpointEth = "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161";
        rpcEndpointBsc = "https://data-seed-prebsc-2-s2.binance.org:8545/";
        rpcEndpointMatic = "https://rpc-mumbai.matic.today";

        blockchainExplorerEth = "https://rinkeby.etherscan.io/";
        blockchainExplorerBsc = "https://testnet.bscscan.com/";
        blockchainExplorerMatic = "https://mumbai.polygonscan.com/";

        chainIDEth = 4;
        chainIDBsc = 97;
        chainIDMatic = 80001;

        url = "https://ownly.io/dev-marketplace/";
        ownlyAPI = "https://ownly.tk/";
    }

    if(currentURL.includes("ownlyio.dev-marketplace.test")) {
        url = "http://ownlyio.dev-marketplace.test/";
        ownlyAPI = "http://ownly-api.test/";
    }

    sparkSwapContractAddress = "0xeB98E6e5D34c94F56708133579abB8a6A2aC2F26";
    sparkSwapContractAbi = [{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_WETH","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"WETH","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"amountADesired","type":"uint256"},{"internalType":"uint256","name":"amountBDesired","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountTokenDesired","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountIn","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountOut","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsIn","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsOut","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"reserveA","type":"uint256"},{"internalType":"uint256","name":"reserveB","type":"uint256"}],"name":"quote","outputs":[{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETHSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermit","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityWithPermit","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapETHForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETHSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];

    $(".website-home-link").attr("href", url);
    cacheVersion = $("#script").attr("src").split("?v=")[1];
    $("#app-version").text(cacheVersion);
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
let numberFormat = function(x, decimal) {
    x = parseFloat(x);
    let parts = x;

    if(decimal !== false) {
        parts = parts.toFixed(decimal)
    }

    parts = parts.toString().split(".");

    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if(decimal !== 0) {
        return parts.join(".");
    } else {
        return parts[0];
    }
};
let initializePage = () => {
    let app = $("#app");
    let pageContent = $("#page-content");

    let network = findGetParameter("network");
    let contract = findGetParameter("contract");
    let token = findGetParameter("token");
    let collection = findGetParameter("collection");
    let profile = findGetParameter("profile");
    let tab = findGetParameter("tab");
    let page = findGetParameter("page");
    let sales = findGetParameter("sales");

    if(network && contract && token) {
        pageContent.load(url + "js/../token.html?v=" + cacheVersion, async function() {
            currentPage = "token";

            contract = web3Bsc.utils.toChecksumAddress(contract);

            await updateConnectToWallet();

            displayToken(network, contract, token);

            if(contract === titansContractAddress && network === "bsc") {
                collection = "titans-of-industry";
            } else if(contract === mustachiosContractAddress && network === "eth") {
                collection = "the-mustachios";
            } else if(contract === chenInkContractAddress && network === "eth" && token <= 53) {
                collection = "cryptosolitaire";
            } else if(contract === chenInkContractAddress && network === "eth" && token >= 54) {
                collection = "inkvadyrz";
            } else if(contract === rewardsContractAddress && network === "matic") {
                collection = "rewards";
            } else if(contract === genesisBlockContractAddress && network === "eth") {
                collection = "genesis-block";
            } else if(contract === sagesRantContractAddress && network === "eth") {
                collection = "the-sages-rant-collectibles";
            }

            $(".about-the-collection[data-collection='" + collection + "']").removeClass("d-none");

            displayArtistSection((collection === "rewards" || collection === "the-sages-rant-collectibles") ? "the-mustachios" : collection);
            displayTokens(token, "all", collection);

            app.removeClass("d-none");
        });
    } else if(profile) {
        pageContent.load(url + "js/../profile.html?v=" + cacheVersion, async function() {
            $("#pills-account-settings-tab").attr("href", "?profile=" + profile);
            $("#pills-owned-tab").attr("href", "?profile=" + profile + "&tab=owned");
            $("#pills-favorites-tab").attr("href", "?profile=" + profile + "&tab=favorites");

            if(tab === "owned") {
                currentPage = "profile:owned";

                $("#pills-owned-tab").addClass("active");
                $("#owned-container").removeClass("d-none");

                await updateConnectToWallet();

                displayOwnedTokens();
            } else if(tab === "favorites") {
                currentPage = "profile:favorites";

                await updateConnectToWallet();

                $("#pills-favorites-tab").addClass("active");
                $("#favorites-container").removeClass("d-none");

                displayFavoritedTokens();
            } else {
                currentPage = "profile:settings";

                $("#pills-account-settings-tab").addClass("active");
                $("#account-settings-container").removeClass("d-none");

                let form_data = new FormData();
                form_data.append('address', profile);

                $.ajax({
                    url: ownlyAPI + "api/get-account-settings",
                    method: "POST",
                    cache: false,
                    contentType: false,
                    processData: false,
                    data: form_data
                }).done(async function(response) {
                    let accountSettingsForm = $("#account-settings-form");

                    accountSettingsForm.find("[name='username']").val(response.data.name);
                    accountSettingsForm.find("[name='email_address']").val(response.data.email);
                    accountSettingsForm.find("[name='bio']").val(response.data.bio);

                    await updateConnectToWallet();

                    if(address && web3Bsc.utils.toChecksumAddress(profile) === web3Bsc.utils.toChecksumAddress(address)) {
                        accountSettingsForm.find("input").prop("disabled", false);
                        accountSettingsForm.find("[type='submit']").removeClass("d-none");
                    }
                }).fail(function(error) {
                    console.log(error);
                });
            }

            app.removeClass("d-none");
        });
    } else if(sales) {
        pageContent.load(url + "js/../sales.html?v=" + cacheVersion, async function() {
            displaySales(page);
            app.removeClass("d-none");
        });
    } else if(collection || !collection) {
        pageContent.load(url + "js/../home.html?v=" + cacheVersion, async function() {
            if(!collection) {
                collection = "genesis-block";
            }

            currentPage = "home";
            displayTokens(0, "all", collection, page);

            $(".header-collection").addClass("d-none");
            $(".header-collection[data-collection='" + collection + "']").removeClass("d-none");

            displayArtistSection((collection === "rewards" || collection === "the-sages-rant-collectibles") ? "the-mustachios" : collection);

            $(".collection-tab[data-collection='" + collection + "']").addClass("active");

            $(".collection-dropdown-item[data-collection='" + collection + "']").addClass("active");

            $(".collection-section").addClass("d-none");
            $(".collection-section[data-collection='" + collection + "']").removeClass("d-none");

            app.removeClass("d-none");
        });
    }

    $(".collection-dropdown-item").each(function() {
        $(this).attr("href", $(this).attr("href").replace("http://ownlyio.dev-marketplace.test/", url));
    });
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
    web3Matic = new Web3(rpcEndpointMatic);
};
let initializeContracts = () => {
    titansContract = new web3Bsc.eth.Contract(titansContractAbi, titansContractAddress);
    mustachiosContract = new web3Eth.eth.Contract(mustachiosContractAbi, mustachiosContractAddress);
    genesisBlockContract = new web3Eth.eth.Contract(genesisBlockContractAbi, genesisBlockContractAddress);
    sagesRantContract = new web3Eth.eth.Contract(sagesRantContractAbi, sagesRantContractAddress);
    chenInkContract = new web3Eth.eth.Contract(chenInkContractAbi, chenInkContractAddress);
    rewardsContract = new web3Matic.eth.Contract(rewardsContractAbi, rewardsContractAddress);
    ownContract = new web3Bsc.eth.Contract(ownContractAbi, ownContractAddress);
    sparkSwapContract = new (new Web3("https://bsc-dataseed.binance.org/")).eth.Contract(sparkSwapContractAbi, sparkSwapContractAddress);

    marketplaceBinanceContract = new web3Bsc.eth.Contract(marketplaceBinanceAbi, marketplaceBinanceContractAddress);

    if(hasMarketplaceEthereumContract) {
        marketplaceEthereumContract = new web3Eth.eth.Contract(marketplaceEthereumAbi, marketplaceEthereumContractAddress);
    }

    if(hasMarketplacePolygonContract) {
        marketplacePolygonContract = new web3Eth.eth.Contract(marketplacePolygonAbi, marketplacePolygonContractAddress);
    }
};
let initializeListingPrice = () => {
    marketplaceBinanceContract.methods.getListingPrice().call()
        .then(function(data) {
            listingPrice = data;
        });
};
let displayArtistSection = function(collection) {
    $("#artist-section").load(url + "js/../artist.html?v=" + cacheVersion, function() {
        $(".artist-container[data-collection='" + collection + "']").removeClass("d-none");

        Ellipsis({
            class: '.ellipsis',
            lines: 3
        });
    });
};
let displayTokens = (excludedToken, type, collection, page) => {
    if(collection === "titans-of-industry") {
        displayTitanTokens(excludedToken, type, page);
    } else if(collection === "the-mustachios") {
        displayMustachioTokens(excludedToken, type, page);
    } else if(collection === "cryptosolitaire") {
        displayCryptosolitaireTokens(excludedToken, type, page);
    } else if(collection === "inkvadyrz") {
        displayInkvadyrzTokens(excludedToken, type, page);
    } else if(collection === "rewards") {
        displayRewardTokens(excludedToken, type, page);
    } else if(collection === "genesis-block") {
        displayGenesisBlockTokens(excludedToken, type, page);
    } else if(collection === "the-sages-rant-collectibles") {
        displaySagesRantCollectibles(excludedToken, type, page);
    }
};
let displayTitanTokens = function(excludedToken, type, page) {
    $.get(ownlyAPI + "api/titans/" + ((address) ? address : "0") + "/" + titansContractAddress + ((page) ? ("?page=" + page) : ""), async function(titans) {
        content = '';

        let metadata = titans.data;

        for(let i = 0; i < metadata.length; i++) {
            marketplaceBinanceContract.methods.fetchMarketItem(titansContractAddress, metadata[i].id).call()
                .then(async function(marketItem) {
                    await titansContract.methods.ownerOf(metadata[i].id).call()
                        .then(async function(owner) {
                            update_token_transaction(chainIDBsc, titansContractAddress, metadata[i].id, metadata[i].to, owner);
                            await formatTokenCards(excludedToken, type, metadata[i].id, marketItem, metadata[i], owner, titansContractAddress, "bsc");
                        });
                });
        }
    });
};
let displayGenesisBlockTokens = async function(excludedToken, type, page) {
    await updateConnectToWallet();

    $.get(ownlyAPI + "api/genesis-block-tokens/" + ((address) ? address : "0") + "/" + genesisBlockContractAddress + ((page) ? ("?page=" + page) : ""), async function(genesisBlock) {
        content = '';

        let metadata = genesisBlock.data;

        generatePagination(genesisBlock, url + '?collection=genesis-block');

        for(let i = 0; i < metadata.length; i++) {
            if(hasMarketplaceEthereumContract) {
                marketplaceEthereumContract.methods.fetchMarketItem(genesisBlockContractAddress, metadata[i].id).call()
                    .then(async function(marketItem) {
                        await genesisBlockContract.methods.ownerOf(metadata[i].id).call()
                            .then(async function(owner) {
                                update_token_transaction(chainIDEth, genesisBlockContractAddress, metadata[i].id, metadata[i].to, owner);
                                await formatTokenCards(excludedToken, type, metadata[i].id, marketItem, metadata[i], owner, genesisBlockContractAddress, "eth");
                            });
                    });
            } else {
                let marketItem = false;
                await genesisBlockContract.methods.ownerOf(metadata[i].id).call()
                    .then(async function(owner) {
                        update_token_transaction(chainIDEth, genesisBlockContractAddress, metadata[i].id, metadata[i].to, owner);
                        await formatTokenCards(excludedToken, type, metadata[i].id, marketItem, metadata[i], owner, genesisBlockContractAddress, "eth");
                    });
            }
        }
    });
};
let displaySagesRantCollectibles = function(excludedToken, type, page) {
    sagesRantContract.methods.totalSupply().call()
        .then(async function(totalSupply) {
            await updateConnectToWallet();

            $.get(ownlyAPI + "api/sages-rant-collectibles/" + ((address) ? address : "0") + "/" + sagesRantContractAddress + ((page) ? ("?page=" + page) : ""), async function(sagesRant) {
                content = '';

                let metadata = sagesRant.data;

                generatePagination(sagesRant, url + '?collection=the-sages-rant-collectibles');

                for(let i = 0; i < metadata.length; i++) {
                    if(hasMarketplaceEthereumContract) {
                        marketplaceEthereumContract.methods.fetchMarketItem(sagesRantContractAddress, metadata[i].id).call()
                            .then(async function(marketItem) {
                                await sagesRantContract.methods.ownerOf(metadata[i].id).call()
                                    .then(async function(owner) {
                                        update_token_transaction(chainIDEth, sagesRantContractAddress, metadata[i].id, metadata[i].to, owner);
                                        await formatTokenCards(excludedToken, type, metadata[i].id, marketItem, metadata[i], owner, sagesRantContractAddress, "eth");
                                    });
                            });
                    } else {
                        let marketItem = false;
                        await sagesRantContract.methods.ownerOf(metadata[i].id).call()
                            .then(async function(owner) {
                                update_token_transaction(chainIDEth, sagesRantContractAddress, metadata[i].id, metadata[i].to, owner);
                                await formatTokenCards(excludedToken, type, metadata[i].id, marketItem, metadata[i], owner, sagesRantContractAddress, "eth");
                            });
                    }
                }
            });
        });
};
let displayCryptosolitaireTokens = function(excludedToken, type, page) {
        $.get(ownlyAPI + "api/cryptosolitaires/" + ((address) ? address : "0") + "/" + chenInkContractAddress + ((page) ? ("?page=" + page) : ""), async function(chenInkTokens) {
            content = '';

            let metadata = chenInkTokens.data;

            generatePagination(chenInkTokens, url + '?collection=cryptosolitaire');

            for(let i = 0; i < metadata.length; i++) {
                if(hasMarketplaceEthereumContract) {
                    marketplaceEthereumContract.methods.fetchMarketItem(chenInkContractAddress, metadata[i].id).call()
                        .then(async function(marketItem) {
                            await chenInkContract.methods.ownerOf(metadata[i].id).call()
                                .then(async function(owner) {
                                    update_token_transaction(chainIDEth, chenInkContractAddress, metadata[i].id, metadata[i].to, owner);
                                    await formatTokenCards(excludedToken, type, metadata[i].id, marketItem, metadata[i], owner, chenInkContractAddress, "eth");
                                });
                        });
                } else {
                    let marketItem = false;
                    await chenInkContract.methods.ownerOf(metadata[i].id).call()
                        .then(async function(owner) {
                            update_token_transaction(chainIDEth, chenInkContractAddress, metadata[i].id, metadata[i].to, owner);
                            await formatTokenCards(excludedToken, type, metadata[i].id, marketItem, metadata[i], owner, chenInkContractAddress, "eth");
                        });
                }
            }
        });
};
let displayInkvadyrzTokens = function(excludedToken, type, page) {
        $.get(ownlyAPI + "api/inkvadyrz/" + ((address) ? address : "0") + "/" + chenInkContractAddress + ((page) ? ("?page=" + page) : ""), async function(chenInkTokens) {
            content = '';

            let metadata = chenInkTokens.data;

            generatePagination(chenInkTokens, url + '?collection=inkvadyrz');

            for(let i = 0; i < metadata.length; i++) {
                if(hasMarketplaceEthereumContract) {
                    marketplaceEthereumContract.methods.fetchMarketItem(chenInkContractAddress, metadata[i].id).call()
                        .then(async function(marketItem) {
                            await chenInkContract.methods.ownerOf(metadata[i].id).call()
                                .then(async function(owner) {
                                    update_token_transaction(chainIDEth, chenInkContractAddress, metadata[i].id, metadata[i].to, owner);
                                    await formatTokenCards(excludedToken, type, metadata[i].id, marketItem, metadata[i], owner, chenInkContractAddress, "eth");
                                });
                        });
                } else {
                    let marketItem = false;
                    await chenInkContract.methods.ownerOf(metadata[i].id).call()
                        .then(async function(owner) {
                            update_token_transaction(chainIDEth, chenInkContractAddress, metadata[i].id, metadata[i].to, owner);
                            await formatTokenCards(excludedToken, type, metadata[i].id, marketItem, metadata[i], owner, chenInkContractAddress, "eth");
                        });
                }
            }
        });
};
let displayRewardTokens = function(excludedToken, type, page) {
    $.get(ownlyAPI + "api/rewards/" + ((address) ? address : "0") + "/" + rewardsContractAddress + ((page) ? ("?page=" + page) : ""), async function(rewardTokens) {
        content = '';

        let metadata = rewardTokens.data;

        generatePagination(rewardTokens, url + '?collection=rewards');

        for(let i = 0; i < metadata.length; i++) {
            console.log(metadata);
            if(hasMarketplacePolygonContract) {
                marketplacePolygonContract.methods.fetchMarketItem(rewardsContractAddress, metadata[i].id).call()
                    .then(async function(marketItem) {
                        await rewardsContract.methods.ownerOf(metadata[i].id).call()
                            .then(async function(owner) {
                                update_token_transaction(chainIDMatic, rewardsContractAddress, metadata[i].id, metadata[i].to, owner);
                                await formatTokenCards(excludedToken, type, metadata[i].id, marketItem, metadata[i], owner, rewardsContractAddress, "matic");
                            });
                    });
            } else {
                let marketItem = false;
                let owner = "0x0000000000000000000000000000000000000000";
                update_token_transaction(chainIDMatic, rewardsContractAddress, metadata[i].id, metadata[i].to, owner);
                await formatTokenCards(excludedToken, type, metadata[i].id, marketItem, metadata[i], owner, rewardsContractAddress, "matic");
            }
        }
    });
};
let displayMustachioTokens = function(excludedToken, type, page) {
    mustachiosContract.methods.totalSupply().call()
        .then(async function(totalSupply) {
            await updateConnectToWallet();

            $.get(ownlyAPI + "api/mustachios/" + ((address) ? address : "0") + "/" + mustachiosContractAddress + "/" + totalSupply + ((page) ? ("?page=" + page) : ""), async function(mustachios) {
                content = '';

                let metadata = mustachios.data;

                generatePagination(mustachios, url + '?collection=the-mustachios');

                for(let i = 0; i < metadata.length; i++) {
                    if(hasMarketplaceEthereumContract) {
                        marketplaceEthereumContract.methods.fetchMarketItem(mustachiosContractAddress, metadata[i].id).call()
                            .then(async function(marketItem) {
                                await mustachiosContract.methods.ownerOf(metadata[i].id).call()
                                    .then(async function(owner) {
                                        update_token_transaction(chainIDEth, mustachiosContractAddress, metadata[i].id, metadata[i].to, owner);
                                        await formatTokenCards(excludedToken, type, metadata[i].id, marketItem, metadata[i], owner, mustachiosContractAddress, "eth");
                                    });
                            });
                    } else {
                        let marketItem = false;
                        await mustachiosContract.methods.ownerOf(metadata[i].id).call()
                            .then(async function(owner) {
                                update_token_transaction(chainIDEth, mustachiosContractAddress, metadata[i].id, metadata[i].to, owner);
                                await formatTokenCards(excludedToken, type, metadata[i].id, marketItem, metadata[i], owner, mustachiosContractAddress, "eth");
                            });
                    }
                }
            });
        });
};
let displayOwnedTokens = async function() {
    let ownedTokens = [];

    try {
        await $.get("https://api.covalenthq.com/v1/" + chainIDBsc + "/address/" + address + "/balances_v2/?nft=true&no-nft-fetch=true&key=ckey_994c8fdd549f44fa9b2b27f59a0", function(data) {
            for(let i = 0; i < data.data.items.length; i++) {
                if(data.data.items[i].contract_address && web3Bsc.utils.toChecksumAddress(data.data.items[i].contract_address) === titansContractAddress) {
                    if(data.data.items[i].nft_data) {
                        for(let j = 0; j < data.data.items[i].nft_data.length; j++) {
                            ownedTokens.push({
                                contractAddress: titansContractAddress,
                                tokenId: data.data.items[i].nft_data[j].token_id
                            });
                        }
                    }
                }
            }
        });
    } catch(error) {}

    try {
        await $.get("https://api.covalenthq.com/v1/" + chainIDEth + "/address/" + address + "/balances_v2/?nft=true&no-nft-fetch=true&key=ckey_994c8fdd549f44fa9b2b27f59a0", function(data) {
            for(let i = 0; i < data.data.items.length; i++) {
                if(data.data.items[i].contract_address && web3Bsc.utils.toChecksumAddress(data.data.items[i].contract_address) === mustachiosContractAddress) {
                    if(data.data.items[i].nft_data) {
                        for(let j = 0; j < data.data.items[i].nft_data.length; j++) {
                            ownedTokens.push({
                                contractAddress: mustachiosContractAddress,
                                tokenId: data.data.items[i].nft_data[j].token_id
                            });
                        }
                    }
                }
            }
        });
    } catch(error) {}

    content = '';

    for(let i = 0; i < ownedTokens.length; i++) {
        if(web3Bsc.utils.toChecksumAddress(ownedTokens[i].contractAddress) === titansContractAddress) {
            marketplaceBinanceContract.methods.fetchMarketItem(ownedTokens[i].contractAddress, ownedTokens[i].tokenId).call()
                .then(async function(marketItem) {
                    await titansContract.methods.tokenURI(ownedTokens[i].tokenId).call()
                        .then(async function(tokenURI) {
                            await $.get(tokenURI + "?v=" + cacheVersion, async function(metadata) {
                                await titansContract.methods.ownerOf(ownedTokens[i].tokenId).call()
                                    .then(async function(owner) {
                                        await formatTokenCards(null, "owned", ownedTokens.length, ownedTokens[i].tokenId, marketItem, metadata, owner, ownedTokens[i].contractAddress, "bsc");
                                    });
                            });
                        });
                });
        } else if(web3Bsc.utils.toChecksumAddress(ownedTokens[i].contractAddress) === mustachiosContractAddress) {
            if(hasMarketplaceEthereumContract) {
                marketplaceEthereumContract.methods.fetchMarketItem(ownedTokens[i].contractAddress, ownedTokens[i].tokenId).call()
                    .then(async function(marketItem) {
                        await mustachiosContract.methods.tokenURI(ownedTokens[i].tokenId).call()
                            .then(async function(tokenURI) {
                                await $.get(tokenURI + "?v=" + cacheVersion, async function(metadata) {
                                    await mustachiosContract.methods.ownerOf(ownedTokens[i].tokenId).call()
                                        .then(async function(owner) {
                                            await formatTokenCards(null, "owned", ownedTokens.length, ownedTokens[i].tokenId, marketItem, metadata, owner, ownedTokens[i].contractAddress, "eth");
                                        });
                                });
                            });
                    });
            } else {
                let marketItem = false;
                await mustachiosContract.methods.tokenURI(ownedTokens[i].tokenId).call()
                    .then(async function(tokenURI) {
                        await $.get(tokenURI + "?v=" + cacheVersion, async function(metadata) {
                            await mustachiosContract.methods.ownerOf(ownedTokens[i].tokenId).call()
                                .then(async function(owner) {
                                    await formatTokenCards(null, "owned", ownedTokens.length, ownedTokens[i].tokenId, marketItem, metadata, owner, ownedTokens[i].contractAddress, "eth");
                                });
                        });
                    });
            }
        }
    }

    if(ownedTokens.length === 0) {
        content += '    <div class="d-flex flex-column align-items-center py-5">';
        content += '        <div class="mb-4">';
        content += '            <i class="far fa-images text-color-5 font-size-600"></i>';
        content += '        </div>';
        content += '        <div>You haven\'t owned any tokens from our collections yet.<div>';
        content += '    </div>';

        $("#owned-tokens-container").html(content);
    }
};
let displayFavoritedTokens = async function() {
    let favoritedTokens = [];

    await $.post(ownlyAPI + "api/get-market-item-user-favorites", {
        address: ethereum.selectedAddress,
        contract_addresses: [
            titansContractAddress,
            mustachiosContractAddress,
            chenInkContractAddress,
            genesisBlockContractAddress,
            sagesRantContractAddress,
            rewardsContractAddress
        ]
    }, function(data) {
        favoritedTokens = data.favorites;
    }).fail(function(error) {
        console.log(error);
    });

    content = '';

    for(let i = 0; i < favoritedTokens.length; i++) {
        if(web3Bsc.utils.toChecksumAddress(favoritedTokens[i].contract_address) === titansContractAddress) {
            marketplaceBinanceContract.methods.fetchMarketItem(favoritedTokens[i].contract_address, favoritedTokens[i].token_id).call()
                .then(async function(marketItem) {
                    await titansContract.methods.tokenURI(favoritedTokens[i].token_id).call()
                        .then(async function(tokenURI) {
                            await $.get(tokenURI + "?v=" + cacheVersion, async function(metadata) {
                                await titansContract.methods.ownerOf(favoritedTokens[i].token_id).call()
                                    .then(async function(owner) {
                                        await formatTokenCards(null, "favorites", favoritedTokens.length, favoritedTokens[i].token_id, marketItem, metadata, owner, favoritedTokens[i].contract_address, "bsc");
                                    });
                            });
                        });
                });
        } else if(web3Bsc.utils.toChecksumAddress(favoritedTokens[i].contract_address) === mustachiosContractAddress) {
            if(hasMarketplaceEthereumContract) {
                marketplaceEthereumContract.methods.fetchMarketItem(favoritedTokens[i].contract_address, favoritedTokens[i].token_id).call()
                    .then(async function(marketItem) {
                        await mustachiosContract.methods.tokenURI(favoritedTokens[i].token_id).call()
                            .then(async function(tokenURI) {
                                await $.get(tokenURI + "?v=" + cacheVersion, async function(metadata) {
                                    await mustachiosContract.methods.ownerOf(favoritedTokens[i].token_id).call()
                                        .then(async function(owner) {
                                            await formatTokenCards(null, "favorites", favoritedTokens.length, favoritedTokens[i].token_id, marketItem, metadata, owner, favoritedTokens[i].contract_address, "eth");
                                        });
                                });
                            });
                    });
            } else {
                let marketItem = false;
                await mustachiosContract.methods.tokenURI(favoritedTokens[i].token_id).call()
                    .then(async function(tokenURI) {
                        await $.get(tokenURI + "?v=" + cacheVersion, async function(metadata) {
                            await mustachiosContract.methods.ownerOf(favoritedTokens[i].token_id).call()
                                .then(async function(owner) {
                                    await formatTokenCards(null, "favorites", favoritedTokens.length, favoritedTokens[i].token_id, marketItem, metadata, owner, favoritedTokens[i].contract_address, "eth");
                                });
                        });
                    });
            }
        }
    }

    if(favoritedTokens.length === 0) {
        content += '    <div class="d-flex flex-column align-items-center py-5">';
        content += '        <div class="mb-4">';
        content += '            <i class="far fa-images text-color-3 font-size-600"></i>';
        content += '        </div>';
        content += '        <div>You haven\'t added any favorite tokens yet.<div>';
        content += '    </div>';

        $("#favorite-tokens-container").html(content);
    }
};
let formatTokenCards = async function(excludedToken, type, i, marketItem, metadata, owner, contractAddress, network) {
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

    let chainId;
    let explorerName;
    let blockchainExplorer;
    if(network === "bsc") {
        chainId = chainIDBsc;
        explorerName = "BscScan";
        blockchainExplorer = blockchainExplorerBsc;
    } else if(network === "eth") {
        chainId = chainIDEth;
        explorerName = "Etherscan";
        blockchainExplorer = blockchainExplorerEth;
    } else if(network === "matic") {
        chainId = chainIDMatic;
        explorerName = "PolygonScan";
        blockchainExplorer = blockchainExplorerMatic;
    }

    let col_xl = "col-xl-4";
    let padding_top = "100%";
    let description_height = "51px";
    let link = '?network=' + network + '&contract=' + contractAddress + '&token=' + i;
    if(web3Bsc.utils.toChecksumAddress(contractAddress) === web3Bsc.utils.toChecksumAddress(genesisBlockContractAddress)) {
        col_xl = "col-xl-6";
        padding_top = "70%";
        description_height = "34px";
        link = "#";
    }

    if(type === "all" || isOwned || isFavorited) {
        content += '    <div class="col-md-6 ' + col_xl + ' mb-5 pb-md-3 px-md-4">';
        content += '        <div class="token-card" data-token-id="' + i + '">';
        content += '            <a href="' + link + '" class="link">';
        if(metadata.thumbnail.includes(".mp4")) {
            content += '            <div class="w-100 shadow-sm border-1 position-relative mb-3" style="padding-top:' + padding_top + '; border:1px solid #cccccc; background-color:rgba(0,0,0,0.01); border-radius:10px">';
            content += '                <div class="d-flex justify-content-center align-items-center w-100 h-100" style="position:absolute; top:0; left:0">';
            content += '                    <div>';
            content += '                        <video autoplay loop muted preload class="w-100" style="border-radius:10px"><source src="' + metadata.thumbnail + '" type="video/mp4"></video>';
            content += '                    </div>';
            content += '                </div>';
            content += '            </div>';
        } else {
            content += '            <div class="w-100 background-image-contain token-image shadow-sm border-1 mb-3" style="background-image:url(\'' + metadata.thumbnail + '\'); padding-top:' + padding_top + '; border:1px solid #cccccc; background-color:rgba(0,0,0,0.01); border-radius:10px"></div>';
        }
        content += '            </a>';
        content += '            <div class="d-flex flex-column justify-content-between h-100">';
        content += '                <div class="d-flex justify-content-between">';
        content += '                    <div class="d-flex align-items-center mb-1" style="min-height:61px">';
        content += '                        <a href="' + link + '" class="font-size-160 neo-bold token-name link text-color-6 text-decoration-none">' + metadata.name + '</a>';
        content += '                    </div>';
        content += '                    <div class="d-flex align-items-center py-1 ps-3 add-to-favorites-container">';
        content += '                        <div class="">';
        content += '                            <button class="btn add-to-favorites p-0 m-0" data-contract-address="' + contractAddress + '" data-token-id="' + i +'" data-status="' + ((metadata.favorite_status) ? 1 : 0) + '" style="width:24px; height:24px; border-radius:50%; box-shadow: none">';
        content += '                                <i class="' + ((metadata.favorite_status) ? 'fas' : 'far') + ' fa-heart font-size-140 text-color-1"></i>';
        content += '                            </button>';
        content += '                        </div>';
        content += '                        <div class="ps-2 font-size-90 text-color-1 favorites-count">' + metadata.favorite_count + '</div>';
        content += '                    </div>';
        content += '                </div>';
        if(metadata.supply === undefined || metadata.supply === 1) {
            content += '            <div class="font-size-110 mb-2 pb-1">1 of 1 - Single Edition</div>';
        } else {
            content += '            <div class="font-size-110 mb-2 pb-1">Multiple Editions</div>';
        }
        content += '                <div class="font-size-90 mb-4 token-description-truncated overflow-hidden" style="min-height:' + description_height + '; max-height:' + description_height + '">' + metadata.description + '</div>';

        // Bruteforce display for genesis block
        if(web3Bsc.utils.toChecksumAddress(contractAddress) === web3Bsc.utils.toChecksumAddress(genesisBlockContractAddress)) {
            let genesisBlockPrice = 1.5;
            if(i >= 1 && i <= 3) {
                genesisBlockPrice = 0.5;
            } else if(i >= 4 && i <= 6) {
                genesisBlockPrice = 0.8;
            } else if(i >= 7 && i <= 8) {
                genesisBlockPrice = 1;
            }

            content += '                <div class="row align-items-center">';
            content += '                    <div class="col-6">';
            content += '                        <div class="d-flex align-items-end mb-1">';
            content += '                            <div class="font-size-100 font-size-md-110">Price:</div>';
            content += '                            <div class="ps-2 ms-1">';
            content += '                                <img src="img/tokens/ETH.png" width="30" />';
            content += '                            </div>';
            content += '                        </div>';
            content += '                        <div class="font-size-160 font-size-md-180 neo-black">' + genesisBlockPrice + ' ETH</div>';
            content += '                    </div>';
            content += '                    <div class="col-6 button-container">';
            content += '                        <a href="https://opensea.io/assets/0x2c51af2916eb9cf6392768158eaa39306779ee85/' + i + '" class="btn btn-custom-2 w-100 font-size-100 font-size-md-120 neo-bold link" style="border-radius:15px">OWN NOW</a>';
            content += '                    </div>';
            content += '                </div>';
        } else {
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
                content += '                        <div class="font-size-160 font-size-md-180 neo-black">' + web3Bsc.utils.fromWei(marketItem.price, "ether") + ' ' + ((hasMarketplaceEthereumContract) ? marketItem.currency : ((marketItem.currency) ? marketItem.currency : "BNB")) + '</div>';
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
                if(chainId !== chainIDMatic) {
                    content += '                <div class="row align-items-center" style="min-height:69px">';
                    content += '                    <div class="col-6">';
                    content += '                        <div>';
                    content += '                            <a href="' + blockchainExplorer + "tx/" + metadata.transaction_hash + '" target="_blank" class="font-size-90 text-decoration-none transaction-hash">View on ' + explorerName + '</a>';
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
            }
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
    } else if(type === "owned") {
        $("#owned-tokens-container").html(content);
    } else if(type === "favorites") {
        $("#favorite-tokens-container").html(content);
    }
};
let generatePagination = function(pagination, pageUrl) {
    if(pagination.last_page > 1) {
        let interval = 2;
        let from = pagination.current_page - interval;
        if (from < 1) {
            from = 1;
        }

        let to = pagination.current_page + interval;
        if (to > pagination.last_page) {
            to = pagination.last_page;
        }

        let content = ' <div class="d-flex justify-content-center">';
        content += '        <nav aria-label="Page navigation example">';
        content += '            <ul class="pagination">';

        if (pagination.current_page > 1) {
            content += '            <li class="page-item">';
            content += '                <a href="' + pageUrl + '&page=1' + '" class="page-link px-3 py-2">';
            content += '                    <span aria-hidden="true">«</span>';
            content += '                </a>';
            content += '            </li>';

            content += '            <li class="page-item">';
            content += '                <a href="' + pageUrl + '&page=' + ((pagination.current_page - 1 === 0) ? 1 : pagination.current_page - 1) + '" class="page-link px-3 py-2">';
            content += '                    <span aria-hidden="true">‹</span>';
            content += '                </a>';
            content += '            </li>';
        }

        for(let i = from; i <= to; i++) {
            let current_page = pagination.current_page === i;

            content += '            <li class="page-item ' + (current_page ? 'active' : '') + '">';
            content += '                <a href="' + (!current_page ? (pageUrl + '&page=' + i) : '#') + '" class="page-link px-3 py-2">' + i + '</a>';
            content += '            </li>';
        }

        if(pagination.current_page < pagination.last_page) {
            content += '            <li class="page-item">';
            content += '                <a href="' + pageUrl + '&page=' + ((pagination.current_page + 1 > pagination.last_page) ? pagination.last_page : pagination.current_page + 1) + '" class="page-link px-3 py-2">';
            content += '                    <span aria-hidden="true">›</span>';
            content += '                </a>';
            content += '            </li>';

            content += '            <li class="page-item">';
            content += '                <a href="' + pageUrl + '&page=' + pagination.last_page + '" class="page-link px-3 py-2">';
            content += '                    <span aria-hidden="true">»</span>';
            content += '                </a>';
            content += '            </li>';
        }

        content += '            </ul>';
        content += '        </nav>';
        content += '    </div>';

        let paginationContainer = $("#pagination-container");
        paginationContainer.html(content);
        paginationContainer.removeClass("d-none");
    }
};
let displayToken = (network, contractAddress, token) => {
    if(contractAddress === titansContractAddress && network === "bsc") {
        displayTitanToken(token);
    } else if(contractAddress === mustachiosContractAddress && network === "eth") {
        displayMustachioToken(token);
    } else if(contractAddress === chenInkContractAddress && network === "eth") {
        displayChenInkToken(token);
    } else if(contractAddress === rewardsContractAddress && network === "matic") {
        displayRewardToken(token);
    } else if(contractAddress === genesisBlockContractAddress && network === "eth") {
        displayGenesisBlockToken(token);
    } else if(contractAddress === sagesRantContractAddress && network === "eth") {
        displaySagesRantToken(token);
    }
};
let displayTitanToken = (token) => {
    $.get(ownlyAPI + "api/titan/" + ((address) ? address : "0") + "/" + titansContractAddress + "/" + token, async function(metadata) {
        displayTokenMetadata(chainIDBsc, metadata, titansContractAddress, token);

        marketplaceBinanceContract.methods.fetchMarketItem(titansContractAddress, token).call()
            .then(function(marketItem) {
                titansContract.methods.ownerOf(token).call()
                    .then(async function(owner) {
                        update_token_transaction(chainIDBsc, titansContractAddress, metadata.id, metadata.to, owner);
                        displayTokenDetails(metadata, marketItem, token, owner, titansContractAddress, "bsc");
                    });
            });
    });
};
let displayMustachioToken = (token) => {
    $.get(ownlyAPI + "api/mustachio/" + ((address) ? address : "0") + "/" + mustachiosContractAddress + "/" + token, async function(metadata) {
        displayTokenMetadata(chainIDEth, metadata, mustachiosContractAddress, token);

        $("#additional-assets-container").removeClass("d-none");
        $("#transparent-bg-mustachio-preload").attr("src", metadata.trans_bg);
        $("#transparent-bg-mustachio").attr("href", metadata.trans_bg);

        if(hasMarketplaceEthereumContract) {
            marketplaceEthereumContract.methods.fetchMarketItem(mustachiosContractAddress, token).call()
                .then(function(marketItem) {
                    mustachiosContract.methods.ownerOf(token).call()
                        .then(async function(owner) {
                            update_token_transaction(chainIDEth, mustachiosContractAddress, metadata.id, metadata.to, owner);
                            displayTokenDetails(metadata, marketItem, token, owner, mustachiosContractAddress, "eth");
                        });
                });
        } else {
            let marketItem = false;
            mustachiosContract.methods.ownerOf(token).call()
                .then(async function(owner) {
                    update_token_transaction(chainIDEth, mustachiosContractAddress, metadata.id, metadata.to, owner);
                    displayTokenDetails(metadata, marketItem, token, owner, mustachiosContractAddress, "eth");
                });
        }
    });
};
let displayGenesisBlockToken = (token) => {
    $.get(ownlyAPI + "api/genesis-block-token/" + ((address) ? address : "0") + "/" + genesisBlockContractAddress + "/" + token, async function(metadata) {
        displayTokenMetadata(chainIDEth, metadata, genesisBlockContractAddress, token);

        if(hasMarketplaceEthereumContract) {
            marketplaceEthereumContract.methods.fetchMarketItem(genesisBlockContractAddress, token).call()
                .then(function(marketItem) {
                    genesisBlockContract.methods.ownerOf(token).call()
                        .then(async function(owner) {
                            update_token_transaction(chainIDEth, genesisBlockContractAddress, metadata.id, metadata.to, owner);
                            displayTokenDetails(metadata, marketItem, token, owner, genesisBlockContractAddress, "eth");
                        });
                });
        } else {
            let marketItem = false;
            genesisBlockContract.methods.ownerOf(token).call()
                .then(async function(owner) {
                    update_token_transaction(chainIDEth, genesisBlockContractAddress, metadata.id, metadata.to, owner);
                    displayTokenDetails(metadata, marketItem, token, owner, genesisBlockContractAddress, "eth");
                });
        }
    });
};
let displaySagesRantToken = (token) => {
    $.get(ownlyAPI + "api/sages-rant-collectible/" + ((address) ? address : "0") + "/" + sagesRantContractAddress + "/" + token, async function(metadata) {
        displayTokenMetadata(chainIDEth, metadata, sagesRantContractAddress, token);

        if(hasMarketplaceEthereumContract) {
            marketplaceEthereumContract.methods.fetchMarketItem(sagesRantContractAddress, token).call()
                .then(function(marketItem) {
                    sagesRantContract.methods.ownerOf(token).call()
                        .then(async function(owner) {
                            update_token_transaction(chainIDEth, sagesRantContractAddress, metadata.id, metadata.to, owner);
                            displayTokenDetails(metadata, marketItem, token, owner, sagesRantContractAddress, "eth");
                        });
                });
        } else {
            let marketItem = false;
            sagesRantContract.methods.ownerOf(token).call()
                .then(async function(owner) {
                    update_token_transaction(chainIDEth, sagesRantContractAddress, metadata.id, metadata.to, owner);
                    displayTokenDetails(metadata, marketItem, token, owner, sagesRantContractAddress, "eth");
                });
        }
    });
};
let displayChenInkToken = (token) => {
    $.get(ownlyAPI + "api/cryptosolitaire/" + ((address) ? address : "0") + "/" + chenInkContractAddress + "/" + token, async function(metadata) {
        displayTokenMetadata(chainIDEth, metadata, chenInkContractAddress, token);

        if(hasMarketplaceEthereumContract) {
            marketplaceEthereumContract.methods.fetchMarketItem(chenInkContractAddress, token).call()
                .then(function(marketItem) {
                    chenInkContract.methods.ownerOf(token).call()
                        .then(async function(owner) {
                            update_token_transaction(chainIDEth, chenInkContractAddress, metadata.id, metadata.to, owner);
                            displayTokenDetails(metadata, marketItem, token, owner, chenInkContractAddress, "eth");
                        });
                });
        } else {
            let marketItem = false;
            chenInkContract.methods.ownerOf(token).call()
                .then(async function(owner) {
                    update_token_transaction(chainIDEth, chenInkContractAddress, metadata.id, metadata.to, owner);
                    displayTokenDetails(metadata, marketItem, token, owner, chenInkContractAddress, "eth");
                });
        }
    });
};
let displayRewardToken = (token) => {
    $.get(ownlyAPI + "api/reward/" + ((address) ? address : "0") + "/" + rewardsContractAddress + "/" + token, async function(metadata) {
        displayTokenMetadata(chainIDMatic, metadata, rewardsContractAddress, token);

        if(hasMarketplacePolygonContract) {
            marketplacePolygonContract.methods.fetchMarketItem(rewardsContractAddress, token).call()
                .then(function(marketItem) {
                    rewardsContract.methods.ownerOf(token).call()
                        .then(async function(owner) {
                            update_token_transaction(chainIDMatic, rewardsContractAddress, metadata.id, metadata.to, owner);
                            displayTokenDetails(metadata, marketItem, token, owner, rewardsContractAddress, "matic");
                        });
                });
        } else {
            let marketItem = false;
            let owner = "0x768532c218f4f4e6E4960ceeA7F5a7A947a1dd61";
            // rewardsContract.methods.ownerOf(token).call()
            //     .then(async function(owner) {
                    console.log(metadata);
                    update_token_transaction(chainIDMatic, rewardsContractAddress, metadata.id, metadata.to, owner);
                    displayTokenDetails(metadata, marketItem, token, owner, rewardsContractAddress, "matic");
                // });
        }
    });
};
let displayTokenMetadata = function(chainID, metadata, contractAddress, token) {
    let content = '';
    if(metadata.thumbnail.includes(".mp4")) {
        content += '    <div class="w-100 shadow-sm border-1 position-relative bg-color-1 mb-3" style="padding-top:100%; border:1px solid #cccccc; background-color:rgba(0,0,0,0.01); border-radius:10px">';
        content += '        <div class="d-flex justify-content-center align-items-center w-100 h-100" style="position:absolute; top:0; left:0">';
        content += '            <video controls autoPlay loop muted preload class="w-100" id="token-video" style="border-radius:10px">';
        content += '                <source src="' + metadata.thumbnail + '" type="video/mp4">';
        content += '            </video>';
        content += '        </div>';
        content += '    </div>';

        $("#token-asset-container").html(content);
    } else {
        let tokenImage = $("#token-image");
        tokenImage.attr("src", metadata.thumbnail);
        tokenImage.removeClass("d-none");
    }

    $("#token-name").text(metadata.name);
    $("#token-description").text(metadata.description);
    $("#token-contract-address").html('<a href="' + blockchainExplorerBsc + 'address/' + contractAddress + '" target="_blank" class="link-color-3">' + shortenAddress(web3Bsc.utils.toChecksumAddress(contractAddress), 5, 5) + '</a>');
    $("#token-id").text(token);
    $(".create-market-item-confirmation").attr("data-token-id", token);

    $("#token-original-image").attr("href", metadata.image);
    $("#token-original-image-preload").attr("src", metadata.image);

    let addToFavoritesButton = $(".add-to-favorites");
    addToFavoritesButton.attr("data-contract-address", contractAddress);
    addToFavoritesButton.attr("data-token-id", token);

    if(metadata.favorite_status) {
        addToFavoritesButton.find("i").addClass("fas");
    } else {
        addToFavoritesButton.find("i").addClass("far");
    }

    $(".favorites-count").text(metadata.favorite_count);

    let attributes = JSON.parse(metadata.attributes);
    content = '';

    for(let i = 0; i < attributes.length; i++) {
        content += '    <div class="col-md-6 col-xl-4 p-2">';
        content += '        <div class="card bg-light h-100">';
        content += '            <div class="card-body h-100">';
        content += '                <div class="d-flex justify-content-center align-items-center h-100">';
        content += '                    <div class="text-center">';
        content += '                        <div class="neo-bold font-size-80 mb-1 text-uppercase text-color-7">' + attributes[i].trait_type + '</div>';
        content += '                        <div class="font-size-100">' + attributes[i].value + '</div>';
        content += '                    </div>';
        content += '                </div>';
        content += '            </div>';
        content += '        </div>';
        content += '    </div>';
    }
    $("#token-attributes").html(content);
};
let displayTokenDetails = async function(metadata, marketItem, token, owner, contractAddress, network) {
    let chainId;
    let blockchainExplorer;
    let token_type;
    let token_network;

    if(network === 'bsc') {
        chainId = chainIDBsc;
        blockchainExplorer = blockchainExplorerBsc;
        token_type = "BEP-721";
        token_network = "Binance Smart Chain";
    } else if(network === 'eth') {
        chainId = chainIDEth;
        blockchainExplorer = blockchainExplorerEth;
        token_type = "ERC-721";
        token_network = "Binance Smart Chain";
    } else {
        chainId = chainIDMatic;
        blockchainExplorer = blockchainExplorerMatic;
        token_type = "ERC-1155";
    }

    $("#token-owner").html('<a href="' + blockchainExplorerBsc + 'address/' + owner + '" target="_blank" class="link-color-3">' + shortenAddress(web3Bsc.utils.toChecksumAddress(owner), 5, 5) + '</a>');
    $("#token-type").text(token_type);
    $("#token-network").text(token_network);

    if(parseInt(marketItem.itemId)) {
        let tokenPrice = $(".token-price");
        tokenPrice.html(web3Bsc.utils.fromWei(marketItem.price, "ether") + " " + ((hasMarketplaceEthereumContract) ? marketItem.currency : "BNB"));
        tokenPrice.removeClass("d-none");

        if(hasMarketplaceEthereumContract) {
            if(marketItem.currency === "OWN") {
                $(".token-price-currency").attr("src", "img/ownly/own-token.png");
            } else {
                $(".token-price-currency").attr("src", "img/bnb/bnb.webp");
            }
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
        let transactionHash = $(".token-transaction-hash");

        transactionHash.attr("href", blockchainExplorerBsc + "tx/" + metadata.transaction_hash);
        transactionHash.removeClass("d-none");

        $(".owner-address").text(shortenAddress(web3Bsc.utils.toChecksumAddress(owner), 5, 5));

        if(address && web3Bsc.utils.toChecksumAddress(owner) === web3Bsc.utils.toChecksumAddress(address)) {
            if((chainId === chainIDEth && hasMarketplaceEthereumContract) || (chainId === chainIDMatic && hasMarketplacePolygonContract) || chainId === chainIDBsc) {
                $("#create-market-item-container").removeClass("d-none");
            } else {
                $("#sold-out-container").removeClass("d-none");
            }
        } else {
            $("#sold-out-container").removeClass("d-none");
        }
    }

    $("#token-loading").addClass("d-none");

    let transfers_content = '   <thead>';
    transfers_content += '          <tr>';
    transfers_content += '              <th style="vertical-align:middle">From</th>';
    transfers_content += '              <th style="vertical-align:middle">To</th>';
    transfers_content += '              <th style="vertical-align:middle">Price</th>';
    transfers_content += '              <th style="vertical-align:middle; min-width:110px">Date</th>';
    transfers_content += '          </tr>';
    transfers_content += '      </thead>';
    transfers_content += '      <tbody>';
    for(let j = 0; j < metadata.transfers.length; j++) {
        transfers_content += '      <tr>';
        transfers_content += '          <td style="vertical-align:middle">';
        transfers_content += '              <a href="' + blockchainExplorer + 'address/' + metadata.transfers[j].from + '" target="_blank" class="link-color-3">' + shortenAddress(web3Bsc.utils.toChecksumAddress(metadata.transfers[j].from), 4, 4) + '</a>';
        transfers_content += '          </td>';
        transfers_content += '          <td style="vertical-align:middle">';
        transfers_content += '              <a href="' + blockchainExplorer + 'address/' + metadata.transfers[j].to + '" target="_blank" class="link-color-3">' + shortenAddress(web3Bsc.utils.toChecksumAddress(metadata.transfers[j].to), 4, 4) + '</a>';
        transfers_content += '          </td>';
        transfers_content += '          <td class="text-end" style="vertical-align:middle">' + numberFormat(parseFloat(metadata.transfers[j].value).toString(), false) + ' <img src="img/tokens/' + metadata.transfers[j].currency + '.png" class="me-1" width="20" alt="' + metadata.transfers[j].currency + '" /> (' + metadata.transfers[j].currency + ')</td>';
        transfers_content += '          <td style="vertical-align:middle">' + moment(metadata.transfers[j].signed_at).format('llll') + '</td>';
        transfers_content += '      </tr>';
    }
    transfers_content += '      </tbody>';
    $("#transfer-history").html(transfers_content);
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
let getTokenTransfers = async (owner, chainId, contractAddress, token) => {
    let transaction_hashes = [];

    await $.get("https://api.covalenthq.com/v1/" + chainId + "/tokens/" + contractAddress + "/nft_transactions/" + token + "/?&key=ckey_994c8fdd549f44fa9b2b27f59a0", async function(data) {
        if(data) {
            console.log(data);
            for(let j = 0; j < data.data.items[0].nft_transactions.length; j++) {
                for(let k = 0; k < data.data.items[0].nft_transactions[j].log_events.length; k++) {
                    if(data.data.items[0].nft_transactions[j].log_events[k].decoded) {
                        if(data.data.items[0].nft_transactions[j].log_events[k].decoded.name === "Transfer" || data.data.items[0].nft_transactions[j].log_events[k].decoded.name === "TransferSingle") {
                            transaction_hashes.push(data.data.items[0].nft_transactions[j].log_events[k]);
                        }
                    }
                }
            }
        } else {
            await getTokenTransfers(owner, network, contractAddress, token);
        }
    });

    return transaction_hashes;
};
let update_token_transaction = function(chainID, contractAddress, tokenId, owner, currentOwner) {
    if(!owner || (owner && web3Bsc.utils.toChecksumAddress(owner) !== web3Bsc.utils.toChecksumAddress(currentOwner))) {
        $.post(ownlyAPI + "api/token_transfer/update_token_transaction", {
            chain_id: chainID,
            contract_address: contractAddress,
            token_id: tokenId,
            owner: currentOwner
        });
    }
};
let update_buying_token = async function() {
    let buyingPriceLoadingContainer = $("#buying-price-loading-container");
    buyingPriceLoadingContainer.removeClass("d-none");

    $(".buying-price-container").addClass("d-none");

    let createMarketSale = $(".create-market-sale");
    let price = createMarketSale.attr("data-price");
    let currency = createMarketSale.attr("data-currency");

    let token = $("input[name='buy_through_token']:checked").val();

    if(currency === "BNB" && token === "OWN") {
        await sparkSwapContract.methods.getAmountsIn(price, ["0x7665CB7b0d01Df1c9f9B9cC66019F00aBD6959bA", "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"]).call()
            .then(async function(amounts) {
                let ownPrice = web3Bsc.utils.fromWei(amounts[0], "ether");

                let buyingPriceContainerBnbToOwn = $(".buying-price-container[data-currency='BNB-OWN']");
                buyingPriceContainerBnbToOwn.find(".bnb-price").text(web3Bsc.utils.fromWei(price, "ether"));
                buyingPriceContainerBnbToOwn.find(".own-price").text(numberFormat(ownPrice, 2));

                let discountedOwnPrice = ((BigInt(amounts[0]) * BigInt(8)) / BigInt(10)).toString();

                $("#discounted-own-price").text(numberFormat(web3Bsc.utils.fromWei(discountedOwnPrice, "ether"), 2));
                $("#discounted-own-price").attr("data-price", discountedOwnPrice);

                buyingPriceContainerBnbToOwn.removeClass("d-none");
            });
    } else if(currency === "BNB" && token === "BNB") {
        $("#bnb-price").text(numberFormat(web3Bsc.utils.fromWei(price, "ether"), 2));
        $(".buying-price-container[data-currency='BNB-BNB']").removeClass("d-none");
    } else if(currency === "OWN" && token === "OWN") {
        $("#own-price").text(numberFormat(web3Bsc.utils.fromWei(price, "ether"), 2));
        $(".buying-price-container[data-currency='OWN-OWN']").removeClass("d-none");
    } else if(currency === "OWN" && token === "BNB") {
        $("#own-price").text(numberFormat(web3Bsc.utils.fromWei(price, "ether"), 2));
        $(".buying-price-container[data-currency='OWN-OWN']").removeClass("d-none");
    }

    buyingPriceLoadingContainer.addClass("d-none");
};
let displaySales = function(page) {
    $.get(ownlyAPI + "api/sales" + ((page) ? ("?page=" + page) : ""), async function(data) {
        content = '';

        $("#annual-sales-year").val(data.annual_date.year);
        $("#monthly-sales-year").val(data.monthly_date.year);
        $("#monthly-sales-month").val(data.monthly_date.month);

        $("#annual-sales-own").text(numberFormat(data.annual_sales.own, 2));
        $("#annual-sales-eth").text(numberFormat(data.annual_sales.eth, 2));
        $("#annual-sales-bnb").text(numberFormat(data.annual_sales.bnb, 2));

        $("#monthly-sales-own").text(numberFormat(data.monthly_sales.own, 2));
        $("#monthly-sales-eth").text(numberFormat(data.monthly_sales.eth, 2));
        $("#monthly-sales-bnb").text(numberFormat(data.monthly_sales.bnb, 2));

        let sales = data.pagination;

        for(let i = 0; i < sales.data.length; i++) {
            content += '    <tr>';
            content += '        <td class="align-middle" style="min-width:100px">' + sales.data[i].formatted_date + '</td>';
            content += '        <td class="align-middle">' + sales.data[i].collection + '</td>';
            content += '        <td class="align-middle">' + sales.data[i].name + '</td>';
            content += '        <td class="align-middle text-end">' + sales.data[i].token_id + '</td>';
            content += '        <td class="align-middle">';
            content += '            <div class="d-flex justify-content-end align-items-center">';
            content += '                <div class="pe-1">' + numberFormat(parseFloat(sales.data[i].value).toFixed(4), false) + '</div>';
            content += '                <div class="pe-1"><img src="img/tokens/' + sales.data[i].currency + '.png" width="20" alt="' + sales.data[i].currency + '"></div>';
            content += '                <div class="font-size-80">(' + sales.data[i].currency + ')</div>';
            content += '            </div>';
            content += '        </td>';
            content += '        <td class="align-middle">';
            content += '            <a class="link-color-4" href="' + sales.data[i].transaction_link + '" target="_blank">' + shortenAddress(sales.data[i].transaction_hash, 5, 3) + '</a>';
            content += '        </td>';
            content += '    </tr>';
        }

        generatePagination(sales, url + '?sales=1');

        $("#sales-row-items").html(content);

        $("#sales-loading").addClass("d-none");
        $("#sales-container").removeClass("d-none");
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
    updateConnectToWallet();
    initializePage();
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

    titansContract.methods.isApprovedForAll(address, marketplaceBinanceContractAddress).call()
        .then(function(isApprovedForAll) {
            button.prop("disabled", false);

            if(isApprovedForAll) {
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

    titansContract.methods.setApprovalForAll(marketplaceBinanceContractAddress, true)
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
    let createMarketSale = $(".create-market-sale");

    createMarketSale.attr("data-price", $(this).attr("data-price"));
    createMarketSale.attr("data-item-id", $(this).attr("data-item-id"));
    createMarketSale.attr("data-currency", $(this).attr("data-currency"));

    update_buying_token();

    $("#modal-buy-select-currency").modal("show");
});

$(document).on("change", "input[name='buy_through_token']", function() {
    let token = $("input[name='buy_through_token']:checked").val();
    $(".buy-through-token-label").removeClass("active");
    $(".buy-through-token-label[data-token='" + token + "']").addClass("active");
    $(".buy-through-token-image").addClass("d-none");
    $(".buy-through-token-image[data-token='" + token + "']").removeClass("d-none");

    update_buying_token();
});

$(document).on("click", ".create-market-sale", function() {
    if(!address) {
        connectToMetamask();
    } else {
        if(parseInt(ethereum.networkVersion) === chainIDBsc) {
            let price = $(this).attr("data-price");
            let item_id = $(this).attr("data-item-id");
            let selectedCurrency = $("input[name='buy_through_token']:checked").val();

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

                marketplaceBinanceContract.methods.createMarketSale(item_id, selectedCurrency)
                    .send({
                        from: web3Bsc.utils.toChecksumAddress(address),
                        value: _price
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

            if($(this).attr("data-currency") === "OWN" && selectedCurrency === "OWN") {
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
            } else if($(this).attr("data-currency") === "BNB" && selectedCurrency === "OWN") {
                ownContract.methods.allowance(address, marketplaceBinanceContractAddress).call()
                    .then(async function(allowance) {
                        let priceWithSplippage = (BigInt($("#discounted-own-price").attr("data-price")) * BigInt(100001) / BigInt(100000)).toString();

                        if(allowance < priceWithSplippage) {
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

                            ownContract.methods.approve(marketplaceBinanceContractAddress, priceWithSplippage)
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

    $("#modal-buy-select-currency").modal("hide");
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

$(document).on("click", ".select-price-current", async function() {
    $("#price-currency img").attr("src", $(this).data("image"));
    $("#price-currency span").text($(this).data("currency"));
    $("#price-currency").val($(this).data("currency"));
});

$(document).on("change", ".sales-date", async function() {
    let page = findGetParameter("page");

    $.get(ownlyAPI + "api/sales" + ((page) ? ("?page=" + page) : ""), {
        annual_year: $("#annual-sales-year").val(),
        monthly_year: $("#monthly-sales-year").val(),
        monthly_month: $("#monthly-sales-month").val(),
    }, async function(data) {
        content = '';
        console.log(data.annual_date.year);
        $("#annual-sales-year").val(data.annual_date.year);
        $("#monthly-sales-year").val(data.monthly_date.year);
        $("#monthly-sales-month").val(data.monthly_date.month);

        $("#annual-sales-own").text(numberFormat(data.annual_sales.own, 2));
        $("#annual-sales-eth").text(numberFormat(data.annual_sales.eth, 2));
        $("#annual-sales-bnb").text(numberFormat(data.annual_sales.bnb, 2));

        $("#monthly-sales-own").text(numberFormat(data.monthly_sales.own, 2));
        $("#monthly-sales-eth").text(numberFormat(data.monthly_sales.eth, 2));
        $("#monthly-sales-bnb").text(numberFormat(data.monthly_sales.bnb, 2));

        let sales = data.pagination;

        for(let i = 0; i < sales.data.length; i++) {
            content += '    <tr>';
            content += '        <td class="align-middle" style="min-width:100px">' + sales.data[i].formatted_date + '</td>';
            content += '        <td class="align-middle">' + sales.data[i].collection + '</td>';
            content += '        <td class="align-middle">' + sales.data[i].name + '</td>';
            content += '        <td class="align-middle text-end">' + sales.data[i].token_id + '</td>';
            content += '        <td class="align-middle">';
            content += '            <div class="d-flex justify-content-end align-items-center">';
            content += '                <div class="pe-1">' + numberFormat(sales.data[i].value.toFixed(4), false) + '</div>';
            content += '                <div class="pe-1"><img src="img/tokens/' + sales.data[i].currency + '.png" width="20" alt="' + sales.data[i].currency + '"></div>';
            content += '                <div class="font-size-80">(' + sales.data[i].currency + ')</div>';
            content += '            </div>';
            content += '        </td>';
            content += '        <td class="align-middle">';
            content += '            <a class="link-color-4" href="' + sales.data[i].transaction_link + '" target="_blank">' + shortenAddress(sales.data[i].transaction_hash, 5, 5) + '</a>';
            content += '        </td>';
            content += '    </tr>';
        }

        generatePagination(sales, url + '?sales=1');

        $("#sales-row-items").html(content);

        $("#sales-loading").addClass("d-none");
        $("#sales-container").removeClass("d-none");
    });
});