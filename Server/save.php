<?php 
include ("db_ontheair.inc");
ini_set('display_errors',1);
error_reporting(E_ALL);
header('Content-type: application/json');

$callsign = $_GET["call"];
$lat = $_GET["lat"];
$lng = $_GET["lng"];
$freq = $_GET["freq"];
$info = $_GET["info"];

$sql = "REPLACE INTO `realtime_position` (`callsign`, `lat`, `lng`, `freq`, `info`) VALUES ('$callsign', '$lat', '$lng', '$freq', '$info')";

if (!mysqli_query($Link, $sql))
{
	echo json_encode('Error in insert: ' . mysqli_error($Link));
	mysqli_close($Link);
	return;
}

mysqli_close($Link);
echo json_encode('Well done!');
?>