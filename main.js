
// Function that opens and closes the navbar
var navOpen = false;
function OpenNav() {
    document.getElementById("Nav-list").style.height = "260px";
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


//Get the button:
mybutton = document.getElementById("ArrowUP");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 