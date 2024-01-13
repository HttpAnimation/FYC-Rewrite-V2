# FYC-Rewrite V2
FYC is a way for loading JSON data for torrent FYC is not made for piracy so just don't use it for that UwU.

## Installing
If you would like to install a version go over this [file](Installers.md) and that will have all the commands for installing all versions if you would like the newest stable tho heres the install command just open a terminal and run the command.

```bash
mkdir FYC-Rewrite\ V2 && cd FYC-Rewrite\ && git clone -b Stable https://github.com/HttpAnimation/FYC-Rewrite-V2.git && cd ../ && echo 'FYC has been installed'
```

## Repos
Repos are the way of getting data into FYC as of writing this I have not made the documentation for making a repo but it will soon be in place if you would like to make a repo already you can look at this [branch](https://github.com/HttpAnimation/FYC-Rewrite-V2) for doing so. There is already a default Repo in FYC which is where all verified repos are in.

## Report issues
If you would like to report an issue head over to the issue page which can be found [here](https://github.com/HttpAnimation/FYC-Rewrite-V2/issues).

## Known issues
Here is a list of known issues am working on.

1) The stream button does not show up even when the string is true.

## Streaming
If you would like to stream you're FYC page you can do one of the following.

1) Fork this repo
2) Host a network site

Now each one has some drawbacks and gains.

## Streaming/Forking - info
Forking the repo is useful when you either have a pc you can't use for running a light weight server or you can't use Linux/macOS in which case you would want to fork the repo but when you do know this **EVERYONE CAN SEE YOU'RE SITE** witch means Github can also see the site so you can't have anything on it that breaks the [Github TOS](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages) and if you do break them you can get banned from Github which sucks so just keep it normal like the stuff you would find on [Archive](archive.org) as you don't wanna be sailing the high seas mate ;). 

## Streaming/Hosting - info
This is the best way of having an FYC but it has a few downers so first of all no one can see you're site if they are not on your network so don't just send your mate a URL on [Discord](https://discord.com) with you're ip and port on it because it's not gonna work for that you will need a fork or to port forward witch I have no idea how to do. You will also need a pc running Linux now I would recommend [Ubuntu server](https://ubuntu.com/download/server) or [Debian 12](https://www.debian.org/News/2023/20230610) also [macOS](apple.com) can be used but I have not tested it out so some stuff might not work right  but **[Windows](microsoft.com) OR [WSL](https://learn.microsoft.com/en-us/windows/wsl/install) CAN NOT AND WILL NOT WORK** but besides these decides this is gonna be the best way of having a site.

## Streaming/Forking - running
This guide will follow the steps of running a live fork of FYC using Github you will need to use a pc just for a little bit to get the needed files.

1) Install FYC this command can be found above
2) cd into that dir
```
cd FYC-Rewrite\ V2
```
3) Download a new file to replace a old one
```
rm README.md && wget https://raw.githubusercontent.com/HttpAnimation/FYC-Rewrite-V2/main/Git-Hold/README.md
```
4) Now go to the [Github make repo](https://github.com/new) site. once there you can do what ever with the name and leave everything else blank.

5) Make a new branch called gh-pages a guide for that can be found [here](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository).

6) upload the files to that branch by clicking Add file -> Upload files.

8) Go to the Deployments
![photo](https://github.com/HttpAnimation/FYC-Rewrite-V2/blob/main/Screenshot%202024-01-13%20at%2002-40-13%20HttpAnimation_awdawdawd%20at%20gh-pages.png?raw=true)

9) Go to the webiste using the provided url you get.
![photo](https://github.com/HttpAnimation/FYC-Rewrite-V2/blob/main/Screenshot%202024-01-13%20at%2002-42-15%20Deployments%20%C2%B7%20HttpAnimation_awdawdawd.png?raw=true)
## Streaming/Hosting - running
This guide will follow the steps of running a live site using you're local hardware. You can either use your main pc or not but it must be running some sort of unix either macOS or Linux and [Python3](https://www.python.org/) must be installed this script will not work with out it

1) cd into the dir where the fyc files are at you should see something like this when you ls the dir.
    ```bash
    httpanimations@Https-iMac Stable % ls
    Configs                 LICENSE                 Templates               index.html
    Credits.html            Q&A.html                TorrentScripts          styles.css
    Dev-Classes.html        README.md               V1-Devs.html
    httpanimations@Https-iMac Stable % 
    ```
2) Once you are in then download the server with the following command listed below
    ```bash
    wget https://raw.githubusercontent.com/HttpAnimation/FYC-Rewrite-V2/main/Server.sh
    ```
3) Now allow the script to run.
    ```bash
    chmod +x Server.sh
    ```
4) Now run the website the ip address and port will show up don't worry they are just public ip's.
    ```bash
    ./Server.sh
    ```
