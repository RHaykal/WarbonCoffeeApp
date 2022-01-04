-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 04, 2022 at 05:14 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `little_coffeedb`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `admin_ID` int(11) NOT NULL,
  `admin_email` varchar(50) NOT NULL,
  `admin_username` varchar(11) NOT NULL,
  `admin_password` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`admin_ID`, `admin_email`, `admin_username`, `admin_password`) VALUES
(1, 'admin@admin123.com', 'admin', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `cart_ID` int(11) NOT NULL,
  `ord_ID` int(11) NOT NULL,
  `prod_ID` int(11) NOT NULL,
  `qty` int(11) NOT NULL,
  `variant` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`cart_ID`, `ord_ID`, `prod_ID`, `qty`, `variant`) VALUES
(1, 6, 0, 0, ''),
(2, 7, 0, 0, ''),
(3, 7, 0, 0, ''),
(4, 7, 0, 0, ''),
(5, 8, 0, 0, ''),
(6, 8, 0, 0, ''),
(7, 9, 0, 0, ''),
(8, 9, 0, 0, ''),
(9, 10, 0, 0, ''),
(10, 11, 0, 0, ''),
(11, 12, 0, 0, ''),
(12, 13, 0, 0, ''),
(13, 13, 0, 0, ''),
(14, 13, 0, 0, ''),
(15, 14, 0, 0, ''),
(16, 14, 0, 0, ''),
(17, 14, 0, 0, ''),
(18, 15, 0, 0, ''),
(19, 15, 0, 0, ''),
(20, 15, 0, 0, ''),
(21, 16, 0, 0, ''),
(22, 16, 0, 0, ''),
(23, 16, 0, 0, ''),
(24, 17, 0, 0, ''),
(25, 17, 0, 0, ''),
(26, 17, 0, 0, '');

-- --------------------------------------------------------

--
-- Table structure for table `ordr`
--

CREATE TABLE `ordr` (
  `ord_ID` int(11) NOT NULL,
  `usr_ID` int(11) NOT NULL,
  `ord_date` date NOT NULL,
  `total_payment` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ordr`
--

INSERT INTO `ordr` (`ord_ID`, `usr_ID`, `ord_date`, `total_payment`) VALUES
(1, 1, '2021-06-07', 12000),
(2, 1, '2021-06-07', 12000),
(3, 1, '2021-06-07', 12000),
(4, 1, '2021-06-07', 12000),
(5, 1, '2021-06-07', 108000),
(6, 1, '2021-06-07', 108000),
(7, 1, '2021-06-07', 168000),
(8, 1, '2021-06-10', 70000),
(9, 1, '2021-06-10', 70000),
(10, 1, '2021-06-10', 12000),
(11, 1, '2021-06-10', 12000),
(12, 1, '2021-06-10', 12000),
(13, 1, '2021-06-19', 37000),
(14, 1, '2021-06-19', 37000),
(15, 1, '2021-06-19', 37000),
(16, 1, '2021-06-19', 37000),
(17, 1, '2021-06-19', 37000),
(18, 1, '2021-06-19', 37000),
(19, 1, '2021-06-19', 12000),
(20, 1, '2021-06-20', 39000),
(21, 1, '2021-06-20', 70000),
(22, 6, '2022-01-04', 24000);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `prod_ID` int(11) NOT NULL,
  `prod_name` varchar(255) NOT NULL,
  `prod_category` varchar(15) NOT NULL,
  `prod_desc` varchar(255) NOT NULL,
  `prod_price` int(11) NOT NULL,
  `prod_photo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`prod_ID`, `prod_name`, `prod_category`, `prod_desc`, `prod_price`, `prod_photo`) VALUES
(1, 'Espresso', 'Black Coffee', 'Pure 3 Shot\'s of Coffee', 10000, ''),
(2, 'Long Black', 'Black Coffee', '2 Shot\'s of Coffee on Top of Hot Water', 10000, ''),
(3, 'Americano', 'Black Coffee', 'A Shot\'s of Drip Filtered Coffee Mixed with Water', 10000, ''),
(4, 'V60', 'Manual Brew', 'The V60 Hario is a one of a kind coffee maker\r\nusing the pour over method.', 12000, ''),
(5, 'Vietnam Drip', 'Manual Brew', 'Dark roast Vietnamese-grown coffee with a small metal \r\nVietnamese drip filter', 14000, ''),
(6, 'Aeropress', 'Manual Brew', 'Ground coffee beans and water are steeped inside, then \r\nforced through a filter by pressing the plunger through \r\nthe chamber.', 14000, ''),
(7, 'Japanese Coffee', 'Manual Brew', 'Japanese Iced Coffee is the solution for those of you who want enjoy drinking iced coffee in no time.', 15000, ''),
(8, 'Coffee Latte', 'Latte', 'Rich, full-bodied espresso in steamed milk, lightly topped with foam. ', 12000, ''),
(9, 'Hazelnut Latte', 'Latte', 'House-made hazelnut-praline-infused milk combined with our small-lot espresso', 12000, ''),
(10, 'Caramel Latte', 'Latte', 'Rich espresso is gently swirled with flavors of caramel, steamed milk and simple syrup, then drizzled with caramel sauces.', 12000, ''),
(11, 'vanilla Latte', 'Latte', 'Extra-smooth Espresso, velvety steamed milk and vanilla syrup come together to create a delightful new twist on a beloved espresso classic.', 12000, ''),
(12, 'Kopi Susu Warbon', 'Signature', 'Warbon original signature. Rich, full-bodied espresso in steamed milk, lightly topped with foam.', 10000, ''),
(13, 'Chocolate Coffee', 'Signature', 'Our small-lot espresso—combined with cocoa and ground chocolate, then topped with cold milk and served over iced', 10000, ''),
(14, 'Tjatoet Coffee', 'Signature', 'Smooth and creamy Tjatoet tea sweetened just right and served with steamed milk.', 12000, ''),
(15, 'Orange Coffee', 'Signature', 'A tropical orange and passionfruit infusion, perfectly blended with espresso and ice.', 15000, ''),
(16, 'Greentea Latte Coffee', 'Signature', 'Smooth and creamy Green tea sweetened just right and served with steamed milk.', 15000, ''),
(17, 'Avocado Coffee', 'Signature', 'A delightful espresso—combined perfectly blended with avocado.', 15000, ''),
(18, 'Mango Coffee', 'Signature', 'A tropical mango infusion, perfectly blended with espresso and ice.', 15000, ''),
(19, 'Biscuit Coffee', 'Signature', 'Espresso—combined with biscuit, then topped with milk', 15000, ''),
(20, 'Papermint Coffee', 'Signature', 'Espresso Roast combines with steamed milk and peppermint-flavored syrup', 15000, ''),
(21, 'Cappuccino', 'Signature', 'Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam.', 14000, ''),
(22, 'Jamaican Rum', 'Signature', 'Jamaican Rum flavored coffee boasts the tropical flavor of Caribbean rum, combined with creamy notes and 100% Arabica gourmet ', 15000, ''),
(24, 'Tjatoet Mango', 'Tea', '', 12000, ''),
(25, 'Tjatoet Lychee', 'Tea', '', 12000, ''),
(30, 'Green Tea', 'Tea', '', 12000, '');

-- --------------------------------------------------------

--
-- Table structure for table `user_acc`
--

CREATE TABLE `user_acc` (
  `usr_ID` int(11) NOT NULL,
  `usr_name` varchar(25) NOT NULL,
  `usr_email` varchar(255) NOT NULL,
  `usr_password` varchar(40) NOT NULL,
  `usr_tellno` varchar(17) NOT NULL,
  `usr_address` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_acc`
--

INSERT INTO `user_acc` (`usr_ID`, `usr_name`, `usr_email`, `usr_password`, `usr_tellno`, `usr_address`) VALUES
(1, 'Admin123', 'admin@gmail.com', 'admin123', '123123', 'Jakarta'),
(2, 'test', 'test@gmail.com', 'test123', '', ''),
(3, 'aaa', 'aaa@aaa.com', 'aaa', '', ''),
(6, 'Raafi Haykal', 'raafi.haykal10@gmail.com', '12345', '111111', 'Bekasi'),
(7, 'Raafi', 'raafi.haykal@perbanas.id', '123123', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_ID`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`cart_ID`);

--
-- Indexes for table `ordr`
--
ALTER TABLE `ordr`
  ADD PRIMARY KEY (`ord_ID`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`prod_ID`);

--
-- Indexes for table `user_acc`
--
ALTER TABLE `user_acc`
  ADD PRIMARY KEY (`usr_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `admin_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `cart_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `ordr`
--
ALTER TABLE `ordr`
  MODIFY `ord_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `prod_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `user_acc`
--
ALTER TABLE `user_acc`
  MODIFY `usr_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
