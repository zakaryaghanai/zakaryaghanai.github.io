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
                current = $(this).attr("id")
            }
        });

        // $('nav ul a').each(function () {
        //     $(this).removeClass("active")
        //     if ($(this).attr('href') == '#' + current) {
        //         $(this).addClass('active')
        //     }
        // });
    });

    $('.logo a').click(function() {       
        $('nav ul a').each(function () {

            $(this).removeClass("active");
        });
    })
    
    $(window).scroll()

    $('#viewResume').click(function() {
        let resumeUrl = $('[data-resume-url]').attr('data-resume-url');
       window.open(resumeUrl, '_blank');
    })
})