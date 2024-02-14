#!/bin/bash

urls=("https://raw.githubusercontent.com/HttpAnimation/FYC-Rewrite-V2/NodeJSSever/NewWonnix.sh"
        "https://raw.githubusercontent.com/HttpAnimation/FYC-Rewrite-V2/NodeJSSever/Run.sh"
        "https://raw.githubusercontent.com/HttpAnimation/FYC-Rewrite-V2/NodeJSSever/package-lock.json" 
        "https://raw.githubusercontent.com/HttpAnimation/FYC-Rewrite-V2/NodeJSSever/package.json" 
        "https://raw.githubusercontent.com/HttpAnimation/FYC-Rewrite-V2/NodeJSSever/index.js")

for url in "${urls[@]}"
do
    wget $url
done

echo "Done downloading required files."

echo "Creating public folder..."
mkdir public
echo "Done creating public folder."

echo "Moving files to public folder..."
files=$(ls)
for file in "${files[@]}"
do
    mv $file public
    echo "Done moving $file to public"
done

echo "All files moved to public folder."
echo "Now installing Wonnix's"
chmod +x NewWonnix.sh
./NewWonnix.sh

echo "Allowing Run.sh to run"
chmod +x Run.sh
echo "Done installing Wonnix's"

echo "Renaming index.js to proxy.js"
mv index.js proxy.js
echo "Done renaming"

echo "Removing installers goodbye mate :)"
echo "Removing NewWonnix.sh"
rm NewWonnix.sh
echo "Done"

echo "Removing myself"
rm $0
echo "Goodbye. "