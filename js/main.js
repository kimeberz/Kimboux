// jQuery for page scrolling feature - requires jQuery Easing plugin

$('body').on('click', '.page-scroll a', function() {
    var hash = $(this).attr('href');

    if(history.pushState) {
        history.pushState(null, null, hash);
    }
    else {
        location.hash = hash;
        return;
    }

    $('html, body').stop().animate({
        scrollTop: $(hash).offset().top
    }, 1500, 'easeOutQuint');
    event.preventDefault();
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
});

// Set current year in the footer
$('.js-year').html(new Date().getFullYear());
