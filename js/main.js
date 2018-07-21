//menu bar
// var menuBar = document.getElementById('menuBar');
// var bar1 = document.getElementsByClassName('bar1')[0];
// var bar2 = document.getElementsByClassName('bar2')[0];
// var bar3 = document.getElementsByClassName('bar3')[0];
// var barWrapper = '<div class="bar1"></div>' + '<div class="bar2"></div>' + '<div class="bar3"></div>';

$('#menuBar').click(function() {
   //return $('.bar1, .bar2, .bar3').addClass('change');
    $('.bar1').css({'transform': 'rotate(-45deg) translate(-9px, 6px)'});
    $('.bar2').css('opacity', '0');
    $('.bar3').css({'transform': 'rotate(45deg) translate(-8px, -8px)'});


});
