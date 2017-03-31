function kello() {
	var today = new Date();
	var day = today.getDate();
    var month = (today.getMonth() + 1).toString();
    var year = today.getFullYear().toString();
    var hours = today.getHours().toString();
    var mins = today.getMinutes().toString();
    var secs = today.getSeconds().toString();
    
    if  (hours.length < 2) {
        hours = '0' + hours;
    }

    if  (mins.length < 2) {
        mins = '0' + mins;
    }

    if  (secs.length < 2) {
        secs = '0' + secs;
    }

    var aika = '<p>' + day + '.' + month + '.' + year + '</p>';
    aika += '<p>' + hours + ':' + mins + ':' + secs + '</p>';

    document.getElementById('pvm').innerHTML = aika;
}
setInterval(kello, 1000);
