$(document).ready(function(){
    $('.dec-slider').slick({
        arrows: true,
        dots: true,
        draggable: false,
        prevArrow: '<div class="wrapp-slick__button prev"><button type="button" class="slick-prev"></button></div>',
        nextArrow: '<div class="wrapp-slick__button next"><button type="button" class="slick-next"></button></div>'
    });

    $('#openSearch').on('click', function (){
    	$('.main-search__input').addClass('visible');
    })

    $('#closeSearch').on('click', function (){
    	$('.main-search__input').removeClass('visible');
    })


});