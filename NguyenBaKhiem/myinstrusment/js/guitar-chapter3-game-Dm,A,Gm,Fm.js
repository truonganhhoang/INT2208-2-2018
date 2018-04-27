function openCity1(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent1");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  document.getElementById("defaultOpen").click();
  function fronttoback(elf,blf,continuous)
  {

   document.getElementById(elf).style.transform= "perspective(600px) rotateY( -180deg)";
   document.getElementById(blf).style.transform= "perspective(600px) rotateY( 0deg)";
   document.getElementById(continuous).style.display= "block";
 }
 function backtofront(elf,blf)
 {

   document.getElementById(elf).style.transform= "perspective(600px) rotateY( 0deg)";
   document.getElementById(blf).style.transform= "perspective(600px) rotateY( 180deg)";
 }
 function showdisplay(elf,blf)
 {

   document.getElementById(elf).style.display= "none";
   document.getElementById(blf).style.display= "block";
 }
 function right(elf,blf,continuous)
 {
  document.getElementById(elf).style.color= "chartreuse";
  document.getElementById(elf).style.borderColor="chartreuse";
  document.getElementById(blf).style.borderColor="chartreuse";
  document.getElementById(blf).style.borderWidth="3px";
  document.getElementById(continuous).style.display= "block";
}
function wrong(elf)
{
  document.getElementById(elf).style.color= "firebrick";
  document.getElementById(elf).style.borderColor="firebrick";
}
function function_name(argument) {
  // body...
}