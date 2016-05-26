<?php
	include("all_template.php");
?>



<div class="container">
	<img src="images/WBAS.png" class="img-rounded"></img>
	<div class="row">
	<h3 align = "center">Prolong the living period!</h3>
	<form class="form-horizontal" role="form" action="beds.php?i=patient_info&id='<?php echo $_GET['pid']; ?>'" method="post" 
enctype="multipart/form-data"> 
		    <div class="form-group">
				 <label for="livingperiod" class="col-sm-2 control-label">End of living period</label>
				 <div class="col-sm-9">
					<input type="text" class="form-control" name="living_period_end_change" required
					   placeholder="Origin Date: <?php 
					   require_once("database_connect.php");
					   $strsql = "select living_period_end from patient where ID='".$_GET['pid']."';";
					   $obj = $mysqli->query($strsql)->fetch_object();
					   echo $obj->living_period_end;
					   ?>">
				 </div>
		    </div>
			<div class="form-group">
				<div class="col-sm-offset-2 col-sm-10">
				   <button type="submit" id="btn" class="btn btn-default">submit</button>
				</div>
			</div>
	  </form>
			
				  

	</div>
</div>	


<?php	
	include("footer.html");	
	
?>