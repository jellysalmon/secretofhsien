

function Hsienko() {
  this.x = 0;
  this.y = 0;
  this.initDisplay();
  this.direction = 'none';
  this.speed = 3;
}


Hsienko.prototype.initDisplay = function() {
  this.$hsienko = $("<div class='hsienko'></div>")
  $('#stage').append(this.$hsienko);
  this.$hsienko.css('position', 'relative');
  this.$hsienko.css('top', this.x);
  this.$hsienko.css('left', this.y);
  this.$hsienko.css('height', 59);
  this.$hsienko.css('width', 59);
  this.$hsienko.css('background-image', 'url("assets/images/PF_Hsien-Ko.gif")');
  this.$hsienko.css('background-repeat', 'no-repeat');
  
  this.updateDisplay();
}

Hsienko.prototype.updateDisplay = function() {
  this.$hsienko.css('top', this.y );
  this.$hsienko.css('left', this.x );
}


Hsienko.prototype.move = function() {
  switch (this.direction) {
    case 'right':
      this.x += this.speed;
      break;
    case 'left':
      this.x -= this.speed;
      break;
    case 'up':
      this.y -= this.speed;
      break;
    case 'down':
      this.y += this.speed;
      break;
  }
  this.updateDisplay();
}

function Game() {
  this.$arena = $('#stage');
  this.hsienko = new Hsienko();
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