 $(document).ready(function() {

 if(window.innerWidth < 500) {
        	console.log("<500");
            $(".commercial").remove();
        }

  $( function() {
    $( ".notice" ).draggable();
  } );

$("#button").click(function() {
  $( ".notice" ).hide();
});

$(window).resize(function(){
        if(window.innerWidth < 500) {
        	console.log("<500");
            $(".commercial").remove();
        }
});

 });


