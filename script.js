document.addEventListener("DOMContentLoaded", function () {
  const moonImage = document.getElementById("moonImage");

  // Alternate images
  const images = [
    "https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/9/99/Moon_in_black_sky.jpg"
  ];
  let index = 0;

  moonImage.addEventListener("click", function () {
    index = (index + 1) % images.length;
    moonImage.src = images[index];
  });
});
