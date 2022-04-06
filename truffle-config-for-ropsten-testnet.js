const HDWalletProvider = require('@truffle/hdwallet-provider');
const infuraKry = "paste infura key here";

const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {

  networks: {
    /* development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" //match any network id
    }, */
    ropsten: {
      provider: new HDWalletProvider(
        mnemonic, 
        `https://ropsten.infura.io/v3/${infuraKry}` // Url to an Ethereum node
      ),
      network_id: 3,       // Ropsten's id
      gas: 5500000,        // Ropsten has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true 
    }
  },
  contracts_directory: './src/contracts',
  contracts_build_directory: './src/abis',

  // Configure your compilers
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      },
      version: "^0.8.0" 
    }
  }
};