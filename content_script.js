// content_script.js

// Function to pause the YouTube video
function pauseVideo() {
    let video = document.querySelector('video');
    if (video && !video.paused) {
        video.pause();
        console.log("Video paused because window lost focus.");
    }
}

// Function to resume the YouTube video (optional)
function playVideo() {
    let video = document.querySelector('video');
    if (video && video.paused) {
        video.play();
        console.log("Video resumed because window gained focus.");
    }
}

// Add event listeners to detect when the browser window loses or gains focus
window.addEventListener('blur', function() {
    pauseVideo();  // Pause video when the window loses focus (Alt+Tab to another window)
});

window.addEventListener('focus', function() {
    playVideo();  // Optional: Resume video when the window regains focus (user returns to the browser)
});
