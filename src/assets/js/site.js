$(document).ready(function () {
    if (CSS && 'paintWorklet' in CSS) {
        CSS.paintWorklet.addModule('https://unpkg.com/smooth-corners')
    }

    $(window).scroll( function () {
        var current = "";

        $('section').each(function (){
            const sectionTop = $(this).offset().top;
            const sectionHeight = $(this).height();


            if ( $(window).scrollTop() >= sectionTop - (sectionHeight /2) ) {
                current = $(this).attr("id");
            }
        });

        $('nav ul a').each(function () {
            $(this).removeClass("active");
            if ($(this).hasClass(current)) {
                $(this).addClass("active");
            }
        });
    });

    $(window).scroll()
})