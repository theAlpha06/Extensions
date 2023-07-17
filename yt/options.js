let togglePlayPause = document.getElementById("toggle_play_pause");
let controlsPosition = document.getElementById("controls__position");

chrome.storage.sync.get(['togglePlayPause', 'controlsPosition']).then((result) => {
  togglePlayPause.checked = result.togglePlayPause;
  controlsPosition.value = result.controlsPosition;
})

const toggle = () => {
  if (togglePlayPause.checked) {
    chrome.storage.sync.set({ togglePlayPause: true });
  } else {
    chrome.storage.sync.set({ togglePlayPause: false });
  }
};

const controlPosition = () => {
  chrome.storage.sync.set({ controlsPosition: controlsPosition.value });
}

togglePlayPause.addEventListener("click", toggle);
controlsPosition.addEventListener("change", controlPosition);