<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credential:true");
header("Access-Control-Allow-Methods:POST, GET, PUT, DELETE, DISTINCT, OPTION");
header("Access-Control-Max-Age:6048000");
header("Access-Control-Request-Headers:x-requested-with");
header("Access-Control-Allow-Headers:x-requested-with, x-requested-by");

include("koneksi.php");
$prodid = $_POST['prodid'];
$quantity = $_POST['quantity'];


if (isset($_SESSION['keranjang'][$prodid])) {
    $_SESSION['keranjang'][$prodid] += $quantity;
} else {
    $_SESSION['keranjang'][$prodid] = $quantity;
}

// echo "<pre>";
// print_r($_SESSION);
// echo "</pre";

echo json_encode($_SESSION);
