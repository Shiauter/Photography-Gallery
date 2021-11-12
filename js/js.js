window.onresize = function() {Resizing();}
window.onscroll = function() {Scrolling();}
window.onload = function() {
    Resizing();
    Scrolling();
    createGallery();
}

// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("link01").href = element.src;
}
  
// Change style of navbar on scroll
var navbar = document.getElementById("stickybar");
var navPos = navbar.offsetTop;
var Gallery_section = document.getElementById("Gallery");
var gallery_style = Gallery_section.currentStyle || window.getComputedStyle(Gallery_section);
var gallery_paddingTop = parseInt(gallery_style.paddingTop);

var imgFullsize = document.getElementById("img01");
var gallery = document.getElementsByClassName("photoGallery")[0];
function Resizing() {  
    if (document.getElementsByClassName("photoBig")[0].offsetWidth <= 600)
        gallery.style.display = "block";
    else
        gallery.style.display = "grid";
    Scrolling();
}
function Scrolling() {
    if (document.documentElement.scrollTop >= navPos) {
        navbar.classList.add("fixed-top");
        navbar_height = navbar.offsetHeight;
        document.getElementById("Gallery").style.paddingTop = (navbar_height + gallery_paddingTop) + 'px';
    } else {
        navbar.classList.remove("fixed-top");
        document.getElementById("Gallery").style.paddingTop = gallery_paddingTop + 'px';
    }
}
function toTop() {window.scrollTo(0, 0);}
function toPhoto() {window.scrollTo(0, document.getElementById("Gallery").offsetTop);}
function toBottom() {window.scrollTo(0, document.body.scrollHeight);}
