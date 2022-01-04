<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credential:true");
header("Access-Control-Allow-Methods:POST, GET, PUT, DELETE, DISTINCT, OPTION");
header("Access-Control-Max-Age:6048000");
header("Access-Control-Request-Headers:x-requested-with");
header("Access-Control-Allow-Headers:x-requested-with, x-requested-by");

include("koneksi.php");
$changeName = $_POST['changeName'];
$tellno = $_POST['tellno'];
$address = $_POST['address'];
$accID = $_POST['accID'];
$update = array();

$sql = mysqli_query($conn, "UPDATE user_acc SET usr_name='$changeName', usr_tellno='$tellno', usr_address='$address' WHERE usr_ID='$accID'");
if ($sql) {
    $update['pesan'] = "Akun mu berhasil di Update!";
}

echo json_encode($update);
