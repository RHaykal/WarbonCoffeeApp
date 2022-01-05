<h2>Detail</h2>

<?php
$sql = $conn->query("SELECT * FROM ordr JOIN user_acc ON ordr.usr_ID=user_acc.usr_ID WHERE ordr.ord_ID='$_GET[id]'");
$row = mysqli_fetch_assoc($sql);
?>

<pre><?php print_r($row); ?></pre>

<p>
<h5>Data Pembeli</h5><br>
<b><?php echo $row['usr_name']; ?></b><br>
<?php echo $row['usr_tellno']; ?><br>
<?php echo $row['usr_email']; ?><br>
<br>
</p>
<p>
<h5>Detail Order</h5><br>
Tanggal Pembelian : <?php echo $row['ord_date']; ?><br>
Total Harga : Rp.<?php echo number_format($row['total_payment']); ?>
</p>
<table class="table table-bordered">
	<thead>
		<tr>
			<th>No</th>
			<th>Nama Produk</th>
			<th>Harga</th>
			<th>Kategori</th>
			<th>Jumlah</th>
			<th>Subtotal</th>
		</tr>
	</thead>
	<tbody>
		<?php $no = 1 ?>
		<?php $produk = $conn->query("SELECT * FROM cart JOIN product ON cart.prod_ID=product.prod_ID WHERE cart.ord_ID='$_GET[id]'"); ?>
		<?php while ($prod = mysqli_fetch_assoc($produk)) {; ?>
			<tr>
				<td><?php echo $no ?></td>
				<td><?php echo $prod['prod_name'] ?></td>
				<td><?php echo number_format($prod['prod_price']); ?></td>
				<td><?php echo $prod['prod_category']; ?></td>
				<td><?php echo $prod['qty']; ?></td>
				<td>Rp.<?php echo number_format($prod['prod_price'] * $prod['qty']); ?></td>
			</tr>
		<?php $no++;
		} ?>
		<pre><?php print_r($prod); ?></pre>
	</tbody>
</table>