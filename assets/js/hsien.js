$(document).ready(function(){
  n = new Hsienko();
})

function Hsienko() {
  this.x = 0;
  this.y = 0;
  this.initDisplay();
}


Hsienko.prototype.initDisplay = function() {
  this.$hsienko = $("<div class='hsienko'></div>")
  $('#stage').append(this.$hsienko);
  this.$hsienko.css('position', 'relative');
  this.$hsienko.css('top', this.x);
  this.$hsienko.css('left', this.y);
  this.$hsienko.css('height', 59);
  this.$hsienko.css('width', 59);
  this.$hsienko.css('background-image', 'url("assets/images/PF_Hsien-Ko.gif")');
  this.$hsienko.css('background-repeat', 'no-repeat');
}

Hsienko.prototype.updateDisplay = function() {
  console.log(this.x);
  console.log(this.x);
}


Game = {
  loop:function() {
    console.log("Hello");
  }
}

