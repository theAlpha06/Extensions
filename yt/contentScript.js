(() => {
        const newVideoLoaded = () => {
        const controlsDivExist = document.getElementsByClassName("controls-div")[0];

        if (!controlsDivExist) {
            const controlsDiv = document.createElement("div");
            const toggleBtn = document.createElement('img');
            controlsDiv.style.marginTop = '0';
            toggleBtn.title = 'Hello';
            toggleBtn.width = 30;
            toggleBtn.src = chrome.runtime.getURL("assets/bookmark.png");
            controlsDiv.className = "controls-div";
            controlsDiv.append(toggleBtn);
            setTimeout(() => {
            const youtubeChrome = document.getElementsByClassName('ytd-watch-metadata')[0];
            if(!youtubeChrome) newVideoLoaded();
            else {
                console.log(youtubeChrome)
                youtubeChrome.insertBefore(controlsDiv, youtubeChrome.firstChild);
            }
            }, 5000);
        }
    }
    newVideoLoaded();
})();