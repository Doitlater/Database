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
         <li class="active"><a href="beds.php" >info</a></li>
         <li><a href="requests.php">requests</a></li>
         <li><a href="logout.php">logout</a></li>
         
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
		<label class="col-md-1"> filter</label>
		<div class="col-md-3">
			<select class="form-control" id="building"  name="building">$_POST['bid']
                  <option value="null" selected="selected">choose building</option>
                  <option value="00001" >Ligula.</option>
                  <option value="00002">Ac</option>
                  <option value="00003">Lorem,</option>
                  <option value="00004">Nibh</option>


             </select>
		</div>
		<div class="col-md-1"></div>
		<div class="col-md-3">
			<select class="form-control" id="department" name="department">$_POST['did']
                  <option value="null" selected="selected">choose department</option>
                  <option value="00001" >Department of Surgery</option>
                  <option value="00002">Department of Pediatrics</option>
                  <option value="00003" >Department of Orthopedist</option>
                  <option value="00004" >Department of Obestetrics and Gynecology</option>
                  <option value="00005" >Department of Neurology</option>
             </select>
		</div>
		<div class="col-md-2" >
<!--
			<label>
               <input type="radio" name="using_status" value="1"> 
            </label>
-->
			<form id="using_status" name="using_status" method="post" action="beds.php">
				<p><input type="radio" name="using_status" value="0">inavailable</p>
				<p><input type="radio" name="using_status" value="1">available</p>
			</form>
		</div>
		<div class="col-md-2">
			<button type="submit" class="btn btn-default">Search</button>
		</div>
		</form>
	</div>
</div>

	<div class="row">
<!-- 		<div class="col-sm-6 col-md-6 col-lg-6"> -->
			<table class="table table-striped">
				  <tbody>
					  <?php
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
 					    
 					    ?>



				   </tbody>
			</table>

<!-- 		</div> -->
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