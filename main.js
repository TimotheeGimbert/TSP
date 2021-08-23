
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

// When the user clicks on the up arrow at the bottom of the page, it scrolls all to the top of the page
function topFunction() { 
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 