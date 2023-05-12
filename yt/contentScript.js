(() => {
        const controlsImg = [
            {
                src: chrome.runtime.getURL("assets/loop.jpg"),
                title: "Loop video"

            },
            {
                src: chrome.runtime.getURL("assets/stop.png"),
                title: "Stop video"
            }
        ]
        const newVideoLoaded = () => {
        const controlsDivExist = document.getElementsByClassName("controls-div")[0];

        if (!controlsDivExist) {
            const controlsDiv = document.createElement("div");
            controlsDiv.className = "controls-div";
            controlsDiv.style.display = "flex";
            controlsDiv.style.alignItems = "center";
            controlsDiv.style.justifyContent = "center";
            controlsDiv.style.gap = "10px";

            controlsImg.map((img) => {
                const toggleBtn = document.createElement("img");
                toggleBtn.title = img.title;
                toggleBtn.width = 20;
                toggleBtn.style.cursor = 'pointer';
                toggleBtn.src = img.src;
                if (window.matchMedia && 
                    window.matchMedia('(prefers-color-scheme: dark)').matches) {
                  toggleBtn.style.filter="invert(100%)";
                }
                controlsDiv.append(toggleBtn);
            });

            const youtubeChrome = document.getElementsByClassName('ytd-watch-metadata')[0];
            if(!youtubeChrome) newVideoLoaded();
            else {
                console.log(youtubeChrome)
                youtubeChrome.insertBefore(controlsDiv, youtubeChrome.firstChild);
            }
        }
    }
    newVideoLoaded();
})();