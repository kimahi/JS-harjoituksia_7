let vast;

//num2 = document.getElementsByTagName("input")[1].value;
p = document.getElementById("vastaus");

klik = document.getElementById("nappi");
klik.addEventListener("click", function(){

  num1 = document.getElementsByTagName("input")[0].value;
  var lasku = num1.split(' ');

  switch (lasku[1]) {
    case "+":
      vast = parseInt(lasku[0]) + parseInt(lasku[2]);
      p.innerHTML = "Vastaus: " + vast;
      break;
    case "*":
      vast = lasku[0] * lasku[2];
      p.innerHTML = "Vastaus: " + vast;
      break;
    case "-":
      vast = lasku[0] - lasku[2];
      p.innerHTML = "Vastaus: " + vast;
      break;
    case "/":
      vast = lasku[0] / lasku[2];
      p.innerHTML = "Vastaus: " + vast;
      break;
    default:
      console.log("Ei toimi");
  }
});

/*
klik1 = document.getElementById("sum");
klik1.addEventListener("click", function(){
  vast = parseFloat(num1) + parseFloat(num2);
  p.innerHTML = "Vastaus: " + vast;
});

klik2 = document.getElementById("sub");
klik2.addEventListener("click", function(){
  vast = parseFloat(num1) - parseFloat(num2);
  p.innerHTML = "Vastaus: " + vast;
});

klik3 = document.getElementById("multi");
klik3.addEventListener("click", function(){
  vast = parseFloat(num1) * parseFloat(num2);
  p.innerHTML = "Vastaus: " + vast;
});

klik4 = document.getElementById("div");
klik4.addEventListener("click", function(){
  vast = parseFloat(num1) / parseFloat(num2);
  p.innerHTML = "Vastaus: " + vast;
});

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
 */

