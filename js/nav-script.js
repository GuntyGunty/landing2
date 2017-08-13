var btn = document.querySelector(".navbar-toggle");
btn.classList.add("jsactivated");
btn.addEventListener("click", function(e) {
  e.target.classList.toggle("jsactivated");
});
