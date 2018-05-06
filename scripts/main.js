
$(document).ready(function(){
    $("#burger-nav").on("click", function(){
        $("header nav ul").toggleClass("open");
    });

    $(window).scroll(checkAffix);


});// $(document).ready func

function checkAffix(){
  if($(window).scrollTop() > 0){
    $('header').addClass('header-affix');
  } else {
    $('header').removeClass('header-affix');
  }
}
