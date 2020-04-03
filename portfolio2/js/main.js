"use strict";

$(document).ready(function () {

    /*
    var win = $(this);
    if (win.width() > 960) {

        $('#show_all').addClass('active no-letterspace');

    } else {
        $('#show_all').removeClass('active no-letterspace');
    }*/

    var containerEl = $('.container');
    
    var mixer = mixitup(containerEl, {
        
        callbacks: {
            onMixClick: function(state, originalEvent) {
                 var clicks = $(this).data('clicks');
              if (clicks) {
                  console.log("click")
                  //var mixer2 = mixitup(containerEl);
                  //$("#show_all_m").trigger('click');
                 // odd clicks
              } else {
                  
                 // even clicks
              }
              $(this).data("clicks", !clicks);

            }
        },
        
        animation: {
            animateResizeContainer: false,
            nudge: false,
            clampHeight: false
        }
    });


});
