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

    var lastScrollTop = 0;

    $(window).scroll(function(event){
       var st = $(this).scrollTop();
       if (st > lastScrollTop){
          $('.dec-header__nav').addClass('subnavbar_close');
       } else {
           
            $('.dec-header__nav').removeClass('subnavbar_close');
       }
       lastScrollTop = st;
    });

});