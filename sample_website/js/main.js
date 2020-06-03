$(function(){
  $(".video").click(function(){
    var theModal = $(this).data("target"),
    videoSRC=$(this).attr("data-video"),
    videoSRCauto=videoSRC+"?modesbranding=1&rel=0&controls=0$showinfo=0&html=1&autoplay=1";
    $(theModal+'iframe').attr('scr',videoSRCauto);
    $(theModal+"button.close").click(function(){
      $(theModal+'iframe').attr("src",videoSRC);
    });
  });
});