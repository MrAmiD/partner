function fotoramaInit() {
    // $('.fotorama').fotorama({
    //     thumbheight: 93,
    //     thumbwidth: $('.prod-info .fotorama__wrap').width()/3,
    //     thumbmargin: 18,
    //     allowfullscreen: true
    // });
}

function popSliderInit(){//слайдер на главной странице
    $('.js-slider-pop').slick({
        prevArrow: '<button type="button" class="slick-prev sliderAboutArrow">' +
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="12px" height="13px"> <path fill-rule="evenodd"  fill="rgb(40, 40, 40)" d="M-0.005,6.526 C0.938,5.588 1.856,4.676 2.774,3.764 C3.976,2.570 5.180,1.378 6.378,0.180 C6.500,0.059 6.620,-0.000 6.793,0.001 C8.461,0.006 10.130,0.004 11.864,0.004 C9.659,2.196 7.493,4.348 5.303,6.524 C7.526,8.675 9.737,10.815 11.996,13.001 C11.802,13.001 11.664,13.001 11.525,13.001 C9.978,13.001 8.432,13.003 6.885,12.995 C6.777,12.994 6.644,12.943 6.566,12.868 C5.019,11.384 3.478,9.892 1.937,8.403 C1.388,7.872 0.839,7.342 0.290,6.812 C0.197,6.722 0.104,6.631 -0.005,6.526 Z"/></svg>' +
        '</button>',
        nextArrow: '<button type="button" class="slick-next sliderAboutArrow">' +
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="12px" height="13px"><path fill-rule="evenodd" fill="rgb(40, 40, 40)" d="M12.005,6.474 C11.062,7.412 10.144,8.324 9.226,9.236 C8.024,10.430 6.820,11.622 5.622,12.820 C5.500,12.941 5.380,13.000 5.207,12.999 C3.539,12.994 1.870,12.996 0.136,12.996 C2.341,10.804 4.508,8.652 6.697,6.476 C4.474,4.325 2.263,2.185 0.004,-0.001 C0.198,-0.001 0.336,-0.001 0.475,-0.001 C2.022,-0.001 3.568,-0.003 5.115,0.005 C5.223,0.006 5.356,0.057 5.434,0.132 C6.981,1.616 8.522,3.107 10.063,4.597 C10.612,5.128 11.161,5.658 11.710,6.188 C11.803,6.278 11.896,6.369 12.005,6.474 Z"/></svg>' +
        '</button>',
        dots: false,
        infinite: true,
        dotsClass: 'slick-dots container d-flex align-items-center justify-content-end',
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: false
                }
            }
        ]
    });
}

$(function() {

    $.datetimepicker.setLocale('ru');
    $('.date-p').datetimepicker({
        i18n:{
            de:{
                months:[
                    'Januar','Februar','März','April',
                    'Mai','Juni','Juli','August',
                    'September','Oktober','November','Dezember',
                ],
                dayOfWeek:[
                    "So.", "Mo", "Di", "Mi",
                    "Do", "Fr", "Sa.",
                ]
            }
        },
        timepicker:false,
        format:'d.m.Y'
    });
    //

    $('.js-single-i input[type=checkbox]').on('change', function() {
        $('.js-single-i input[type=checkbox]').not(this).prop('checked', false);
    }); 
    //setInvest start
    $('select, input[type="checkbox"]').styler({

    });
 
    //setInvest end


    // ===== Scroll to Top ====
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        }
    });
    $('#return-to-top').click(function() {      // When arrow is clicked
        $('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 500);
    });


    // $('#my-menu').html($('.main-menu').html());
    // $("#my-menu").mmenu({
    //     "extensions": [
    //         "fx-panels-none",
    //         "fx-listitems-slide",
    //         "fx-menu-slide",
    //         //"pagedim-black"
    //     ],
    //     "offCanvas": {
    //         "position": "left"
    //     },
    //     "navbar": {
    //         "title": ""
    //     },
    //     "pageScroll": true
    // });
    //
    // var api = $("#my-menu").data( "mmenu" );
    //
    // api.bind( "open:finish", function() {
    //     $("#menu-btn").addClass('is-active');
    //     $(".mm-menu.mm-offcanvas.mm-bottom").css('height', $(window).height() - $('.header-top').height());
    //
    //     //bugfix fixed menu 1-3 START
    //     $(window).scroll();
    //     $(".slick-menu").css({ top: $(window).scrollTop()});
    // });
    // api.bind( "open:start", function() {
    //     $(window).scroll();
    //     //bugfix fixed menu 2
    //     $(".slick-menu").css({ top: $(window).scrollTop() });
    // });
    // api.bind( "open:before", function() {
    //     $('#my-menu').css('top', $('.slick-menu').height());
    // });
    // api.bind( "close:finish", function() {
    //     $("#menu-btn").removeClass('is-active');
    //
    //     //bugfix fixed menu 3 END
    //     $(".slick-menu").css({ top: 0});
    // });


    /*my custom select start*/
    $(window).click(function() {
        //$('.my-select').find('ul').slideUp();//закрывать, если кликнули не по диву
    });


    $('.my-select').on('click', function () {
        //event.stopPropagation();
        if($(this).find('ul').hasClass('active')){
            $(this).find('ul').removeClass('active');
            $(this).removeClass('active');
            $(this).find('ul').slideUp();
        }
        else {
            $(this).find('ul').addClass('active');
            $(this).addClass('active');
            $(this).find('ul').slideDown();
        }
    });
    $('.my-select .opt li').on('click', function () {
        if($(this).hasClass('selected')){
            $('.my-select .opt li').removeClass('selected');
        }
        else {
            $('.my-select .opt li').removeClass('selected');
            $(this).addClass('selected');
            $(this).parent().parent().find($('.select-value')).html($(this).data().value);
        }
    });
    /*my custom select End*/

    // $('#callDate').bootstrapMaterialDatePicker({ format : 'dddd DD MMMM YYYY - HH:mm', lang : 'ru', weekStart : 1, cancelText: 'Отмена'});

});
