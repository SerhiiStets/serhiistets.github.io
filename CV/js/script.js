"use strict";

var map;

$(function() {
    menu_animation();



    initMap();
});


function initMap() {


    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 48.198784,
            lng: 13.213503
        },
        zoom: 4,
        minZoom: 3,
        maxZoom: 14
    });

    list.forEach(function(place) {
        new google.maps.Marker({
            position: place,
            map: map,
        });
    });
}

function menu_animation() {
    $("#menu_main").click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    $("#menu_dev").click(function() {
        $('html, body').animate({
            scrollTop: $("#development").offset().top - 51
        }, 500);
    });

    $("#menu_hobbies").click(function() {
        $('html, body').animate({
            scrollTop: $("#hobbies").offset().top - 51
        }, 500);
    });

    $("#menu_travel").click(function() {
        $('html, body').animate({
            scrollTop: $("#travel").offset().top - 51
        }, 500);
    });
}
