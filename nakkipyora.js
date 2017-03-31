window.onload = function() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var hattu = new Image();
  var alaosa = new Image();
  hattu.src = "img/hattu.png";
  alaosa.src = "img/hattualaosa.png";

  var t = 0;
  hattu.onload = function() {
    alaosa.onload = function update() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      draw(ctx, alaosa, 81, 115, 230, 70, Math.PI+.1);
      animoi_teksti(ctx, t);
      draw(ctx, hattu, 70, 170, 250, 200, Math.PI+.1);
      t++;
      if(t < 150) {
        setTimeout(update, 1);
      }
  }();
  }
};

function draw(ctx, img, x, y, w, h, rotation) {
  ctx.save();

  ctx.translate(x + w / 2, y + h / 2);
  ctx.rotate(rotation);
  ctx.drawImage(img, -x, -y, w, h);

  ctx.restore();
}

function animoi_teksti(ctx, t) {
  nakitettu = nakki();
  console.log(nakitettu);
  ctx.save();

  ctx.translate(145, 270-t);
  if(t == 149) {
    ctx.rotate(Math.random()/2 -.25);
  } else {
    ctx.rotate(t/2.5);
  }
  ctx.font = "30px Comic Sans MS";
  ctx.textAlign = "center";
  ctx.fillText(nakitettu, 0, 0);

  ctx.restore();
}

function nakki() {
  var multsarit = ["Hännikäinen", "Lehtinen", "Katainen", "Käkelä", "Saarreharju"];
  var i = Math.floor(Math.random() * 500);
  console.log(i);

  if(i < 100) {
    i = 0;
  }
  else if(i < 200) {
    i = 1
  }
  else if(i < 300) {
    i = 2
  }
  else if(i < 400) {
    i = 3
  }
  else {
    i = 4
  }
  //document.getElementById("nakitettu").innerHTML = multsarit[i];
  return multsarit[i];
}
