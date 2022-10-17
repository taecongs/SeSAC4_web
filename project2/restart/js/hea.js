console.info(
    '%c See you later ', 'background:#222; color: #bada55;','\n' +
    'http://itddaa.com'
);
const hE = {
    init : function(){
        this.subSet();
        this.click();
        this.hover();
        this.scroll();
    },
    subSet : function(){
        if(!(window.location.pathname == "/kor" || window.location.pathname == "/kor/" || window.location.pathname == "/eng" || window.location.pathname == "/eng/")){ // 인덱스가 아닌이상 sub클래스
            $('header').addClass('sub');
        }

        switch(window.location.pathname.split('/')[2]){
            case "about" : 
                $('header .gnb > li').eq(1).children('a').addClass('sub');
            break;
            case "gallery" : 
                $('header .gnb > li').eq(4).children('a').addClass('sub');
            break;
            case "community" : 
                $('header .gnb > li').eq($('header .gnb > li').length-1).children('a').addClass('sub');
            break;
        }

    },
    click : function(){
        $('header .loc').click(function(){
            let ww = window.innerWidth;
            if(ww <= 768){
                $('header .loc .hover').stop().slideToggle(300);
            }
        });
        
        // mob on
        $('header .m_m').click(function(){
            $(this).toggleClass('on');
            $('header .mobHeader, header .loc').toggleClass('on');
        });
        $('header .mobHeader .depth1 > li p i').click(function(){
            $('header .mobHeader .depth2').slideUp(300);
            $(this).parents('p').siblings('.depth2').stop().slideToggle(300);
        });
    },
    hover : function(){
        $('header .gnb > li').mouseover( function(){ // 1뎁스 호버 했으경우 add 클래스
            if($('header .gnb > li > a').hasClass('add')){
                $('header .gnb > li > a').removeClass('add');
            }
            $(this).children('a').addClass('add');
        });
        
        
        $('header .gnb').mouseover(function(){ // gnb를 mouseover 했을경우 2뎁스 생성
            if(window.location.pathname == "/kor" || window.location.pathname == "/kor/" || window.location.pathname == "/eng" || window.location.pathname == "/eng/"){
                $('header').css("background","#45286a");
            }
            $('header .overBg, header .gnb .lnb').stop().slideDown(300);
            $(' header .gnb .lnb').css({
                "opacity": 1,
                "visibility": "visible"
            });
        });
        
        $('header').mouseleave(function(){ // header를 mouseleave 했을경우 1뎁스 제거
            if(window.location.pathname == "/kor" || window.location.pathname == "/kor/" || window.location.pathname == "/eng" || window.location.pathname == "/eng/"){
                $('header').removeAttr('style');
            }
            $('header .overBg').stop().slideUp(300);
            $(' header .gnb .lnb').css({
                "opacity": 0,
                "visibility": "hidden"
            });
        
            $('header .gnb > li > a').removeClass('add');
        
        });
        
        $('header .loc').hover( // loc mouseover , mouserleave 했을경우 국영문 게이트가 열림
            function(){
                let ww = window.innerWidth;
                if(ww > 768){
                    $('header .loc .hover').stop().slideDown(300);
                }
            },
            function(){
                let ww = window.innerWidth;
                if(ww > 768){
                    $('header .loc .hover').stop().slideUp(300);
                }
            }
        );
        
    },
    scroll : function(){
        $(window).scroll(function(){ // 헤더 스크롤하시 on
    
            let scroll = $(window).scrollTop();
        
            if(window.location.pathname == "/kor" || window.location.pathname == "/kor/" || window.location.pathname == "/eng" || window.location.pathname == "/eng/"){
                if(scroll > 0){
                    $('header').addClass('on');
                }else{
                    $('header').removeClass('on');
                }
            }
        
        });        
    }
}






