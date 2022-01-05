<?php 
include 'koneksi.php';

if (isset($_POST['register'])) 
{
	$email = $_POST['email'];
	$username = filter_input(INPUT_POST, 'username', FILTER_SANITIZE_STRING);
	$password = md5($_POST['password']);

	$register =  mysqli_query($conn, "INSERT INTO admin(email, username, password) VALUES('$email', '$username', '$password')");
}

if ($register) 
{
	echo "<meta http-equiv='refresh' content='1;url=loginadmin.php'>";
    echo "<script>alert('Register Success!');</script>";
}

?>