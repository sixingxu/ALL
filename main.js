var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;


var nextPages = [
  'commercial',
  'gallery',
  'care',
  'stories',
  'acrossthewall',
  'contact',
];


$('.container').infiniteScroll({
  path: function(){
    return 'https://greatsouvenirs.cn/'+ nextPages[ this.loadCount ];
  },
  append: '.post',
  status: '.page-load-status',
});


 $(document).ready(function() {

if(isMobile==false){
 if(window.innerWidth < 500) {
            $(".commercial").remove();
        }
    }

 $( function() {
    $( ".notice" ).draggable();
  } );

$("#button0").click(function() {
  $( "#main" ).hide();
});

$("#button00").click(function() {
  $( "#prc" ).hide();
});

$("#button000").click(function() {
  $( "#timer" ).hide();
});

$("#button1").click(function() {
  $( "#mobile1" ).hide();
});

$("#button2").click(function() {
  $( "#mobile2" ).hide();
});

$("#button3").click(function() {
  $( "#mobile3" ).hide();
});

countdownTimer();

 });




function countdownTimer(){
 	// Set the date we're counting down to
var countDownDate = new Date("Nov 27, 2019 15:37:25").getTime();

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

