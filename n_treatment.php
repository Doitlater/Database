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
         <li><a href="n_template.php" >info</a></li>
         <li><a href="n_schedule.php">schedule</a></li>
		 <li class = "active"><a href="n_treatment.php">treatment</a></li>
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
	<div class="row"><h4 align = "center">Today is <?php date_default_timezone_set('prc');
		echo(strftime("%a on %b %d, %Y, %X",time()));
	?></h4></div>
	<div class="row">
<!-- 		<div class="col-sm-6 col-md-6 col-lg-6"> -->
			<table class="table table-striped">
				  <tbody>
						<?php
					    require_once("database_connect.php");
					    $strsql="SELECT * FROM prescription_info where id=".$_SESSION['id'];
 					    if ($result =$mysqli->query($strsql)) {
	 					    while($obj = $result->fetch_object()){
		 					   echo "<tr><td>Name</td><td>".$obj->NName."</td></tr>\n";
					           echo "<tr><td>Age</td><td>".$obj->age."</td></tr>\n";
					           
							   $strsql1="SELECT DName FROM Department where id=".$obj->dept_id;
							   $obj1 = $mysqli->query($strsql1)->fetch_object();
							   //var_dump($obj1); 
					           echo "<tr><td>Department</td><td><a href='find?i=doctor&id=".$obj->dept_id."'>".$obj1->DName."</a></td></tr>\n";
					           echo "<tr><td>Self Introduction</td><td>".$obj->self_intro."</td></tr>\n";
					        } 
					        $result->close(); 
							unset($obj);  
 					    }
 					   
 					    
 					    $mysqli->close();
					  ?>
				   </tbody>
			</table>
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