console.log("JS loaded ✅");

let toggle = true;

document.addEventListener("DOMContentLoaded", () => {
  const img = document.getElementById("moonImg");

  img.addEventListener("click", () => {
    if (toggle) {
      img.src = "https://upload.wikimedia.org/wikipedia/commons/9/99/Partial_Moon.jpg";
    } else {
      img.src = "https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg";
    }
    toggle = !toggle;
    console.log("Image changed:", img.src);
  });
});
