const togglePlayPause = document.getElementById("toggle_play_pause");

const toggle = () => {
  if (togglePlayPause.checked) {
    chrome.storage.sync.set({ togglePlayPause: true }).then(() => {
      console.log("Value is set");
    });
    // chrome.runtime.sendMessage({
    //   type: "REMOVE PLAY",
    // });

    chrome.runtime.sendMessage({
      greeting: "hello"
    }, function (response) {
      console.log(response);
    });



  } else {
    chrome.storage.sync.get(["togglePlayPause"]).then((result) => {
      console.log("Value currently is " + result.togglePlayPause);
    });
  }
};
togglePlayPause.addEventListener("click", toggle);
