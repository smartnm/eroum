// custom map loader
document.addEventListener("DOMContentLoaded", function () {
  const mapScript = document.createElement('script');
  mapScript.src = "https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js";
  mapScript.onload = function () {
    new daum.roughmap.Lander({
      "timestamp": "1594089638423",
      "key": "2z4gt",
      "mapWidth": ""
    }).render();
  };
  document.body.appendChild(mapScript);
});

// rent_gallery slick 초기화
$(document).ready(function () {
  var $rentGallery = $('.rent_gallery'),
      $rentSlick = $rentGallery.find('.rent_gallery_list');

  $rentSlick.each(function(){
    var $this = $(this),
        $parent = $this.closest('.rent_gallery');
    $this.slick({
      swipe: true,
      draggable: true,
      slidesToShow: 1,
      dots: true,
      prevArrow: $parent.find('.prev'),
      nextArrow: $parent.find('.next'),
      appendDots: $parent.find('.dots'),
      adaptiveHeight: true
    });
  });
});
