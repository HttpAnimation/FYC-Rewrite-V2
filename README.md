# FYC/NodeJSServer

This branch is for an NPM server for Unix/[macOS](https://www.apple.com/macos) and [Linux](https://github.com/torvalds/linux).

## NOTE
This new server is still in testing and may not work right for now this is a dev-bramch you are free to use it but expect some bugs if you do have bugs pls report the.

## Node.js
Node.js is the runner used to run the server.

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

### [Windows](https://www.microsoft.com/en-us/windows?r=1s)
If you are using [Windows](https://www.microsoft.com/en-us/windows?r=1s), please note that no help will be provided on the server and it is not supported. It may not work at all. If you still want to install, go [here](https://nodejs.org/en/download).

## Installing
#### This is only needed if you choose not it install this during the FYC install. 
Open a terminal and enter the installation command for wget or curl. If you are on [Windows](https://www.microsoft.com/en-us/windows?r=1s), these commands will not work and you will need to install manually from this branch you can install [git](https://gitforwindows.org/) for [Windows](https://www.microsoft.com/en-us/windows?r=1s) with the git install command to get the scripts.

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
