require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades")


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "testnet",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    hardhat: {
    },
    testnet: {
      url: "https://polygon-mumbai.infura.io/v3/4458cf4d1689497b9a38b1d6bbf05e78",
      chainId: 80001,
      gasPrice: 200000000,
      accounts: ['0x81b2148fb63adaf2ebf3cf9adc633908d39598fa2f9d70bc146fb458ee7c7ef2']
    },
    // mainnet: {
    //   url: "https://bsc-dataseed.binance.org/",
    //   chainId: 56,
    //   gasPrice: 20000000000,
    //   accounts: {mnemonic: mnemonic}
    // }
  },
  solidity: "0.8.9",
};
