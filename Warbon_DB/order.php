<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credential:true");
header("Access-Control-Allow-Methods:POST, GET, PUT, DELETE, DISTINCT, OPTION");
header("Access-Control-Max-Age:6048000");
header("Access-Control-Request-Headers:x-requested-with");
header("Access-Control-Allow-Headers:x-requested-with, x-requested-by");

include("koneksi.php");
$accID = $_POST['accID'];
$date = $_POST['date'];
$totalpayment = $_POST['totalpayment'];
$ordr = array();
$cart = $_POST['cart'];

$sql = mysqli_query($conn, "INSERT INTO ordr(usr_ID, ord_date, total_payment) VALUES('$accID', '$date', '$totalpayment')");

// $recentID = $conn->insert_id;
// for ($i = 0; $i < sizeof($cart['prodid']); $i++) {
//     $prodid[] = $cart[$i]['prodid'];
// }
// for ($i = 0; $i < sizeof($cart['qty']); $i++) {
//     $quantity[] = $cart[$i]['qty'];
// }
// for ($i = 0; $i < sizeof($cart['varian']); $i++) {
//     $variant[] = $cart[$i]['varian'];
// }
// for ($i = 0; $i < sizeof($cart); $i++) {
//     $sql1 = mysqli_query($conn, "INSERT INTO cart(ord_ID, prod_ID, qty, variant) VALUES('$recentID', '$prodid[$i]', '$quantity[$i]', '$variant[$i]')");
// }

if ($sql) {
    $ordr['pesan'] = "Thankyou for ordering! your order will be delivered in 10 minutes";
} else {
    $ordr['pesan'] = "gagal cuy";
}
echo json_encode($ordr);
