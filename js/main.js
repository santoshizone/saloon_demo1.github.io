



mybutton = document.getElementById("myBtn3");


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
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




var preloader = document.getElementById("loader");
  function loadfunction(){
    preloader.style.display = "none";}













$(document).ready(function(){

$('.about_col2').waypoint(function(direction){

    
    $('.about_col2').addClass(' animated fadeInRight')
    
   
    

   
  },{
    offset:'50%'
  })


$('.price_col1').waypoint(function(direction){

    $('.price_col1').addClass(' animated fadeInLeft')
   
    },{
    offset:'50%'
  })



$('.style_col1').waypoint(function(direction){

    $('.style_col1').addClass(' animated fadeInDown')
   
    },{
    offset:'50%'
  })


$('.head1').waypoint(function(direction){

    $('.head1').addClass(' animated fadeInDown')
   
    },{
    offset:'50%'
  })





});
