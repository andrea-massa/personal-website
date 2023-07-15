//SCROLL ANIMATIONS
const observer = new IntersectionObserver((entries) => {
    $(entries).each(function (index, entry) {
        if(entry.isIntersecting){            
            $(entry.target).removeClass('hidden');
            $(entry.target).addClass('show');
        }               
    });
})


$('.hidden').each(function (index, element) {
    observer.observe(element);
});


// WHENEVER THE USER REFRESHES TAKE THEM TO THE TOP OF PAGE
$(document).ready(function () {
    window.scrollTo(0, 0);
});