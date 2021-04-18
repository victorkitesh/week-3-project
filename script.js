/*function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.innerHTML === "Hello") {
    x.innerHTML = "Swapped text!"; 
  } else {
    x.innerHTML = "Hello";
  }
}*/
$(document).ready(function(){

  $('#image1').on('click', function(){
  $('#image1').toggle();
  $('#div1').show();
  });
  
});

$(document).ready(function(){

  $('#div1').on('click', function(){
  $('#div1').toggle();
  $('#image1').show();
  });
  
});