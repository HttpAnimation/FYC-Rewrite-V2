## Adding a repo
To add a repo open the FYC folder with the terminal and **cd** over to wherever it's downloaded the default will be **/home/$user/home** it might be different so keep that in mind but once they run one of the following commands **[nano](https://www.nano-editor.org/)** is going to be installed for almost every distro and [macOS](https://www.apple.com/macos) and **[kate](https://kate-editor.org/)** is going to be included on most systems with [KDE Plasma](https://kde.org/plasma-desktop/) installed you can also open the file manually if you don't have one of the following IDEs installed.

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
"https://example.com/script.json"
```
If you add another repo make sure to add the **,** again it just tells [JSON](https://www.json.org/json-en.html) that there is a new repo am planning on making a GUI for managing repos without no code editing but for now this is the way.


