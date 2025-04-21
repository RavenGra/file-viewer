const urlInput = document.getElementById('url-input');
const loadButton = document.getElementById('load-button');
const fullscreenButton = document.getElementById('fullscreen-button');
const contentFrame = document.getElementById('content-frame');
const fullDumpDiv = document.getElementById('full-dump');

// Function to load the URL into the iframe
function loadUrl() {
    const url = urlInput.value.trim();
    if (url) {
        let fullUrl = url;
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            fullUrl = 'https://' + url;
        }
        contentFrame.src = fullUrl;
        // Display the formatted "full dump" information
        displayFullDump(url, fullUrl);
    }
}

// Function to display the full dump information
function displayFullDump(userInput, fullUrl) {
    const attachmentMetadata = `
========== FULL DUMP:
FILE ATTACHMENT=f21844c8e4034bb2801278a4f07b3b77
FILENAME=Home image.png 
URL=${fullUrl}
========== END OF FULL DUMP: FILE ATTACHMENT=f21844c8e4034bb2801278a4f07b3b77 ==========
    `;
    fullDumpDiv.textContent = attachmentMetadata; // Insert the formatted text
}

// Function to request fullscreen for the iframe
function goFullscreen() {
    if (contentFrame.requestFullscreen) {
        contentFrame.requestFullscreen();
    } else if (contentFrame.mozRequestFullScreen) {
        contentFrame.mozRequestFullScreen();
    } else if (contentFrame.webkitRequestFullscreen) {
        contentFrame.webkitRequestFullscreen();
    } else if (contentFrame.msRequestFullscreen) {
        contentFrame.msRequestFullscreen();
    } else {
        alert("Fullscreen API is not supported by your browser.");
    }
}

// Event Listeners
loadButton.addEventListener('click', loadUrl);
fullscreenButton.addEventListener('click', goFullscreen);

urlInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        loadUrl();
    }
});
