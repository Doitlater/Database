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
         <li><a href="d_template.php" >info</a></li>
         <li><a href="d_patient.php">patient</a></li>
         <li class ="active"><a href="d_pre.php">prescription</a></li>
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
		
		<?php
		require_once("database_connect.php");
		$strsql="SELECT * FROM prescription_info where doctor_id='".$_SESSION['id']."' order by id;";
		if ($result =$mysqli->query($strsql)) {
			$flag = "-1";
			while($obj = $result->fetch_object()){
				if($flag != $obj->id){
					$flag = $obj->id;
					echo "<br/><h4> Prescription ID: ".$obj->id."</h4><br/>";
					echo "<table class='table table-striped'><tbody>"; 
					echo "<tr><td>Description</td><td>".$obj->description."</td></tr>\n";
					echo "<tr><td>Patient</td><td><a href='find.php?i=patient_info&id=".$obj->patient_id."'>".$obj->pname."</a></td></tr>\n";
					echo "<tr><td>Bed ID</td><td>".$obj->bed_id."</td></tr>\n";
					echo "<tr><td>Room#</td><td>".$obj->room_num."</td></tr>\n";
					$strsql1 = "SELECT TTime from treatment where prsct_id='".$obj->id."';";
					$result1 = $mysqli->query($strsql1);
					$flag1 = 0;
					while($obj1 = $result1->fetch_object()){
						if($flag1){
							echo "<tr><td>  </td><td>".$obj1->TTime."</td></tr>\n";
						}
						else{
							echo "<tr><td>Treatment Time</td><td>".$obj1->TTime."</td></tr>\n";
							$flag1 = 1;
						}
					}
					$strsql2 = "SELECT Medicine.MName, prsct_medi.medi_id FROM prsct_medi, medicine where prsct_medi.prsct_id='".$obj->id."' and prsct_medi.medi_id = medicine.ID;";
					//echo $strsql2;
					echo "<tr><td>Medicine</td><td>";
					$result2 = $mysqli->query($strsql2);
					while($obj2 = $result2->fetch_object()){
						echo "<a href='find.php?i=medicine&id=".$obj2->medi_id."'>".$obj2->MName."</a>,";
					}
					echo "</td></tr>";
					//echo "<tr><td>Medicine</td><td>".$obj->mname."</td></tr>\n";
					echo "</tbody></table>";
				}
				
			} 
			
			$result->close(); 
			unset($obj);  
		}	    
		$mysqli->close();
	  ?>

	</div>   
</div>
<br/><br/>

</div>


<footer class="footer navbar-fixed-bottom ">
	<hr>
    <div class="container">
	    &copy;Powered by doitlater team
    </div>
</footer>

</body>

</html>