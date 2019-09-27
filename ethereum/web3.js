import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    //We are in the browser and metamask is running.
    web3 = new Web3(window.web3.currentProvider);
} else {
    //We are on the server or the user doesn't have metamask
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/33f9b0533e704c93893fb33aa74ec95a'
    );
    web3 = new  Web3(provider);
}

export default web3