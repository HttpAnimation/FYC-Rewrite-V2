async function fetchMods() {
    const response = await fetch('https://raw.githubusercontent.com/HttpAnimation/FYC-Mod-Downloader/gh-pages/Mods.json');
    const mods = await response.json();
    const modList = document.getElementById('modList');
    
    mods.forEach(mod => {
        const modName = mod.Name;
        const modURL = mod.DownloadURL;
        const modDescription = mod.details;

        const modDiv = document.createElement('div');
        modDiv.classList.add('mod-info');

        const modNameElement = document.createElement('div');
        modNameElement.classList.add('mod-name');
        modNameElement.textContent = modName;
        modDiv.appendChild(modNameElement);

        const modDescriptionElement = document.createElement('div');
        modDescriptionElement.classList.add('mod-description');
        modDescriptionElement.textContent = modDescription;
        modDiv.appendChild(modDescriptionElement);

        const downloadButton = document.createElement('a');
        downloadButton.href = modURL;
        downloadButton.target = '_blank';
        downloadButton.textContent = 'Download';
        downloadButton.classList.add('download-button');
        modDiv.appendChild(downloadButton);

        modList.appendChild(modDiv);

        // Add a line break after each mod
        const lineBreak = document.createElement('hr');
        modList.appendChild(lineBreak);
    });
}
fetchMods();
