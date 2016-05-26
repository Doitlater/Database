<!DOCTYPE html>
<html>
<head>
   <title>Wards bed arrangement system</title>
<!--
   <link href="http://libs.baidu.com/bootstrap/3.0.3/css/bootstrap.min.css" rel="stylesheet">
   <script src="http://libs.baidu.com/jquery/2.0.0/jquery.min.js"></script>
   <script src="http://libs.baidu.com/bootstrap/3.0.3/js/bootstrap.min.js"></script>
-->
<!-- <style type="text/css" src="bootstrap.min.css"></style> -->
<link href="bootstrap.min.css" rel="stylesheet" type="text/css"/>
<script src="jquery2.js"></script>
<script src="bootstrap/js/bootstrap.min.js"></script>

</head>

<body>

<nav class="navbar navbar-inverse" role="navigation">
   <div class="navbar-header">
      <a class="navbar-brand" href="#">WBAS</a>
   </div>
   <div>
      <ul class="nav navbar-nav">
         <li class="active"><a href="index.php">Login</a></li>
         
         
      </ul>
   </div>
</nav>
<div class="container">
   <img src="images/WBAS.png" class="img-rounded"></img>
   <div class="row">
      <div class="col-sm-6 col-md-6 col-lg-6">
         
      </div>
      <div class="col-sm-6 col-md-6 col-lg-6">
      <form class="form-horizontal" role="form" action="index.php" method="post">
         <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label">name</label>
            <div class="col-sm-10">
               <input type="text" class="form-control" name="username" 
                  placeholder="please input your username">
            </div>
         </div>
         <div class="form-group">
            <label for="lastname" class="col-sm-2 control-label">password</label>
            <div class="col-sm-10">
               <input type="password" class="form-control" name="pw" 
                  placeholder="please input your password ">
            </div>
         </div>
         <div class="form-group">
            <label for="identity" class="col-sm-2 control-label">Identity</label>
            <div class="col-sm-10">
               <select class="form-control" name="identity">
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


<?php
	session_start();
	if(isset($_SESSION['login'])&&$_SESSION['login']==true){
		header('Location:'.$_SESSION['identity'][0].'_template.php?uid='.$_SESSION['id']);
	}
	if(isset($_POST['username'])&&isset($_POST['pw'])){
		require_once("database_connect.php");
		if($_POST['identity']=='Doctor')
			$strsql="SELECT * FROM ".$_POST['identity']." where DocName='".$_POST['username']."';";
		else{
			$strsql="SELECT * FROM ".$_POST['identity']." where ".$_POST['identity'][0]."Name='".$_POST['username']."';";
			}
		//echo($strsql);
		if ($result =$mysqli->query($strsql)) {
			$obj = $result->fetch_object();
			if($obj->pswd==$_POST["pw"])
		    {
				session_start();
				$_SESSION['id']=$obj->ID;
				$_SESSION['name']=$_POST['username'];
				$_SESSION['identity']=$_POST['identity'];
				$_SESSION['login']=true;
<<<<<<< HEAD
				header('Location:'.$_SESSION['identity'][0].'_template.php');
=======
				header('Location:'.$_SESSION['identity'][0].'_template.php?uid='.$_SESSION['id']);
>>>>>>> b06dd2f755f901b720abe59c1564d0715fc31a70
		    }
		    else
		    	echo("passwd is incorrect");	    
		    $result->close(); 
			unset($obj);  
		    $mysqli->close();
		}
		else{
			echo("incorrect username");
			$result->close();
		    $mysqli->close();
		}
	}
?>


<footer class="footer navbar-fixed-bottom ">
	<hr>
    <div class="container">
	    &copy;Powered by doitlater team
    </div>
</footer>
</body>
</html>