$(document).ready(function() {
  console.log('Document is loaded.');
  $('body').css('display', 'none');
  var main = $('.me');
  $('body').fadeIn();
  $('.me').fadeIn();

  $('#me').on('click', function() {
    var main = $('.me');
    $('.me').fadeIn();
    $('.favcity').hide();
    $('.favmusic').hide();
    $('.contactme').hide();
  });

  $('#favcity').on('click', function() {

    var main = $('.favcity');
    $('.favcity').fadeIn();
    $('.me').hide();
    $('.favmusic').hide();
    $('.contactme').hide();
  });

  $('#favmusic').on('click', function() {

    var main = $('.favmusic');
    $('.favmusic').fadeIn();
    $('.me').hide();
    $('.favcity').hide();
    $('.contactme').hide();
  });


  $('#contactme').on('click', function() {
    var main = $('#contactme');
    $('.contactme').fadeIn();
    $('.me').hide();
    $('.favcity').hide();
    $('.favmusic').hide();
  });
  
     $(document).keyup(function(event) {

    if (event.keyCode === 39) {
      if (parseInt(main.attr("class").slice(3, 4)) < $('#navi ul').children().length) {
        main.hide();
        main.next().fadeIn();
        main = main.next();
      }
    }
    if (event.keyCode === 37) {
      if (parseInt(main.attr("class").slice(3, 4)) > 1) {

        main.hide();
        main.prev().fadeIn();
        main = main.prev();
      }

    }

  });
  
  $("#send").click(function(event) {
    
    event.preventDefault();
    var formData = {
      studentaccount:'laythmassoud8@gmail.com',
      email: $("#email").val(),
      name: $('#name').val(),
      text: $('#text').val(),
    };

    $.ajax({
      url: "http://35.156.88.18:3050/contacts",
      type: "POST",
      data: formData,
      success: function(response) {
        console.log("the data have been send it")
        },
      complete: function(xhr, status) {
        },
      error: function(xhr, status, error) {
        console.log("error: " + error);
        console.log("error: " + status);
        console.log("error: " + xhr);
      }
    });
  });
});