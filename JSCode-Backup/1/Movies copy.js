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
            .then(movieData => {
                const movie = movieData[0]['Movies']['Short-1'];

                // Set movie details in the content section
                document.getElementById('content').innerHTML = `
                    <h1>${movie['Name']}</h1>
                    <img src="${movie['Icon']}" alt="Movie Icon">
                `;

                // Set buttons with appropriate links
                const torrentButton = document.getElementById('torrentButton');
                torrentButton.href = movie['.Torrent'];
                torrentButton.target = '_blank'; // Open in a new tab
                torrentButton.addEventListener('click', () => handleButtonClick('Download Torrent', torrentButton.href));

                const magnetButton = document.getElementById('magnetButton');
                magnetButton.href = movie['MagnetUrl'];
                magnetButton.addEventListener('click', () => handleButtonClick('Magnet Link', magnetButton.href));

                const streamButton = document.getElementById('streamButton');
                // Show/hide stream button based on HasStreamURL value
                if (movie['HasStreamURL'] === 'true') {
                    streamButton.style.display = 'block';
                    streamButton.href = movie['StreamURL'];
                    streamButton.addEventListener('click', () => handleButtonClick('Open Stream', streamButton.href));
                }
            })
            .catch(error => {
                console.error('Error fetching movie data:', error);
                showError('Error fetching movie data. Please install the CORS Everywhere extension.');
            });
    })
    .catch(error => {
        console.error('Error fetching repo data:', error);
        showError('Error fetching repo data. Please install the CORS Everywhere extension.');
    });
