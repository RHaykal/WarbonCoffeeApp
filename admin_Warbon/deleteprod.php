<?php 

$sql = $conn->query("SELECT * FROM product WHERE prod_ID='$_GET[id]'");
$row = mysqli_fetch_assoc($sql);
$fotoproduk = $row['prod_photo'];
if (file_exists("photo_product/$fotoproduk")) 
{
	unlink("photo_product/$fotoproduk");
}

$conn->query("DELETE FROM product WHERE prod_ID='$_GET[id]'");

echo "<script>alert('Produk Berhasil Terhapus');</script>";
echo "<script>location='admin.php';</script>";
