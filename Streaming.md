## Streaming

If you wish to stream your FYC page, you can choose one of the following methods:

1) Fork the repository
2) Host a network site

Each method has its pros and cons.

### Streaming/Forking - Information

Forking the repository is useful when you cannot use a PC to run a lightweight server or use Linux/macOS. However, remember that everyone can see your site when you fork the repository, including GitHub. Ensure your site complies with [GitHub's TOS](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages) to avoid any issues if you are using a repo that is giving you stolen content remove it or use a local version.

### Streaming/Hosting - Information
#### This is only needed if you choose not to install the server during the installation.
Hosting the FYC makes it way more secure and private what you are doing online all you need is a Unix PC or a server a recommended light wight server is [Fedora server](https://fedoraproject.org/server/) no one but on your network can see what you use the site for eg. mods/repos.

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
Follow these steps to run a live server of FYC:

1) Install FYC
   This command can be found above.
2) Install the server with wget or curl
    #### wget
    ```bash
    wget "https://raw.githubusercontent.com/HttpAnimation/FYC-Rewrite-V2/NodeJSSever/InstallWget.sh" && chmod +x InstallWget.sh && bash InstallWget.sh
    ```
    #### curl
    ```bash
    curl "https://raw.githubusercontent.com/HttpAnimation/FYC-Rewrite-V2/NodeJSSever/InstallCurl.sh" && chmod +x InstallCurl.sh && bash InstallCurl.sh 
    ```