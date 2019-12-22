(function ($) {
    "use strict";

    /*:::::::::::::::::::::::::::::::::::
            Navbar Area
    :::::::::::::::::::::::::::::::::::*/

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 5) {
            $('.navbar').addClass("bg-black");
        } else {
            $('.navbar').removeClass("bg-black");
        }
    });

    $(function () {
        $('.nav-link, .smooth-scroll').on('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1000);
            event.preventDefault();
        });
    });

    /*==========================
        Hero Title typer
    ============================*/
    var element = $('.typed');

    $(function () {
        element.typed({
            strings: ["Web Designer.", "Graphic Designer."],
            typeSpeed: 100,
            loop: true
        });
    });



    /*:::::::::::::::::::::::::::::::::::
            Fact Counter Section
    :::::::::::::::::::::::::::::::::::*/
    var a = 0;
    $(window).scroll(function () {
        var oTop = $('#counter').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $('.counter-value').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                    }
                });
            });
            a = 1;
        }

    });

    /*:::::::::::::::::::::::::::::::::::
            Portfolio Area
    :::::::::::::::::::::::::::::::::::*/
    $('.image-popup').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        gallery: {
            enabled: true
        },
    });

    //mixItUp
    $('.portfolio-area').mixItUp();

    /*:::::::::::::::::::::::::::::::::::
        Testimonial Area
    :::::::::::::::::::::::::::::::::::*/
    $('.testimonials').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        dots: false
    });


    /*:::::::::::::::::::::::::::::::::::
        Contact Area
    :::::::::::::::::::::::::::::::::::*/

    var form = $('#contact-form');

    var formMessages = $('.form-message');
    $(form).submit(function (e) {
        e.preventDefault();
        var formData = $(form).serialize();
        $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData
            })
            .done(function (response) {
                $(formMessages).removeClass('error');
                $(formMessages).addClass('success');
                $(formMessages).text(response);

                $('#contact-form input,#contact-form textarea').val('');
            })
            .fail(function (data) {
                $(formMessages).removeClass('success');
                $(formMessages).addClass('error');

                if (data.responseText !== '') {
                    $(formMessages).text(data.responseText);
                } else {
                    $(formMessages).text('Oops! An error occured and your message could not be sent.');
                }
            });
    });


    /*::::::::::::::::::::::::::::::::::::
    Preloader
    ::::::::::::::::::::::::::::::::::::*/
    $(window).on('load', function () {
        $('.preloader').fadeOut(500);
    });

}(jQuery));