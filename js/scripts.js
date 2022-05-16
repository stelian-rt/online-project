$('.cours-video__video').parent().click(function () {
  if($(this).children(".cours-video__video").get(0).paused){       
 $(this).children(".cours-video__video").get(0).play();   
$(this).children(".play-icon").fadeOut();
    }else{      
 $(this).children(".cours-video__video").get(0).pause();
  $(this).children(".play-icon").fadeIn();
    }
});

//////////////////////////////////--------------//////////////////////////////////////////

var video2 = $('.video-block__inner');
var video = $('.cours-video__video-container');
var playBtn = $('.play-icon');
playBtn.on('click', function() {
  $(this).toggleClass('active');
})
video.on('click', function() {
  $(this).find('.play-icon').toggleClass('play-icon-hidden');
});
video2.on('click', function() {
  $(this).find('.play-icon').toggleClass('play-icon-hidden');
});

////////////////////////////////////////////////////////////////////////////

$('.view-all').click(function(){
  if ( document.querySelector('.cours-video__view-all').style.display == "block" ) {
    $(".cours-video__view-all").slideUp('slow');
    $('.view-all').text('View all courses');
  } 
  else{
    $(".cours-video__view-all").slideDown('slow');
    $('.view-all').text('View less');
  }
});

////////////////////////////////////////////////////////////////////////////

$(document).ready(function () {
  $('.reviews-slider__inner').slick({
    autoplay: true,
    speed: 700,
    autoplaySpeed: 2000,
    //adaptiveHeight: true
  });
});

////////////////////////////////////////////////////////////////////////////
$('.view-all-btn').click(function(){
  if ( document.querySelector('.cours-video__view-all').style.display == "block" ) {
    $(".cours-video__view-all").slideUp('slow');
    $('.view-all-btn').text('View  more student designs');
  } 
  else{
    $(".cours-video__view-all").slideDown('slow');
    $('.view-all-btn').text('View less');
  }
});
////////////////////////////////////////////////////////////////////////////


