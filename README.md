# FYC-Rewrite-V2/Repo-Docs
This page is documentation for the repo system that FYC uses.

## Prerequisites
1) IDE | A good one is [VSC](https://code.visualstudio.com/).
2) Basic json exp.

## Starting
First, make your repo folder to do this run the command listed below and make sure to replace the repo name with your repo's name.

```bash
mkdir repo-name
```
```bash
cd repo-name
```
Open the repo with [VSC](https://code.visualstudio.com/)
```bash
code .
```
If you are not using [VSC](https://code.visualstudio.com/) you can just open the folder with yours but you should now see a blank folder in [VSC](https://code.visualstudio.com/) make a new file called one of the following on which you are making a repo for.
```
Linux-Repo.json
Movies-Repo.json
```
Once you have you're file made copy this template that is also listed below.
```json
[
    {
        "Repo-Name": "NAMEHERE",
        "Movies": {
            "Torrent name": {
                "Name": "Torrent name",
                ".Torrent": ".torrent",
                "MagnetUrl": "manget",
                "Icon": "photo.png",
                "HasStreamURL": false,
                "StreamURL": "stream.mp4"
            }
        }
    }
]
```
Make sure not to replace the JSON code below with something else as it will break your repo.
```json
"Movies": {
```
## Adding a torrent
This part will go over making a torrent for your repo.

### Repo name
1) First make your repo name do so replace **NAMEHERE** with the name you want for this let's use **Dafly**
    ```json
    "Repo-Name": "NAMEHERE",
    ```
    ```json
    "Repo-Name": "Dafly",
    ```
### Torrent name
2) Now we can make an item for this am gonna use this [Archive.org listing](https://archive.org/details/silent-santa-claus). First add the torrent name
    ```json
    "Torrent name": {
        "Name": "Torrent name",
    ```
    ```json
    "Silent Santa Claus 1925": {
        "Name": "Silent Santa Claus 1925",
    ```
### .Torrent file
3) Now we can go about adding the main info to the torrent. Let's start with the .torrent file to do this copy the diract link for the file.
    ```json
    ".Torrent": ".torrent",
    ```
    ```json
    ".Torrent": "https://archive.org/download/silent-santa-claus/silent-santa-claus_archive.torrent",
    ```
### Manget link
4) Now we can go about adding the magnet link this should always start ***magnet:?*** If you only have a .torrent file head over to [this](https://nutbread.github.io/t2m/) website to get a magnet url for that file.
    ```json
    "MagnetUrl": "manget",
    ```
    ```json
    "MagnetUrl": "magnet:?xt=urn:btih:Q7MIUYJHI26QJIRGISQIO6QFIBDA572P&dn=silent-santa-claus&tr=http%3A%2F%2Fbt1.archive.org%3A6969%2Fannounce",
    ```
### Icon
5) You can now add an icon this is the photo that will get displayed on the fyc website you might have to host this yourself or use a free photo upload site.
    ```json
    "Icon": "photo.png",
    ```
    ```json
    "Icon": "icon.jpg",
    ```
### Streaming
6) For streaming this is gonna be a raw video they can go to instead then downloading. If you don't have this keep this false if you do then can be set to true.
    ```json
    "HasStreamURL": false,
    ```
    ```json
    "HasStreamURL": true,
    ```
### Streaming URL
7) If you don't have a stream url be free to skip and leave the box the same. Make sure you have the stream url on then set the url with the StreamURL.
    ```json
    "HasStreamURL": true,
    ```
    ```json
    "StreamURL": "https://ia801700.us.archive.org/0/items/silent-santa-claus/Santa%20Claus.mp4"
    ```
### Adding on
8) If you would like to another torrent to your repo add the following to your code.
    ```json
    },
    "Torrent name": {
    "Name": "Torrent name",
    ".Torrent": ".torrent",
    "MagnetUrl": "manget",
    "Icon": "photo.png",
    "HasStreamURL": false,
    "StreamURL": "stream.mp4"
    }
    ```

### EXP
Now you're repo should look like this something like this.
```json
{
    "Repo-Name": "Dafly",
    "Movies": {
        "Silent Santa Claus 1925": {
            "Name": "Silent Santa Claus 1925",
            ".Torrent": "https://archive.org/download/silent-santa-claus/silent-santa-claus_archive.torrent",
            "MagnetUrl": "magnet:?xt=urn:btih:Q7MIUYJHI26QJIRGISQIO6QFIBDA572P&dn=silent-santa-claus&tr=http%3A%2F%2Fbt1.archive.org%3A6969%2Fannounce",
            "Icon": "icon.jpg",
            "HasStreamURL": true,
            "StreamURL": "https://ia801700.us.archive.org/0/items/silent-santa-claus/Santa%20Claus.mp4"
        },
        "Torrent name": {
            "Name": "Torrent name",
            ".Torrent": ".torrent",
            "MagnetUrl": "magnet",
            "Icon": "photo.png",
            "HasStreamURL": false,
            "StreamURL": "stream.mp4"
        }
    }
}
```


If so then be free to move on and add you're repo to fyc
