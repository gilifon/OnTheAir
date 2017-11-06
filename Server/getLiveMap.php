<?
include ("db_ontheair.inc");
ini_set('display_errors',1);
error_reporting(E_ALL);
header('Content-type: application/json');


$res = [];
$result = mysqli_query($Link, "select * from realtime_position WHERE `timestamp` >= NOW() - INTERVAL 15 MINUTE order by callsign") or die('Error: ' . mysqli_error());
while($obj = mysqli_fetch_object($result)) {
$res[] = $obj;
}
echo json_encode($res);
?>