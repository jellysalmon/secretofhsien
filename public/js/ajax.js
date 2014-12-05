$(document).ready(function() {
  $('#score_button').on('click', function(e){
    e.preventDefault();
    console.log('click')

    user_data = {score: $('#timer').text(), name: $('#user').html()}
    console.log(user_data)
  
    $.ajax({
      type:'post',
      url: '/submit_score',
      data: user_data,
      dataType: "json"
    })
    
    .done(function(serverData) {
        console.log(serverData);
        $('#leaderboard').append(serverData);
      })
    .fail(function() {
        console.log('doge')
    });
  });
});






