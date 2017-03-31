window.requestAnimationFrame=function() {
  return window.requestAnimationFrame||
  window.webkitRequestAnimationFrame||
  window.mozRequestAnimationFrame||
  window.msRequestAnimationFrame||
  window.oRequestAnimationFrame||
  function(f){window.setTimeout(f,1e3/60)}}();

var reserviin = new Date(2017, 8, 13)
var today = new Date();

var aamujenLkm = reserviin.getTime() - today.getTime();
aamujenLkm = Math.ceil(aamujenLkm / (1000 * 60 * 60 * 24))
var img = new Image();
img.src = "img/bullet_proj.png";
var luodit = [];
//for (var i = 0; i < aamujenLkm; i++) {
//}
var frames = 0;
var audio = [];
for (var i = 0; i < 170; i++) {
  audio.push(new Audio('sound/intervention.mp3'))}

var ampumarata = {
  canvas: document.createElement('canvas'),
  gravity: 0.3,
  pysayta: 0,
  start: function() {
    this.canvas.height = 700;
    this.canvas.width =  700;
    this.ctx = this.canvas.getContext('2d');
    document.getElementById('canvas').appendChild(this.canvas);
    document.getElementById('canvas').childNodes[1].margin = "0 0 0 50";
  },
  clear: function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

ampumarata.start();
function Luoti() {
  this.radius = 7;
  this.x = Math.random()*10 + 10;
  this.y = ampumarata.canvas.height/3;
  this.vy = 0;
  this.vx = 25;
  this.gravity = 0;
  this.pomput = 0;
  this.osunut_seinaan = false;
  this.rotation = 0;
  this.pyorimisen_lopetus = 100;

  this.draw = function(frame) {
    var ctx = ampumarata.ctx;
//    ctx.beginPath();
//    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
//    ctx.fill();
    if(this.osunut_seinaan === true) {
      if (frames < frame + this.pyorimisen_lopetus) {
        this.rotation = Math.random() * 6;
      }
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);
      ctx.drawImage(img, -7.5, -7.5, 25, 25);

      ctx.restore();
    }
    else {
      ctx.drawImage(img, this.x, this.y, 25, 25);
    }
  },
  this.tormays = function(toinen) {
    console.log("fasd");
    if(Math.abs(toinen.x - this.x) < self.radius &&
     Math.abs(toinen.y - this.y) < self.radius) {
       this.x = 50;
       this.y = 50;
       //var koira = this.vx;
       //this.vx =  0.8 * toinen.vx;
       //toinen.vx = 0.8 * koira;
       //koira = this.vy;
       //this.vy = 0.8 * toinen.vy;
       //toinen.vy = koira;
     }
  }
}

(function update() {
  if(ampumarata.pysayta < 130) {
    requestAnimationFrame(update);
  }
  frames++;
  ampumarata.clear();

  if(luodit.length <= aamujenLkm && frames % 1 == 0){
    //console.log(frames);
    luodit.push(new Luoti());
    audio[frames].play();
  }
  else {
    ampumarata.pysayta++;
  }



  for (var i = 0; i < luodit.length; i++) {
  var luoti = luodit[i];
  //for (var j = 0; j < luodit.length; j++) {
  //  luoti.tormays(luodit[j]);
//  }

  // luoti osuu seinään
  if(luoti.x + luoti.radius > ampumarata.canvas.width) {
    luoti.x  = ampumarata.canvas.width - luoti.radius;
    luoti.vx = -0.25 * luoti.vx;
    luoti.osunut_seinaan = true;
    luoti.gravity = ampumarata.gravity;

    // Luoti kimpoaa random suuntaan
    luoti.vy = -(Math.random() * 15) + 7.5;
    //console.log(luoti.vy)
    this.pyorimisen_lopetus -= luoti.vy;
  }

  // Jos luoti osuu maahan
  var loppupaikka = -1;
  var kuoppa = 0.009 * (-420 + luoti.x) * (420 - luoti.x) + 500;
  var maanpinta = 0.009 * (-420 + 300) * (420 - 300) + 500;
  if(300 < luoti.x + luoti.radius &&
     luoti.x + luoti.radius < 540) {
    if(luoti.y > kuoppa) {
      loppupaikka = kuoppa;
      luoti.y = loppupaikka;
      luoti.vy = -0.1 * luoti.vy;
      luoti.vx = -.1 * luoti.vx;
      luoti.pomput++;
    }
  }

  else if(luoti.y + luoti.radius > maanpinta) {
    loppupaikka = maanpinta - luoti.radius;
    luoti.y = loppupaikka;
    luoti.vy = -0.4 * luoti.vy;
    luoti.vx = .4 * luoti.vx;
    luoti.pomput++;
  }

  luoti.x  += luoti.vx;
  luoti.vy += luoti.gravity;
  luoti.y  += luoti.vy;

  luoti.draw(i);
  }
}());
