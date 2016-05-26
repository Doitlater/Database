<?php
	include("all_template.php");
?>



<div class="container">
	<img src="images/WBAS.png" class="img-rounded"></img>
	<div class="row">
	<form class="form-horizontal" role="form" action="beds.php?bid='<?php echo $_GET['bid']; ?>'" method="post" 
enctype="multipart/form-data"> 
			<div class="form-group">
				 <label for="patientid" class="col-sm-2 control-label">Patient ID</label>
				 <div class="col-sm-7">
					<input type="text" class="form-control" id="patientid" name="pid" required
					   placeholder="please input the patient id">
				 </div>
		    </div>
		    <div class="form-group">
				 <label for="livingperiod" class="col-sm-2 control-label">living period</label>
				 <div class="col-sm-3">
					<input type="text" class="form-control" name="living_period_start" required
					   placeholder="Input like 2016-05-05">
				</div>
				 <div class="col-sm-1"> <h4 align = "center">-</h4> </div>
				 <div class="col-sm-3">
					<input type="text" class="form-control" name="living_period_end" required
					   placeholder="Input like 2016-05-07">
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