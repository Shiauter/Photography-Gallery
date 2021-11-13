// Modal Image Gallery
var imgFullsize = document.getElementById("img01");
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("link01").href = element.src;
}
  
function toTop() {window.scrollTo(0, 0);}
function toPhoto() {window.scrollTo(0, document.getElementById("Gallery").offsetTop);}
function toBottom() {window.scrollTo(0, document.body.scrollHeight);}
