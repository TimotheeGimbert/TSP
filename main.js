
// Function that opens and closes the navbar
var navOpen = false;
function OpenNav() {
  document.getElementById("Nav-list").style.height = "190px";
}
function CloseNav() {  
  document.getElementById("Nav-list").style.height = "0";
}
function Nav() {
  if (navOpen === false) {
    OpenNav();
    navOpen = true;
  }
  else {
    CloseNav();
    navOpen = false;
  }
}

/* function scrollo(){
  $('html, body').animate({
      scrollTop: $("#div1").offset().top
  }, 2000);
});

// When the user clicks on the up arrow at the bottom of the page, it scrolls all to the top of the page
function topFunction($position) { 
  document.documentElement.scrollTop = $position; // For Chrome, Firefox, IE and Opera
  //document.body.scrollTop = $position; // For Safari
}  */


 $("a").on('click', function(event) { // Add smooth scrolling to all links
    var hash = this.hash;                       // Store hash  
    $('html, body').animate({                   // Using jQuery's animate() method to add smooth page scroll
      scrollTop: $(hash).offset().top
    }, 800, function(){                         // The optional number (800) specifies the delay     
      window.location.hash = hash;              // Add hash (#) to URL when done scrolling (default click behavior)
    });
});