<?php
	include("all_template.php");
?>



<div class="container">
	<img src="images/WBAS.png" class="img-rounded"></img>
	<div class="row">
	
			
				  <?php
				  //delete bid=000007 pid=00006 maybe
					    require_once("database_connect.php");
					    $strsql="update wardsbed set patient_id = null, using_status = 0 where ID='".$_GET['bid']."';";
						$strsql1="update patient set living_period_start=null, living_period_end=null where ID='".$_GET['pid']."';";
						$mysqli->query($strsql);
						$mysqli->query($strsql1);
 					    echo "<br/><br/><h3>Delete Successfully!</h3>";
 					    $mysqli->close();
					  ?>

	</div>
</div>	


<?php	
	include("footer.html");	
	
?>