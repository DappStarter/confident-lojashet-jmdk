require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi office spot edge rescue spawn pulse hunt fantasy fresh spell'; 
let testAccounts = [
"0x790e556911585cea3fc7cf3a2eb26bb03a5118a8e929788ac6647ad1e1f062e2",
"0x86b965473367337bb76b34a471ec8ca600f87d1dac45a55f845680377c98dab0",
"0xd21e4b7fbf5cd032fe04f6811707a6a112303112d60ea04b3a7d1c2f1c59c189",
"0x8b15cb1fa0328ac7e827f5cc282a4b3fad559fae568f9135f1cb950cde541a5e",
"0xa1092ee4f7f9784dbabed155ceeed909d4e7e27126376b050fe685a9f59f72e2",
"0x119763dd494df038188040982c550477b33da4d8c98379c7ee957243217b4f67",
"0x3f7a62e04f23d7b5677b539702a0fd0468b96b41c05c0cb17e0bbfd2a073e953",
"0x886771f9313b2da1b5c8f343c53bdaad90b5e22ca1df6b60d35f32872a910d43",
"0x060d4f21a828a1d93ca7efd2e70f80f5bc93c6b2729a12d718fbc62417eaf5fc",
"0xb640908879661ecaca2547e7fb022ab9571a205798d93dcc1bb157d3d9dffed7"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


