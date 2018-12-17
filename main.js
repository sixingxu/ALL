var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

var mainMargin;


 $(document).ready(function() {
$('#lightSlider').lightSlider({
    slideMargin: 0,
    thumbItem: 4,
});

$('#lightSlider2').lightSlider({
    gallery:true,
    slideMargin: 0,
    thumbItem: 4,
});

mainMargin = $('.notice').height();
$(".main-container").css({"margin": mainMargin + " auto"});

if(isMobile==false){
 if(window.innerWidth < 500) {
            //$(".video-wrapper").remove();
        }
    }else{
          $(".video-wrapper").remove();
    }

$( "#button" ).click(function() {
  $("#main").remove();
  $(".main-container").css({"margin": "5px"});

});

countdownTimer();



 });



$(window).resize(function(){
  if($('#main').length){
mainMargin = $('#main').height();
$(".main-container").css({"margin": mainMargin + " auto"});
}else{
  $(".main-container").css({"margin": "5px"});
}

})


function countdownTimer(){
 	// Set the date we're counting down to
var countDownDate = new Date("Sep 30, 2019 22:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  $(".countdown").html("THE SITE WILL SHUT DOWN IN APPROXIMATELY&nbsp" + days + "&nbspDAYS " + hours + "&nbspHOURS "
  + minutes + "&nbspMINUTES AND " + seconds + "&nbspSECONDS ");
 }, 1000);
}

