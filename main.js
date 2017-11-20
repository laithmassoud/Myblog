$(document).ready(function() {
  console.log('Document is loaded.');
  $('body').css('display', 'none');
        main = $('.me');
        $('body').fadeIn();
        $('.me').fadeIn();

      $('#me').on('click', function() {
       main = $('.me');
       $('.me').fadeIn();
       $('.favcity').hide();
       $('.favmusic').hide();
       $('.contactme').hide();
     });

     $('#favcity').on('click', function() {

       main = $('.favcity');
       $('.favcity').fadeIn();
       $('.me').hide();
       $('.favmusic').hide();
       $('.contactme').hide();
     });

     $('#favmusic').on('click', function() {

       main = $('.favsong');
       $('.favmusic').fadeIn();
       $('.me').hide();
       $('.favcity').hide();
       $('.contactme').hide();
     });


     $('#contactme').on('click', function() {
       main = $('#contactme');
       $('.contactme').fadeIn();
       $('.me').hide();
       $('.favcity').hide();
       $('.favmusic').hide();
     });

  $(document).keyup(function(event) {
    var ch = String.fromCharCode(event.which);

    if (event.keyCode === 39) {
        main.hide();
        main.next().fadeIn();
        main = main.next();
      
    }
    if (event.keyCode === 37) {
        main.hide();
        main.prev().fadeIn();
        main = main.prev();
      
    }
  });
});
