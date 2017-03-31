function spam() {
	var reserviin = new Date(2017, 8, 13)
    var today = new Date();

    var aamujenLkm = reserviin.getTime() - today.getTime();
    aamujenLkm = Math.ceil(aamujenLkm / (1000 * 60 * 60 * 24))

	for (var i = 0; i < aamujenLkm; i++) {
		alert('AAMU')
	}
}