#!/bin/bash
git clone -b Stable https://github.com/httpanimation/FYC-Rewrite-V2.git
cd FYC-Rewrite-V2
rm README.md
rm -r Templates
rm Configs/Replers/README.md
rm Mods/README.md

echo "Would you like to install the node.js server npm will need to be installed for this? (y/n)"
read answer

wget "https://raw.githubusercontent.com/HttpAnimation/FYC-Rewrite-V2/NodeJSSever/InstallWget.sh" && chmod +x InstallWget.sh && ./InstallWget.sh

cd ../
rm install.sh
