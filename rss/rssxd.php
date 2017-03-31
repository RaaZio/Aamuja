<?php
function RSS_Display($url)
{
  $xml=simplexml_load_file($url) or die("Error: Cannot create object");

  $aterioiden_nimet = array("", "Aamiainen:", "Lounas:", "Päivällinen:",
                            "Iltapala:");

  //$ruokalista = array();

  for ($j=0; $j < 5; $j++)
  {
    //$paivat = array();
    $rivi = "<tr>";

    if($j == 0)
    {
      $rivi .= "<td></td>";
      for($i=5; $i < 10; $i++)
      {
        $paiva = $xml->channel[0]->item[$i]->title;
        $indeksi = strpos($paiva, "Varusmiesten");
        $paiva = substr($paiva, 0, $indeksi-1);
        $paiva = "<td>" . $paiva . "</td>";
        //array_push($paivat, $paiva);
        $rivi .= $paiva;
      }
    }
    else
    {
      $rivi .= "<td>" . $aterioiden_nimet[$j] . "</td>";
       for ($i=5; $i < 10; $i++)
       {
         if($j != 4)
         {
           $ruuat = $xml->channel[0]->item[$i]->description;
           $i1 = strpos($ruuat, $aterioiden_nimet[$j]) +
                  strlen($aterioiden_nimet[$j]);
           $pituus = strpos($ruuat, $aterioiden_nimet[$j+1]) - $i1;
           $ruoka = substr($ruuat, $i1, $pituus-1);
           $ruoka = "<td>" . $ruoka . "</td>";
           //array_push($paivat, $ruoka);
           $rivi .= $ruoka;
         }
         else
         {
           $ruuat = $xml->channel[0]->item[$i]->description;
           $i1 = strpos($ruuat, $aterioiden_nimet[$j]) +
                  strlen($aterioiden_nimet[$j]);
           $ruoka = substr($ruuat, $i1);
           $ruoka = "<td>" . $ruoka . "</td>";
           //array_push($paivat, $ruoka);
           $rivi .= $ruoka;
         }
       }
    }
    //array_push($ruokalista, $paivat);
    echo $rivi . "</tr>";
  }
  /*
  foreach ($ruokalista as $row)
  {
    $rivi = "<tr>";
    foreach ($row as $col) {
      $rivi .= $col;
    $rivi .= "</tr>";
    //echo $rivi;
    }
  }
  */
}


?>
