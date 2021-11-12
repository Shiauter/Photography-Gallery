// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
  }
  
  // Change style of navbar on scroll
  var navbar = document.getElementsByClassName("w3-bar");
  var navPos = navbar[0].offsetTop;
  var imgFullsize = document.getElementById("img01");
  var gallery = document.getElementsByClassName("photoGallery")[0];
  function Resizing() {
      if (navbar[1].style.display == "none")
          navPos = navbar[0].offsetTop;
      else
          navPos = navbar[1].offsetTop;
  
      if (document.getElementsByClassName("photoBig")[0].offsetWidth <= 600)
          gallery.style.display = "block";
      else
          gallery.style.display = "grid";
      Scrolling();
  }
  function Scrolling() {
      if (document.documentElement.scrollTop >= navPos) {
          navbar[0].classList.add("sticky");
          navbar[0].style.background = "rgba(50,50,50,0.3)";
          navbar[1].style.display = "block";
      } else {
          navbar[0].classList.remove("sticky");
          navbar[0].style.background = "rgba(100,100,100,1)";
          navbar[1].style.display = "none";
      }
  }
  function toTop() {window.scrollTo(0, 0);}
  function toPhoto() {window.scrollTo(0, document.getElementById("Gallery").offsetTop);}
  function toBottom() {window.scrollTo(0, document.body.scrollHeight);}
  
  window.onresize = function() {Resizing();}
  window.onscroll = function() {Scrolling();}
  window.onload = function() {
      var hr = document.getElementsByClassName("hrloadedAnimation");
      hr[0].style.width = "100%";
      hr[1].style.width = "100%";
      var p = document.getElementsByClassName("ploadedAnimation");
      p[0].style.top = "0px";
      p[2].style.top = "0px";
      p[1].style.bottom = "0px";
      p[3].style.bottom = "0px";
      for (var i = 0; i < p.length; i++)
          p[i].style.opacity = "1";
      Resizing();
      Scrolling();
  }