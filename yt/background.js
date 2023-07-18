chrome.action.onClicked.addListener(() => {
    chrome.runtime.openOptionsPage();
})

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ togglePlayPause: true });
    chrome.storage.sync.set({ toggleLoop: true });
    chrome.storage.sync.set({ addWishlist: true });
    chrome.storage.sync.set({ toggleCards: true });
    chrome.storage.sync.set({ toggleCinema: true });
    chrome.storage.sync.set({ toggleExpand: true });
    chrome.storage.sync.set({ togglePopup: true });
    chrome.storage.sync.set({ toggleScreenshot: true });
    chrome.storage.sync.set({ toggleMinus: true });
    chrome.storage.sync.set({ toggleSpeed: true });
    chrome.storage.sync.set({ togglePlus: true });
    chrome.storage.sync.set({ toggleDownload: true });
    chrome.storage.sync.set({ toggleSetting: true });
    // chrome.runtime.openOptionsPage();
});

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension");
        if (request.message === "openOptionsPage") {
            chrome.runtime.openOptionsPage();
            return;
        } else if (request.message === "downloadVideo") {
            console.log('f');
        }
    }
);