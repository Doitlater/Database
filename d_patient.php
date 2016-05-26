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
         <li class="active"><a href="d_patient.php">patient</a></li>
         <li><a href="d_pre.php">prescription</a></li>
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
				$strsql = "SELECT * FROM patient where attending_doc_id='".$_SESSION['id']."';";
				
				if ($result =$mysqli->query($strsql)) {
					while($obj = $result->fetch_object()){
						echo "<div class='col-md-3' >
							<br/><br/><img src='upload/Patient/qfai.png' onload='if(this.width >= 280){this.width = 280}' ></img>
							<label>patient id: </label><a href='find.php?i=patient_info&id=".$obj->ID."'>".$obj->ID."</a></br>
							<a href='prescription.php?uid=".$obj->ID."' style='float: center;
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
													cursor: pointer;'>Make Prescription</a>
						</div>";
						echo "<div class='col-md-9'>
							<br/><br/><table class='table table-striped'>
									  <tbody>";
								   echo "<tr><td>ID</td><td>".$obj->ID."</td></tr>\n";
								   echo "<tr><td>Name</td><td>".$obj->PName."</td></tr>\n";
								   echo "<tr><td>Age</td><td>".$obj->age."</td></tr>\n";
								   echo "<tr><td>Symptom</td><td>".$obj->symptom."</td></tr>\n";
								   $strsql1="SELECT DocName FROM Doctor where id='".$obj->attending_doc_id."';";
								   $obj1 = $mysqli->query($strsql1)->fetch_object();
								   //var_dump($obj1); 
									echo "<tr><td>Attending Doctor</td><td><a href='find.php?i=doctor&id=".$obj->attending_doc_id."'>".$obj1->DocName."</a></td></tr>\n";
								   echo "<tr><td>Living Period</td><td>".$obj->living_period_start." - ".$obj->living_period_end."</td></tr>\n";
						echo "</tbody></table>
						</div>";
					} 
					$result->close(); 
					unset($obj);  
				}	    
				$mysqli->close();
			  ?>

		
	</div>
	<br/><br/><br/>
</div>


<footer class="footer navbar-fixed-bottom ">
	<hr>
    <div class="container">
	    &copy;Powered by doitlater team
    </div>
</footer>
</body>
</html>