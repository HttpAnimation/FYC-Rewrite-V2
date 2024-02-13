# FYC/NodeJSServer

This branch is for an NPM server for [macOS](https://www.apple.com/macos) and [Linux](https://github.com/torvalds/linux) while [Windows](https://www.microsoft.com/en-us/windows) might work it's not tested.


## Node.js
Node.js is the runner used to run the server.

## Read
This is now built into the installer for FYC. And yes I know that **Sever** is spelled worng I ment to
### [Fedora](https://fedoraproject.org/)

```bash
sudo dnf install nodejs
```

### Other distros
If you are using a different distro than Fedora, refer to [this download page](https://nodejs.org/en/download).

### [macOS](https://www.apple.com/macos)

```bash
https://nodejs.org/en/download
```

## Installing
#### This is only needed if you choose not it install this during the FYC install. 
Open a terminal and enter the installation command for wget or curl. If you are on [Windows](https://www.microsoft.com/en-us/windows?r=1s), these commands will not work and you will need to install manually from this branch you can install [git](https://gitforwindows.org/) for [Windows](https://www.microsoft.com/en-us/windows?r=1s) with the git install command to get the scripts you can also install [Git for Windows](https://gitforwindows.org/) and [this]() command in the cmd.

### Wget
```bash
wget "https://raw.githubusercontent.com/HttpAnimation/FYC-Rewrite-V2/NodeJSSever/InstallWget.sh" && chmod +x InstallWget.sh && ./InstallWget.sh
```

### Curl
```bash
curl "https://raw.githubusercontent.com/HttpAnimation/FYC-Rewrite-V2/NodeJSSever/InstallCurl.sh" && chmod +x InstallCurl.sh && ./InstallCurl.sh 
```

#### Git
```bash
git clone -b NodeJSSever https://github.com/HttpAnimation/FYC-Rewrite-V2.git
```

## Running
To run the node.js server once installed open the place where it is installed then run the following command listed below.

```bash
node proxy.js
```
