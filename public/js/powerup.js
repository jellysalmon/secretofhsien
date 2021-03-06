function Powerup(stage) {
  this.$stage = stage
  this.x = Math.floor(Math.random() * (600 - 100)) + 100
  this.y = Math.floor(Math.random() * (600 - 100)) + 100
  this.height = 90;
  this.width = 90;
  this.direction = 'none';
  this.speed = 2;
  this.name = 'powerup';
  this.initDisplay();
  this.dead = false
}

Powerup.prototype.initDisplay = Hsienko.prototype.initDisplay;
Powerup.prototype.updateDisplay = Hsienko.prototype.updateDisplay;
Powerup.prototype.inBounds = Hsienko.prototype.inBounds;



Powerup.prototype.destroy = function() {
  this.$sprite.remove();
}
Powerup.prototype.checkCollision = Shyguy.prototype.checkCollision;
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
