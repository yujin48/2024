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


    //서브 1

    $(".sub1CL ul>li").click(function(){
        $(".sub1CL ul>li").removeClass("sub1on")
        $(".sub1CR ul>li").removeClass("sub1on")
        $(this).addClass("sub1on")
        let idx = $(this).index()
        $(".sub1Ccnet>img").addClass("on")
        $(".sub1Ccent>img").attr("src",pint[idx].src)
        $(".sub1Ccnet>img").attr("alt",pint[idx].alt)
        $(".sub1CR>div>h1").html(pint[idx].h)
        $(".sub1CR>div>p").eq(0).html(pint[idx].p1)
        $(".sub1CR>div>p").eq(1).html(pint[idx].p2)

    })
    $(".sub1CR ul>li").click(function(){
        $(".sub1CL ul>li").removeClass("sub1on")
        $(".sub1CR ul>li").removeClass("sub1on")
        $(this).addClass("sub1on")
        let idx = $(this).index()+9
        $(".sub1Ccent>img").attr("src",pint[idx].src)
        $(".sub1Ccnet>img").attr("alt",pint[idx].alt)
        $(".sub1CR>div>h1").html(pint[idx].h)
        $(".sub1CR>div>p").eq(0).html(pint[idx].p1)
        $(".sub1CR>div>p").eq(1).html(pint[idx].p2)
    })


    //서브1 모바일 슬라이드
    var swiper1 = new Swiper(".sb1mo", {
        scrollbar: {
          el: ".sub1scll",
          hide: true,
        },
      });

    //서브 1 모바일 컨텐츠

    $(".sb1mo li").eq(0).children().click(function(){
        $(".sb1mo li section").removeClass("sub1on")
        $(this).addClass("sub1on")
        let idx = $(this).index()
        $(".mosub1>figure>img").addClass("on")
        $(".mosub1>figure>img").attr("src",pint[idx].src)
        $(".mosub1>figure>img").attr("alt",pint[idx].alt)
        $(".mosub1>section>h1").html(pint[idx].h)
        $(".mosub1>section>p").eq(0).html(pint[idx].p1)
        $(".mosub1>section>p").eq(1).html(pint[idx].p2)

    })
    $(".sb1mo li").eq(1).children().click(function(){
        $(".sb1mo li section").removeClass("sub1on")
        $(this).addClass("sub1on")
        let idx = $(this).index()+6
        $(".mosub1>figure>img").addClass("on")
        $(".mosub1>figure>img").attr("src",pint[idx].src)
        $(".mosub1>figure>img").attr("alt",pint[idx].alt)
        $(".mosub1>section>h1").html(pint[idx].h)
        $(".mosub1>section>p").eq(0).html(pint[idx].p1)
        $(".mosub1>section>p").eq(1).html(pint[idx].p2)

    })
    $(".sb1mo li").eq(2).children().click(function(){
        $(".sb1mo li section").removeClass("sub1on")
        $(this).addClass("sub1on")
        let idx = $(this).index()+12
        $(".mosub1>figure>img").addClass("on")
        $(".mosub1>figure>img").attr("src",pint[idx].src)
        $(".mosub1>figure>img").attr("alt",pint[idx].alt)
        $(".mosub1>section>h1").html(pint[idx].h)
        $(".mosub1>section>p").eq(0).html(pint[idx].p1)
        $(".mosub1>section>p").eq(1).html(pint[idx].p2)

    })

    let pint = [
        {
            src: "./img/sub1/fs_dark.png",
            alt: "다크 초콜릿 가나슈&아몬드",
            h : `다크 초콜릿 가나슈 & 아몬드`,
            p1 : `고품질의 진한 다크초콜릿과 프리미엄 가나슈,<br>크런치 아몬드가 가득!`,
            p2 : `묵직하게 선사하는 깊은 맛의<br>프리미엄 초콜릿 아이스크림`
        },
        {
            src : "./img/sub1/fs_maka.png",
            alt : "마카다미아 넛",
            h : "마카다미아 넛",
            p1 : "톡톡 씹히는 로스티드 마카다미아넛의<br>진한 풍미가 가득",
            p2 : "다채로운 식감과 진한 고소함을 더하는<br>마카다미아 넛 아이스크림",
        },
        {
            src : "./img/sub1/fs_green.png",
            alt : "그린티",
            h : "그린티",
            p1 : "최상급의 녹차로 만든 깊고 섬세한 맛의<br>달콤 쌉싸름한 프리미엄 녹차 아이스크림",
            p2 : "",
        },
        {
            src : "./img/sub1/fs_strowche.png",
            alt : "스트로베리 치즈케이크",
            h : "스트로베리 치즈케이크",
            p1 : "달콤 상큼한 스트로베리 소스 스월에<br>크리미하고 진한 치즈케이크 아이스크림과<br>크런치하고 고소한 쿠키 조각들이 선사하는<br>입 안 가득 풍부한 맛",
            p2 : "",
        },
        {
            src : "./img/sub1/fs_water.png",
            alt : "워터멜론&스트로베리",
            h : "워터멜론 & 스트로베리",
            p1 : "크리미한 워터멜론 아이스크림에<br>달콤상큼한 스트로베리 스월을 더하여<br>REAL 과일 가득 아이스크림으로 탄생",
            p2 : "",
        },
        {
            src : "./img/sub1/fs_black.png",
            alt : "체리&블랙베리",
            h : "체리&블랙베리",
            p1 : "크리미한 체리 아이스크림에<br>새콤달콤한 블랙베리 스월을 더하여<br>REAL 과일 가득 아이스크림으로 탄생",
            p2 : "",
        },
        {
            src : "./img/sub1/fs_honey.png",
            alt : "허니&그레이프",
            h : "허니 & 그레이프",
            p1 : "상큼 쌉싸름한 매력의 자몽 아이스크림에<br>달콤한 프리미엄 블라썸 허니 스월을 가득 담아<br>봄 내음 은은하게 퍼지는 우아한 맛으로 탄생",
            p2 : "",
        },
        {
            src : "./img/sub1/fs_banil.png",
            alt : "바닐라",
            h : "바닐라",
            p1 : "5가지 순수한 원재료로만<br>입 안 가득 채우는 우아한 바닐라",
            p2 : "",
        },
        {
            src : "./img/sub1/fs_cho&ba.png",
            alt : "벨지안 초콜릿&바닐라",
            h : "벨지안 초콜릿&바닐라",
            p1 : "입 안 가득 퍼지는<br>진한 초콜릿 스월과 초콜릿칩이 가득!<br>심심할 틈이 없는 초콜릿의 신세계!",
            p2 : "",
        },{
            src : "./img/sub1/fs_cho&strow.png",
            alt : "벨지안 초콜릿 & 스트로베리",
            h : "벨지안 초콜릿 & 스트로베리",
            p1 : "깊고 진한 벨지안 초콜릿과 상콤달콤 스트로베리의<br>강렬하고 조화로운 감각적인 트위스트!",
            p2 : "전혀 다른 두 가지 플레이버의 완벽한 만남으로<br>실패할 수 없는 다채로운 식감의 찐조합",
        },
        {
            src : "./img/sub1/fs_strow.png",
            alt : "스트로베리",
            h : "스트로베리",
            p1 : "리얼 딸기 조각이 가득! 원료부터 남다른 <br>프리미엄 스트로베리 아이스크림",
            p2 : "",
        },
        {
            src : "./img/sub1/fs_oreo.png",
            alt : "쿠키&크림",
            h : "쿠키&크림",
            p1 : "부드러운 하겐다즈 바닐라 아이스크림에<br>달콤하고 바삭한 쿠키 조각을 듬뿍 넣은<br>완벽한 조합의 맛",
            p2 : "",
        },
        {
            src : "./img/sub1/fs_finut.png",
            alt : "피넛버터 크런치",
            h : "피넛버터 크런치",
            p1 : "부드럽고 달콤한 피넛버터 소스와<br>카라멜라이즈드 솔티드 땅콩 토핑이<br>어우러진 '단짠' 조합",
            p2 : "",
        },
        {
            src : "./img/sub1/fs_cho.png",
            alt : "초콜릿",
            h : "초콜릿",
            p1 : "프리미엄 카카오로 만들어<br>더욱 진한 풍미와 깊은 달콤함",
            p2 : "",
        },
        {
            src : "./img/sub1/fs_honeyrose.png",
            alt : "허니&피치 위드 로즈",
            h : "허니&피치 위드 로즈",
            p1 : "부드럽고 상큼한 복숭아 아이스크림에,<br>달콤한 프리미엄 블라썸 허니 스월을 가득 담아<br>봄 내음 은은하게 퍼지는 우아한 맛으로 탄생",
            p2 : "",
        }
    ]

    //서브 2

    $(".bar>ul>li").click(function(){
        let idx = $(this).index()
        $(".barct>dl>dt").removeClass("sub2on")
        $(".barct>dl>dt").eq(idx).addClass("sub2on")
        $(".barct>dl>dd").removeClass("sub2on")
        $(".barct>dl>dd").eq(idx).addClass("sub2on")
    })

    $(".conei>ul>li").click(function(){
        let idx = $(this).index()
        $(".coneback>dl>dt").removeClass("sub2on")
        $(".coneback>dl>dt").eq(idx).addClass("sub2on")
        $(".coneback>dl>dd").removeClass("sub2on")
        $(".coneback>dl>dd").eq(idx).addClass("sub2on")
    })

    //서브2 슬라이드
    if(matchMedia("screen and (max-width: 768px)").matches){ 
        var swiper2 = new Swiper(".sb2mo", {
            slidesPerView: 4,
            spaceBetween: 10,
            scrollbar: {
                el: ".sub2scll",
                hide: true,
              },
          });
      }

      //서브4 세로 슬라이드
      if(matchMedia("screen and (min-width: 769px)").matches){ 
        var swiper3 = new Swiper(".sub4_2", {
            direction: "vertical",
            slidesPerView: 1,
            mousewheel: true,
          });
    
          var swiper4 = new Swiper(".sub4_1", {
            spaceBetween: 30,
            effect: "fade",
            mousewheel : true,
            
          });
    
        swiper3.controller.control = swiper4;
        swiper4.controller.control = swiper3;
      }

      swiper4.on('slideChange', function () {
        if(swiper4.isEnd || swiper4.isBeginning){
            setTimeout(function(){
                swiper4State = false;
            },1000)
        }
      });




    //서브2 스크롤
    $('.s2A>div').on('mousewheel DOMMouseScroll',function(event){
        let E = event.originalEvent;
        let delta = 0;
        if(E.detail){
            delta = E.detail * -40;
        }else{
            delta = E.wheelDelta;
        }

        if(delta>0){
            //마우스 휠을 올렸을 때 
            let posTop = $(this).prev().offset().top - 250
            $("html,body").stop().animate({scrollTop:posTop},500)
        }else{
            //마우스 휠을 내렸을 때 
            let scrolltop = $(window).scrollTop()
            let cont = $(".cone").offset().top -1000
            let posTop = $(this).next().offset().top - 50
            let posTop2 = $(".stick").offset().top

            
            if(scrolltop<cont){
                $("html,body").stop().animate({scrollTop:posTop2},500)
            }else{$("html,body").stop().animate({scrollTop:posTop},500)}
        
        }

    });
    console.log(swiper4.isBeginning)
    //서브4 스크롤
    let swiper4State = true;
    if(matchMedia("screen and (min-width: 769px)").matches){
        $('.s4A>div').on('mousewheel DOMMouseScroll',function(event){
            let E = event.originalEvent;
            let delta = 0;
            if(E.detail){
                delta = E.detail * -40;
            }else{
                delta = E.wheelDelta;
            }
            console.log(swiper4State)
            if($(this).attr("class")=="sub4menu" && swiper4State){
                return false;                
            }else{
                swiper4State = true;
            }
    
            if(delta>0){
                //마우스 휠을 올렸을 때 
                let posTop = $(this).prev().offset().top
                $("html,body").stop().animate({scrollTop:posTop},500)
            }else{
                //마우스 휠을 내렸을 때 
                
                let posTop = $(this).next().offset().top
                $("html,body").stop().animate({scrollTop:posTop},500)
    
            }
    
        });
    }
    
    //서브 5 컨텐츠 이벤트
    
    let counthehe = [0,0,0];
    if(matchMedia("screen and (min-width: 769px)").matches){
        $(window).on('mousewheel DOMMouseScroll',function(event){
            let E = event.originalEvent;
            let delta = 0;
            if(E.detail){
                delta = E.detail * -40;
            }else{
                delta = E.wheelDelta;
            }
    
            let scrollTop = $(window).scrollTop();
            let winH = $(window).height()*0.8;
            
            
    
            if(delta>0){
                //마우스 휠을 올렸을 때 
                
                $(".imgf").each(function(a){
                    if(scrollTop+winH > $(this).offset().top && $(this).offset().top > scrollTop){
                        counthehe[a]--;
                        if(counthehe[a]<0){counthehe[a]=0}
                        $(this).height(220+50*counthehe[a]);
                        $(this).css("transform","translateY("+ -40*counthehe[a]+"px)")
                    }
                })
                
               
            }else{
                //마우스 휠을 내렸을 때 
                $(".imgf").each(function(a){
                    if(scrollTop+winH > $(this).offset().top && $(this).offset().top > scrollTop){
                        counthehe[a]++;
                        if(counthehe[0]>5){counthehe[0]=5}
                        if(counthehe[1]>8){counthehe[1]=8}
                        if(counthehe[2]>5){counthehe[2]=5}
                        $(this).height(220+50*counthehe[a]);
                        $(this).css("transform","translateY("+40*counthehe[a]+"px)")
                    }
                })
                
    
            }
    
        });
    }
    
    if(matchMedia("screen and (min-width: 769px)").matches){
        $(window).scroll(function(){
            let scrollTop = $(window).scrollTop();
            let winH = $(window).height()*0.5;

            $(".sub5cont div").each(function(){
                console.log(scrollTop+winH);
                console.log($(this).offset().top);
                if(scrollTop+winH>$(this).offset().top){
                    $(this).addClass("on")
                 }else{
                    $(this).removeClass("on")
                 }
            })
    
        })
    }
   

})