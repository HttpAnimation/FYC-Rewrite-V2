@echo off
setlocal enabledelayedexpansion
echo This script is not tested so there may be bugs 

echo Are you in the root FYC directory? (y/n)
echo If you are not sure, type (n) and cd into where the main files are (Not in a sub-dir).
set /p answer=

if /i "%answer%"=="y" (
  echo Continuing the script...
  echo Downloading required files...
  
  set urls=("https://raw.githubusercontent.com/HttpAnimation/FYC-Rewrite-V2/NodeJSSever/NewWonnix.sh"
            "https://raw.githubusercontent.com/HttpAnimation/FYC-Rewrite-V2/NodeJSSever/Run.sh"
            "https://raw.githubusercontent.com/HttpAnimation/FYC-Rewrite-V2/NodeJSSever/package-lock.json" 
            "https://raw.githubusercontent.com/HttpAnimation/FYC-Rewrite-V2/NodeJSSever/package.json" 
            "https://raw.githubusercontent.com/HttpAnimation/FYC-Rewrite-V2/NodeJSSever/index.js")

  for %%url in (!urls!) do (
    bitsadmin /transfer "Downloading" %%url "%cd%\%%~nxi"
  )
  
  echo Done downloading required files.
  
  echo Creating public folder...
  mkdir public
  echo Done creating public folder.

  echo Moving files to public folder...
  set files=("styles.css" "About.html" "Credits.html" 
             "Dev-Classes.html" "LICENSE" "Mods.html" 
             "Q&A.html" "README.md" "Updates.html" 
             "V1-Devs.html" "Versions.html" "index.html" 
             "Configs" "JS" "Mods" "Templates" "TorrentScripts" "Report.html" "Request.html" "Scripts")

  for %%file in (!files!) do (
    move "%%file" "public\"
    echo Done moving %%file to public
  )
  
  echo All files moved to public folder.
  echo Now installing Wonnix's...
  chmod +x NewWonnix.sh
  ./NewWonnix.sh
  echo Allowing Run.sh to run...
  chmod +x Run.sh
  echo Done installing Wonnix's.
  echo Renaming index.js to proxy.js...
  ren index.js proxy.js
  echo Done renaming.
  echo Removing installers, goodbye mate! :)
  echo Removing NewWonnix.sh...
  del NewWonnix.sh
  echo Done.
  echo Removing myself...
  del InstallWget.sh
  echo Goodbye.
) else (
  echo Exiting the script.
  del InstallWget.sh
)

endlocal
