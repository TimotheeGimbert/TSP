
// Function that opens and closes the navbar
var navOpen = false;
function OpenNav() {
    document.getElementById("Nav-list").style.height = "200px";
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

