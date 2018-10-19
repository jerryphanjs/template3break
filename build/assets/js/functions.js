/*===================================================
Viewport width fit for Tablet and Mobile
===================================================*/
var _ua = (function(u) {
  return {
    Tablet: (u.indexOf("windows") != -1 && u.indexOf("touch") != -1 && u.indexOf("tablet pc") == -1) || u.indexOf("ipad") != -1 || (u.indexOf("android") != -1 && u.indexOf("mobile") == -1) || (u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1) || u.indexOf("kindle") != -1 || u.indexOf("silk") != -1 || u.indexOf("playbook") != -1,
    Mobile: (u.indexOf("windows") != -1 && u.indexOf("phone") != -1) || u.indexOf("iphone") != -1 || u.indexOf("ipod") != -1 || (u.indexOf("android") != -1 && u.indexOf("mobile") != -1) || (u.indexOf("firefox") != -1 && u.indexOf("mobile") != -1) || u.indexOf("blackberry") != -1
  }
}
)(window.navigator.userAgent.toLowerCase());
if (_ua.Tablet) {
  $("meta[name='viewport']").attr('content', 'width=1100');
}
/*-----------------------------------------------------------------------------------*/
/* Header Navigation Mobile
/*-----------------------------------------------------------------------------------*/
$(document).ready(function() {
/*-----------------------------------------------------------------------------------*/
/* Menu Mobile Toggle
/*-----------------------------------------------------------------------------------*/
  $('.c-head__menu').on('click', function() {
    $('.c-navisp').slideToggle(400);
    $('.c-navisp__2').slideToggle(400);
    let srcOpen = './assets/img/common/i_menu_open.png';
    let srcClose = './assets/img/common/i_menu.png';
    let icon = $('.c-head__menu').find('img').attr('src');
    if(icon == srcClose) {
      $('.c-head__menu').find('img').attr('src', srcOpen);
    }else {
      $('.c-head__menu').find('img').attr('src', srcClose);
    }
  })
//*-----------------------------------------------------------------------------------*/
//* Slider 
//*-----------------------------------------------------------------------------------*/
  $('.c-head__slider').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		dots: false,
		nextArrow: '<a type="button" class="slick-next btn-slider next"><img src="./assets/img/index/next-arr.png"></a>',
    prevArrow: '<a type="button" class="slick-prev btn-slider prev"><img src="./assets/img/index/prev-arr.png"></a>',
    responsive: [
      {
        breakpoint: 499,
        settings: {
          nextArrow: '<a type="button" class="slick-next btn-slider next"><img src="./assets/img/index/next-arr_sp.png"></a>',
          prevArrow: '<a type="button" class="slick-prev btn-slider prev"><img src="./assets/img/index/prev-arr_sp.png"></a>',
        }
      }
    ]
  });
//*-----------------------------------------------------------------------------------*/
//* Horizontal Tab
//*-----------------------------------------------------------------------------------*/
    $('.tablink').on('click', function() {
      let $this = $(this).attr('target');
      $('.tabcontent').removeClass('active');
      $('#'+$this).addClass('active');
    })
    $('.p-profile__ctr ul li a').on('click', function() {
      let $this = $(this).attr('data-id');
      let profileContent = $('.p-profile1');
      profileContent.each(function() {
        let panel = $(this);
        panel.removeClass('active');
      })
      $('#'+$this).addClass('active');
    })
//*-----------------------------------------------------------------------------------*/
//* Fade in effect
//*-----------------------------------------------------------------------------------*/
    var elements01 = $('.l-scrollUp');
    var $window = $(window);
    function check_if_in_view() {
      var window_height = $window.height();
      var window_top_pos = $window.scrollTop();
      var window_bot_pos = (window_height + window_top_pos);

      $.each(elements01, function() {
       var $ele = $(this);
       var ele_height = $ele.outerHeight();
       var ele_top_pos = $ele.offset().top;
       var ele_bot_pos = (ele_height + ele_top_pos);

        if((ele_bot_pos >= window_top_pos) && (ele_top_pos <= window_bot_pos)) {
          $ele.css({
            transition: 'all 0.8s ease-out',
            transform: 'translateY(0)',
            opacity: 1
          });
        }
      })
    }
    $window.on('scroll resize', check_if_in_view);
})
// //*-----------------------------------------------------------------------------------*/
// //* Hide Slider without Index
// //*-----------------------------------------------------------------------------------*/
// var href = location.pathname;
// var hrefId = href.indexOf('index.html');
// var slider = document.getElementById('header_slider');
// if( hrefId != -1 || href == '/' || href == '/index.html'){
//   slider.style.display = 'block';
// }
// else{
//   slider.style.display = 'none';
//   document.getElementsByClassName('c-navisp__2')[0].style.marginTop = '2px';
//   document.body.classList.add('body_bg_faq');
// }


