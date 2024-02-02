@echo off
setlocal enabledelayedexpansion

git clone -b Stable https://github.com/httpanimation/FYC-Rewrite-V2.git
cd FYC-Rewrite-V2
del README.md
rmdir /s /q Templates
del Configs\Replers\README.md
del Mods\README.md

echo Would you like to install the node.js server npm will need to be installed for this? (y/n)
set /p answer=

if /i "%answer%"=="y" (
    bitsadmin /transfer "Downloading" "https://raw.githubusercontent.com/HttpAnimation/FYC-Rewrite-V2/NodeJSSever/InstallWin.bat" "%cd%\InstallWin.bat"
    call InstallWin.bat
) else if /i "%answer%"=="n" (
    echo Ok exiting
) else (
    echo Invalid input. Please enter 'y' or 'n'.
    cd ..
    rmdir /s /q FYC-Rewrite-V2
    del install.sh
)

cd ..
del install.sh

endlocal
