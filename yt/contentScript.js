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
      title: "Screenshot: Make sure to take screenshot in highest quality",
    },
    {
      src: chrome.runtime.getURL("assets/speed.jpg"),
      id: "yt-controls-speed",
      title: "Speed",
    },
    // {
    //   src: chrome.runtime.getURL("assets/play.jpg"),
    //   id: "yt-controls-play",
    //   title: "Play",
    // },
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

  setTimeout(() => {
    const loopBtn = document.getElementById("yt-controls-loop");
    const stopBtn = document.getElementById("yt-controls-stop");
    const screenshotBtn = document.getElementById("yt-controls-screenshot");
    const fullScreenBtn = document.getElementById("yt-controls-expand");
    screenshotBtn.addEventListener("click", takeScreenshot);
    loopBtn.addEventListener("click", toggleLoop);
    stopBtn.addEventListener("click", toggleStop);
    fullScreenBtn.addEventListener("click", toggleFullScreen);
  }, 6000);

  const toggleLoop = () => {
    const video = document.getElementsByClassName(
      "video-stream html5-main-video"
    )[0];
    console.log(
      document.getElementsByClassName("video-stream html5-main-video")
    );
    if (video.loop) {
      video.loop = false;
    } else {
      video.loop = true;
    }
  };

  const toggleStop = () => {
    const video = document.getElementsByClassName(
      "video-stream html5-main-video"
    )[0];
    const stopBtn = document.getElementById("yt-controls-stop");
    if (video.paused) {
      video.play();
      stopBtn.src = chrome.runtime.getURL("assets/stop.png");
      stopBtn.title = "Stop video";
    } else {
      video.pause();
      stopBtn.src = chrome.runtime.getURL("assets/play.jpg");
      stopBtn.title = "Play video";
      stopBtn.style.filter = "invert(100%)";
    }
  };


  const takeScreenshot = async () => {
    const video = document.getElementsByClassName(
      "video-stream html5-main-video"
    )[0];
    const title = document.getElementsByClassName('style-scope ytd-watch-metadata')[1].innerText;
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0);
    const dataURI = canvas.toDataURL("image/jpeg");
    const a = document.createElement("a");
    a.href = dataURI;
    a.download = `Yt-Screenshot-${title}.jpg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const toggleFullScreen = () => {
    const video = document.getElementsByClassName(
      "video-stream html5-main-video"
    )[0];
    if (!document.fullscreenElement) {
      video.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

})();