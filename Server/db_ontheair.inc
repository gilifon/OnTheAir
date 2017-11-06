<?php
  //MySQL DATA
  $DBHost = "localhost";
  $DBUser = "iarcorg";
  $DBPassword = "Rw6Ach!@";
  $DBName = "iarcorg_ontheair";
  $Link = mysqli_connect($DBHost,$DBUser,$DBPassword,$DBName);
if (!$Link) 
{ 
	die('Could not connect to MySQL: ' . mysqli_error($link)); 
}
?>