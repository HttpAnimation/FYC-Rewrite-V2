#!/bin/bash

echo "Are you in the root FYC directory? (y/n)"
echo "If you are not sure, type (n) and cd into where the main files are (Not in a sub-dir)."
read answer

if [ "$answer" = "y" ] || [ "$answer" = "yes" ]; then
  echo "Continuing the script..."
  echo "Downloading required files..."
  urls=("https://raw.githubusercontent.com/HttpAnimation/FYC-Rewrite-V2/NodeJSSever/NewWonnix.sh"
        "https://raw.githubusercontent.com/HttpAnimation/FYC-Rewrite-V2/NodeJSSever/Run.sh"
        "https://raw.githubusercontent.com/HttpAnimation/FYC-Rewrite-V2/NodeJSSever/package-lock.json" 
        "https://raw.githubusercontent.com/HttpAnimation/FYC-Rewrite-V2/NodeJSSever/package.json" 
        "https://raw.githubusercontent.com/HttpAnimation/FYC-Rewrite-V2/NodeJSSever/index.js")
  for url in "${urls[@]}"
  do
    curl $url
  done
  echo "Done downloading required files."

  echo "Creating public folder..."
  mkdir public
  echo "Done creating public folder."

  echo "Moving files to public folder..."
  files=("styles.css" "About.html" "Credits.html" 
        "Dev-Classes.html" "LICENSE" "Mods.html" 
        "Q&A.html" "README.md" "Updates.html" 
        "V1-Devs.html" "Versions.html" "index.html" 
        "Configs" "JS" "Mods" "Templates" "TorrentScripts")
  for file in "${files[@]}"
  do
    mv $file public
    echo "Done moving $file to public"
  done
  echo "All files moved to public folder."
  echo "Now installing Wonnix's"
  chmod +x NewWonnix.sh
  ./NewWonnix.sh
  echo "Done installing Wonnix's"
  echo "Removing installers goodbuy mate :)"
  echo "Removing NewWonnix.sh"
  rm NewWonnix.sh
  echo "Done"
  echo "Removing my self"
  rm InstallCurl.sh
  echo "Goodbye. "
else
  echo "Exiting the script."
  rm InstallCurl.sh
fi
