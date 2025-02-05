

    // JavaScript para cambiar la clase del navbar al hacer scroll
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            $('.bg-body-tertiary').addClass('transparent');
        } else {
            $('.bg-body-tertiary').removeClass('transparent');
        }
    });

//cambiar color de letras de los elementos del navbar al hacer scroll
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            $('.nav-link').addClass('text-white');
        } else {
            $('.nav-link').removeClass('text-white');
        }
    });
$(window).scroll(function () {
    if ($(this).scrollTop() >1){
        $('.navbar-brand').addClass('text-white');
    }else {
        $('.navbar-brand').removeClass('text-white');
    }
});	
    
    $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        $('.parallax-bg').css('background-position', '50%'+ (-scroll / 3) + 'px');
    });
  

    /* cambiar icono */
    $(window).scroll(function () {
        if($(this).scrollTop() >1){
            $('.navbar').addClass('transparent');
            $('.navbar-brand img').attr('src','./assets/imgs/icono2.ico');
        }else {
            $('.navbar').removeClass('transparent');
            $('#icono').attr('src', './assets/imgs/DALANY-logo.ico');
        }
    }   );