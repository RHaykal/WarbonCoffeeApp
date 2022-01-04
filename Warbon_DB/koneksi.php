<?php
    $conn = mysqli_connect("localhost","root","","little_coffeedb");
    if(mysqli_connect_errno()) {
        echo "Koneksi Gagal!".mysqli_connect_error();
    }
?>