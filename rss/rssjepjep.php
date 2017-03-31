<?php

function RSS_Display($url) {
  $doc  = new DOMDocument();
  $doc->load($url);

  $channel = $doc->getElementsByTagName("channel");

  $items = $channel->getElementsByTagName("item");
  $paivat = array();

  foreach ($items as $item) {
    $paiva = $item->getElementsByTagName("title");

    array_push($paivat, $paiva);
  }

  $sivu = "";
  foreach ($paivat as $paska) {
    array_push($sivu, $paska);
  }

  return $sivu;
}


?>
