function Powerup(stage) {
  this.$stage = stage
  this.x = Math.floor(Math.random() * (600 - 100)) + 100
  this.y = Math.floor(Math.random() * (600 - 100)) + 100
  this.height = 90;
  this.width = 90;
  this.direction = 'none';
  this.speed = 6;
  this.name = 'powerup';
  this.initDisplay();
  this.dead = false
}

Powerup.prototype.initDisplay = Hsienko.prototype.initDisplay;
Powerup.prototype.updateDisplay = Hsienko.prototype.updateDisplay;



Powerup.prototype.destroy = function() {
  this.$sprite.remove();
}
Powerup.prototype.checkCollision = Shyguy.prototype.checkCollision;
