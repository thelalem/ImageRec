// Get the button and the loading overlay
const analyzeButton = document.querySelector('.analyze-btn');
const loadingOverlay = document.getElementById('loading-overlay');

// Add an event listener to the analyze button
analyzeButton.addEventListener('click', function() {
    // Show the loading overlay
    loadingOverlay.style.display = 'flex';

    // Simulate a delay (e.g., waiting for the API response)
    setTimeout(function() {
        // After the analysis is done (simulate), hide the loading overlay
        loadingOverlay.style.display = 'none';

        // You can add your result processing code here
    }, 3000); // This is where the loading disappears after 3 seconds
});
