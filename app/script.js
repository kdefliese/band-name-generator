$(function() {

   $('form').on('submit', function(event) {
    event.preventDefault();
    var userAdjective = $('#user-adjective').val();
    $.post('/adjectives', {word: userAdjective}, function(response) {
      var confirm = response.msg;
      $('#adjectiveResult').html(confirm);
    });
  });

  $("button").click(function() {
    $.get('/adjectives', function(response) {
      var adjective = response.word;
      $("#adjective").text(adjective);
    });

    $.get('/verbs', function(response) {
      var verb = response.word;
      $("#verb").text(verb);
    });

    $.get('/nouns', function(response) {
      var noun = response.word;
      $("#noun").text(noun);
    });

  });

});


