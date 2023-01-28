document.querySelector(".burger").addEventListener("click", handleOpen);

function handleOpen() {
  var x = document.querySelector(".section1-part");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
