# FYC
FYC is a repo system mainly for the web.

## README
Github is showing the readme from main/README.md if you are seeing this while one that main branch head over the README.md file that branch for now while I try to find a fix I have no idea why this happends.

## Installing
To install FYC open a terminal and type the following command listed below note that [Windows](https://www.microsoft.com/en-us/windows?r=1) is not tested.
```bash
git clone -b Stable https://github.com/HttpAnimation/FYC-Rewrite-V2.git && echo 'FYC has been installed' && cd FYC-Rewrite-V2
```

## Running
Open the **index.html** in the FYC folder if you see nothing show up you may need to allow Crocs everywhere.

## Mods
Mods are a way to add stuff to FYC even something happends with every repo in the world. To add a mod open the FYC-Rewrite V2 folder witch is most likly stored here **/home/$user/home** then open the Mods folder and drag and drop the folder of your mod into there then compile if you would like to make a mod read [this](https://github.com/HttpAnimation/FYC-Rewrite-V2/blob/Mod-Docs/README.md) page you can only compile mods with [macOS](https://www.apple.com/macos) and Linux [Windows](https://www.microsoft.com/en-us/windows) will not work [WSL](https://learn.microsoft.com/en-us/windows/wsl/install) on [Windows](https://www.microsoft.com/en-us/windows) will work tho.
```bash
./Compile.sh
```
if you need to allow it to run on your distro 
```bash
chmod +x Compile.sh
```

## Adding a repo
To add a repo open the FYC folder with the terminal and **cd** over to wherever it's downloaded the default will be **/home/$user/home** it might be different so keep that in mind but once they run one of the following command **[nano](https://www.nano-editor.org/)** is gonna be installed for almost every distro and [macOS](https://www.apple.com/macos) and **[kate](https://kate-editor.org/)** is gonna be included on most systems with [KDE Plasma](https://kde.org/plasma-desktop/) installed you can also open the file manually if you don't have one of the following IDEs installed.

```
kate Configs/Replers/Repo.json
```
```bash
kate Configs/Replers/Repo.json
```
Once you have the file opened add a **,** at the end of your last repo URL for an example it may look like the following listed below.
```json
........com/repo.json",
```
Add a new line under the **,** and add **""** to that line and you should get something like this.
```
........com/repo.json",
"Gffg://100%ARealURL.json"
```
If you add another repo make sure to add the **,** again it just tells [JSON](https://www.json.org/json-en.html) that there is a new repo am planning on making a GUI for managing repos without no code editing but for now this is the way.


## Streaming

If you wish to stream your FYC page, you can choose one of the following methods:

1) Fork the repository
2) Host a network site

Each method has its pros and cons.

### Streaming/Forking - Information

Forking the repository is useful when you either cannot use a PC for running a lightweight server or cannot use Linux/macOS. However, keep in mind that everyone can see your site when you fork the repository, including GitHub. Ensure your site complies with [GitHub's TOS](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages) to avoid any issues if you are using a repo that is giving you stolen content remove it or use a local version.

### Streaming/Hosting - Information

Hosting is the best way to have an FYC site, but it has some downsides. No one outside your network can see your site, so avoid sharing your IP and port on platforms like Discord. Hosting requires a PC running Linux (recommended: [Ubuntu Server](https://ubuntu.com/download/server) or [Debian 12](https://www.debian.org/)). macOS can be used, but it may have some limitations. Notably, Windows or WSL will not work for hosting.

### Streaming/Forking - Running

Follow these steps to run a live fork of FYC using GitHub:

1) Install FYC using the provided command.
2) Change the directory to the FYC folder:
   ```bash
   cd FYC-Rewrite-V2
   ```
3) Download a new README file to replace the old one:
   ```bash
   rm README.md && wget https://raw.githubusercontent.com/HttpAnimation/FYC-Rewrite-V2/main/Git-Hold/README.md
   ```
4) Create a new repository on [GitHub](https://github.com/new) and make a branch called gh-pages.
5) Upload the files to the gh-pages branch via GitHub's website.
6) Go to the Deployments section and access your website using the provided URL.

### Streaming/Hosting - Running

Follow these steps to run a live site using your local hardware this will not work on [WSL](https://learn.microsoft.com/en-us/windows/wsl/install) only real Linux distros and [macOS](https://www.apple.com/macos):

7) Install the server 
    ```bash
    git clone https://raw.githubusercontent.com/HttpAnimation/FYC-Rewrite-V2/main/Server.sh
    ```
6) Run the website, and the IP address and port will be displayed (public IPs) **MAKE SURE YOU ARE NOT IN SUDO**.
    ```bash
    ./Server.sh
    ```
7) you may run into issues saying you don't have permission if so allow the script to do stuff by running the following command listed below
    ```bash
    chmod +x Server.sh
    ```
