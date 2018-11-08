const pics = [
  {
    thumb: 'http://www.fillmurray.com/100/100',
    big: 'http://www.fillmurray.com/640/480',
  },
  {
    thumb: 'http://lorempixel.com/100/100/sports/1/',
    big: 'http://lorempixel.com//640/480/sports/1/',
  },
  {
    thumb: 'https://placeimg.com/100/100/tech',
    big: 'https://placeimg.com/640/480/tech',
  },
];

bod = document.getElementsByTagName("body")[0];
ul = document.createElement("ul");
bod.appendChild(ul);

bod.insertBefore(ul, bod.firstChild);

for (i=0; i<pics.length; i++) {
  li = document.createElement("li");
  li.innerHTML = "<img src=" + pics[i].thumb + " alt='Murray'>";
  ul.appendChild(li);
}

iso = document.getElementsByTagName("div")[0];
kuv1 = document.getElementsByTagName("li")[0];
kuv2 = document.getElementsByTagName("li")[1];
kuv3 = document.getElementsByTagName("li")[2];

kuv1.addEventListener("click", function() {
  iso.innerHTML = "<img src=" + pics[0].big + " alt='Iso'>";
  iso.setAttribute("class", "visible");
});

kuv2.addEventListener("click", function() {
  iso.innerHTML = "<img src=" + pics[1].big + " alt='Iso'>";
  iso.setAttribute("class", "visible");
});

kuv3.addEventListener("click", function() {
  iso.innerHTML = "<img src=" + pics[2].big + " alt='Iso'>";
  iso.setAttribute("class", "visible");
});

iso.addEventListener("click", function() {
  iso.setAttribute("class", "hidden");
});