# FYC-Rewrite V2

FYC (Fetch Your Content) provides a convenient way to load JSON data for torrents. It's important to note that FYC is not intended for piracy, so please refrain from using it for such purposes. UwU.

## Installation

To install FYC-Rewrite V2, follow the instructions in the [Installers.md](Installers.md) file. For the latest stable version, use the following terminal command:

```bash
mkdir FYC-Rewrite\ V2 && cd FYC-Rewrite\ V2 && git clone -b Stable https://github.com/HttpAnimation/FYC-Rewrite-V2.git && echo 'FYC has been installed'
```

## Repositories

Repositories serve as the means to get data into FYC. Refer to the documentation [here](https://github.com/HttpAnimation/FYC-Rewrite-V2/tree/Repo-docs) for more details.

## Reporting Issues

If you encounter any issues, please report them on the [issue page](https://github.com/HttpAnimation/FYC-Rewrite-V2/issues).

## Known Issues

Here is a list of known issues that are currently being addressed:

1) The stream button does not appear even when the string is true.

## Streaming

If you wish to stream your FYC page, you can choose one of the following methods:

1) Fork the repository
2) Host a network site

Each method has its pros and cons.

### Streaming/Forking - Information

Forking the repository is useful when you either cannot use a PC for running a lightweight server or cannot use Linux/macOS. However, keep in mind that everyone can see your site when you fork the repository, including GitHub. Ensure your site complies with [GitHub's TOS](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages) to avoid any issues.

### Streaming/Hosting - Information

Hosting is the best way to have an FYC site, but it has some downsides. No one outside your network can see your site, so avoid sharing your IP and port on platforms like Discord. Hosting requires a PC running Linux (recommended: [Ubuntu Server](https://ubuntu.com/download/server) or [Debian 12](https://www.debian.org/)). macOS can be used, but it may have some limitations. Notably, Windows or WSL will not work for hosting.

### Streaming/Forking - Running

Follow these steps to run a live fork of FYC using GitHub:

1) Install FYC using the provided command.
2) Change the directory to the FYC-Rewrite V2 folder:
   ```bash
   cd FYC-Rewrite\ V2
   ```
3) Download a new README file to replace the old one:
   ```bash
   rm README.md && wget https://raw.githubusercontent.com/HttpAnimation/FYC-Rewrite-V2/main/Git-Hold/README.md
   ```
4) Create a new repository on [GitHub](https://github.com/new) and make a branch called gh-pages.
5) Upload the files to the gh-pages branch via GitHub's website.
6) Go to the Deployments section and access your website using the provided URL.

### Streaming/Hosting - Running

Follow these steps to run a live site using your local hardware:

1) Change the directory to where the FYC files are located.
2) Download the server script:
   ```bash
   wget https://raw.githubusercontent.com/HttpAnimation/FYC-Rewrite-V2/main/Server.sh
   ```
3) Allow the script to run:
   ```bash
   chmod +x Server.sh
   ```
4) Run the website, and the IP address and port will be displayed (public IPs).
