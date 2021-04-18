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

$(document).ready(function(){

  $('#image2').on('click', function(){
  $('#image2').toggle();
  $('#div2').show();
  });
  
});

$(document).ready(function(){

  $('#div2').on('click', function(){
  $('#div2').toggle();
  $('#image2').show();
  });
  
});

$(document).ready(function(){

  $('#image3').on('click', function(){
  $('#image3').toggle();
  $('#div3').show();
  });
  
});

$(document).ready(function(){

  $('#div3').on('click', function(){
  $('#div3').toggle();
  $('#image3').show();
  });
  
});