<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credential:true");
header("Access-Control-Allow-Methods:POST, GET, PUT, DELETE, DISTINCT, OPTION");
header("Access-Control-Max-Age:6048000");
header("Access-Control-Request-Headers:x-requested-with");
header("Access-Control-Allow-Headers:x-requested-with, x-requested-by");

include("koneksi.php");
$username = $_POST['username'];
$email    = $_POST['email'];
$password = $_POST['repassword'];
$register = array();

$cek = mysqli_query($conn, "SELECT * FROM user_acc WHERE usr_email='$email'");
$emailcek = $cek->num_rows;

if ($emailcek == 1) {
    $register['pesan'] = "Oops, email yang kamu daftarkan sudah terpakai :( Ganti dengan email yang lain yaa!";
} else {
    $sql = mysqli_query($conn, "INSERT INTO user_acc(usr_name, usr_email, usr_password) VALUES('$username', '$email', '$password')");
    if ($sql) {
        $register['pesan'] = "Yeay! Registrasi Akun mu berhasil!";
    }
}

echo json_encode($register);
