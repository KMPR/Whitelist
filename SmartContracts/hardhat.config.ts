import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.17",

  networks: {
    goerli: {
      url: "https://rpc.ankr.com/eth_goerli",
      accounts: [],
    },
  },
};

export default config;
