<h2>Edit Product Data</h2>
<br>
<?php

$sql = $conn->query("SELECT * FROM product WHERE prod_ID='$_GET[id]'");
$row = mysqli_fetch_assoc($sql);

echo "<pre>";
print_r($row);
echo "</pre>";
?>

<form method="post" enctype="multipart/form-data">
	<div class="form-group">
		<label>Product Name</label>
		<input type="text" class="form-control" name="nama" value="<?php echo $row['prod_name']; ?>">
	</div>
	<div class="form-group">
		<label>Product Price(IDR)</label>
		<input type="number" class="form-control" name="harga" value="<?php echo $row['prod_price']; ?>">
	</div>
	<div class="form-group">
		<label>Category</label>
		<input type="text" class="form-control" placeholder="(Black Coffee/Manual Brew/Latte/Signature/Tea)" name="kategori" value="<?php echo $row['prod_category']; ?>">
	</div>
	<div class="form-group">
		<label>Description</label>
		<textarea class="form-control" name="deskripsi" rows="5"><?php echo $row['prod_desc']; ?></textarea>
	</div>
	<div>
		<img src="photo_product/<?php echo $row['prod_photo'] ?>" width="300">
	</div>
	<div class="form-group">
		<label>Change Image(optional)</label>
		<input type="file" class="form-control" name="foto">
	</div>
	<br>
	<button class="btn btn-primary" name="save">Save</button>
</form>

<?php if (isset($_POST['save'])) {
	$namafoto = $_FILES['foto']['name'];
	$lokasifoto = $_FILES['foto']['tmp_name'];

	if (!empty($lokasifoto)) {
		move_uploaded_file($lokasifoto, "photo_product/" . $namafoto);

		$sql = $conn->query("UPDATE product SET prod_name='$_POST[nama]', 
		prod_price='$_POST[harga]', prod_category='$_POST[kategori]', 
		prod_desc='$_POST[deskripsi]', prod_photo='$namafoto' WHERE prod_ID='$_GET[id]'");
	} else {
		$sql = $conn->query("UPDATE product SET prod_name='$_POST[nama]', 
		prod_price='$_POST[harga]', prod_category='$_POST[kategori]', prod_desc='$_POST[deskripsi]' 
		WHERE prod_ID='$_GET[id]'");
	}
	// echo "<pre>";
	// print_r($_FILES['foto']);
	// echo "</pre>";
	if ($sql) {
		echo "<script>alert('Data Produk Berhasil Diubah');</script>";
		echo "<script>location='admin.php?page=product';</script>";
	} else {
		echo "<script>alert('gagal cuy');</script>";
	}
}
?>