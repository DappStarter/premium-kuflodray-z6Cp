require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty forget spray fine note punch proud hockey kite broken sell'; 
let testAccounts = [
"0xbe646f0ef766a7423385ef7fcc404b202886743a43eb6e612e47c05a19d71526",
"0x0398073c348e8a21f799f4ca2d592e391696c29afcc82bf0d34517ce74771927",
"0x589f57cf5bec33c6b3918d3d525397a24fd15f1f7c3e56132494ab0b4945b316",
"0xbddf26fe75b23747ed70685527d96274c50b905e0509ea9e7acc4cdc839e0994",
"0x686e9b2404e475743f263f6470d670356e3425360a50b0628ae0ccd96e91da79",
"0xb9332ca802daf10114c3f23bab1641e54f99b98f691985c9c510626f6a1f1c9e",
"0x95ed2dfe689efc4c1d008793c44204f79614e4a4f6e055eba82949ad3c2c57ee",
"0x4cefd9be2d3834ef2732db369bb3f7eb0bd71231f850c4cc1fc5f7f4693b51c9",
"0xbb22a49ee275b509064981c299fcb3ca1f621717de2ccbd7832a54c7c17b7117",
"0x24ecc8f089439e974733e332e0f84ef627832cbf4aa8338329d12e4f8c3a7c6a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

