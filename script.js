const urlInput = document.getElementById('url-input');
const loadButton = document.getElementById('load-button');
const fullscreenButton = document.getElementById('fullscreen-button');
const contentFrame = document.getElementById('content-frame');

// Function to load the URL into the iframe
function loadUrl() {
    const url = urlInput.value.trim();
    // Basic check if URL is not empty
    if (url) {
        // Add https:// if missing (very basic check)
        let fullUrl = url;
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            fullUrl = 'https://' + url;
            // Optional: update input field visually
            // urlInput.value = fullUrl;
        }
        console.log(`Loading: ${fullUrl}`);
        contentFrame.src = fullUrl;
    } else {
        console.log("URL input is empty.");
        // Optionally clear the frame or show a message
        // contentFrame.src = 'about:blank';
    }
}

// Function to request fullscreen for the iframe
function goFullscreen() {
    if (contentFrame.requestFullscreen) {
        contentFrame.requestFullscreen();
    } else if (contentFrame.mozRequestFullScreen) { // Firefox
        contentFrame.mozRequestFullScreen();
    } else if (contentFrame.webkitRequestFullscreen) { // Chrome, Safari, Opera
        contentFrame.webkitRequestFullscreen();
    } else if (contentFrame.msRequestFullscreen) { // IE/Edge
        contentFrame.msRequestFullscreen();
    } else {
        alert("Fullscreen API is not supported by your browser.");
    }
}

// Event Listeners
loadButton.addEventListener('click', loadUrl);
fullscreenButton.addEventListener('click', goFullscreen);

// Optional: Load URL when Enter key is pressed in the input field
urlInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent default form submission if any
        loadUrl();
    }
});
