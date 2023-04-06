// Jquery


$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");

        } else {
            $('.navbar').removeClass("sticky");

        }
    });
    // toggle menu/navbar
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggle(".active");


    });
});




// javascript

var typed = new Typed(".auto-type", {
    strings: ["Data Analyst","Web Designer"],
    typeSpeed: 100,
    backSpeed: 150,
    loop: true
});