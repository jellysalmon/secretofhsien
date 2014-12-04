function Fireball(stage, direction, x, y) {
  this.$stage = stage;
  this.x = x;
  this.y = y;
  this.direction = direction;
  this.speed = 7;
  this.height = 50;
  this.width = 50;
  this.name = 'fireball';
  this.initDisplay();
}

Fireball.prototype.initDisplay = function() {
    this.$sprite = $("<div class='" +  this.name + "'></div>")
    this.$stage.append(this.$sprite);

    this.updateDisplay();
}
Fireball.prototype.updateDisplay = Hsienko.prototype.updateDisplay;
Fireball.prototype.inBounds = Hsienko.prototype.inBounds;

Fireball.prototype.move = function() {
  old_x = this.x;
  old_y = this.y;
  switch (this.direction) {
    case 'right':
      this.$sprite.css('background-image', 'url("/images/fireball.gif")');
      this.x += this.speed;
      break;
    case 'left':
      this.$sprite.css('background-image', 'url("/images/fireballleft.gif")');
      this.x -= this.speed;
      break;
    case 'up':
    this.$sprite.css('background-image', 'url("/images/fireballup.gif")');
      this.y -= this.speed;
      break;
    case 'down':
    this.$sprite.css('background-image', 'url("/images/fireballdown.gif")');
      this.y += this.speed;
      break;
  }
  if (! this.inBounds()) {
    this.x = old_x;
    this.y = old_y;
    this.outOfBounds = true;
  }
  this.updateDisplay();
}
Fireball.prototype.destroy = function() {
  this.$sprite.remove();
}