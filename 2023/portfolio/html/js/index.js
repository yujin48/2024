$(document).ready(function(){

// $(window).scroll(function(){
//     let scrolltop = Math.round($(window).scrollTop())
//     console.log(scrolltop)
// })

    //스크롤
    $('.all>div').on('mousewheel DOMMouseScroll',function(event){
      let E = event.originalEvent;
      let delta = 0;
      if(E.detail){
          delta = E.detail;
      }else{
          delta = E.wheelDelta;
      }
      if(delta>0){
          //마우스 휠을 올렸을 때 
          let posTop = $(this).prevAll("div").offset().top
          $("html,body").stop().animate({scrollTop:posTop},1000)
      }else{
          //마우스 휠을 내렸을 때 
          let posTop = $(this).nextAll("div").offset().top
          $("html,body").stop().animate({scrollTop:posTop},1000)
      }
  });

    //헤더

    $(window).scroll(function(){
      let scrolltop = $(window).scrollTop()

      if(scrolltop>650){
        $(".inH").addClass("off")
        $(".mainH").removeClass("off")
      }else{
          $(".inH").removeClass("off")
          $(".mainH").addClass("off")
      }
  })

  // 세로 헤더 오픈
  let state = true
    $(".mainH>span").click(function(){
      if(state){
        $(".mainH").addClass("on")
        $(".mainH").removeClass("dd")
        state = false
    }else{
      $(".mainH").removeClass("on")
      $(".mainH").addClass("dd")
        state = true
      }
    })


    //책갈피
    $("header ul>li>a").click(function(e){
      e.preventDefault() //a태그의 기본 기능 제거
      let targetHref = $(this).attr("href")
      let posTop = $(targetHref).offset().top;
      $("html,body").stop().animate({scrollTop:posTop},500)
  })


    // 세로 헤더 색상변경
    $(window).scroll(function(){
      let scrolltop = $(window).scrollTop()
      let black = $(".redesign").offset().top*0.8
    let white = $(".popup").offset().top*0.9

      if(scrolltop>black && scrolltop<white){
        $(".mainH").addClass("onColor")
      }else{
         $(".mainH").removeClass("onColor")
      }
  })


    //배경 사이즈 변경
    $(window).scroll(function(){
      let scrolltop = $(window).scrollTop()

      if(scrolltop == $(".about").offset().top){
        $(".intro>figure").addClass("ab")
        $(".about").addClass("on")
      }else{
        $(".intro>figure").removeClass("ab")
        $(".about").removeClass("on")
      }
  })
  $(window).scroll(function(){
    let scrolltop = $(window).scrollTop()

    if(scrolltop == $(".skill").offset().top){
      $(".intro>figure").addClass("on")
    }else{
      $(".intro>figure").removeClass("on")
    }
})
  $(window).scroll(function(){
    let scrolltop = $(window).scrollTop()

    if(scrolltop == $(".redesign").offset().top){
      $(".redesign").addClass("on")

    }else{
      $(".redesign").removeClass("on")

    }
  })
  $(window).scroll(function(){
    let scrolltop = $(window).scrollTop()

    if(scrolltop == $(".point").offset().top){
      $(".point").addClass("on")
    }else{
      $(".point").removeClass("on")
    }
  })
  $(window).scroll(function(){
    let scrolltop = $(window).scrollTop()

    if(scrolltop == $(".banner").offset().top){
      $(".banner").addClass("on")
      $(".banners").addClass("on")
    }else{
      $(".banner").removeClass("on")
      $(".banners").removeClass("on")
    }
  })
  $(window).scroll(function(){
    let scrolltop = $(window).scrollTop()

    if(scrolltop == $(".popup").offset().top){
      $(".popup").addClass("on")
    }else{
      $(".popup").removeClass("on")
    }
  })
$(window).scroll(function(){
  let scrolltop = $(window).scrollTop()

  if(scrolltop == $(".bye").offset().top){
    $(".intro>figure").addClass("onn")
    $(".bye").addClass("on")
  }else{
    $(".intro>figure").removeClass("onn")
    $(".bye").removeClass("on")
  }
})

  //리디자인 상세설명
  $(".DPbtn").click(function(){
    $(".fix").css("transform","translateX(0)")
  })
  $(".design>span").click(function(){
    $(".fix").css("transform","translateX(-100%)") })

    //팝업 슬라이드
    var swiper1 = new Swiper(".pop", {
        navigation: {
          nextEl: ".s1btnN",
          prevEl: ".s1btnP",
        },
      });

    var swiper2 = new Swiper(".popup", {
        effect: "fade",
    });

    swiper1.controller.control = swiper2;
    swiper2.controller.control = swiper1;

    //배너 슬라이드
    var swiper3 = new Swiper(".banners", {
      grabCursor: true,
      effect: "creative",
      creativeEffect: {
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ["100%", 0, 0],
        },
        
      },
      navigation: {
        nextEl: ".bn",
        prevEl: ".bp",
      },
    });

    //배너 팝업 슬라이드
    var swiper4 = new Swiper(".bannerPo", {
      effect: "fade",
    })
    swiper3.controller.control = swiper4;
    swiper4.controller.control = swiper3;

    $(".bnasd>li").click(function(){
      $(".bannerP").css("display","block")
    })

    $(".bannerP>span").click(function(){
      $(".bannerP").css("display","none")
    })


    //svg 애니메이션

    $(window).scroll(function(){
      let scrolltop = $(window).scrollTop()
  
      if(scrolltop == $(".skill").offset().top){
        $(".skill svg line.in").each(function(){
          let pathLength = $(this).get(0).getTotalLength()
          $(this).css("stroke-dasharray",pathLength)
          $(this).css("stroke-dashoffset",pathLength)
          let _this = $(this)
          setTimeout(() => {
              _this.css("stroke-dashoffset",0)
              _this.css("transition","stroke-dashoffset 1s ease 0s")        
          }, 500);
      })
      $(".skill svg .inner").css("fill","#1C5A99")
      $(".skill svg .go").each(function(){
        let pathLength = $(this).get(0).getTotalLength()
        $(this).css("stroke-dasharray",pathLength)
        $(this).css("stroke-dashoffset",pathLength)
        let _this = $(this)
        setTimeout(() => {
            _this.css("stroke-dashoffset",0)
            _this.css("transition","stroke-dashoffset 1s ease 1s")        
        }, 500);
    })
      }else{
        $(".skill svg line.in").each(function(){
          let pathLength = $(this).get(0).getTotalLength()
          $(this).css("stroke-dasharray",pathLength)
          $(this).css("stroke-dashoffset",pathLength)

      })
      $(".skill svg .inner").css("fill","transparent")
      $(".skill svg .go").each(function(){
        let pathLength = $(this).get(0).getTotalLength()
        $(this).css("stroke-dasharray",pathLength)
        $(this).css("stroke-dashoffset",pathLength)
    })
      }
  })

   $(".skill ul figure").mouseover(function(){
      $(this).next().addClass("on")
   })
   $(".skill ul figure").mouseleave(function(){
    $(this).next().removeClass("on")
 })

 $(".ht").mouseover(function(){
    $(".htm").addClass("on")
})

  $(".ht").mouseleave(function(){
    $(".htm").removeClass("on")
})


$(".java").mouseover(function(){
  $(".go.js").addClass("on")
})

$(".java").mouseleave(function(){
  $(".go.js").removeClass("on")
})


$(".il").mouseover(function(){
  $(".ai").addClass("on")
})

$(".il").mouseleave(function(){
  $(".ai").removeClass("on")
})

$(".cs").mouseover(function(){
  $(".css").addClass("on")
})

$(".cs").mouseleave(function(){
  $(".css").removeClass("on")
})

$(".psd").mouseover(function(){
  $(".ps").addClass("on")
})

$(".psd").mouseleave(function(){
  $(".ps").removeClass("on")
})





})