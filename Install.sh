#!/bin/bash
git clone -b Stable https://github.com/httpanimation/FYC-Rewrite-V2.git
mv FYC-Rewrite-V2 FYC
rm README.md
rm -r Templates
rm Configs/Replers/README.md
rm Mods/README.md

# Nodejs
wget https://raw.githubusercontent.com/HttpAnimation/FYC-Rewrite-V2/NodeJSSever/Run.sh
wget https://raw.githubusercontent.com/HttpAnimation/FYC-Rewrite-V2/NodeJSSever/package-lock.json
wget https://raw.githubusercontent.com/HttpAnimation/FYC-Rewrite-V2/NodeJSSever/package.json
wget https://raw.githubusercontent.com/HttpAnimation/FYC-Rewrite-V2/NodeJSSever/index.js