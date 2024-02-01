# FYC-Rewrite-V2/Repo-Docs

This document provides documentation for the repository system used by FYC.

## Prerequisites

1. **IDE:** A good choice is [Visual Studio Code](https://code.visualstudio.com/).
2. **Basic JSON experience.**

## Getting Started

1. Create your repository folder using the following commands, replacing "repo-name" with your repository's name.

    ```bash
    mkdir repo-name
    cd repo-name
    ```

2. Open the repository with [Visual Studio Code](https://code.visualstudio.com/).

    ```bash
    code .
    ```

    If you're not using [Visual Studio Code](https://code.visualstudio.com/), open the folder with your preferred IDE. You should now see a blank folder in [Visual Studio Code](https://code.visualstudio.com/). Create a new file with one of the following names, depending on the type of repository:

    - `Linux-Repo.json`
    - `Movies-Repo.json`

3. Once your file is created, copy the template provided below:

    ```json
    [
        {
            "Repo-Name": "NAMEHERE",
            "Movies": {
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
    ]
    ```

    Ensure not to replace the JSON code below with something else as it will break your repository.

    ```json
    "Movies": {
    ```

## Adding a Torrent

This section will guide you on how to add a torrent to your repository.

### Repo Name

1. Replace **NAMEHERE** with your desired repository name. For example, using "Dafly":

    ```json
    "Repo-Name": "Dafly",
    ```

### Torrent Name

2. Add an item for the torrent, using [Archive.org listing](https://archive.org/details/silent-santa-claus) as an example:

    ```json
    "Silent Santa Claus 1925": {
        "Name": "Silent Santa Claus 1925",
    ```

### .Torrent File

3. Add the direct link for the .torrent file:

    ```json
    ".Torrent": "https://archive.org/download/silent-santa-claus/silent-santa-claus_archive.torrent",
    ```

### Magnet Link

4. Add the magnet link, ensuring it starts with "magnet:?":

    ```json
    "MagnetUrl": "magnet:?xt=urn:btih:Q7MIUYJHI26QJIRGISQIO6QFIBDA572P&dn=silent-santa-claus&tr=http%3A%2F%2Fbt1.archive.org%3A6969%2Fannounce",
    ```

### Icon

5. Add an icon, which is the photo displayed on the FYC website. Host it yourself or use a free photo upload site:

    ```json
    "Icon": "icon.jpg",
    ```

### Streaming

6. For streaming, set "HasStreamURL" to `true` if you have a raw video link, otherwise keep it `false`:

    ```json
    "HasStreamURL": true,
    ```

### Streaming URL

7. If you have a stream URL, set it:

    ```json
    "StreamURL": "https://ia801700.us.archive.org/0/items/silent-santa-claus/Santa%20Claus.mp4"
    ```

### Adding More Torrents

8. To add another torrent, follow the format:

    ```json
    },
    "Torrent name": {
        "Name": "Torrent name",
        ".Torrent": ".torrent",
        "MagnetUrl": "magnet",
        "Icon": "photo.png",
        "HasStreamURL": false,
        "StreamURL": "stream.mp4"
    }
    ```

## Example Repository

Your repository should now look like this:

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
If everything looks good, you can now proceed to add your repository to FYC.