require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const QUICKNODE_HTTP_URL = process.env.QUICKNODE_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: QUICKNODE_HTTP_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};

// /**
// * @type import('hardhat/config').HardhatUserConfig
// */

// require('dotenv').config();
// require("@nomiclabs/hardhat-ethers");
// require("@nomiclabs/hardhat-etherscan");


// const { API_URL, PRIVATE_KEY } = process.env;

// module.exports = {
//   solidity: "0.8.17",
//    defaultNetwork: "goerli",
//    networks: {
//       hardhat: {},
//       goerli: {
//          url: API_URL,
//          accounts: [`0x${PRIVATE_KEY}`]
//       }
//    },
//    etherscan: {
//     // Your API key for Etherscan
//     // Obtain one at https://etherscan.io/
//     apiKey: "4I7NGUBZ9WQS9PAJ9U6HI38CS3GQXBY9SG"
//    }
// };