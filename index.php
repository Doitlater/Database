<!DOCTYPE html>
<html>
<head>
   <title>Wards bed arrangement system</title>
   <link href="http://libs.baidu.com/bootstrap/3.0.3/css/bootstrap.min.css" rel="stylesheet">
   <script src="http://libs.baidu.com/jquery/2.0.0/jquery.min.js"></script>
   <script src="http://libs.baidu.com/bootstrap/3.0.3/js/bootstrap.min.js"></script>
</head>
<body>

<nav class="navbar navbar-inverse" role="navigation">
   <div class="navbar-header">
      <a class="navbar-brand" href="#">WBAS</a>
   </div>
   <div>
      <ul class="nav navbar-nav">
         <li class="active"><a href="index.php">Login</a></li>
         <li><a href="reg.php">Registration</a></li>
         
      </ul>
   </div>
</nav>
<div class="container">
   <img src="images/WBAS.png" class="img-rounded"></img>
   <div class="row">
      <div class="col-sm-6 col-md-6 col-lg-6">
         
      </div>
      <div class="col-sm-6 col-md-6 col-lg-6">
      <form class="form-horizontal" role="form">
         <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label">name</label>
            <div class="col-sm-10">
               <input type="text" class="form-control" id="username" 
                  placeholder="please input your username">
            </div>
         </div>
         <div class="form-group">
            <label for="lastname" class="col-sm-2 control-label">password</label>
            <div class="col-sm-10">
               <input type="password" class="form-control" id="pw" 
                  placeholder="please input your password ">
            </div>
         </div>
         <div class="form-group">
            <label for="identity" class="col-sm-2 control-label">Identity</label>
            <div class="col-sm-10">
               <select class="form-control">
                  <option>Patient</option>
                  <option>Doctor</option>
                  <option>Nurse</option>
                  <option>Manager</option>
               </select>
         </div>
         </div>
         <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
               <button type="submit" class="btn btn-default">submit</button>
            </div>
         </div>
      </form>
      </div>
</div>


</div>





<footer class="footer navbar-fixed-bottom ">
	<hr>
    <div class="container">
	    &copy;Powered by doitlater team
    </div>
</footer>
</body>
</html>