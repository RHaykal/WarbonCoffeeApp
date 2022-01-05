<h2>Admin Account Data</h2>
<br>
<!-- <?php
		//include "adminlogin.php";
		//if ($cek > 0 && $row['level_clearance'] == 1) { 
		?>
		<a href="admin.php?page=AddAdmin" class="btn btn-primary">Tambah Data</a><br><br>
<?php //} 
?>  -->
<table class="table table-bordered">
	<thead>
		<tr>
			<th>No</th>
			<th>Email</th>
			<th>Admin Username</th>
			<th>Action</th>
		</tr>
	</thead>
	<tbody>
		<?php $no = 1 ?>
		<?php $sql = $conn->query("SELECT * FROM admin"); ?>
		<?php while ($row = mysqli_fetch_assoc($sql)) {; ?>
			<tr>
				<td><?php echo $no; ?></td>
				<td><?php echo $row['admin_email']; ?></td>
				<td><?php echo $row['admin_username']; ?></td>
				<td align="center">
					<a href="admin.php?page=editadmin&id=<?php echo $row['admin_ID']; ?>" class="btn btn-warning">Edit</a>
				</td>
			</tr>
			<?php $no++ ?>
		<?php } ?>
	</tbody>
</table>