$(document).ready(function(){
    $("#burger-nav").on("click", function(){
        $("header nav ul").toggleClass("open");
    });

    $("header nav ul").on("click", function(){
      $(this).toggleClass("open");
    });

    $(window).scroll(checkAffix);
    scrollSpyNavbar();
    
});// $(document).ready func

function checkAffix(){
  if($(window).scrollTop() > 0){
    $('header').addClass('header-affix');
  } else {
    $('header').removeClass('header-affix');
  }
}


function scrollSpyNavbar(){
  var $menu = $("ul");
  var $menu_a = $("a", $menu);
  var id = false;
  var sections = [];
  var hash = function(h) {
      if (history.pushState) {
      history.pushState(null, null, h);
      } else {
      location.hash = h;
      }
  };

  $menu_a.click(function(event) {
      event.preventDefault();
      $("html, body").animate(
      {
          scrollTop: $($(this).attr("href")).offset().top - $("header").height()
      },
      {
          duration: 700,
          complete: hash($(this).attr("href"))
      }
      );
  });

  $menu_a.each(function() {
      sections.push($($(this).attr("href")));
  });

  $(window).scroll(function(event) {
      var scrolling = $(this).scrollTop() + $(this).height() / 3;
      var scroll_id;
      for (var i in sections) {
      var section = sections[i];
      if (scrolling > section.offset().top) {
          scroll_id = section.attr("id");
      }
      }
      if (scroll_id !== id) {
      id = scroll_id;
      $menu_a.removeClass("isactive");
      $("a[href='#" + id + "']", $menu).addClass("isactive");
      }
  });
}