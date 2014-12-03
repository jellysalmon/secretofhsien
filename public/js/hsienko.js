function Hsienko(stage) {
  this.$stage = stage
  this.x = 300;
  this.y = 300;
  this.height = 98;
  this.width = 76;
  this.direction = 'none';
  this.speed = 5;
  this.name = 'hsienko';
  this.initDisplay();
}

Hsienko.prototype.initDisplay = function() {
    this.$sprite = $("<div class='" +  this.name + "'></div>")
    this.$stage.append(this.$sprite);

    this.updateDisplay();
}

Hsienko.prototype.updateDisplay = function() {
  this.$sprite.css('top', this.y - this.height / 2);
  this.$sprite.css('left', this.x - this.width / 2);
}

Hsienko.prototype.inBounds = function() {
  return (this.x > this.width / 2 && this.x < this.$stage.width() - this.width / 2 &&
  this.y > this.height / 2 && this.y < this.$stage.height() - this.height / 2)
}

Hsienko.prototype.move = function() {
  old_x = this.x;
  old_y = this.y;
  switch (this.direction) {
    case 'right':
      this.$sprite.css('background-image', 'url("/images/Hsienko_walkright.gif")');
      this.x += this.speed;
      break;
    case 'left':
      this.$sprite.css('background-image', 'url("/images/Hsienko_walkleft.gif")');
      this.x -= this.speed;
      break;
    case 'up':
    this.$sprite.css('background-image', 'url("/images/hsienko_stand.gif")');
      this.y -= this.speed;
      break;
    case 'down':
    this.$sprite.css('background-image', 'url("/images/hsienko_stand.gif")');
      this.y += this.speed;
      break;
  }
  if (! this.inBounds()) {
    this.x = old_x;
    this.y = old_y;
  }
  this.updateDisplay();
}
