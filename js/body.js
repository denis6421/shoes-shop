    var width = $(window).width();
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if(height>100){
    $(".header_wrapper").css("height", "60px");
    $(".header_wrapper a").css("top", "10px");

      $(".mobile_menu_button").css("transition", "0s");
  }else{
    $(".header_wrapper").css("height", "100px");
    $(".header_wrapper a").css("top", "30px");

      $(".mobile_menu_button").css("transition", "0s");
  }
});


$(window).scroll(function() {
  var height = $(window).scrollTop();
    var width = $(window).width();
    if(height>100 && width<980){
    $(".sort").css("top", "60px");
  }else{
    $(".sort").css("top", "100px");

  }
});


$(function(){
  $(".mobile_menu_button").click(function(){
    $(".sort").slideToggle();
  
  })
});


$(function(){
$(".nav_btn button").click(function(){
  if(width<980){
      $(".sort").slideToggle();
    }
})
})


$(document).ready(function(){
	$('.mobile_menu_button').click(function(){
		$(this).toggleClass('open');
	});
});
