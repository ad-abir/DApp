const hre = require("hardhat");

async function main() {
    const Upload = await hre.ethers.getContractFactory("Upload");
    console.log("Deploying Upload contract...");
    Upload.deploy().then((upload) => {
        console.log("Upload contract deployed to address:", upload.address);
    });
}

main().catch((error) => {
    console.error("Error deploying contract:", error);
    process.exitCode = 1;
});
