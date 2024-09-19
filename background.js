let isYouTubeActive = false;

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url.includes('youtube.com/watch')) {
    isYouTubeActive = true;
  } else if (isYouTubeActive && !tab.url.includes('youtube.com/watch')) {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      function: pauseYouTubeVideo
    });
    isYouTubeActive = false;
  }
});

function pauseYouTubeVideo() {
  const videos = document.querySelectorAll('video');
  videos.forEach(video => {
    if (!video.paused) {
      video.pause();
    }
  });
}
