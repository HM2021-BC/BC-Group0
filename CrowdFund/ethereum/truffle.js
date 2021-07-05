
/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */


const HDWalletProvider = require("@truffle/hdwallet-provider");

const gasPrice = 1000000000; //process.env.GASPRICE;
let privateKeys = ["b7d0573d2463fe5ed672ff7ded8f7bb7800cce4202b1540686eaaf9726b63c28"];
const network = "http://bops.morpheuslabs.io:27295";
const chainId = 4226;

module.exports = {
  compilers: {
    solc: {
      //version: "0.5.8",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        },
        //evmVersion: 'petersburg'
      },
    },
  },
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    private_poa: { 

      provider: function () {
        return new HDWalletProvider(
            {
                privateKeys: privateKeys,
                providerOrUrl: network,
                chainId: chainId
            }
        )
      },
      network_id: "*",
      gas: 6000000,
      gasPrice: gasPrice
    }
  }
};
