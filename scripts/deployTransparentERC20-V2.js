const {ethers, upgrades } = require("hardhat");

async function main(){
     const MyTokenV2 = await ethers.getContractFactory("MyTokenV2");
     console.log(" MyTokenV1 is upgrading");
     await upgrades.upgradeProxy("0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",MyTokenV2
    //   ,{
    //   initializer:'initialize'
    //  }
     );
     // await myTokenV1.deployed();
     console.log("MyTokenV1 upgraded to MyTokenV2");
}
main();



//npx hardhat node

//npx hardhat run --network localhost  scripts/deployTransparentERC20-V2.js 

//npx hardhat console --network localhost
    //const MyTokenV2 = await ethers.getContractFactory("MyTokenV2");
   //const myTokenV2 = await MyTokenV2.attach("0x5FC8d32690cc91D4c39d9d3abcBD16989F875707")