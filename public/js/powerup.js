function Powerup(stage) {
  this.$stage = stage
  this.x = Math.random() * this.$stage.width();
  this.y = Math.random() * this.$stage.height();
  this.height = 59;
  this.width = 59;
  this.direction = 'none';
  this.name = 'powerup';
  this.initDisplay();
}

Powerup.prototype.initDisplay = Hsienko.prototype.initDisplay;
