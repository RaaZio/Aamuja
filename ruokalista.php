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
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
	<title></title>
	
	<link href="style/style.css" rel="stylesheet">
	<meta name='viewport' content='width=device-width, initial-scale=1.0'/>
	
</head>
<body class="soppabody">
<header class='mainHeader'>

		<nav><ul>
				<li><a href='/jeesjees/index.html'>Kotii</a></li>
				<li><a href='/jeesjees/ruokalista.php'>Hernesoppa</a></li>
				<li><a href='/jeesjees/nakkipyora.html'>Nakki</a></li>
				<li><a href='v'>f</a></li>
				<li><a href='v'>koiarx</a></li>
		</ul></nav>

	</header>
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