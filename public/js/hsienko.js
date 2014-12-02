function Hsienko(stage) {
  this.$stage = stage
  this.x = 300;
  this.y = 300;
  this.height = 59;
  this.width = 59;
  this.direction = 'none';
  this.speed = 3;
  this.name = 'hsienko';
  this.initDisplay();
}

Hsienko.prototype.initDisplay = function() {
    this.$sprite = $("<div class='" +  this.name + "'></div>")
    this.$stage.append(this.$sprite);

    this.updateDisplay();
}

Hsienko.prototype.updateDisplay = function() {
  this.$sprite.css('top', this.y );
  this.$sprite.css('left', this.x );
}

Hsienko.prototype.inBounds = function() {
  return (this.x > 0 && this.x < 600 - this.width &&
  this.y > 0 && this.y < 600 - this.width)
}

Hsienko.prototype.move = function() {
  old_x = this.x;
  old_y = this.y;
  switch (this.direction) {
    case 'right':
      this.$sprite.css('background-image', 'url("../../assets/images/Hsienko_right.gif")');
      this.x += this.speed;
      break;
    case 'left':
      this.$sprite.css('background-image', 'url("../../assets/images/Hsienko_left.gif")');
      this.x -= this.speed;
      break;
    case 'up':
    this.$sprite.css('background-image', 'url("../../assets/images/PF_Hsien-Ko.gif")');
      this.y -= this.speed;
      break;
    case 'down':
    this.$sprite.css('background-image', 'url("../../assets/images/PF_Hsien-Ko.gif")');
      this.y += this.speed;
      break;
  }
  if (! this.inBounds()) {
    this.x = old_x;
    this.y = old_y;
  }
  this.updateDisplay();
}
