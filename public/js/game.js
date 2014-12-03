
function Game() {
  this.$stage = $('#stage');
  this.hsienko = new Hsienko(this.$stage);
  this.shyguy = [new Shyguy(this.$stage, 1), new Shyguy(this.$stage, 3)];
  this.powerups = [];
  this.fireballs = [];
  this.startTime = new Date();
  this.spawnInterval = 5000;
  this.nextSpawnTime = this.startTime.getTime() + this.spawnInterval;
  this.shyguySpeed = 1
}

Game.prototype.loop = function() {
  this.hsienko.move();
  hsienko = this.hsienko;
  powerups = this.powerups;
  
  
  powerups.forEach(function (powerup) {
      if (powerup.checkCollision(hsienko)) {
        hsienko.speed += .1
        powerup.dead = true
        powerup.destroy();
      }
    });
  // if (this.hsienko.checkCollision(powerup)) {
  //   this.powerup.destroy();
  //   hsienko.speed += .1
  //   $('.powerup').remove();
  // }

  this.powerups = _(this.powerups).reject(function(powerup) { return powerup.dead });
  
  this.updateTimer();
  
  if (Date.now() > this.nextSpawnTime) {
    shyguyspeed = this.shyguySpeed += 1;
    this.shyguy.push(new Shyguy(this.$stage, shyguyspeed));
    this.nextSpawnTime += this.spawnInterval;
    if (shyguyspeed % 3 === 0) {
      this.powerups.push(new Powerup(this.$stage));
    }
  }
  
  
  fireballs = this.fireballs;
  this.shyguy.forEach(function (shyguy) {
    fireballs.forEach(function (fireball) {
      if (shyguy.checkCollision(fireball)) {
        shyguy.destroy();
      }
    });
    if (! shyguy.dead) {
      shyguy.track(hsienko);
      shyguy.move();
    }
  });
  
  this.shyguy = _(this.shyguy).reject(function(shyguy) { return shyguy.dead });
  this.fireballs.forEach(function (fireball) {
    fireball.move();
    if (fireball.outOfBounds) {
      fireball.destroy();
    }
  });
  this.fireballs = _(this.fireballs).reject(function(fireball) { return fireball.outOfBounds });
}

Game.prototype.throwFireball = function() {
  this.fireballs.push(new Fireball(this.$stage, this.hsienko.direction, this.hsienko.x, this.hsienko.y));
}

Game.prototype.updateTimer = function() {
  $('#timer').html((Date.now() - this.startTime));
}

$(document).ready(function(){
  game = new Game();
  setInterval(function() { game.loop(); }, 20);
 
 ['left', 'right', 'up', 'down'].forEach(function(direction) {
    Mousetrap.bind(direction, function() {
      game.hsienko.setDirection(direction);
    });
  });
  Mousetrap.bind('space', function() {
    game.throwFireball();
  })

});
