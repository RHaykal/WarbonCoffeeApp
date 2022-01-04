<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credential:true");
header("Access-Control-Allow-Methods:POST, GET, PUT, DELETE, DISTINCT, OPTION");
header("Access-Control-Max-Age:6048000");
header("Access-Control-Request-Headers:x-requested-with");
header("Access-Control-Allow-Headers:x-requested-with, x-requested-by");

include("koneksi.php");
$id = $_POST['id'];
$prodData = array();
$sql = mysqli_query($conn, "SELECT * FROM product WHERE prod_ID = '$id'");
while ($row = mysqli_fetch_object($sql)) {
    $prodData[] = $row;
}
echo json_encode($prodData);
