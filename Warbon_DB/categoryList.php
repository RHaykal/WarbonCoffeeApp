<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credential:true");
header("Access-Control-Allow-Methods:POST, GET, PUT, DELETE, DISTINCT, OPTION");
header("Access-Control-Max-Age:6048000");
header("Access-Control-Request-Headers:x-requested-with");
header("Access-Control-Allow-Headers:x-requested-with, x-requested-by");

include("koneksi.php");
$category = array();
$search_ctgry = mysqli_query($conn, "SELECT DISTINCT prod_category FROM product");
while ($row_ctgry = mysqli_fetch_object($search_ctgry)) {
    $category[] = $row_ctgry;
}

echo json_encode($category);
