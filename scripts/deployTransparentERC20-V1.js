const {ethers, upgrades } = require("hardhat");

async function main(){
     const MyTokenV1 = await ethers.getContractFactory("MyTokenV1");
     console.log("Deploying MyTokenV1");
     const myTokenV1 = await upgrades.deployProxy(MyTokenV1
    //   ,{
    //   initializer:'initialize'
    //  }
     );
     await myTokenV1.deployed();
     console.log("MyTokenV1 deployed address:",myTokenV1.address);
}
main();


//0x5FC8d32690cc91D4c39d9d3abcBD16989F875707
//const myTokenV1 = await MyTokenV1.attach("0x5FC8d32690cc91D4c39d9d3abcBD16989F875707")

//npx hardhat node

//npx hardhat run --network localhost  scripts/deployTransparentERC20-V1.js 

//npx hardhat console --network localhost
    //const MyTokenV1 = await ethers.getContractFactory("MyTokenV1");
   //const myTokenV1 = await MyTokenV1.attach("0x5FC8d32690cc91D4c39d9d3abcBD16989F875707")