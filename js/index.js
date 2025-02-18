

    // JavaScript para cambiar la clase del navbar al hacer scroll

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            $('.bg-body-tertiary').addClass('transparent');
            $('.text-dalany2').addClass('text-dalany2-scrollHover');
            
        } else {
            $('.bg-body-tertiary').removeClass('transparent');
            $('.text-dalany2').removeClass('text-dalany2-scrollHover');
        }
    });


    /* 
    $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        $('.parallax-bg').css('background-position', '50%'+ (-scroll / 3) + 'px');
    }); */
  

    /* cambiar  bg navbar*/
    $(window).scroll(function () {
        if($(this).scrollTop() >1){
            $('.navbar').addClass('transparent');
           
        }else {
            $('.navbar').removeClass('transparent');
           
        }
    }   );

    