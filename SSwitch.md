# FYC-Rewrite\ V2/SSwitch.md
The move from a bash based server to a node.js based one.

## Why?
Switch from a bash server to a node.js server makes it way easyier to maintain and port to new os's and maybe if Windows ever gets a port of FYC the sever could be ported same day as minimal code chages will take place.

## How to switch
If you would like to switch from the old server to the node.js 
1) backup your repos and put them into a new folder.
2) Remove the old server.sh file
3) Run one of the following command in youre terminal.
    #### wget
    ```bash
    wget "https://raw.githubusercontent.com/HttpAnimation/FYC-Rewrite-V2/NodeJSSever/InstallWget.sh" && chmod +x InstallWget.sh && ./InstallWget.sh
    ```
    #### curl
    ```bash
    curl "https://raw.githubusercontent.com/HttpAnimation/FYC-Rewrite-V2/NodeJSSever/InstallCurl.sh" && chmod +x InstallCurl.sh && ./InstallCurl.sh 
    ```