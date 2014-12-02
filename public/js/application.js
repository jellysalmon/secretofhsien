function Powerup(stage) {
  this.$stage = stage
  this.x = Math.random() * this.$stage.width();
  this.y = Math.random() * this.$stage.width();
  this.height = 59;
  this.width = 59;
  this.direction = 'none';
  this.speed = 2;
  this.name = 'shyguy';
  this.initDisplay();
}
