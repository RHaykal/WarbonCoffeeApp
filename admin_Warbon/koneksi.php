<?php 
$servername = "localhost";
$database = "little_coffeedb";
$username = "root";
$password = "";

// membuat koneksi
$conn = mysqli_connect($servername, $username, $password, $database);
//mysql_select_db("logintest"); //nama database yang kita gunakan

//if ($conn) {
//	echo "Berhasil tersambung ke DB";}
