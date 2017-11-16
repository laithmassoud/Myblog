$(document).ready(function() {
  console.log('Document is loaded.');
  $('body').css('display', 'none');
        main = $('.me');
        $('body').fadeIn();
        $('.me').fadeIn();

      $('#me').on('click', function() {
       main = $('.me');
       $('.me').fadeIn();
       $('favcity').hide();
       $('.favsong').hide();
       $('.contactme').hide();
     });

     $('#favcity').on('click', function() {

       main = $('.favcity');
       $('.favcity').fadeIn();
       $('.me').hide();
       $('.favsong').hide();
       $('.contactme').hide();
     });

     $('#favsong').on('click', function() {

       main = $('.favsong');
       $('.favsong').fadeIn();
       $('.me').hide();
       $('.favcity').hide();
       $('.contactme').hide();
     });


     $('#contactme').on('click', function() {
       main = $('#contactme');
       $('.contactme').fadeIn();
       $('.me').hide();
       $('.favcity').hide();
       $('.favsong').hide();
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
