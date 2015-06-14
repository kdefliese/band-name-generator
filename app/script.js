$(function() {

   $('form').on('submit', function(event) {
    event.preventDefault();
    var adjective = $('#user-adjective').val();
    var noun = $('#user-noun').val();
    var verb = $('#user-verb').val();
    var wordPost;

    if (adjective) {
      wordPost = {word: adjective};
      $.post('/adjectives', wordPost, function(response) {
        var confirm = response.msg;
        $('#adjectiveResult').html(confirm);
      });
    };
    if (noun) {
      wordPost = {word: noun};
      $.post('/nouns', wordPost, function(response) {
        var confirm = response.msg;
        $('#nounResult').html(confirm);
      });
    };
    if (verb) {
      wordPost = {word: verb};
      $.post('/verbs', wordPost, function(response) {
        var confirm = response.msg;
        $('#verbResult').html(confirm);
      });
    };
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


