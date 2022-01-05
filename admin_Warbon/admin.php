<?php
session_start();
include "koneksi.php";

if (!isset($_SESSION['admin'])) {
    echo "<script>alert('Anda belum login')</script>";
    echo "<script>location='loginadmin.php'</script>";
}

?>
<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="CSS/bootstrap.min.css">
    <link rel="shortcut icon" href="../img/logo.png" width="1px" height="1px">
    <link rel="stylesheet" href="CSS/admin.css">

    <!-- Scrollbar Custom CSS -->
    <script src="JS/jquery-3.5.1.slim.min.js"></script>
    <link rel="stylesheet" href="CSS/jquery.mCustomScrollbar.min.css">

    <title>Data Dashboard</title>
</head>

<body>


    <div class="wrapper">
        <!-- Sidebar  -->
        <nav id="sidebar">
            <div class="sidebar-header">
                <a href="admin.php">
                    <h3>Warbon DB</h3>
                </a>
            </div>

            <ul class="list-unstyled components">
                <p>Navigation</p>
                <li>
                    <a href="admin.php?page=order">Order</a>
                </li>
                <li>
                    <a href="admin.php?page=product">Products</a>
                </li>
                <li>
                    <a href="admin.php?page=adminacc">Admin</a>
                </li>
            </ul>
        </nav>

        <!-- Page Content  -->
        <div id="content">
            <nav class="navbar navbar-expand-lg navbar-light bg-light topnav">
                <div class="container-fluid">

                    <button type="button" id="sidebarCollapse" class="btn btn-orange">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-layout-sidebar" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M14 2H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zM2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2z" />
                            <path fill-rule="evenodd" d="M4 14V2h1v12H4z" />
                        </svg>
                    </button>

                    <div class="search-container">
                        <form class="search-box">
                            <input type="text" placeholder="Product Search.." name="search">
                            <button type="submit" style="color: white;">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                                    <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                                </svg>
                            </button>
                        </form>
                    </div>

                    <div class="prof-container">
                        <?php if (isset($_SESSION['admin'])) { ?>
                            <a href="#" class="prof-nm"><?php echo $_SESSION['admin']['admin_username']; ?></a>
                        <?php } ?>
                    </div>

                    <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-align-justify"></i>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="nav navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="btn btn-danger dgr" href="logoutadmin.php">Sign Out</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div class="co-content">
                <?php
                if (isset($_GET['page'])) {
                    //start grup dashboard dropdown
                    if ($_GET['page'] == "order") {
                        include 'order.php';
                    } elseif ($_GET['page'] == "detail") {
                        include 'detail-order.php';
                    } elseif ($_GET['page'] == "adminacc") {
                        include 'adminacc.php';
                    } elseif ($_GET['page'] == "editadmin") {
                        include 'editadmin.php';
                    }
                    //end grup dashboard dropdown

                    //start grup product dropdown
                    elseif ($_GET['page'] == "product") {
                        include 'product.php';
                    } elseif ($_GET['page'] == "AddProduct") {
                        include 'addproduct.php';
                    } elseif ($_GET['page'] == "DeleteProd") {
                        include 'deleteprod.php';
                    } elseif ($_GET['page'] == "EditProd") {
                        include 'editprod.php';
                    }
                    //end grup product dropdown

                } else {
                    include 'dashboard.php';
                }
                ?>
            </div>
        </div>
    </div>

    </div>

    <!-- JavaScript: jQuery and Bootstrap Bundle (includes Popper) -->

    <script src="JS/bootstrap.bundle.min.js"></script>

    <!-- jQuery Custom Scroller CDN -->
    <script src="JS/jquery.mCustomScrollbar.concat.min.js"></script>
    <!-- JavaScript -->
    <script type="text/javascript">
        $(document).ready(function() {
            $("#sidebar").mCustomScrollbar({
                theme: "minimal"
            });

            $('#sidebarCollapse').on('click', function() {
                $('#sidebar, #content').toggleClass('active');
                $('.collapse.in').toggleClass('in');
                $('a[aria-expanded=true]').attr('aria-expanded', 'false');
            });
        });
    </script>

</body>

</html>