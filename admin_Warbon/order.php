<h2>Order Data</h2>

<table class="table table-bordered" x>
	<thead>
		<tr>
			<th>No</th>
			<th>Nama Pelanggan</th>
			<th>Tanggal Pembelian</th>
			<th>Total Harga</th>
			<th>Action</th>
		</tr>
	</thead>
	<tbody>
		<?php $no = 1 ?>
		<?php $sql = $conn->query("SELECT * FROM ordr JOIN user_acc ON ordr.usr_ID=user_acc.usr_ID"); ?>
		<?php while ($row = mysqli_fetch_assoc($sql)) {; ?>
			<tr>
				<td><?php echo $no; ?></td>
				<td><?php echo $row['usr_name']; ?></td>
				<!-- <td><?php //echo $row['id_produk']; 
							?></td>  -->
				<td><?php echo $row['ord_date']; ?></td>
				<td>Rp.<?php echo number_format($row['total_payment']); ?></td>
				<td align="center">
					<a href="admin.php?page=detail&id=<?php echo $row['ord_ID']; ?>" class="btn-info btn">Detail</a>
				</td>
			</tr>
			<?php $no++ ?>
		<?php } ?>
	</tbody>
</table>

<table class="table tab">
</table>