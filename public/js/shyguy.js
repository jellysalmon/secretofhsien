function Shyguy(stage) {
  this.$stage = stage
  this.x = Math.random() * this.$stage.width();
  this.y = Math.random() * this.$stage.height();
  this.height = 59;
  this.width = 59;
  this.direction = 'none';
  this.speed = 2;
  this.name = 'shyguy';
  this.initDisplay();
}

Shyguy.prototype.initDisplay = Hsienko.prototype.initDisplay;
Shyguy.prototype.updateDisplay = Hsienko.prototype.updateDisplay;
Shyguy.prototype.inBounds = Hsienko.prototype.inBounds;

Shyguy.prototype.move = function() {
  old_x = this.x;
  old_y = this.y;
  switch (this.direction) {
    case 'right':
      this.$sprite.css('background-image', 'url("./assets/images/fatshyguyright.gif")');
      this.x += this.speed;
      break;
    case 'left':
      this.$sprite.css('background-image', 'url("./assets/images/fatshyguyleft.gif")');
      this.x -= this.speed;
      break;
    case 'up':
      this.y -= this.speed;
      break;
    case 'down':
      this.y += this.speed;
      break;
  }
  if (! this.inBounds()) {
    this.x = old_x;
    this.y = old_y;
  }
  this.updateDisplay();
}

Shyguy.prototype.track = function(hsienko) {
  diff_x = Math.abs(this.x - hsienko.x)
  diff_y = Math.abs(this.y - hsienko.y)
  if (diff_x > diff_y) {
      if (this.x > hsienko.x) {
        this.direction = "left";
      }
      if (this.x < hsienko.x) {
        this.direction = 'right';
      }
  } else {
      if (this.y < hsienko.y) {
        this.direction = 'down';
      }
      if (this.y > hsienko.y) {
      this.direction = 'up';
      }
    }
} 