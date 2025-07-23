document.querySelectorAll(".gallery-img").forEach((img) => {
  img.addEventListener("click", function () {
    const src = this.getAttribute("data-bs-img");
    document.getElementById("modalImage").setAttribute("src", src);
  });
});
