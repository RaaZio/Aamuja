<?php
$curl = curl_init();
curl_setopt_array($curl, Array(
	CURLOPT_URL            => 'http://ruokalistat.leijonacatering.fi/rss/2/1/65071957-f813-e511-892b-78e3b50298fc',
	CURLOPT_USERAGENT      => 'spider',
	CURLOPT_TIMEOUT        => 120,
	CURLOPT_CONNECTTIMEOUT => 30,
	CURLOPT_RETURNTRANSFER => TRUE,
	CURLOPT_ENCODING       => 'UTF-8'
));
$data = curl_exec($curl);
curl_close($curl);
$xml = simplexml_load_string($data, 'SimpleXMLElement', LIBXML_NOCDATA);
?>
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
	<link href="style/style.css" rel="stylesheet">
</head>
<body class="soppabody">
<div class=soppa>
<?php
$aterioiden_nimet = array("Aamiainen:", "Lounas:", "Päivällinen:",
                            "Iltapala:");

$paivat = array();
foreach ($xml->channel->item as $item) {
	$pv = array();
	if(strpos($item->title, 'Varusmiesten') !== false &&
	strpos($item->title, "Lauantai") === false &&
	strpos($item->title, "Sunnuntai") === false) {

		$paiva = $item->title;
		$indeksi = strpos($paiva, "Varusmiesten");
		$paiva = substr($paiva, 0, $indeksi-1);
		$paiva = "<div class='div-row'>" . $paiva . "</div>";
		array_push($pv, $paiva);

    $ruuat = $item->description;
    foreach ($aterioiden_nimet as $key => $nimi) {

      if($key != 3)
      {
        $i1 = strpos($ruuat, $nimi) + strlen($nimi);
        $pituus = strpos($ruuat, $aterioiden_nimet[$key + 1]) - $i1;
        $ruoka = substr($ruuat, $i1, $pituus-1);
        $ruoka = "<div class='div-row'>" . $ruoka . "</div>";
        array_push($pv, $ruoka);
      }
      else
      {
        $i1 = strpos($ruuat, $nimi) +
               strlen($nimi);
        $ruoka = substr($ruuat, $i1);
        $ruoka = "<div class='div-row'>" . $ruoka . "</div>";
        array_push($pv, $ruoka);
				//echo $ruoka;
      }
    }
  //echo $paiva;
	$jey = "<div class='div-table'>";
	foreach ($pv as $key => $t) {
			$jey .= $t;
	}
	if(strpos($jey, "Lauantai") == false)
	echo $jey . "</div>";
	}
}
?>
</div>
</body>
</html>
