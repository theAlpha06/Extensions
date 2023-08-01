
const controlsImg = [
  {
    src: chrome.runtime.getURL("assets/loop.jpg"),
    id: "yt-controls-loop",
    title: "Loop video",
    key: "toggleLoop"
  },
  {
    src: chrome.runtime.getURL("assets/stop.png"),
    id: "yt-controls-stop",
    title: "Stop video",
    key: "togglePlayPause"
  },
  {
    src: chrome.runtime.getURL("assets/wishlist.jpg"),
    id: "yt-controls-wishlist",
    title: "Add to wishlist",
    key: "addWishlist"
  },
  {
    src: chrome.runtime.getURL("assets/card.jpg"),
    id: "yt-controls-visibility",
    title: "Remove info cards/end screen visibility",
    key: "toggleCards"
  },
  {
    src: chrome.runtime.getURL("assets/cinema.jpg"),
    id: "yt-controls-cinema",
    title: "Cinema mode",
    key: "toggleCinema"
  },
  {
    src: chrome.runtime.getURL("assets/expand.jpg"),
    id: "yt-controls-expand",
    title: "Expand video",
    key: "toggleExpand"
  },
  {
    src: chrome.runtime.getURL("assets/popup.jpg"),
    id: "yt-controls-popup",
    title: "Popup Player",
    key: "togglePopup"
  },
  {
    src: chrome.runtime.getURL("assets/screenshot.jpg"),
    id: "yt-controls-screenshot",
    title: "Screenshot: Make sure to take screenshot in highest quality",
    key: "toggleScreenshot"
  },
  {
    src: chrome.runtime.getURL("assets/minus.png"),
    id: "yt-controls-speed-minus",
    title: "Decrease speed",
    key: "toggleMinus"
  },
  {
    src: chrome.runtime.getURL("assets/speed.jpg"),
    id: "yt-controls-speed",
    title: "Speed",
    key: "toggleSpeed"
  },
  {
    src: chrome.runtime.getURL("assets/plus.png"),
    id: "yt-controls-speed-plus",
    title: "Increase speed",
    key: "togglePlus"
  },
  {
    src: chrome.runtime.getURL("assets/download.png"),
    id: "yt-controls-download",
    title: "Download video",
    key: "toggleDownload"
  },
  {
    src: chrome.runtime.getURL("assets/setting.jpg"),
    id: "yt-controls-setting",
    title: "Open setting page",
    key: "toggleSetting"
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
      let key = img?.key;
      if (key) {
        chrome.storage.sync.get(key).then((result) => {
          if (Object.values(result)[0]) {
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
          }
        })
      }
    });
    const container = document.createElement("div");
    container.className = "yt_plus_container";
    container.appendChild(controlsDiv);

    chrome.storage.sync.get(["controlsPosition"]).then((result) => {
      if (result.controlsPosition === "1") {
        setTimeout(() => {
          const yt_container = document.getElementById("columns");
          if (yt_container) {
            controlsDiv.style.marginBottom = "0px";
            yt_container.appendChild(container);
          }
        }, 5000)
      }
      else if (result.controlsPosition === "2") {
        setTimeout(() => {
          const yt_container = document.getElementById("columns");
          if (yt_container) {
            controlsDiv.style.marginBottom = "0px";
            container.style.left = "1rem";
            container.style.transform = "translateX(0px)";
            yt_container.appendChild(container);
          }
        }, 5000)
      }
      else if (result.controlsPosition === "3") {
        setTimeout(() => {
          const yt_container = document.getElementById("columns");
          if (yt_container) {
            controlsDiv.style.marginBottom = "0px";
            container.style.right = "1rem";
            container.style.left = "unset";
            container.style.transform = "translateX(0px)";
            yt_container.appendChild(container);
          }
        }, 5000)
      }
      else if (result.controlsPosition === "4") {
        setTimeout(() => {
          const youtubeChrome =
            document.getElementsByClassName("ytd-watch-metadata")[0];
          if (youtubeChrome) {
            youtubeChrome.insertBefore(controlsDiv, youtubeChrome.firstChild);
          }
        }, 5000);
      } else {
        setTimeout(() => {
          const yt_container = document.getElementById("columns");
          if (yt_container) {
            controlsDiv.style.marginBottom = "0px";
            yt_container.appendChild(container);
          }
        }, 5000)
      }
    });
  }

};
newVideoLoaded();

setTimeout(() => {
  const loopBtn = document.getElementById("yt-controls-loop");
  const stopBtn = document.getElementById("yt-controls-stop");
  const toggleCards = document.getElementById("yt-controls-visibility");
  const screenshotBtn = document.getElementById("yt-controls-screenshot");
  const fullScreenBtn = document.getElementById("yt-controls-expand");
  const speedBtn = document.getElementById("yt-controls-speed");
  const speedMinusBtn = document.getElementById("yt-controls-speed-minus");
  const speedPlusBtn = document.getElementById("yt-controls-speed-plus");
  const downloadBtn = document.getElementById("yt-controls-download");
  const popupBtn = document.getElementById("yt-controls-popup");
  const setting = document.getElementById("yt-controls-setting");
  screenshotBtn?.addEventListener("click", takeScreenshot);
  loopBtn?.addEventListener("click", toggleLoop);
  stopBtn?.addEventListener("click", toggleStop);
  toggleCards?.addEventListener("click", toggleCardsVisibility);
  fullScreenBtn?.addEventListener("click", toggleFullScreen);
  speedBtn?.addEventListener("mouseover", currentSpeed);
  speedBtn?.addEventListener("scroll", (e) => incDecSpeed(e));
  speedMinusBtn?.addEventListener("click", decreaseSpeed);
  speedPlusBtn?.addEventListener("click", increaseSpeed);
  downloadBtn?.addEventListener("click", downloadVideo);
  popupBtn?.addEventListener("click", popupPlayer);
  setting?.addEventListener("click", openOptionsPage);
}, 6000);

const toggleLoop = () => {
  const video = document.getElementsByClassName(
    "video-stream html5-main-video"
  )[0];
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
  const title = document.getElementsByClassName(
    "style-scope ytd-watch-metadata"
  )[1].innerText;
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
};

const isSpeedContainerExist = () => {
  const speedDiv = document.getElementsByClassName("speed_indicator")[0];
  if (speedDiv) {
    speedDiv.remove();
  }
  return;
}

const speedContainer = () => {
  const videoContainer = document.getElementsByClassName("style-scope ytd-player")[0];
  const speedDiv = document.createElement("div");
  speedDiv.className = "speed_indicator";
  videoContainer?.appendChild(speedDiv);
  return speedDiv;
}

const incDecSpeed = (e) => {
  const speedDiv = speedContainer();
  const video = document.getElementsByClassName(
    "video-stream html5-main-video"
  )[0];
  if (e.deltaY > 0) {
    video.playbackRate = video.playbackRate - 0.1;
    speedDiv.innerText = `Speed: ${video.playbackRate.toFixed(1)}`;
    setTimeout(() => {
      speedDiv.remove();
    }, 2000);
  } else {
    video.playbackRate = video.playbackRate + 0.1;
    speedDiv.innerText = `Speed: ${video.playbackRate.toFixed(1)}`;
    setTimeout(() => {
      speedDiv.remove();
    }, 2000);
  }
}



const currentSpeed = () => {
  isSpeedContainerExist()
  const speedDiv = speedContainer();
  const video = document.getElementsByClassName(
    "video-stream html5-main-video"
  )[0];
  speedDiv.innerText = `Speed: ${video.playbackRate.toFixed(1)}`;
  setTimeout(() => {
    speedDiv.remove();
  }, 2000)
};

const decreaseSpeed = () => {
  if (isSpeedContainerExist()) {}
  const speedDiv = speedContainer();
  const video = document.getElementsByClassName(
    "video-stream html5-main-video"
  )[0];
  video.playbackRate = video.playbackRate - 0.1;
  speedDiv.innerText = `Speed: ${video.playbackRate.toFixed(1)}`;
  setTimeout(() => {
    speedDiv.remove();
  }, 2000);
};

const increaseSpeed = () => {
  isSpeedContainerExist()
  const speedDiv = speedContainer();
  const video = document.getElementsByClassName(
    "video-stream html5-main-video"
  )[0];
  video.playbackRate = video.playbackRate + 0.1;
  speedDiv.innerText = `Speed: ${video.playbackRate.toFixed(1)}`;
  setTimeout(() => {
    speedDiv.remove();
  }, 2000);
};

const downloadVideo = async () => {
  // const downloadBtn = document.getElementById("yt-controls-download");
  // const video = document.getElementsByClassName(
  //   "video-stream html5-main-video"
  // )[0];
  // const title = document.getElementsByClassName(
  //   "style-scope ytd-watch-metadata"
  // )[1].innerText;
  // const a = document.createElement("a");
  // a.href = video.src;
  // a.download = `Yt-Video-${title}.mp4`;
  // document.body.appendChild(a);
  // a.click();
  // document.body.removeChild(a);
  console.log('first')
  const url = window.location.href;
  const videoId = url.split("v=")[1];
  console.log(videoId)
  chrome.runtime.sendMessage({ message: "downloadVideo", videoId: videoId });

  // res.header('Content-Disposition', 'attachment; filename="video.mp4"');
  // ytdl(URL, {
  //     format: 'mp4'
  // }).pipe(res);


};

const popupPlayer = () => {
  const video = document.getElementsByTagName("video")[0];
  if (document.pictureInPictureElement !== null) {
    document.exitPictureInPicture();
  } else {
    video.requestPictureInPicture();
  }
};

const openOptionsPage = async () => {
  chrome.runtime.sendMessage({ message: "openOptionsPage" });
}

const toggleCardsVisibility = () => {
  document.querySelectorAll(".ytp-ce-element").forEach((el) => el.remove());
}

// window.addEventListener("scroll", () => {

//   // TODO: Make the container cover the whole video (fix: video crop issue)

//   const player = document.getElementById('player');
//   const metaData = document.getElementById('above-the-fold');
//   const videoContainer = document.getElementsByClassName("video-stream html5-main-video")[0];
//   const bottom = videoContainer.getBoundingClientRect().bottom;
//   const { top } = metaData.getBoundingClientRect();
//   if (bottom < 0 ) {
//     player.style.position = "fixed";
//     player.style.zIndex = "999999";
//   }
//   if (top > 0) {
//     player.style.position = "relative";
//   }
// })


setInterval(() => {
  for (const button of document.getElementsByClassName("ytp-ad-skip-button")) {
    button.click();
  }
}, 300);
