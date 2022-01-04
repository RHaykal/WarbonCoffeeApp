<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credential:true");
header("Access-Control-Allow-Methods:POST, GET, PUT, DELETE, DISTINCT, OPTION");
header("Access-Control-Max-Age:6048000");
header("Access-Control-Request-Headers:x-requested-with");
header("Access-Control-Allow-Headers:x-requested-with, x-requested-by");

include("koneksi.php");
$username = $_POST['username'];
$password = $_POST['password'];
$login = array();

$cek = mysqli_query($conn, "SELECT * FROM user_acc WHERE usr_name='$username' AND usr_password='$password'");
$logSuccess = $cek->num_rows;

if ($logSuccess > 0) {
    // $login['pesan'] = "berhasil login";
    while ($row = mysqli_fetch_object($cek)) {
        $login[] = $row;
    }
} else {
    $login['pesan'] = "gagal login";
}

echo json_encode($login);
