$(document).ready(function() {
  var highScores = [];
    
  $('#score_button').on('click', function(e){
    e.preventDefault();

    user_data = {score: $('#timer').text(), name: $('#user').html()}
    
  
    $.ajax({
      type:'post',
      url: '/submit_score',
      data: user_data,
      dataType: "json"
    })
     // Object {user: "Joey", high_score: 6050}
    .done(function(serverData) {
        highScores = serverData
        // highScores.push(serverData);
        console.log(highScores)

        highScores.forEach
       
        // highScores = _.uniq(highScores, function (score) {
        //     return score.user;
        // });
    
        
        var sortedScores = _.sortBy(highScores, function (score) {
            return score.high_score; 
        });
      

        var items = _.map(sortedScores, function (score) {
            return "<li>" + score.name + " " + score.high_score + "</li>";
        });
        
        
 
        items.reverse();
        console.log(items)

        top_5 = items.slice(0,5)

        console.log(items)
        console.log(top_5)
        $("#leaderboard").empty();
        $('#leaderboard').append(top_5);

      })
    .fail(function() {
        console.log('doge')
    });
  });
});






