<!DOCTYPE html>
<html>
<head>
   <title>Wards bed arrangement system</title>
<link href="bootstrap.min.css" rel="stylesheet" type="text/css"/>
<script src="jquery2.js"></script>
<script src="bootstrap/js/bootstrap.min.js"></script>

   <style >
	   td

		{
		
		    text-align:center;
		
		}
	</style>

</head>
<body>

<nav class="navbar navbar-inverse" role="navigation">
   <div class="navbar-header">
      <a class="navbar-brand" href="index.php">WBAS</a>
   </div>
   <div>
      <ul class="nav navbar-nav">
         <li class="active"><a href="d_template.html" >info</a></li>
         <li><a href="d_patient.html">patient</a></li>
         <li><a href="d_pro.html">proscription</a></li>
         <li><a href="logout.php">logout</a></li>
         
      </ul>
   </div>
    <div>
      <p class="navbar-text navbar-right">Hello! <?php session_start(); echo $_SESSION['identity'].' ';?>
         <a href="d_template.php?uid=<?php echo $_SESSION['id']; ?>" class="navbar-link"><?php echo $_SESSION['name'];?></a>
         
      </p>
   </div>
</nav>
<div class="container">
	<img src="images/WBAS.png" class="img-rounded"></img>
	<div class="row">
<!-- 		<div class="col-sm-6 col-md-6 col-lg-6"> -->
			
			<table class="table table-striped">
				  <tbody>
					  <?php
					    require_once("database_connect.php");
					    $strsql="SELECT * FROM Doctor where id='".$_SESSION['id']."'";
 					    if ($result =$mysqli->query($strsql)) {
	 					    while($obj = $result->fetch_object()){
		 					   echo "<tr><td>DocName</td><td>".$obj->DocName."</td></tr>\n";
					           echo "<tr><td>age</td><td>".$obj->age."</td></tr>\n";
					           echo "<tr><td>dept_id</td><td><a href='find?i=dept&id='".$obj->dept_id.">".$obj->dept_id."</a></td></tr>\n";
					           echo "<tr><td>phone</td><td>".$obj->phone."</td></tr>\n";
					           echo "<tr><td>email</td><td>".$obj->email."</td></tr>\n";
					           echo "<tr><td>self-introduction</td><td>".$obj->self_intro."</td></tr>\n";
					        } 
					        $result->close(); 
							unset($obj);  
 					    }
 					   
 					    
 					    $mysqli->close();
					  ?>
<!--
				      <tr>
				         <td>ID</td>
				         <td id="pid">1</td>
				      </tr>
				      <tr>
				         <td>Name</td>
				         <td id="name">Thomas</td>
				      </tr>
				      <tr>
				         <td>Age</td>
				         <td id="age">25</td>
				      </tr>
				      <tr>
					      <td>Department</td>
					      <td><a href="" id="department">child</a></td>
					  </tr>
					   <tr>
				         <td>Self-intro</td>
				         <td id="intro">I'am a doctor charge of child disease</td>
				      </tr>
-->
				   </tbody>
			</table>

<!-- 		</div> -->
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