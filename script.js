(function () {
  var btn = document.getElementById("hamburger");
  var menu = document.getElementById("mobile-menu");
  if (!btn || !menu) return;

  function setOpen(open) {
    btn.classList.toggle("open", open);
    menu.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  }

  btn.addEventListener("click", function () {
    setOpen(!menu.classList.contains("open"));
  });

  menu.addEventListener("click", function (e) {
    if (e.target.tagName === "A") setOpen(false);
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 860) setOpen(false);
  });
})();
