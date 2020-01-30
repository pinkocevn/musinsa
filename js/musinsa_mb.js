$(function() {

    // 메인 슬라이드
    var swiper1 = new Swiper('.main_banner.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          },
        },autoplay: {
            delay: 3000,
            disableOnInteraction: false,
         }
      });

    var swiper2 = new Swiper('.styling>.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
        },scrollbar: {
                el: '.swiper-scrollbar',
                hide: true,
            }
        });

    var swiper3Option={
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
        },autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        }
    }
    var swiper3 = new Swiper('.shopping_issue .swiper-container', swiper3Option);


    // 랭킹 카테고리 탭메뉴

    $('.rank_list li a').click(function(e) {
        e.preventDefault();
        $('.rank_list li a').removeClass('active');
        $(this).addClass('active');

        
        var rankId = $(this).attr('href');
        console.log(rankId);
        
        $('.rank_wrap ul').removeClass('none');
        $(rankId).siblings().addClass('none');
    });




    // 쇼핑 이슈 탭메뉴
    $('.shopping_issue>ul li a').click(function(e) {
        e.preventDefault();
        $('.shopping_issue>ul li a').removeClass('active');
        $(this).addClass('active');

        // 내가누른 탭메뉴는 인덱스순으로 몇번째일까?
        var tabIndex=$(this).index('.shopping_issue>ul li a');
        console.log(tabIndex);
        
        var issueImg=[
            ['img/tab1-1.jpg', 'img/tab1-2.jpg', 'img/tab1-3.jpg', 'img/tab1-4.jpg'],
            ['img/tab2-1.jpg', 'img/tab2-2.jpg', 'img/tab2-3.jpg', 'img/tab2-4.jpg'],
            ['img/tab3-1.jpg', 'img/tab3-2.jpg', 'img/tab3-3.jpg', 'img/tab3-4.jpg'],
            ['img/tab4-1.jpg', 'img/tab4-2.jpg', 'img/tab4-3.jpg', 'img/tab4-4.jpg']
        ]

        if(swiper3!=undefined){
            //생성된 놈을 초기화시킨다.
            swiper3.destroy();
        }
        $('.shopping_issue .swiper-slide').each(function(i){
            $(this).find('img').attr('src',issueImg[tabIndex][i]);
        })
        swiper3 = new Swiper('.shopping_issue .swiper-container', swiper3Option);
    });


    // 상품 하트 눌렀을 때
    $('.fa-heart').click(function(e) {
        e.preventDefault();
        if ($(this).hasClass('fas')) {
            $(this).removeClass('fas');
            $(this).addClass('far');
        }else{
            $(this).removeClass('far');
            $(this).addClass('fas');
            alert('관심있는 상품 리스트에 추가되었습니다.')
        }
    })
    

    // 파란배경 팝업 닫기
    $('#main_popup button').click(function() {
        $('.main_popup_wrap').slideUp(500);
        $('body').removeClass('main_popup_none')
    });
    
    // 왼쪽에서 나타나는 품목, 브랜드 팝업
    $('.bt_fix_menu ul li:first-child').click(function(e) {
        e.preventDefault();
        // $('.main_menu-product').show();
        $('.main_menu-product').toggleClass('none');
    });
    $('.main_menu-product .popup_close').click(function() {
        // $(this).parents('.main_menu-product').hide();
        $('.main_menu-product').toggleClass('none');
    });


    // 왼쪽에서 나타나는 메뉴, 브랜드 버튼 클릭시
    $('.brand-box button').click(function(){ 
        $(this).css({
            'background-color':'#82bdff',
            'color':'#fff'
        });
        if ($(this).css('background-color',"#82bdff")) {
            $(this).siblings().css({
                'background-color':'#eee',
                'color':'#000'
            });
        }
    })

    // 브랜드 네모버튼 클릭시
    $('.brand-box button').click(function(e){ 
        e.preventDefault();
        
        var selector = $(this).data('filter');
        console.log(selector);

        $('.item').addClass('off').fadeOut(function(){

                setTimeout(function(){
                $('.brand-list '+selector).fadeIn().removeClass('off');
             },200)
        });
    })

    $('.product-btn').click(function() {
        if ($(this).hasClass('active')) {
        }else{
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
            $('.product_list').toggleClass('none');
        };
    })

    // 상의-아우터 등 카테고리 클릭시 메뉴 접힘
    $('.menu_title a').click(function() {
        $(this).nextAll().slideToggle();
        // $(this).removeClass();
        $(this).find('.sp-arrow-down').toggleClass('rotate');

    })


    // 왼쪽에서 나타나는 무신사테라스 팝업 스르륵
    $('.sp-category').click(function(e) {
        e.preventDefault();
        $('.category_popup').toggleClass('none');
        $('.top_category_bg').css('display','block');
    });
    $('.category_popup .popup_close').click(function() {
        $('.category_popup').toggleClass('none');
        $('.top_category_bg').css('display','none');
    });

    // 무신사테라스 팝업, 문구 클릭시 active
    $('.category_wrap a').click(function() {
        if ($(this).addClass('active')) {
            $(this).siblings().removeClass();
        }else{
            $(this).addClass('active');
        }
    })

    // 상단 검색, 유저 아이콘 클릭시 팝업 스르륵
    // 검색 팝업창 열기
    $('.search').click(function(e) {
        e.preventDefault();
        $('.popup_search').toggleClass('none');
        $('.top_category_bg').css('display','block');
    })
    // 검색 팝업창 닫기
    $('.popup_search .popup_close').click(function() {
        $('.popup_search').toggleClass('none');
        $('.top_category_bg').css('display','none');
    })

    // 최근검색어, 인기검색어 탭메뉴
    $('.search_list').click(function() {
        if ($(this).hasClass('active')) {
        }else{
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
            $('.product_searchlist').toggleClass('none');
        };
    })

    // 최근검색어 하나씩 지우기
    $('.product_searchlist .list-del').click(function() {
        $(this).parents('li').remove();
    })
    // 최근검색어 모두 지우기
    $('.search_reset').click(function() {
        console.log($('.recent_list li').length);
        
        if ($('.recent_list li').length==0){
            alert('삭제할 검색어가 없습니다.');
        }else{
            var result=confirm('최근검색어를 모두 삭제하시겠습니까?');
            if(result){
                $('.recent_list ul').empty().append('<li class="no_list">최근검색어가 없습니다.</li>');                               
            }
        };
    })

    // 로그인 팝업창 열기
    $('.login').click(function(e) {
        e.preventDefault();
        $('.popup_login').toggleClass('none');
        $('.top_category_bg').css('display','block');
    });
    // 검색 팝업창 닫기
    $('.popup_login .popup_close').click(function(p) {
        $('.popup_login').toggleClass('none');
        $('.top_category_bg').css('display','none');
    })

    // 하단, 무신사 상세정보
    $('.bottom_info li').click(function(e) {
        e.preventDefault();
        $(this).find('div').slideToggle();
        $(this).find('i').toggleClass('active');
    })



    // 슬라이드 폭에 따른 높이
    $(window).ready(function(e){
        var lih = $('.liheight:first-child').height();
        var lihh = $('.liheight:last-child').height();
        console.log(lih);
        console.log(lihh);
        $('.liheight:last-child').height(lih);
    })
    $(window).resize(function(e){
        var lih = $('.liheight:first-child').height();
        var lihh = $('.liheight:last-child').height();
        console.log(lih);
        console.log(lihh);
        $('.liheight:last-child').height(lih);
    })
    

    // 데일리룩 더보기
    $('.dailylook ul li').slice(0, 2).show();
    $('.daily_more').click(function() {
        var btn =$(this);
        if (btn.text()=='더보기') {
            $('.dailylook ul li:hidden').slice(0, 2).slideDown();
            if ($('.dailylook ul li:hidden').length==0) {
                btn.text('접기');
            }
            }else{
                $('.dailylook ul li').hide().slice(0, 2).show();
                btn.text('더보기');
            }
    })
})