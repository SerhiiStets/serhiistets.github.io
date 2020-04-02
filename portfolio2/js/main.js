"use strict";

$(document).ready(function () {
    
    var containerEl = document.querySelector('.container');

    var mixer = mixitup(containerEl, {
        animation: {
            animateResizeContainer: false,
            nudge: false,
            clampHeight: false
        }
    });


});
