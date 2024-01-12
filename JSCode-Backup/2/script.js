// Movies.js

// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
    console.log('Dark mode toggled');
}

// Function to show an error message
function showError(message) {
    const errorMessage = document.createElement('div');
    errorMessage.className = 'error-message';
    errorMessage.textContent = message;
    document.body.insertBefore(errorMessage, document.getElementById('sidebar'));
}

// Function to handle button clicks
function handleButtonClick(buttonName, link) {
    console.log(`Button clicked: ${buttonName}`);
    if (link) {
        console.log(`Redirecting to: ${link}`);
        window.location.href = link;
    }
}

// Fetch and process JSON data
fetch('Configs/Replers/Repo.json')
    .then(response => response.json())
    .then(data => {
        const repoURL = data[0]['Repo-1'];
        fetch(repoURL)
            .then(response => response.json())
            .then(repoData => {
                // Iterate over movies in the repo
                Object.entries(repoData[0]['Movies']).forEach(([key, movie]) => {
                    // Set movie details in the content section
                    document.getElementById('content').innerHTML += `
                        <div id="${key}">
                            <h1>${movie['Name']}</h1>
                            <img src="${movie['Icon']}" alt="Movie Icon">
                            <a class="movie-button" href="${movie['.Torrent']}" target="_blank" onclick="handleButtonClick('Download Torrent', this.href)">Download Torrent</a>
                            <a class="movie-button" href="${movie['MagnetUrl']}" onclick="handleButtonClick('Magnet Link', this.href)">Magnet Link</a>
                            ${movie['HasStreamURL'] === 'true' ? `<a class="movie-button" href="${movie['StreamURL']}" onclick="handleButtonClick('Open Stream', this.href)">Open Stream</a>` : ''}
                        </div>
                    `;
                });
            })
            .catch(error => {
                console.error('Error fetching repo data:', error);
                showError('Error fetching repo data. Please install the CORS Everywhere extension.');
            });
    })
    .catch(error => {
        console.error('Error fetching repo data:', error);
        showError('Error fetching repo data. Please install the CORS Everywhere extension.');
    });
