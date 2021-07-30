// slick active
$(window).on('load resize', function() {
    if ($(window).width() > 992) {
        $('.reviews-slider:not(.slick-initialized)').slick({
            infinite: true,
            slidesToShow: 3,
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>'
        });
    } else {
        $(".reviews-slider.slick-initialized").slick("unslick");
    }
});
// slick active

//плавный скролл
$(document).ready(function () {
    $('.go_to').click(function (e) {
        e.preventDefault();
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top
            }, 500);
        }
        return false;
    });
});
//плавный скролл end

$('.btn-burger').on('click', function () {
   $(this).toggleClass('clicked');
   $('header .menu').fadeToggle();
});