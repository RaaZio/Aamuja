var ampumarata = {
  canvas: document.createElement('canvas'),
  start: function() {
    this.canvas.height = 700;
    this.canvas.width =  900;
    this.ctx = this.canvas.getContext('2d');
    document.getElementById('canvas').appendChild(this.canvas);
  },
  clear: function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    return this.ctx;
  }
}

function Luoti() {
  this.radius = 30;
  this.x = 40;
  this.y = 30;
  this.vy = 1;
  this.vx = .3;

  this.draw = function() {
    ctx = ampumarata.clear();
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
    ctx.fill();
  }
}
var luoti = new Luoti();

ampumarata.start();

function update() {
  var gravity = 0.09;
  luoti.vy += gravity;
  luoti.y += luoti.vy;
  luoti.x += luoti.vx;

  if(luoti.y + luoti.radius > ampumarata.canvas.height) {
    luoti.y  = ampumarata.canvas.height - luoti.radius;
    luoti.vy = -0.9 * luoti.vy;
  }

  luoti.draw();
}
setInterval(update, 1);
