function laskeAamut() {
    var reserviin = new Date(2017, 8, 13)
    var today = new Date();

    var aamujenLkm = reserviin.getTime() - today.getTime();
    aamujenLkm = Math.ceil(aamujenLkm / (1000 * 60 * 60 * 24))
    document.getElementById('aamukasa').innerHTML = aamujenLkm;

    var kuvat = [];
    for (var i = 0; i < aamujenLkm; i++) {
        if (kuvat.length & 29 == 0 && i != 0) {
            kuvat.push('<p><img src="/jeesjees/img/bullet.png" width=1%></img><br></p>');
        }
        else {
            kuvat.push('<p class="bul"><img src="/jeesjees/img/bullet.png" width=1%></img></p>');
        }
        console.log(kuvat.length)
    }

    kuvat = kuvat.join('');

    var kpv = reserviin.toLocaleString().slice(0,9);

    document.getElementById('kpv').innerHTML = kpv;
    //document.getElementById('bullet').innerHTML = kuvat;

    var videot = ["https://www.youtube.com/watch?v=STlGn9Nauoo"];

    var url = videot[0];
    var i = url.indexOf("=");
    url = 'https://www.youtube.com/embed/' + url.substr(i+1) +
          '?rel=0&amp;controls=0&amp;showinfo=0&autoplay=1';
    youtube(url);
}

laskeAamut();

function youtube(url) {
  document.getElementById("yt").src = url;
}
