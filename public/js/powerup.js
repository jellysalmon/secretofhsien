function Powerup(stage) {
  this.$stage = stage
  this.x = Math.random() * this.$stage.width()/3;
  this.y = Math.random() * this.$stage.height()/3;
  this.height = 30;
  this.width = 30;
  this.direction = 'none';
  this.speed = 6;
  this.name = 'powerup';
  this.initDisplay();
}

Powerup.prototype.initDisplay = Hsienko.prototype.initDisplay;
Powerup.prototype.updateDisplay = Hsienko.prototype.updateDisplay;
Powerup.prototype.inBounds = Hsienko.prototype.inBounds;

Powerup.prototype.move = function() {
  old_x = this.x;
  old_y = this.y;
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
  if (! this.inBounds()) {
    this.x = old_x;
    this.y = old_y;
  }
  this.updateDisplay();
}

Powerup.prototype.track = function(hsienko) {
  diff_x = Math.abs(this.x - hsienko.x)
  diff_y = Math.abs(this.y - hsienko.y)
  if (diff_x > diff_y) {
      if (this.x > hsienko.x) {
        this.direction = "right";
      }
      if (this.x < hsienko.x) {
        this.direction = 'left';
      }
  } else {
      if (this.y < hsienko.y) {
        this.direction = 'up';
      }
      if (this.y > hsienko.y) {
      this.direction = 'down';
      }
    }
}
Powerup.prototype.destroy = function() {
  this.$sprite.remove();
}
Powerup.prototype.checkCollision = Shyguy.prototype.checkCollision;
