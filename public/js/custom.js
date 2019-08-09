
       /*navbtn toggle*/
      
$(document).ready(function(){
        $('.navbar-toggler').click(function(){
             $('.navbar-toggler').toggleClass('change');
        });
    });




        /*preloader*/
        (function ($) {
            "use strict";
          
            $(window).on('load', function () {
              if ($('#preloader').length) {
                $('#preloader').delay(100).fadeOut('slow', function () {
                  $(this).remove();
                });
              }
            });
        })(jQuery);