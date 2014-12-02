function Shyguy(stage) {
  this.$stage = stage
  this.x = 300;
  this.y = 300;
  this.height = 59;
  this.width = 59;
  this.direction = 'none';
  this.speed = 2;
  this.initDisplay();
}

// Shyguy.prototype.initDisplay = function() {
//   Character.initDisplay('shyguy')
// }