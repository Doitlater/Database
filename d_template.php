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
         <li><a href="d_schedule.html">schedule</a></li>
         <li><a href="d_patient.html">patient</a></li>
         <li><a href="d_pro.html">proscription</a></li>
         <li><a href="logout.php">logout</a></li>
         
      </ul>
   </div>
    <div>
      <p class="navbar-text navbar-right">Hello! Doctor 
         <a href="#" class="navbar-link">Thomas</a>
         
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
					    $strsql="SELECT * FROM users where uid=".$_GET['uid'];
 					    if ($result =$mysqli->query($strsql)) {
	 					    while($obj = $result->fetch_object()){
		 					   echo "<tr><td>username</td><td>".$obj->username."</td></tr>\n";
					           echo "<tr><td>passwd</td><td>".$obj->password."</td></tr>\n";
					           echo "<tr><td>uid</td><td>".$obj->uid."</td></tr>\n";
					        } 
 					    }
 					    else{
	 					    echo "no result";
 					    }
 					    $result->close(); 
					    unset($obj);  
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