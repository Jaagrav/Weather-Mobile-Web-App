function change() {
  var cover = document.querySelector(".cover");
  cover.style.opacity = "1";
  setTimeout(showChange, 1000);
}
var i = 0;
function showChange() {
  i++;
  var images = [
    "https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 2520w",
    "https://images.pexels.com/photos/1938126/pexels-photo-1938126.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 2520w",
    "https://images.pexels.com/photos/2737395/pexels-photo-2737395.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 2520w"
  ];
  var cover = document.querySelector(".cover");
  cover.style.opacity = "0";
  if (i >= images.length){ i = 0;}
  document.querySelector("#dcollage").src = images[i];
  console.log(i);
}
