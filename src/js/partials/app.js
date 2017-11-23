$(document).ready(function(){
    $('.dec-slider').slick({
        arrows: true,
        dots: true,
        draggable: false,
        prevArrow: '<div class="wrapp-slick__button prev"><button type="button" class="slick-prev"></button></div>',
        nextArrow: '<div class="wrapp-slick__button next"><button type="button" class="slick-next"></button></div>'
    });
});