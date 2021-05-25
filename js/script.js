$(document).ready(function () {
    new WOW().init();
    var $body = $('body'),
        $window = $(window);
        twn = new TimelineLite;

// 새로고침 시 top 0
    window.onload = function () {
        setTimeout(function () {
            scrollTo(0,0);
        }, 100)
    }
// 새로 고침 끝


// 앵커 클릭 스무스 처리
    $('a.navClick').click(function(){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        return false;
    });
// 앵커 클릭 스무스 처리 끝

// 리퍼브 스와이프
    $('#refurbImgContainer').slick({
        focusOnSelect: true,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        opacity : 0.5
    });
//리퍼브 스와이프 끝 

// 메인 슬라이드 시작 // 가로 스크롤
    var isOpen = false;
    var $profileBox = $('.profileBox'),
        $stickyScroll = $('.stickyScroll'),
        $profileTop = $stickyScroll.offset().top-1370.02;
    var $profile = $('.profile');
    var $wid = 0;
    for (var i =0; i < $profile.length ;i++) {
        $wid += $profile.eq(i).width();
    }
    $profileBox.width($wid);
    $window.scroll(function () {
        // console.log('$window.scrollTop() = '+$window.scrollTop())
        // console.log('$profileTop = '+ $('.profileBox').offset().top)
        console.log($('#styzzzzzz').offset().top)
        if($('#styzzzzzz').offset().top <= $window.scrollTop()){
            // console.log($window.scrollTop());
            var $pos = $('#styzzzzzz').offset().top - $window.scrollTop();
            $profileBox.css({'transform' : 'translate3d('+$pos+'px , 0px, 0px)'})
            console.log($pos);
        }
    })
    $window.mousewheel(function(e, delta) {
        // e.preventDefault();
        if(!isOpen && !$body.hasClass('open') && delta < 0){
            $body.addClass('open');
            setTimeout(function() {
                $body.addClass('open-scroll');
                isOpen = true;
            }, 500);
        }
        else if(isOpen && $body.hasClass('open') && $window.scrollTop() == 0 && delta > 0){
            isOpen = false;
            $body.removeClass('open open-scroll');
        }
        // 해더 fade in out
        var $hearder = $('#header');
        if(delta < 0){
            $hearder.removeClass("navUp").addClass("navDown");
        }else{
            $hearder.removeClass("navDown").addClass("navUp");
        }
    });
    
// 메인 슬라이드 끝 

// movie
    var $movieImg = $('.playBox img');
    function movieImgSize() {
        $movieImg.css({'width':$window.width(),'height':$window.height()})
    }
// movie End

// resize
$(document).resize(function () { 
    backgroundImg();
    movieImgSize();
});
// resize End

// 배경페이지
    var $windowWidth = $window.width(),
        $ItemListWidth =$windowWidth/3;
    var $ItemList = $('.backgroundItemList'),
        $widthplus = 0;
    $('.backgroundItemBox').width($windowWidth);
    
    function backgroundImg() {
        
        for (let i = 0; i <$ItemList.length; i++) {
            $ItemList[i].css({'width' : $ItemListWidth , 'left' : $widthplus})
            $widthplus += $ItemListWidth;}
    }
    function _seen(e){
        twn.to(e, 2,{opacity : 1,ease: Power1.easeOut,});
    }
    function backShow(){
        if($ItemList.eq(0).hasClass('open') ==true){
            var $point = $('.AniPointbox');
            for (var i = 0; i < $point.length; i++) {
                twn.to($point.eq(i), 0.5,{opacity :1})
            }
        }
    }
    function backGraph(){
        if($ItemList.eq(1).hasClass('open')== true){
            $('.graphMove1').easyPieChart({scaleColor: false,lineWidth: 50,lineCap: 'butt',barColor: '#ff3f75',trackColor: '#ECC3CE' ,size: 180,animate: 800});
            $('.graphMove2').easyPieChart({scaleColor: false,lineWidth: 50,lineCap: 'butt',barColor: '#DFDFDF',trackColor: '#EBEBEB' ,size: 230,animate: 800});
            twn.to('.seen2', 1,{opacity :1,ease: Power1.easeOut,});
        }
    }
    $ItemList.click(function () {
        if(!$(this).hasClass('open')){
            if($(this).index()=== 0){
                var $seen = $ItemList.eq(0).find('.seen');
                var $1 = _seen($seen);
                $(this).addClass("open");
                backShow();
                $(this).width(100+'%');
                setTimeout($1,1000);
            }else{
                $(this).addClass("open");
                $(this).css({width:100+'%',left:0})
                $(this).find('.backgroundItemBox').css('left','0')
                setTimeout(backGraph,1000);
                // console.log($(this).index());
                if($(this).index()=== 1){
                    setTimeout($1,1000);
                    var $seen = $ItemList.eq(1).find('.seen');
                    var $1 = _seen($seen);
                }else if($(this).index()=== 2){
                    setTimeout($1,1000);
                    var $seen = $ItemList.eq(2).find('.seen');
                    var $1 = _seen($seen);
                }
            }
        }else{
            if($(this).index()=== 0){
                $(this).removeClass("open");
                $(this).width(33.33+'%');

            }else if($(this).index()=== 1){
                $(this).removeClass("open");
                $(this).css({width:33.33+'%',left:33.33+'%'})
                $(this).find('.backgroundItemBox').css('left',-120)
            }else{
                $(this).removeClass("open");
                $(this).css({width:33.33+'%',left:66.66+'%'})
            }
        }
    }).on('mouseenter',function () {
        $(this).find('img').css({'filter':'none', '-webkit-filter' : 'none'})
    }).on('mouseleave',function(){
        $(this).find('img').css({'filter':'grayscale(100%)', '-webkit-filter' : 'grayscale(100%)'})
    })

// 배경 끝

// 배경 페럴랙스
    $('.frootbackground').parallax('100%', 0.3);
//배경 패럴렉스 

// 컬러 오버 효과
    var svgElement = document.querySelector('#t_left_svg');
    var maskedElement = document.querySelector('#mask-circle');
    var svgPoint = svgElement.createSVGPoint();
    function liftMasking() {
        function cursorPoint(e, svg) {
            svgPoint.x = e.clientX;
            svgPoint.y = e.clientY;
            return svgPoint.matrixTransform(svg.getScreenCTM().inverse());
        }
        function update(svgCoords) {
            maskedElement.setAttribute('cx', svgCoords.x);
            maskedElement.setAttribute('cy', svgCoords.y);
        }
        window.addEventListener('mousemove', function(e) {
        update(cursorPoint(e, svgElement));
        }, false);
            
    }

    var _tone_main = document.querySelector('.colorImg');

    _tone_main.addEventListener('mouseover',toneMainIn);
    _tone_main.addEventListener('mouseout',toneMainOut);
    function toneMainIn() {liftMasking();maskedElement.style.r = 150+'px';}
    function toneMainOut() {maskedElement.style.r = 0+'px';}
// 컬러 오버 효과 끝

    // btn click
    var $stop = $('.stop');
    // console.log($stop)
    // var $article = $main.children();
    var max = $stop.length;
    var cuId = 0;
    var isAni = false;
    $('#controller button').on('click', function(e) {
        e.preventDefault();
        if(isAni && cuId >= max) return false;
        if(!isAni){
            isAni = true;
            cuId++;
            if(cuId >= max) cuId = max;
            var top = $stop.eq(cuId).offset().top;
            $('html, body').stop(true).animate({
                scrollTop : top     
            }, {duration: 400, complete:function(){
                isAni = false;
            }});
        }
    });
    // btn click End
    // video click
        // console.log($(".video .playBox .icon"))
        $('a.icon').on('click', function (e) {
            e.preventDefault();
            $('#overlay').addClass('visible');
        });
        $('#overlay').on('click', function (e) {
            e.preventDefault();
            $('#overlay').removeClass('visible');

        })

    // video click End



    

    
});// ready(function () End