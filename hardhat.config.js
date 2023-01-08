module.exports = {
  defaultNetwork: "goerli",
  networks: {
    hardhat: {
    },
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/k_kSxYfIKmc6_rq2uNKQVMvcpgoKRzCN",
      accounts: ["15398f3f092853af2a489c61e7c990476d09ad9a632d1dd0fecd6f456f5cb092"]
    }
  },
  solidity: {
    version: "0.8.10",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    artifacts: "./artifacts"
  },
 
}