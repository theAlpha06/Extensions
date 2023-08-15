let toggleLoop = document.getElementById("toggle_loop");
// let togglePlayPause = document.getElementById("toggle_play_pause");
// let addWishlist = document.getElementById("add_wishlist");
let toggleCards = document.getElementById("toggle_visibility");
// let toggleCinema = document.getElementById('toogle_cinema');
let toggleExpand = document.getElementById('toggle_expand');
let togglePopup = document.getElementById('toggle_popup');
let toggleScreenshot = document.getElementById('toggle_screenshot');
let toggleMinus = document.getElementById('toggle_minus');
let toggleSpeed = document.getElementById('toggle_speed');
let togglePlus = document.getElementById('toggle_plus');
// let toggleDownload = document.getElementById('toggle_download');
let toggleSetting = document.getElementById('toggle_setting');
let controlsPosition = document.getElementById("controls__position");

chrome.storage.sync.get(['togglePlayPause','toggleLoop','addWishlist', 'toggleCards', 'toggleCinema', 'toggleExpand', 'togglePopup', 'toggleScreenshot', 'toggleMinus', 'toggleSpeed', 'togglePlus', 'toggleDownload', 'toggleSetting', 'controlsPosition']).then((result) => {
  // togglePlayPause.checked = result.togglePlayPause;
  controlsPosition.value = result.controlsPosition;
  toggleLoop.checked = result.toggleLoop;
  // addWishlist.checked = result.addWishlist;
  toggleCards.checked = result.toggleCards;
  // toggleCinema.checked = result.toggleCinema;
  toggleExpand.checked = result.toggleExpand;
  togglePopup.checked = result.togglePopup;
  toggleScreenshot.checked = result.toggleScreenshot;
  toggleMinus.checked = result.toggleMinus;
  toggleSpeed.checked = result.toggleSpeed;
  togglePlus.checked = result.togglePlus;
  // toggleDownload.checked = result.toggleDownload;
  toggleSetting.checked = result.toggleSetting;
})

// const toggleplaypause = () => {
//   if (togglePlayPause.checked) {
//     chrome.storage.sync.set({ togglePlayPause: true });
//   } else {
//     chrome.storage.sync.set({ togglePlayPause: false });
//   }
// };

const toggleloop = () => {
  if (toggleLoop.checked) {
    chrome.storage.sync.set({ toggleLoop: true });
  } else {
    chrome.storage.sync.set({ toggleLoop: false });
  }
}

// const addwishlist = () => {
//   if (addWishlist.checked) {
//     chrome.storage.sync.set({ addWishlist: true });
//   } else {
//     chrome.storage.sync.set({ addWishlist: false });
//   }
// }

const togglecards = () => {
  if (toggleCards.checked) {
    chrome.storage.sync.set({ toggleCards: true });
  } else {
    chrome.storage.sync.set({ toggleCards: false });
  }
}

// const togglecinema = () => {
//   if (toggleCinema.checked) {
//     chrome.storage.sync.set({ toggleCinema: true });
//   } else {
//     chrome.storage.sync.set({ toggleCinema: false });
//   }
// }

const toggleexpand = () => {
  if (toggleExpand.checked) {
    chrome.storage.sync.set({ toggleExpand: true });
  } else {
    chrome.storage.sync.set({ toggleExpand: false });
  }
}

const togglepopup = () => {
  if (togglePopup.checked) {
    chrome.storage.sync.set({ togglePopup: true });
  } else {
    chrome.storage.sync.set({ togglePopup: false });
  }
}

const togglescreenshot = () => {
  if (toggleScreenshot.checked) {
    chrome.storage.sync.set({ toggleScreenshot: true });
  } else {
    chrome.storage.sync.set({ toggleScreenshot: false });
  }
}

const toggleminus = () => {
  if (toggleMinus.checked) {
    chrome.storage.sync.set({ toggleMinus: true });
  } else {
    chrome.storage.sync.set({ toggleMinus: false });
  }
}

const togglespeed = () => {
  if (toggleSpeed.checked) {
    chrome.storage.sync.set({ toggleSpeed: true });
  } else {
    chrome.storage.sync.set({ toggleSpeed: false });
  }
}

const toggleplus = () => {
  if (togglePlus.checked) {
    chrome.storage.sync.set({ togglePlus: true });
  } else {
    chrome.storage.sync.set({ togglePlus: false });
  }
}

// const toggledownload = () => {
//   if (toggleDownload.checked) {
//     chrome.storage.sync.set({ toggleDownload: true });
//   } else {
//     chrome.storage.sync.set({ toggleDownload: false });
//   }
// }

const togglesetting = () => {
  if (toggleSetting.checked) {
    chrome.storage.sync.set({ toggleSetting: true });
  } else {
    chrome.storage.sync.set({ toggleSetting: false });
  }
}

// togglePlayPause.addEventListener("click", toggleplaypause);
toggleLoop.addEventListener("click", toggleloop);
// addWishlist.addEventListener('click', addwishlist);
toggleCards.addEventListener('click', togglecards);
// toggleCinema.addEventListener('click', togglecinema);
toggleExpand.addEventListener('click', toggleexpand);
togglePopup.addEventListener('click', togglepopup);
toggleScreenshot.addEventListener('click', togglescreenshot);
toggleMinus.addEventListener('click', toggleminus);
toggleSpeed.addEventListener('click', togglespeed);
togglePlus.addEventListener('click', toggleplus);
// toggleDownload.addEventListener('click', toggledownload);
toggleSetting.addEventListener('click', togglesetting);

const controlPosition = () => {
  chrome.storage.sync.set({ controlsPosition: controlsPosition.value });
}
controlsPosition.addEventListener("change", controlPosition);