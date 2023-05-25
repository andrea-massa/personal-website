//SCROLL ANIMATIONS
const observer = new IntersectionObserver((entries) => {
    $(entries).each(function (index, entry) {
        if(entry.isIntersecting){            
            $(entry.target).removeClass('hidden');
            $(entry.target).addClass('show');
        }               
        else{
            $(entry.target).removeClass('show');
            $(entry.target).addClass('hidden');
        }       
    });
})


$('.hidden').each(function (index, element) {
    observer.observe(element);
});