function Fireball(arena, direction, x, y) {
  this.$arena = arena;
  this.x = x;
  this.y = y;
  this.dir = direction;
  this.speed = 5;
  this.height = 16;
  this.width = 16;
  this.name = 'fireball';
  this.initDisplay();
}

Fireball.prototype.initDisplay = Hsienko.prototype.initDisplay;