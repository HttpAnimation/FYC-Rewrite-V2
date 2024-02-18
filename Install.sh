#!/bin/bash
git clone -b Stable https://github.com/httpanimation/FYC-Rewrite-V2.git
mv FYC-Rewrite-V2 FYC
cd FYC
rm README.md
rm -r Templates
rm Configs/Replers/README.md
rm Mods/README.md
mkdir public
files=$(ls)
for file in "${files[@]}"
do
    mv $file public
    echo "Done moving $file to public"
done

# Nodejs
wget https://raw.githubusercontent.com/HttpAnimation/FYC-Rewrite-V2/NodeJSSever/Run.sh
wget https://raw.githubusercontent.com/HttpAnimation/FYC-Rewrite-V2/NodeJSSever/package-lock.json
wget https://raw.githubusercontent.com/HttpAnimation/FYC-Rewrite-V2/NodeJSSever/package.json
wget https://raw.githubusercontent.com/HttpAnimation/FYC-Rewrite-V2/NodeJSSever/index.js

## NPM

npm install express cors
npm install node-fetch@2.6.1
npm install ws

chmod +x Run.sh
mv index.js proxy.js
cd ../
rm $0