// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

 
/* Fix link ==== */
$('a[href="#"]').click(function() {
return false;
});


/* PRELOADER ==== */
$(window).load(function() {
'use strict';

    /* Preloader ==== */
      $('.spinner').fadeOut('slow');
      $('.preloader').delay(350).fadeOut('slow');

});



  
 


