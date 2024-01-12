// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
    console.log('Dark mode toggled');
    console.log('There should be no change on the site if there is then pls reload the page');
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
fetch('../Configs/Replers/Repo.json')
    .then(response => response.json())
    .then(data => {
        const repoURL = data[0]['Repo-1'];
        fetch(repoURL)
            .then(response => response.json())
            .then(repoData => {
                // Display multiple movies in the main content area
                const movies = repoData[0]['Movies'];
                const contentElement = document.getElementById('content');
                Object.keys(movies).forEach(key => {
                    const movie = movies[key];
                    const movieElement = document.createElement('div');
                    movieElement.innerHTML = `
                        <h1>${movie['Name']}</h1>
                        <img src="${movie['Icon']}" alt="Movie Icon">
                        <a href="${movie['.Torrent']}" target="_blank" class="movie-button">Download Torrent</a>
                        <a href="${movie['MagnetUrl']}" class="movie-button">Magnet Link</a>
                    `;
                    if (movie['HasStreamURL'] === 'true') {
                        const streamButton = document.createElement('a');
                        streamButton.href = movie['StreamURL'];
                        streamButton.classList.add('movie-button');
                        streamButton.textContent = 'Open Stream';
                        movieElement.appendChild(streamButton);
                    }
                    contentElement.appendChild(movieElement);
                });
            })
            .catch(error => {
                console.error('Error fetching repo data:', error);
                showError('Error fetching repo data. Please install the CORS Everywhere extension.');
            });
    })
    .catch(error => {
        console.error('Error fetching repo list:', error);
        showError('Error fetching repo list. Please install the CORS Everywhere extension.');
    });
