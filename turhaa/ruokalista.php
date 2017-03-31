<!DOCTYPE html>
<head>
	<title>Hernekeittoa?!?</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name='viewport' content='width=device-width, initial-scale=1.0'>
	<link rel='stylesheet' href='style/style.css'>
</head>

<body class='soppabody'>

	<header class='mainHeader'>

		<nav><ul>
				<li><a href='/jeesjees/index.html'>Kotii</a></li>
				<li><a href='/jeesjees/ruokalista.php'>Hernesoppa</a></li>
				<li><a href='/jeesjees/nakkipyora.html'>Nakki</a></li>
				<li><a href='/jeesjees/visuaaliset_aamut.html'>f</a></li>
				<li><a href='v'>koiarx</a></li>
		</ul></nav>

	</header>

	<table class=soppa>
	<?php
		require_once("/rss/rssxd.php");
		$url = 'http://ruokalistat.leijonacatering.fi/rss/2/1/65071957-f813-e511-892b-78e3b50298fc';
		RSS_Display($url);
	?>
	</table>
</body>
</html>
