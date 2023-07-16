const togglePlayPause = document.getElementById("toggle_play_pause");
const controlsPosition = document.getElementById("controls__position");

const toggle = () => {
  if (togglePlayPause.checked) {
    chrome.storage.sync.set({ togglePlayPause: true }).then(() => {
      console.log("Value is set");
    });
    chrome.storage.sync.get(["togglePlayPause"]).then((result) => {
      console.log("Value currently is " + result.togglePlayPause);
    });
  } else {
    chrome.storage.sync.set({ togglePlayPause: false }).then(() => {
      console.log("Value is reset");
    });
    chrome.storage.sync.get(["togglePlayPause"]).then((result) => {
      console.log("Value currently is " + result.togglePlayPause);
    });
  }
};
togglePlayPause.addEventListener("click", toggle);

const controlPosition = () => {
  chrome.storage.sync.set({ controlsPosition: controlsPosition.value });
}
controlsPosition.addEventListener("change", controlPosition);