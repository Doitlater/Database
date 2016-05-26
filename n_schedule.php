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
         <li  class="active"><a href="n_schedule.php">schedule</a></li>
		 <!-- <li><a href="n_treatment.php">treatment</a></li> -->
         <li><a href="logout.php">logout</a></li>
         
      </ul>
   </div>
    <div>
		<p class="navbar-text navbar-right">Hello! <?php session_start(); echo $_SESSION['identity'].' ';?>
			<a href="n_template.php?uid=<?php echo $_SESSION['id']; ?>" class="navbar-link"><?php echo $_SESSION['name'];?></a>
		</p>
   </div>
</nav>
<div class="container">
	<img src="images/WBAS.png" class="img-rounded"></img>
	<div class="row"><h4 align = "center">Today is <?php date_default_timezone_set('prc');
						echo(strftime("%a on %b %d, %Y, %X",time()));
?></h4></div>
	<div class="row">
		
		<?php
		
		
		require_once("database_connect.php");
		$workday = array("Mon.","Tues.","Wed.","Thur.","Fri.","Sat.","Sun.");
		for($x=0;$x<7;$x++){
			echo "<h4>Work Day: ".$workday[$x]."</h4>";
			$strsql="SELECT * FROM nurse_response_bed_sched where nurse_id='".$_SESSION['id']."'and work_day='".$workday[$x]."'";
			echo "<table class='table table-striped'><tbody><tr><td>Start Time</td><td>End Time</td><td>Ward Bed</td></tr>"; 
			if ($result =$mysqli->query($strsql)) {
				while($obj = $result->fetch_object()){
				   echo "<tr><td>".$obj->start_time."</td><td>".$obj->end_time."</td><td><a href='find.php?i=prescription_info&id=".$obj->bed_id."'>".$obj->bed_id."</a></td></tr>";	   
				} 
				echo "</tbody></table>";
				$result->close(); 
				unset($obj);  
			}
		}	    
		$mysqli->close();
	  ?>

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