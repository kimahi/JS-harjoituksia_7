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
  img = document.createElement("img");
  img.src = pics[i].thumb;
  img.alt = "Murray";
  ul.appendChild(li);
  li.appendChild(img);
}

iso = document.getElementsByTagName("div")[0];
isomg = document.getElementsByTagName("img")[3];
kuv1 = document.getElementsByTagName("img")[0];
kuv2 = document.getElementsByTagName("img")[1];
kuv3 = document.getElementsByTagName("img")[2];


kuv1.addEventListener("click", function() {
  //isomg = document.createElement("img");
  isomg.src = pics[0].big;
  isomg.alt = "Iso";
  iso.appendChild(isomg);
  iso.setAttribute("class", "visible");
});

kuv2.addEventListener("click", function() {
  //isomg = document.createElement("img");
  isomg.src = pics[1].big;
  isomg.alt = "Iso";
  iso.appendChild(isomg);
  iso.setAttribute("class", "visible");
});

kuv3.addEventListener("click", function() {
  //isomg = document.createElement("img");
  isomg.src = pics[2].big;
  isomg.alt = "Iso";
  iso.appendChild(isomg);
  iso.setAttribute("class", "visible");
});

iso.addEventListener("click", function() {
  iso.setAttribute("class", "hidden");
});