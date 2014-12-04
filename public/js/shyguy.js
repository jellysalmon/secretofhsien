function Shyguy(stage, speed) {
  this.$stage = stage;
  this.x = Math.floor(Math.random() * (600 - 100)) + 100
  this.y = Math.floor(Math.random() * (600 - 100)) + 100
  this.height = 30;
  this.width = 30;
  this.dead = false;
  this.direction = 'none';
  this.speed = speed;
  this.name = 'shyguy';
  this.initDisplay();
  this.sprite = {left: 'url("/images/fatshyguyleft.gif")', right: 'url("/images/fatshyguyright.gif")'};
}

Shyguy.prototype.initDisplay = Hsienko.prototype.initDisplay;
Shyguy.prototype.updateDisplay = Hsienko.prototype.updateDisplay;
Shyguy.prototype.inBounds = Hsienko.prototype.inBounds;
Shyguy.prototype.setDirection = Hsienko.prototype.setDirection

Shyguy.prototype.move = function() {
  old_x = this.x;
  old_y = this.y;
  switch (this.direction) {
    case 'right':
      this.$sprite.css('background-image', 'url("/images/fatshyguyright.gif")');
      this.x += this.speed;
      break;
    case 'left':
      this.$sprite.css('background-image', 'url("/images/fatshyguyleft.gif")');
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

Shyguy.prototype.checkCollision = function(object) {
  return (this.x < object.x + object.width &&
          this.x + this.width > object.x &&
          this.y < object.y + object.height && 
          this.y + this.height > object.y);
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
Shyguy.prototype.destroy = function() {
  this.$sprite.remove();
}
