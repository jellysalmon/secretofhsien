function Ninja() {
  this.x = 300;
  this.y = 300;
}

Ninja.prototype.updateDisplay = function() {
  console.log(this.x);
  console.log(this.x);
}


Game = {
  loop:function() {
    console.log("Hello");
  }
}