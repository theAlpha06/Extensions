chrome.action.onClicked.addListener(() => {
    chrome.runtime.openOptionsPage();
})

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension");
        if (request.message === "openOptionsPage"){
            chrome.runtime.openOptionsPage();
            return;
        }
    }
);