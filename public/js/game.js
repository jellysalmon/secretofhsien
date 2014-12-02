
function Game() {
  this.$stage = $('#stage');
  this.hsienko = new Hsienko(this.$stage);
}

Game.prototype.loop = function() {
  this.hsienko.move();
}

$(document).ready(function(){
  game = new Game();
  setInterval(function() { game.loop(); }, 20);

  Mousetrap.bind('right', function(){
    game.hsienko.direction = 'right'
  })  

  Mousetrap.bind('left', function(){
    game.hsienko.direction = 'left'
  })
  Mousetrap.bind('up', function(){
    game.hsienko.direction = 'up'
  })
  Mousetrap.bind('down', function(){
  game.hsienko.direction = 'down'
  })

});