
function Game() {
  this.$stage = $('#stage');
  this.hsienko = new Hsienko(this.$stage);
  this.shyguy = [new Shyguy(this.$stage, 1), new Shyguy(this.$stage, 3)];
  this.powerup = new Powerup(this.$stage);
  this.fireballs = [];
  this.startTime = new Date();
  this.spawnInterval = 2000;
  this.nextSpawnTime = this.startTime.getTime() + this.spawnInterval;
}

Game.prototype.loop = function() {
  this.hsienko.move();
  hsienko = this.hsienko;
  if (this.powerup.checkCollision(hsienko)) {
    this.powerup.destroy();
    hsienko.speed += 10
  }
  // this.updateTimer();
  // if (Date.now() > this.nextSpawnTime) {
  //   this.shyguy.push(new Shyguy(this.$arena))
  //   this.nextSpawnTime += this.spawnInterval;
  // }
  

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

$(document).ready(function(){
  game = new Game();
  setInterval(function() { game.loop(); }, 20);

  Mousetrap.bind('right', function(){
    game.hsienko.direction = 'right'
  })

  Mousetrap.bind('left', function(){
    game.hsienko.direction = 'left'
    
  })
  Mousetrap.bind('up', function(){
    game.hsienko.direction = 'up'
  })
  Mousetrap.bind('down', function(){
    game.hsienko.direction = 'down'
  })
  
  Mousetrap.bind('space', function() {
    game.throwFireball();
  })

});
