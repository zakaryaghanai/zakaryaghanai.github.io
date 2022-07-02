$(document).ready(function () {
    if (CSS && "paintWorklet" in CSS) {
        CSS.paintWorklet.addModule("https://unpkg.com/smooth-corners");
    }

    $(window).scroll(function () {
        const scrollTop = $(window).scrollTop();

        $(".lazy-load").each(function () {
            const elementTop = $(this).offset().top;

            if (scrollTop >= elementTop - window.innerHeight * 0.9) {
                $(this).addClass("active");
            }
        });
    });

    $(window).scroll();

    $("#viewResume").click(function () {
        let resumeUrl = $("[data-resume-url]").attr("data-resume-url");
        window.open(resumeUrl, "_blank");
    });
});
