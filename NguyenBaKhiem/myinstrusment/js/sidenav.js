function openNav() {
    document.getElementById("mySidenav").style.margintop = "50px";
    document.getElementById("mySidenav").style.width = "275px";
    //document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    //document.getElementById("main").style.marginLeft= "0";
}
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function openlearn() {
{
        document.getElementById("learn1").style.display = "block";
    }
}

function openForm() {
    document.getElementById("id01").style.display="block";
}