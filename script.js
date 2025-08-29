document.addEventListener("DOMContentLoaded", function () {
  const img = document.getElementById("moonImage");
  let toggle = false;

  img.addEventListener("click", function () {
    if (toggle) {
      img.src = "https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg";
    } else {
      img.src = "https://upload.wikimedia.org/wikipedia/commons/9/99/Moon_in_true_color.jpg";
    }
    toggle = !toggle;
  });
});
