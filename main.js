$(document).ready(function() {
  console.log('Document is loaded.');
  var main = $('main .me');
  var list = $('#navi ul #active');
  $('body').css('display', 'none');
  $('body').fadeIn('slow');
  $('main .me').fadeIn('slow');

  $('li').on('click', function() {
    mainClass = $(this).attr("class");
    $('main div').hide();
   list.removeAttr('id');
    $(this).attr('id','active');
    list = $(this);
    $('main div').each(function(i) {
      if ( $(this).attr("class") == mainClass ) {
        $(this).fadeIn();
        main = $(this);
      }
    });
  });

  $(document).keyup(function(event) {
    var ch = String.fromCharCode(event.which);

    if (event.keyCode === 39) {
      if (parseInt(main.attr("class").slice(3, 4)) < $('#navi ul').children().length) {
        main.hide();
        list.removeAttr('id');
        main.next().fadeIn();
        list.next().attr('id','aboutme');
        main = main.next();
        list = list.next();
      }
    }
    if (event.keyCode === 37) {
      if (parseInt(mainClass.attr("class").slice(3, 4)) > 1) {
        main.hide();
        list.removeAttr('id');
        main.prev().fadeIn();
        list.prev().attr('id','aboutme');
        main = main.prev();
        list = list.prev();
      }
    }
  });
});