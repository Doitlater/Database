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
<<<<<<< HEAD
          <li ><a href="m_template.php" >info</a></li>
		  <li class="active"><a href="beds.php">beds</a></li>
          <!-- <li><a href="requests.php">requests</a></li>  prolong的申请-->
		  <li><a href="reg.php">Registration</a></li>
          <li><a href="logout.php">logout</a></li>
=======
         <li class="active"><a href="beds.php" >info</a></li>
         <li><a href="requests.php">requests</a></li>
         <li><a href="logout.php">logout</a></li>
>>>>>>> b06dd2f755f901b720abe59c1564d0715fc31a70
         
      </ul>
   </div>
    <div>
 <p class="navbar-text navbar-right">Hello! <?php session_start(); echo $_SESSION['identity'].' ';?>
         <a href="beds.php?uid=<?php echo $_SESSION['id']; ?>" class="navbar-link"><?php echo $_SESSION['name'];?></a>
         
      </p>

   </div>
</nav>
<div class="container">
	<img src="images/WBAS.png" class="img-rounded"></img>
	<div class="container">
	<div class="row big">
		<form action="beds.php" method="post">
<<<<<<< HEAD
		<h4 class="col-md-1"> filter:</h4>
		<div class="col-md-3">
		<div class="form-group">
			<select class="form-control" id="building"  name="building">
                  <option value="null" selected="selected">choose building</option>
                  <option value="00001">Ligula.</option>
=======
		<label class="col-md-1"> filter</label>
		<div class="col-md-3">
			<select class="form-control" id="building"  name="building">$_POST['bid']
                  <option value="null" selected="selected">choose building</option>
                  <option value="00001" >Ligula.</option>
>>>>>>> b06dd2f755f901b720abe59c1564d0715fc31a70
                  <option value="00002">Ac</option>
                  <option value="00003">Lorem,</option>
                  <option value="00004">Nibh</option>


             </select>
<<<<<<< HEAD
			 </div>
		</div>
		<div class="col-md-1"></div>
		<div class="form-group">
		<div class="col-md-3">
			<select class="form-control" id="department" name="department">
                  <option value="null" selected="selected">choose department</option>
                  <option value="00001" >Department of Surgery</option>
                  <option value="00002" >Department of Pediatrics</option>
=======
		</div>
		<div class="col-md-1"></div>
		<div class="col-md-3">
			<select class="form-control" id="department" name="department">$_POST['did']
                  <option value="null" selected="selected">choose department</option>
                  <option value="00001" >Department of Surgery</option>
                  <option value="00002">Department of Pediatrics</option>
>>>>>>> b06dd2f755f901b720abe59c1564d0715fc31a70
                  <option value="00003" >Department of Orthopedist</option>
                  <option value="00004" >Department of Obestetrics and Gynecology</option>
                  <option value="00005" >Department of Neurology</option>
             </select>
		</div>
<<<<<<< HEAD
		</div>
=======
>>>>>>> b06dd2f755f901b720abe59c1564d0715fc31a70
		<div class="col-md-2" >
<!--
			<label>
               <input type="radio" name="using_status" value="1"> 
            </label>
-->
<<<<<<< HEAD
			<div class="form-group">
				<p><input type="radio" name="using_status" value="1">inavailable</p>
				<p><input type="radio" name="using_status" value="0">available</p>
			</div>
		</div>
		<div class="col-md-2" class="form-group">
			<button type="submit" class="btn btn-default">Search</button>
			
=======
			<form id="using_status" name="using_status" method="post" action="beds.php">
				<p><input type="radio" name="using_status" value="0">inavailable</p>
				<p><input type="radio" name="using_status" value="1">available</p>
			</form>
		</div>
		<div class="col-md-2">
			<button type="submit" class="btn btn-default">Search</button>
>>>>>>> b06dd2f755f901b720abe59c1564d0715fc31a70
		</div>
		</form>
	</div>
</div>

	<div class="row">
<<<<<<< HEAD
	<?php ?>
=======
>>>>>>> b06dd2f755f901b720abe59c1564d0715fc31a70
<!-- 		<div class="col-sm-6 col-md-6 col-lg-6"> -->
			<table class="table table-striped">
				  <tbody>
					  <?php
<<<<<<< HEAD
						  
						  if(isset($_POST['building'])){
							  if(isset($_POST['department'])){
								  if(isset($_POST['using_status'])){
								  	require_once("database_connect.php");
								  $strsql="SELECT * FROM bed_info where dept_id='".$_POST['department']."' and building_id='".$_POST['building']."' and using_status =".$_POST['using_status'].";";										
									if ($result =$mysqli->query($strsql)) {
										while($obj = $result->fetch_object()){
										   echo "<table class='table table-striped'><tbody>";
										   echo "<h4>Bed ID: ".$obj->id."</h4>";
										   if($_POST['using_status'] == 1){
											   echo "<tr><td>Patient ID</td><td><a href='find.php?i=patient_info&id=".$obj->patient_id."'>".$obj->patient_id."</a> <a href='result.php?i=add&pid=".$obj->patient_id."&bid=".$obj->id."' style='float: center;
													position: relative;
													display: inline-block;
													margin-right: 1em;
													padding: 0.3em 1em;
													background: #62dfee;
													border-radius: 6px;
													text-decoration: none;
													text-transform: uppercase;
													font-size: 0.9em;
													color: #FFF;
													-moz-transition: color 0.35s ease-in-out, background-color 0.35s ease-in-out;
													-webkit-transition: color 0.35s ease-in-out, background-color 0.35s ease-in-out;
													-o-transition: color 0.35s ease-in-out, background-color 0.35s ease-in-out;
													-ms-transition: color 0.35s ease-in-out, background-color 0.35s ease-in-out;
													transition: color 0.35s ease-in-out, background-color 0.35s ease-in-out;
													cursor: pointer;'>DELETE</a><a href='prolong.php?pid=".$obj->patient_id."&bid=".$obj->id."' style='float: center;
													position: relative;
													display: inline-block;
													margin-right: 1em;
													padding: 0.3em 1em;
													background: #62dfee;
													border-radius: 6px;
													text-decoration: none;
													text-transform: uppercase;
													font-size: 0.9em;
													color: #FFF;
													-moz-transition: color 0.35s ease-in-out, background-color 0.35s ease-in-out;
													-webkit-transition: color 0.35s ease-in-out, background-color 0.35s ease-in-out;
													-o-transition: color 0.35s ease-in-out, background-color 0.35s ease-in-out;
													-ms-transition: color 0.35s ease-in-out, background-color 0.35s ease-in-out;
													transition: color 0.35s ease-in-out, background-color 0.35s ease-in-out;
													cursor: pointer;'>PROLONG</a></td></tr>\n";
										   }
										   else{
											   echo "<tr><td>Patient ID</td><td><a href='b_addpatient.php?bid=".$obj->id."' style='float: center;
													position: relative;
													display: inline-block;
													margin-right: 1em;
													padding: 0.3em 1em;
													background: #62dfee;
													border-radius: 6px;
													text-decoration: none;
													text-transform: uppercase;
													font-size: 0.9em;
													color: #FFF;
													-moz-transition: color 0.35s ease-in-out, background-color 0.35s ease-in-out;
													-webkit-transition: color 0.35s ease-in-out, background-color 0.35s ease-in-out;
													-o-transition: color 0.35s ease-in-out, background-color 0.35s ease-in-out;
													-ms-transition: color 0.35s ease-in-out, background-color 0.35s ease-in-out;
													transition: color 0.35s ease-in-out, background-color 0.35s ease-in-out;
													cursor: pointer;'>ADD PATIENT</a></td></tr>\n";
										   }
										   echo "<tr><td>Using Status</td><td>".$obj->using_status."</td></tr>\n";
										   echo "<tr><td>Using Fee Per Day</td><td>".$obj->using_fee_per_day."</td></tr>\n";
										   echo "<tr><td>Department</td><td><a href='find.php?i=department&id=".$obj->dept_id."'>".$obj->dname."</a></td></tr>\n";
										   echo "<tr><td>Device Status</td><td>".$obj->device_status."</td></tr>\n";
										   echo "<tr><td>Building</td><td><a href='find.php?i=building&id=".$obj->building_id."'>".$obj->bname."</a></td></tr>\n";
										   echo "<tr><td>Room#</td><td>".$obj->room_num."</td></tr>\n";
										   echo "<tr><td>Address</td><td>".$obj->address."</td></tr>\n";
										   echo "</table></tbody>";
										} 
										$result->close(); 
										unset($obj);  
									}else{
										echo "null";
									}	
				 					    
									//$mysqli->close();
								}
				 			}
 					    }
						else{
							echo "Choose the building and department.";
						}
=======
						  if(isset($_POST['bid'])){
							  if(isset($_POST['pid'])){
								  if($_POST['using_status']==1){
								  	require_once("database_connect.php");
// 					    $strsql="SELECT * FROM wardsbed where id='".$_SESSION['id']."'";
				 					    if ($result =$mysqli->query($strsql)) {
					 					    while($obj = $result->fetch_object()){
						 					   echo "<tr><td>patient_id</td><td><a href='find?i=patient&id='".$obj->patient_id.">".$obj->patient_id."</a></td></tr>\n";
									           echo "<tr><td>dept_id</td><td><a href='find?i=dept&id=".$obj->dept_id."'>".$obj->dept_id."</a></td></tr>\n";
									           echo "<tr><td>using_status</td><td>".$obj->using_status."</td></tr>\n";
									           echo "<tr><td>using_fee_per_day</td><td>".$obj->using_fee_per_day."</td></tr>\n";
									           echo "<tr><td>device_status</td><td>".$obj->device_status."</td></tr>\n";
									           echo "<tr><td>building_id</td><td><a href='find?i=building&id='".$obj->building_id.">".$obj->building_id."</a></td></tr>\n";
									           echo "<tr><td>room_num</td><td>".$obj->room_num."</td></tr>\n";
									        } 
									        $result->close(); 
											unset($obj);  
				 					    }else{
					 					    echo "null";
					  					   }
				 					  echo $_SESSION['id'];
				 					    
				 					    $mysqli->close();
				 				}
				 			}
 					    }
>>>>>>> b06dd2f755f901b720abe59c1564d0715fc31a70
 					    
 					    ?>



				   </tbody>
			</table>
<<<<<<< HEAD
  <br/><br/>
=======

>>>>>>> b06dd2f755f901b720abe59c1564d0715fc31a70
<!-- 		</div> -->
	</div>   

</div>

<<<<<<< HEAD
<?php
					    require_once("database_connect.php");
						if(isset($_POST['pid'])&&isset($_POST['living_period_start'])&&isset($_POST['living_period_end'])){
							require_once("database_connect.php");
							$strsql="update wardsbed set patient_id = '".$_POST['pid']."', using_status = 1 where ID=".$_GET['bid'].";";
							//echo $strsql;
							$result = $mysqli->query($strsql);
							$strsql1="update patient set living_period_start = '".$_POST['living_period_start']."', living_period_end = '".$_POST['living_period_end']."' where ID=".$_POST['pid'].";";
							//echo $strsql1;
						// 	echo $sqlstr;	
							$result1 =$mysqli->query($strsql1);
							if ($result && $result1){
									 echo "success!";
							}else {
									 echo "Failed";
							}
						}
 					    //echo "<br/><br/><h3>Delete Successfully!</h3>";
 					    //$mysqli->close();
					  ?>

<?php
					    //require_once("database_connect.php");
						if(isset($_POST['living_period_end_change'])){
							//require_once("database_connect.php");
							$strsql1="update patient set living_period_end = '".$_POST['living_period_end_change']."' where ID=".$_GET['id'].";";
							//echo $strsql1;
						// 	echo $sqlstr;	
							$result1 =$mysqli->query($strsql1);
						}
 					    //echo "<br/><br/><h3>Delete Successfully!</h3>";
 					    $mysqli->close();
					  ?>

=======
>>>>>>> b06dd2f755f901b720abe59c1564d0715fc31a70

<footer class="footer navbar-fixed-bottom ">
	<hr>
    <div class="container">
	    &copy;Powered by doitlater team
    </div>
</footer>

</body>

</html>