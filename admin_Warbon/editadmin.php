<h2>Edit Data Admin</h2>
<br>
<?php

$sql = $conn->query("SELECT * FROM admin WHERE admin_ID='$_GET[id]'");
$row = mysqli_fetch_assoc($sql);
?>

<form method="post" enctype="multipart/form-data">
	<div class="form-group">
		<label>Email</label>
		<input type="text" class="form-control" name="email" value="<?php echo $row['admin_email']; ?>">
	</div>
	<div class="form-group">
		<label>Username</label>
		<input type="text" class="form-control" name="username" value="<?php echo $row['admin_username']; ?>">
	</div>
	<br>
	<button class="btn btn-primary" name="save">Save</button>
</form>

<?php if (isset($_POST['save'])) {
	$save = mysqli_query($conn, "UPDATE admin 
	SET admin_email='$_POST[email]', 
	admin_username='$_POST[username]' WHERE admin_ID='$_GET[id]'");

	echo "<script>alert('Data Admin Berhasil Dirubah');</script>";
	echo "<script>location='admin.php?page=adminacc';</script>";
}
?>