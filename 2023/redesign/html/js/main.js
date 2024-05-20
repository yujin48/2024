$(document).ready(function(){

//자동 새로고침
window.onresize = function(){
    document.location.reload();
  };

//모바일 메뉴바
$(".mobtop>a").click(function(e){
    e.preventDefault()        
    $(".mobmenu").addClass("on")
})

$(".mobmenu>p>span").click(function(){
    $(".mobmenu").removeClass("on")
})



//메인 배너 슬라이드
let count1 = 0
$(".banner>figure>div>a").click(function(e){
    e.preventDefault();
})
$(".banner a.nxt").click(function(){
    count1++
    if(count1>1){
        count1=0
    }
    $(".banner>figure>ul").css("transform","translateX("+(-(100/2)*count1)+"%)")
})
$(".banner a.prv").click(function(){
    count1--
    if(count1<0){
        count1=1
    }
    $(".banner>figure>ul").css("transform","translateX("+(-(100/2)*count1)+"%)")
})

//메인 스크롤 이벤트

$(window).scroll(function(){
    let scrolltop = $(window).scrollTop()
    let menu = $(".menuS").offset().top*0.8

    if(scrolltop>menu){
        $(".menuSC ul li").eq(0).find(".menuText").children().addClass("on")
        $(".menuSC ul li").eq(0).find(".menuImg").addClass("on")
    }else{
        $(".menuSC ul li").eq(0).find(".menuText").children().removeClass("on")
        $(".menuSC ul li").eq(0).find(".menuImg").removeClass("on")
    }
})



//메인 메뉴 슬라이드

let count2 = 0
$(".menuS div a").click(function(e){
    e.preventDefault()        
})
$(".menuS a.nxt").click(function(){
    count2++
    if(count2>3){count2=3}
    $(".menuSC>ul").css("transform","translateX("+(-(100/4)*count2)+"%)")
    $(".menuText").children().removeClass("on")
    $(".menuImg").removeClass("on")
    $(".menuSC>ul>li").eq(count2).children(".menuText").children().addClass("on")
    $(".menuSC>ul>li").eq(count2).children(".menuImg").addClass("on")
})
$(".menuS a.prv").click(function(){
    count2--
    if(count2<0){count2=0}
    $(".menuSC>ul").css("transform","translateX("+(-(100/4)*count2)+"%)")
    $(".menuText").children().removeClass("on")
    $(".menuImg").removeClass("on")
    $(".menuSC>ul>li").eq(count2).children(".menuText").children().addClass("on")
    $(".menuSC>ul>li").eq(count2).children(".menuImg").addClass("on")
})


//메인스크롤
$('.mainA>div').on('mousewheel DOMMouseScroll',function(event){
    let E = event.originalEvent;
    let delta = 0;
    if(E.detail){
        delta = E.detail * -40;
    }else{
        delta = E.wheelDelta;
    }

    if(delta>0){
        //마우스 휠을 올렸을 때 
        let posTop = $(this).prev().offset().top - 50
        $("html,body").stop().animate({scrollTop:posTop},700)
    }else{
        //마우스 휠을 내렸을 때 
        let posTop = $(this).next().offset().top - 50
        $("html,body").stop().animate({scrollTop:posTop},700)
    }


});


})