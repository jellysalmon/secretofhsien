function Hsienko(stage) {
  this.$stage = stage
  this.x = 300;
  this.y = 300;
  this.height = 50;
  this.width = 50;
  this.direction = 'none';
  this.speed = 5;
  this.name = 'hsienko';
  this.dead = false
  this.initDisplay();
  this.sprite = {left: 'url("/images/Hsienko_walkleft.gif")', right: 'url("/images/Hsienko_walkright.gif")', down: 'url("/images/PF_Hsien-KO.gif")', up: 'url("/images/PF_Hsien-KO.gif")'};
}

Hsienko.prototype.initDisplay = function() {
    this.$sprite = $("<div class='" +  this.name + "'></div>")
    this.$stage.append(this.$sprite);

    this.updateDisplay();
}

Hsienko.prototype.move = function() {
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

Hsienko.prototype.inBounds = function() {
  return (this.x > this.width / 2 && this.x < this.$stage.width() - this.width / 2 &&
  this.y > this.height / 2 && this.y < this.$stage.height() - this.height / 2)
}

Hsienko.prototype.updateDisplay = function() {
  this.$sprite.css('top', this.y - this.height / 2);
  this.$sprite.css('left', this.x - this.width / 2);
}



Hsienko.prototype.setDirection = function(direction) {
  this.direction = direction;
  switch (this.direction) {
    case 'right':
      this.$sprite.css('background-image', this.sprite.right);
      break;
    case 'left':
      this.$sprite.css('background-image', this.sprite.left);
      break;
    case 'down':
      this.$sprite.css('background-image', this.sprite.down);
      break; 
    case 'up':
      this.$sprite.css('background-image', this.sprite.up);
      break;   
  }
}

Hsienko.prototype.checkCollision = function(object) {
  return (this.x < object.x + object.width &&
   this.x + this.width > object.x &&
   this.y < object.y + object.height &&
   this.height + this.y > object.y);
}
Hsienko.prototype.destroy = function() {
  this.$sprite.remove()
}
