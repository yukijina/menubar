$('#menuBtn').click(function() {
    $('#menuBtn').toggleClass('menuOpen');
    $('#menu').toggleClass('menuCollapsed');
    $('#menu ul li').toggleClass('hidden')

});

$('#menu a').hover(function(){
  $(this).addClass('animated flash delay-0.8s')
});
