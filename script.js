let toggle = true;

function toggleImage() {
  const img = document.getElementById("moonImg");
  if (toggle) {
    img.src = "https://upload.wikimedia.org/wikipedia/commons/9/99/Partial_Moon.jpg";
  } else {
    img.src = "https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg";
  }
  toggle = !toggle;
}
