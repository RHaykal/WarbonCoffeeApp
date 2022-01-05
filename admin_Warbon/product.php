<h2>Data Product</h2>
<br>
<a href="admin.php?page=AddProduct" class="btn btn-primary">Add Product</a><br><br>
<table class="table table-bordered">
	<thead>
		<tr>
			<th>No</th>
			<th>Product Name</th>
			<th>Description</th>
			<th>Price</th>
			<th>Image</th>
			<th>Action</th>
		</tr>
	</thead>
	<tbody>
		<?php $no = 1 ?>
		<?php $sql = $conn->query("SELECT * FROM product"); ?>
		<?php while ($row = mysqli_fetch_assoc($sql)) {; ?>
			<tr>
				<td><?php echo $no; ?></td>
				<td><?php echo $row['prod_name']; ?></td>
				<td><?php echo $row['prod_desc']; ?></td>
				<td>Rp.<?php echo number_format($row['prod_price']); ?></td>
				<td>
					<img src="photo_product/<?php echo $row['prod_photo']; ?>" width="100">
				</td>
				<td align="center">
					<a href="admin.php?page=DeleteProd&id=<?php echo $row['prod_ID']; ?>" class="btn-danger btn">Delete</a>
					<a href="admin.php?page=EditProd&id=<?php echo $row['prod_ID'] ?>" class="btn btn-warning">Edit</a>
				</td>
			</tr>
			<?php $no++ ?>
		<?php } ?>
	</tbody>
</table>