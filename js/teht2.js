hiiri = document.getElementById("kuva");

function ent() {
  document.getElementsByTagName("p")[0].setAttribute("id", "show");
  hiiri.removeEventListener("mouseenter", ent);
  hiiri.addEventListener("mouseleave", lea);
}

function lea() {
  document.getElementsByTagName("p")[0].setAttribute("id", "hide");
  hiiri.removeEventListener("mouseleave", lea);
  hiiri.addEventListener("mouseenter", ent);
}

hiiri.addEventListener("mouseenter", ent);