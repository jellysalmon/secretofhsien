

function Hsienko(stage) {
  this.$stage = stage
  this.x = 300;
  this.y = 300;
  this.height = 59;
  this.width = 59;
  this.direction = 'none';
  this.speed = 10;
  this.initDisplay();
}

function Powerup() {
  this.x = 0;
  this.y = 0;
}


Hsienko.prototype.initDisplay = function() {
  this.$hsienko = $("<div class='hsienko'></div>")
  $('#stage').append(this.$hsienko);
  
  this.updateDisplay();
}

Hsienko.prototype.updateDisplay = function() {
  this.$hsienko.css('top', this.y );
  this.$hsienko.css('left', this.x );
}

Hsienko.prototype.inBounds = function() {
  return (this.x > 0 && this.x < 600 - this.width &&
  this.y > 0 && this.y < 600 - this.width)
}

Hsienko.prototype.move = function() {
  old_x = this.x;
  old_y = this.y;
  switch (this.direction) {
    case 'right':
      this.$hsienko.css('background-image', 'url("./assets/images/Hsienko_right.gif")');
      this.x += this.speed;
      break;
    case 'left':
      this.$hsienko.css('background-image', 'url("./assets/images/Hsienko_left.gif")');
      this.x -= this.speed;
      break;
    case 'up':
    this.$hsienko.css('background-image', 'url("./assets/images/PF_Hsien-Ko.gif")');
      this.y -= this.speed;
      break;
    case 'down':
    this.$hsienko.css('background-image', 'url("./assets/images/PF_Hsien-Ko.gif")');
      this.y += this.speed;
      break;
  }
  if (! this.inBounds()) {
    this.x = old_x;
    this.y = old_y;
  }
  this.updateDisplay();
}

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