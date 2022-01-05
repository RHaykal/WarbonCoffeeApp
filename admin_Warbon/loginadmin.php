<!DOCTYPE html>
<html>

<head>
   <title>Admin Sign-In</title>
   <link rel="shortcut icon" href="../img/logo.png" width="1px" height="1px">
   <link rel="stylesheet" type="text/css" href="css/loginadmin.css">
   <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
   <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
   <script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>

</head>

<body>
   <div class="sidenav">
      <div class="login-main-text">
         <h2>Warbon<br>Admin Sign-In</h2>
         <p>Sign-In to maintain our Databases.</p>
      </div>
   </div>
   <div class="main">
      <div class="col-md-6 col-sm-12">
         <div class="login-form">
            <form method="POST" action="login.php">
               <div class="form-group">
                  <label>Username</label>
                  <input type="text" name="username" class="form-control">
               </div>
               <div class="form-group">
                  <label>Password</label>
                  <input type="password" name="password" class="form-control">
               </div>
               <button type="submit" name="login" class="btn btn-login">Sign-In</button>
               <!-- <a href="registeradmin.php" name="register" class="btn btn-register">
                  <font color="#0B764E">Register</font>
               </a> -->
            </form>
         </div>
      </div>
   </div>
</body>

</html>