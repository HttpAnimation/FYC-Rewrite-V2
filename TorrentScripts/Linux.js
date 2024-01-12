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
fetch('../Configs/Replers/Repo.json')
    .then(response => response.json())
    .then(data => {
        const repo = data[0];

        // Display multiple items in the main content area
        const contentElement = document.getElementById('content');

        // Display Linux items
        const linuxItems = repo['Linux'];
        if (linuxItems) {
            Object.keys(linuxItems).forEach(key => {
                const linuxItem = linuxItems[key];
                const linuxElement = document.createElement('div');
                linuxElement.innerHTML = `
                    <h1>${linuxItem['Name']}</h1>
                    <img src="${linuxItem['Icon']}" alt="Linux Icon">
                    <a href="${linuxItem['.Torrent']}" target="_blank" class="linux-button">Download Torrent</a>
                    <a href="${linuxItem['MagnetUrl']}" class="linux-button">Magnet Link</a>
                `;
                if (linuxItem['HasStreamURL'] === 'true') {
                    const streamButton = document.createElement('a');
                    streamButton.href = linuxItem['StreamURL'];
                    streamButton.classList.add('linux-button');
                    streamButton.textContent = 'Open Stream';
                    linuxElement.appendChild(streamButton);
                }
                contentElement.appendChild(linuxElement);
            });
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        showError('Error fetching data. Please install the CORS Everywhere extension.');
    });
