/******************************************************
	시작페이지선언
******************************************************/
// 외부플러그인 호출
document.addEventListener('DOMContentLoaded', function(){
	swiper();
})



/*---------------------------------------------
	project swiper
---------------------------------------------*/
let proSwiper;
let swiper = function(){
    proSwiper = new Swiper('.sw-project',{
        mousewheel: true,
        pagination: {
            el: '.swiper-pagination',
        },
    })
};



/*---------------------------------------------
	Ready, Load
---------------------------------------------*/
var $winH;
$(document).ready(function(){
    $winH = $(window).outerHeight();
});

$(window).on('load', function(){
    init();
});

$(window).scroll(function(){
    boxEvnt();
    scrLeft();
    console.log($(window).scrollTop());
})



/*---------------------------------------------
	vhToPx
---------------------------------------------*/
function vhToPx(vh) {
    return Math.round(window.innerHeight / (100 / vh));
}



/*---------------------------------------------
	init
---------------------------------------------*/
var init = function(){
    clearTimeout(skillTimer);
    setTimeout(() => {
        $(window).scrollTop(0);
    }, 100);
    $('.box-wrap').removeClass('end');
    $('.box-txt-area').removeClass('end');
    $('.box-wrap').removeClass('ani02');
    $('.box-txt-wrap').removeClass('txt02-mv');

    $('.box-wrap').addClass('fixed');
    $('.box-txt-area').addClass('fixed');

    $('.box-wrap').addClass('ani01');
    $('.box-txt-wrap').addClass('txt01-mv');
    $('.scroll-txt').addClass('on');

    $('.link-btn.disabled').event.preventDefault();
}



/*---------------------------------------------
	header menu
---------------------------------------------*/
//function
var menu = (function(){
    return {
        home : function(){
            console.log('home');

            init();
        },
        about : function(){
            console.log('about');

            var posTop = $('.page#home').offset().top + vhToPx(150);
            $('html,body').stop().animate({scrollTop:posTop},1000);

            $('.scroll-txt').removeClass('on');
            $('.box-wrap').removeClass('ani01');
            $('.box-txt-wrap').removeClass('txt01-mv');
            $('.box-wrap').addClass('ani02');
            $('.box-txt-wrap').addClass('txt02-mv');
            skillTimer = setTimeout(function(){
                $('.skill-area').addClass('on');
            },500);
        },
        project : function(){
            console.log('project');

            var posTop = $('.page#project').offset().top;
            $('html,body').stop().animate({scrollTop:posTop},1000);
        },
        contact : function(){
            console.log('contact');

            var posTop = $('.page#contact').offset().top;
            $('html,body').stop().animate({scrollTop:posTop},1000);
        },
    }
})();


//event
$(document).on('click','.menu-area .menu', function(){
    var idx = $(this).closest('li').index();

    if(idx === 0){
        menu.home();
    }else if(idx === 1){
        menu.about();
    }else if(idx === 2){
        menu.project();
    }else if(idx === 3){
        menu.contact();
    }
})


//reload btn
$(document).on('click', '.btn.btn-reload', function(){
    location.reload();
})



/*---------------------------------------------
	box scroll
---------------------------------------------*/
//function
var skillTimer = null;
let boxEvnt = function(){
    var scrT = $(window).scrollTop();

    // console.log(scrT);
    // console.log($('.page#home').offset().top + vhToPx(200) - 60);

    // intro box fixed
    if( scrT < $('.page#home').offset().top + vhToPx(200) - 60 ){
        $('.box-wrap').removeClass('end');
        $('.box-txt-area').removeClass('end');

        $('.box-wrap').addClass('fixed');
        $('.box-txt-area').addClass('fixed');
    }else{
        $('.box-wrap').removeClass('fixed');
        $('.box-txt-area').removeClass('fixed');

        $('.box-wrap').addClass('end');
        $('.box-txt-area').addClass('end');
    }

    //intro evt
    if( scrT < $('.page#home').offset().top + vhToPx(90) ){

        $('.box-wrap').removeClass('ani02');
        $('.box-txt-wrap').removeClass('txt02-mv');
        $('.skill-area').removeClass('on');
        $('.box-wrap').addClass('ani01');
        $('.box-txt-wrap').addClass('txt01-mv');
        setTimeout(function(){
            $('.scroll-txt').addClass('on');
        },300);
        clearTimeout(skillTimer);

    }

    //about evt
    if( scrT > $('.page#home').offset().top + vhToPx(120) && scrT < $('.page#home').offset().top + vhToPx(200) ){


        $('.scroll-txt').removeClass('on');
        $('.box-wrap').removeClass('ani01');
        $('.box-txt-wrap').removeClass('txt01-mv');
        $('.box-wrap').addClass('ani02');
        $('.box-txt-wrap').addClass('txt02-mv');
        skillTimer = setTimeout(function(){
            $('.skill-area').addClass('on');
        },500);

    }else{
        clearTimeout(skillTimer);
    }

}



/*---------------------------------------------
	scroll
---------------------------------------------*/
let scrLeft = function(){
    var scrL = $(window).scrollLeft();

    if($('.box-txt-area').hasClass('fixed')){
        $('.box-txt-area').css({'left':-scrL});
    }

    if($('.box-wrap').hasClass('fixed')){
        $('.box-wrap').css({'left':-scrL})
    }
}