<script>
  function changeImage() {
    var img = document.getElementById('swapImage');
    var image1 = "https://orgfarm-f661242b40-dev-ed.develop.my.site.com/cms/delivery/media/MCQGEQZJOCWRBALODWIFS5F6OLHI?version=2.1&fileHash=454d613d5e2e635c14ac4e747137303a&fileName=moon-5226915_1280.webp";
    var image2 = "https://orgfarm-f661242b40-dev-ed.develop.my.site.com/cms/delivery/media/MC6VXN5YSCRNFWXNLCXPOBMLJLDY?version=2.1&fileHash=c22ce8c6e1aa3a9743977996db33d686&fileName=1664495239317.jpeg";
    img.src = (img.src.indexOf(image1) !== -1) ? image2 : image1;
  }
</script>
