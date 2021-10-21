//burger
const scrolllistener = () => {
    window.scrollTo(0, 0);
};

$('.burger').click(function() {
    $(this).toggleClass('active');
    $('.nav').toggleClass('active');
    if (
        $('.nav').hasClass('active')
        ) {
        window.addEventListener(
            'scroll', scrolllistener
        )
    }
    else {
        window.removeEventListener(
            'scroll',scrolllistener
        )
    }
});

//drop-nav
$('.tringle-drop').on('click', function(){
    $(this).toggleClass('active') 
    $($(this).data('target')).stop(true, false).slideToggle()  
});