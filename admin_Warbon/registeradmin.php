<!DOCTYPE html>
<html>
   <head>
      <title>Admin Register</title>
      <link rel="shortcut icon" href="../img/logo.png" width="1px" height="1px">
      <link rel="stylesheet" type="text/css" href="../dist/css/loginadmin.css">
      <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
      <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
      <script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
      
   </head>
   <body>
      <div class="sidenav">
         <div class="login-main-text">
            <h2>Are you<br>our Admin?</h2>
            <p>Register if you're one of us.</p>
         </div>
      </div>
      <div class="main">
         <div class="col-md-6 col-sm-12">
            <div class="login-form">
               <form method="POST" action="register.php">
                  <div class="form-group">
                     <label>Email</label>
                     <input type="text" name="email" class="form-control">
                  </div>
                  <div class="form-group">
                     <label>Username</label>
                     <input type="text" name="username" class="form-control">
                  </div>
                  <div class="form-group">
                     <label>Password</label>
                     <input type="password" name="password" class="form-control">
                  </div>
                  <button type="submit" name="register"  class="btn btn-login">Register</button>
               </form>
            </div>
         </div>
      </div>
   </body>
</html>