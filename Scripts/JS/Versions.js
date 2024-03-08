function showError(message) {
    const errorMessage = document.createElement('div');
    errorMessage.className = 'error-message';
    errorMessage.textContent = message;
    document.body.insertBefore(errorMessage, document.getElementById('sidebar'));
}

function handleButtonClick(buttonName, link) {
    console.log(`Button clicked: ${buttonName}`);
    if (link) {
        console.log(`Redirecting to: ${link}`);
        window.location.href = link;
    }
}

function handleSourceButtonClick(sourceUrl) {
    console.log(`Source button clicked. Opening source URL: ${sourceUrl}`);
    window.open(sourceUrl, '_blank');
}

fetch('Configs/Replers/Versions.json')
    .then(response => response.json())
    .then(data => {
        const repositories = data[0]['Repositories'];
        const contentElement = document.getElementById('content');

        const fetchRepoData = async (repoURL) => {
            try {
                const response = await fetch(repoURL);
                const repoData = await response.json();
        
                const movies = repoData['Movies'] || repoData[0]['Movies'];
        
                if (movies) {
                    Object.keys(movies).forEach(key => {
                        const movie = movies[key];
                        const movieElement = document.createElement('div');
                        movieElement.innerHTML = `
                            <h1>${movie['Name']}</h1>
                            <img src="${movie['Icon']}" alt="Movie Icon">
                            <a href="${movie['.Torrent']}" target="_blank" class="movie-button">Download Tar.gz / Linux | macOS</a>
                            <a href="${movie['MagnetUrl']}" target="_blank" class="movie-button">Download Zip / Windows</a>
                            <button class="source-button" onclick="handleSourceButtonClick('${movie['Source']}')">Source</button>
                        `;
                        if (movie['HasStreamURL'] === true) {
                            const streamButton = document.createElement('a');
                            streamButton.href = movie['StreamURL'];
                            streamButton.classList.add('movie-button');
                            streamButton.textContent = 'Open Stream';
                            movieElement.appendChild(streamButton);
                        }
                        contentElement.appendChild(movieElement);
                    });
                } else {
                    console.error(`Error fetching repo data from ${repoURL}: Invalid data format.`);
                    showError(`Error fetching repo data from ${repoURL}.`);
                }
            } catch (error) {
                console.error(`Error fetching repo data from ${repoURL}:`, error);
                showError(`Error fetching repo data from ${repoURL}.`);
            }
        };

        repositories.forEach(repoURL => {
            const correctedRepoURL = repoURL.trim();
            fetchRepoData(correctedRepoURL);
        });
    })
    .catch(error => {
        console.error('Error fetching repo list you might need cross-origin:', error);
    });

console.log('Versions.js | Loaded');
