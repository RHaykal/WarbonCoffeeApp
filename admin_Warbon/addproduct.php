<h2>Tambah Produk</h2>
<br>
<form method="post" enctype="multipart/form-data">
	<div class="form-group">
		<label>Nama Produk</label>
		<input type="text" class="form-control" name="nama">
	</div>
	<div class="form-group">
		<label>Harga Produk(IDR)</label>
		<input type="number" class="form-control" name="harga">
	</div>
	<div class="form-group">
		<label>Kategori</label>
		<input type="text" class="form-control" placeholder="(Black Coffee/Manual Brew/Latte/Signature/Tea)" name="kategori">
	</div>
	<div class="form-group">
		<label>Deskripsi</label>
		<textarea class="form-control" name="deskripsi" rows="5"></textarea>
	</div>
	<div class="form-group">
		<label>Foto</label>
		<div class="letak-input" style="margin-bottom: 10px;">
			<input type="file" class="form-control" name="foto">
		</div>
	</div>
	<br>
	<button class="btn btn-success" name="save">Save</button>
</form>
<?php
if (isset($_POST['save'])) {
	$photo_name = $_FILES['foto']['name'];
	$photolocation = $_FILES['foto']['tmp_name'];
	move_uploaded_file($photolocation, "photo_product/" . $photo_name);

	$nama_produk = $_POST['nama'];
	$harga = $_POST['harga'];
	$kategori = $_POST['kategori'];
	$deskripsi = $_POST['deskripsi'];

	$save = mysqli_query($conn, "INSERT INTO product(prod_name, prod_price, prod_category, prod_desc, prod_photo) VALUES('$nama_produk','$harga','$kategori','$deskripsi','$photo_name')");

	echo "<script>alert=('Data Tersimpan')</script>";

	// echo "<pre>";
	// print_r($_FILES['foto']);
	// echo "</pre>";
?>

<?php } ?>