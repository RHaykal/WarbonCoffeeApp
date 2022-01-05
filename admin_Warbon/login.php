<?php
session_start();
include 'koneksi.php';
$cek = 0;

if (isset($_POST['login'])) {
    $username   = $_POST['username'];
    $password   = $_POST['password'];

    $ambil      = mysqli_query($conn, "SELECT * FROM admin WHERE admin_username='$username' AND admin_password='$password'");
    $cek        = $ambil->num_rows;
}

if ($cek > 0) {
    $akun = mysqli_fetch_assoc($ambil);
    $_SESSION['admin'] = $akun;
    $_SESSION['akun'] = $akun;
    // $_SESSION['username'] = $username;
    // $_SESSION['password'] = $password;
    // $_SESSION['username'] = $row['username'];
    header("location:admin.php");
} else {
    echo "<meta http-equiv='refresh' content='1;url=loginadmin.php'>";
    echo "<script>alert('Log In Failed!');</script>";
}
