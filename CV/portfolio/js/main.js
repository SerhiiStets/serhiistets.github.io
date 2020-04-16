

$(document).ready(function(){ 
    
    $('#photos').fadeIn(2000);

});

//
$(window).load(function () {
 var $container = $('#photos');
   $container.imagesLoaded( function() {
       $container.isotope({
      itemSelector: 'img',
        masonry: {
            gutter:10
        }
    });
  // images have loaded
});
    /*
       // init Isotope
    var $grid = $container.isotope({
      itemSelector: 'img',
        percentPosition: true,
        masonry: {
        }
    });
    // layout Isotope after each image loads
    $grid.imagesLoaded().progress( function() {
      $grid.isotope('layout');
    });
    */
    
    

    $("#all").click(function () {
        $container.isotope({
            filter: '.mix'
        });

    });
    $("#landscape").click(function () {
        $container.isotope({
            filter: '.landscape'
        });
    });
    $("#street").click(function () {
        $container.isotope({
            filter: '.street'
        });
    });

    $("#color").click(function () {
        $container.isotope({
            filter: '.color'
        });
    });

    $("#bw").click(function () {
        $container.isotope({
            filter: '.bw'
        });
    });

    $("#travel").click(function () {
        $container.isotope({
            filter: '.travel'
        });
    });

    $("#ukraine").click(function () {
        $container.isotope({
            filter: '.ukraine'
        });
    });

    $("#people").click(function () {
        $container.isotope({
            filter: '.people'
        });
    });

    $("#ec").click(function () {
        $container.isotope({
            filter: '.ec'
        });
    });

    
});
