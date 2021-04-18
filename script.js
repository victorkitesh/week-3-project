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

$(document).ready(function(){
  $("#hover1").hover(function(){
    $('.project1').toggle();

  });

});

$(document).ready(function(){
  $("#hover2").hover(function(){
    $('.project2').toggle();

  });

});

$(document).ready(function(){
  $("#hover3").hover(function(){
    $('.project3').toggle();

  });

});

$(document).ready(function(){
  $("#hover4").hover(function(){
    $('.project4').toggle();

  });

});
$(document).ready(function(){
  $("#hover5").hover(function(){
    $('.project5').toggle();

  });

});

$(document).ready(function(){
  $("#hover6").hover(function(){
    $('.project6').toggle();

  });

});

$(document).ready(function(){
  $("#hover7").hover(function(){
    $('.project7').toggle();

  });

});

$(document).ready(function(){
  $("#hover8").hover(function(){
    $('.project8').toggle();

  });

});

$(document).ready(function(){
  $("#button").on('click', function(){
   
    $('#message').append('$(#name)'+"we have received your message. Thank you fro reaching out to us.");
  });

});

