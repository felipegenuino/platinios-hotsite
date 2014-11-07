// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

 
/* Fix link ==== */
$('a[href="#"]').click(function() {
return false;
});





  
 


 
// Prevent console.log from generating errors in IE for the purposes of the demo
if ( ! window.console ) console = { log: function(){} };

// The actual plugin
$(' .menu-top').singlePageNav({
    // offset: $('.menu-top').outerHeight(),
    filter: ':not(.external)',
    updateHash: true,
    beforeStart: function() {
        console.log('begin scrolling');
    },
    onComplete: function() {
        console.log('done scrolling');
    }
});
