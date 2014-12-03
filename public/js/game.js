
function Game() {
  this.$stage = $('#stage');
  this.hsienko = new Hsienko(this.$stage);
  this.shyguy = [new Shyguy(this.$stage), new Shyguy(this.$stage)];
  this.powerup = new Powerup(this.$stage);
  this.fireballs = [];
  this.startTime = new Date();
  this.spawnInterval = 2000;
  this.nextSpawnTime = this.startTime.getTime() + this.spawnInterval;
}

Game.prototype.loop = function() {
  this.hsienko.move();
  hsienko = this.hsienko
  this.powerup.track(hsienko)
  this.powerup.move();
  this.shyguy.forEach(function (shyguy){
    shyguy.track(hsienko);
    shyguy.move();
  })
  this.fireballs.forEach(function (fireball){
    fireball.move();
    if (fireball.outOfBounds) {
      fireball.destroy();
    }
  })
  this.fireballs = _(this.fireballs).reject(function(fireball) {
    return fireball.outOfBounds });
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
