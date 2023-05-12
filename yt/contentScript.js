(() => {
  const controlsImg = [
    {
      src: chrome.runtime.getURL("assets/loop.jpg"),
      id: "yt-controls-loop",
      title: "Loop video",
    },
    {
      src: chrome.runtime.getURL("assets/stop.png"),
      id: "yt-controls-stop",
      title: "Stop video",
    },
    {
      src: chrome.runtime.getURL("assets/wishlist.jpg"),
      id: "yt-controls-wishlist",
      title: "Add to wishlist",
    },
    {
      src: chrome.runtime.getURL("assets/card.jpg"),
      id: "yt-controls-visibility",
      title: "Toogle info cards/end screen visibility",
    },
    {
      src: chrome.runtime.getURL("assets/cinema.jpg"),
      id: "yt-controls-cinema",
      title: "Cinema mode",
    },
    {
      src: chrome.runtime.getURL("assets/expand.jpg"),
      id: "yt-controls-expand",
      title: "Expand video",
    },
    {
      src: chrome.runtime.getURL("assets/popup.jpg"),
      id: "yt-controls-popup",
      title: "Popup Player",
    },
    {
      src: chrome.runtime.getURL("assets/screenshot.jpg"),
      id: "yt-controls-screenshot",
      title: "Screenshot",
    },
    {
      src: chrome.runtime.getURL("assets/speed.jpg"),
      id: "yt-controls-speed",
      title: "Speed",
    },
  ];
  const newVideoLoaded = () => {
    const controlsDivExist = document.getElementsByClassName("controls-div")[0];

    if (!controlsDivExist) {
      const controlsDiv = document.createElement("div");
      controlsDiv.className = "controls-div";
      controlsDiv.style.display = "flex";
      controlsDiv.style.alignItems = "center";
      controlsDiv.style.justifyContent = "flex-start";
      controlsDiv.style.gap = "10px";
      controlsDiv.style.marginBottom = "10px";

      controlsImg.map((img) => {
        const toggleBtn = document.createElement("img");
        toggleBtn.title = img.title;
        toggleBtn.id = img.id;
        toggleBtn.width = 20;
        toggleBtn.style.cursor = "pointer";
        toggleBtn.src = img.src;
        if (
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
          toggleBtn.style.filter = "invert(100%)";
          console.log("aaya");
        }
        controlsDiv.append(toggleBtn);
      });

      setTimeout(() => {
        const youtubeChrome =
          document.getElementsByClassName("ytd-watch-metadata")[0];
        if (!youtubeChrome) alert("Network slow, please refresh the page!");
        else {
          youtubeChrome.insertBefore(controlsDiv, youtubeChrome.firstChild);
        }
      }, 5000);
    }
  };
  newVideoLoaded();
  
})();
