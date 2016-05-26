<?php
	include("all_template.php");
?>



<div class="container">
	<img src="images/WBAS.png" class="img-rounded"></img>
	<div class="row">
			<?php if ($_GET['i'] == 'prescription_info'){ ?>
				<div class="row"><h4 align = "center">Today is <?php date_default_timezone_set('prc');
							echo(strftime("%a on %b %d, %Y, %X",time()));
						?></h4></div>
					<?php } ?>
			<table class="table table-striped">
				  <tbody>
				  <?php
						$flag = "-1";
						
					    require_once("database_connect.php");
					    $strsql="SELECT * FROM ".$_GET['i']." where id='".$_GET['id']."';";
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
									$strsql1="SELECT BName FROM Building where id='".$obj->building_id."';";
									$obj1 = $mysqli->query($strsql1)->fetch_object();
								    echo "<tr><td>Building</td><td>".$obj1->BName."</td></tr>\n";
									echo "<tr><td>Floor#</td><td>".$obj->floor_num."</td></tr>\n";
								    echo "<tr><td>Total Number of Bed</td><td>".$obj->bed_total_num."</td></tr>\n";
								    echo "<tr><td>Number of Free Bed</td><td>".$obj->bed_remaining_num."</td></tr>\n";
								}
								elseif($_GET['i'] == 'patient_info'){
									echo "<tr><td>ID</td><td>".$obj->ID."</td></tr>\n";
								   echo "<tr><td>Name</td><td>".$obj->PName."</td></tr>\n";
								   echo "<tr><td>Age</td><td>".$obj->age."</td></tr>\n";
								   echo "<tr><td>Symptom</td><td>".$obj->symptom."</td></tr>\n";
								   echo "<tr><td>Attending Doctor</td><td>".$obj->DocName."</td></tr>\n";
								   echo "<tr><td>Living Period</td><td>".$obj->living_period_start." - ".$obj->living_period_end."</td></tr>\n";
								   echo "<tr><td>Bed</td><td>".$obj->Bed_ID."</td></tr>\n";
								}
								elseif($_GET['i'] == 'building'){
									echo "<tr><td>ID</td><td>".$obj->ID."</td></tr>\n";
								   echo "<tr><td>Name</td><td>".$obj->BName."</td></tr>\n";
								   echo "<tr><td>Address</td><td>".$obj->address."</td></tr>\n";
								}
								elseif($_GET['i'] == 'medicine'){
									echo "<tr><td>ID</td><td>".$obj->ID."</td></tr>\n";
								   echo "<tr><td>Name</td><td>".$obj->MName."</td></tr>\n";
								   echo "<tr><td>Usage</td><td>".$obj->MUsage."</td></tr>\n";
								   echo "<tr><td>Instructions</td><td>".$obj->instructions."</td></tr>\n";
								   echo "<tr><td>Stock Number</td><td>".$obj->stock_num."</td></tr>\n";
								}
								elseif($_GET['i'] == 'prescription_info'){
									if($flag != $obj->id){
										$flag = $obj->id;
										echo "<br/><h4> Treatment</h4>";
										echo "<h4> Prescription ID: ".$obj->id."</h4><br/>";
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
								else{
									
								}
					        } 
					        $result->close(); 
							unset($obj);  
 					    }
 					    
 					   // $mysqli->close();
					  ?>

				   </tbody>
			</table>
	</div>
</div>	



<?php	
	include("footer.html");	
	
?>