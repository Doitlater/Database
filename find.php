<?php
	include("all_template.php");
?>



<div class="container">
	<img src="images/WBAS.png" class="img-rounded"></img>
	<div class="row">
			
			<table class="table table-striped">
				  <tbody>
				  <?php
					    require_once("database_connect.php");
					    $strsql="SELECT * FROM ".$_GET['i']." where id=".$_GET['id'];
 					    if ($result =$mysqli->query($strsql)) {
	 					    while($obj = $result->fetch_object()){
								if($_GET['i'] == 'doctor'){
								    echo "<tr><td>Name</td><td>".$obj->DocName."</td></tr>\n";
								    echo "<tr><td>Age</td><td>".$obj->age."</td></tr>\n";
									$strsql1="SELECT DName FROM Department where id=".$obj->dept_id;
									$obj1 = $mysqli->query($strsql1)->fetch_object();
								    echo "<tr><td>Department</td><td>".$obj1->DName."</td></tr>\n";
								    echo "<tr><td>Phone Number</td><td>".$obj->phone."</td></tr>\n";
								    echo "<tr><td>Email</td><td>".$obj->email."</td></tr>\n";
								    echo "<tr><td>Self Introduction</td><td>".$obj->self_intro."</td></tr>\n";
								}
								elseif($_GET['i'] == 'department'){
									echo "<tr><td>Name</td><td>".$obj->DName."</td></tr>\n";
								    echo "<tr><td>Description</td><td>".$obj->description."</td></tr>\n";
									$strsql1="SELECT BName FROM Building where id=".$obj->building_id;
									$obj1 = $mysqli->query($strsql1)->fetch_object();
								    echo "<tr><td>Building</td><td>".$obj1->BName."</td></tr>\n";
									echo "<tr><td>Floor#</td><td>".$obj->floor_num."</td></tr>\n";
								    echo "<tr><td>Total Number of Bed</td><td>".$obj->bed_total_num."</td></tr>\n";
								    echo "<tr><td>Number of Free Bed</td><td>".$obj->bed_remaining_num."</td></tr>\n";
								}
								else{
									
								}
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


<?php	
	include("footer.html");	
	
?>