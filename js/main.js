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
    
    $(".l_home").click(function(){
        $("#menu-main-menu li").removeClass("current-menu-ancestor");
        $(".l_home").addClass("current-menu-ancestor");
        $(".post-body").css("heigh", "auto");
        $("#imgwrap").hide();
        $(".post-content").fadeIn();
    });
    
    $(".l_resume").click(function(){
        $("#menu-main-menu li").removeClass("current-menu-ancestor");
        $(".l_resume").addClass("current-menu-ancestor");
        $(".post-body").css("heigh", "100%");
        $(".post-content").hide();
        $("#imgwrap").slideDown("slow");
    });
    
    $(".l_contact").click(function(){
        $("#menu-main-menu li").removeClass("current-menu-ancestor");
        $(".l_contact").addClass("current-menu-ancestor");
        $(".post-body").css("heigh", "100%");
        $(".post-content").hide();
        $("#imgwrap").slideDown("slow");
    });
    
    $(".l_about").click(function(){
        $("#menu-main-menu li").removeClass("current-menu-ancestor");
        $(".post-body").css("heigh", "100%");
        $(".l_about").addClass("current-menu-ancestor");
        $(".post-content").hide();
        $("#imgwrap").slideDown("slow");
    });

});
