 function fronttoback(elf,blf)
 {

   document.getElementById(elf).style.transform= "perspective(600px) rotateY( -180deg)";
   document.getElementById(blf).style.transform= "perspective(600px) rotateY( 0deg)";
 }
 function backtofront(elf,blf)
 {

   document.getElementById(elf).style.transform= "perspective(600px) rotateY( 0deg)";
   document.getElementById(blf).style.transform= "perspective(600px) rotateY( 180deg)";
 }
