const togglePlayPause = document.getElementById("toggle");

const toggle = () => {
  if (togglePlayPause.checked) {
    console.log("on");
  } else {
    console.log("off");
  }
};
togglePlayPause.addEventListener("click", toggle);
