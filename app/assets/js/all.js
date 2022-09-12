$(function() {
  console.log('Hello Bootstrap5');
});

$(document).ready(function(){
    $('#search').hide();
    $('.fa-xmark').hide();
    
    
  
  $('.openSearch').click(function(){
    $('#search').show();
    $('.smNav').hide()
  });

  
  $('.fa-solid').click(function(){
    $('#search').hide();
    $('.smNav').show()
  });

  
  $('.fa-bars').click(function(){
    $('.fa-bars').hide();
    $('.fa-xmark').show()
  });

  $('.fa-xmark').click(function(){
    $('.fa-xmark').hide();
    $('.fa-bars').show()
  });
 

});


$('#search').toggle();

$('.openSearch').click(function(){
  $('.search').slideToggle();
})

$('.btn-more').click(function(){
  $('article').slideToggle();
})


const swiper = new Swiper(".swiper", {

  // 左右箭頭  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // 分頁 
  pagination: {
    el: ".swiper-pagination",
  },
   // 滾動條
   scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  mousewheel: true,
  keyboard: true,
});


// 確保圖片都載入後，以免造成剛進入頁面時圖片會被覆蓋
$('.row').imagesLoaded().progress( function() {
  $('.row').masonry(); // 渲染整體畫面
});


