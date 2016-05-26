<!DOCTYPE html>
<html>
<head>
   <title>Wards bed arrangement system</title>

 <script src="http://libs.baidu.com/jquery/2.0.0/jquery.min.js"></script>
<link href="bootstrap.min.css" rel="stylesheet" type="text/css"/>
<script src="bootstrap/js/bootstrap.min.js"></script>
<!-- <script src="jquery.min.js"></script> -->

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
         <li class="active"><a href="p_template.php" >info</a></li>
         <li><a href="logout.php">logout</a></li>
         
      </ul>
   </div>
    <div>
      <p class="navbar-text navbar-right">Hello! <?php session_start(); echo $_SESSION['identity'].' ';?>
         <a href="p_template.php?uid=<?php echo $_SESSION['id']; ?>" class="navbar-link"><?php echo $_SESSION['name'];?></a>
         
      </p>
   </div>
</nav>
<div class="container">
	<img src="images/WBAS.png" class="img-rounded"></img>
	<div class="row">
<!-- 		<div class="col-sm-6 col-md-6 col-lg-6"> -->
			
			<table class="table table-striped">
				  <tbody>
				  <?php
					    require_once("database_connect.php");
					    $strsql="SELECT * FROM Patient where id='".$_SESSION['id']."';";
 					    if ($result =$mysqli->query($strsql)) {
	 					    while($obj = $result->fetch_object()){
		 					   echo "<tr><td>Name</td><td>".$obj->PName."</td></tr>\n";
					           echo "<tr><td>Age</td><td>".$obj->age."</td></tr>\n";
					           echo "<tr><td>Symptom</td><td>".$obj->symptom."</td></tr>\n";
							   $strsql1="SELECT DocName FROM Doctor where id='".$obj->attending_doc_id."';";
							   $obj1 = $mysqli->query($strsql1)->fetch_object();
							   //var_dump($obj1); 
					           echo "<tr><td>Attending Doctor</td><td><a href='find.php?i=doctor&id=".$obj->attending_doc_id."'>".$obj1->DocName."</a></td></tr>\n";
					           echo "<tr><td>Living Period</td><td>".$obj->living_period_start." - ".$obj->living_period_end."</td></tr>\n";
					        } 
					        $result->close(); 
							unset($obj);  
 					    }
 					   
 					    
 					   
					  ?>
				   </tbody>
			</table>
			
<!--
			<div class="col-sm-offset-3 col-sm-3">
				<button class="btn btn-primary btn-lg" data-toggle="modal" 
   data-target="#myModal">I want to prolong!!!</button>
            </div>
-->			<form action="p_template.php" method="post">
            <div class="col-sm-offset-5 col-sm-5">
				<button name="leave" type="submit" class="btn btn-primary btn-lg" >Leave!!!</button>
            </div>
            </form>

	</div>   
</div>

</div>
<div class="md-overlay"></div>
<footer class="footer navbar-fixed-bottom ">
	<hr>
    <div class="container">
	    &copy;Powered by doitlater team
    </div>
</footer>
<?php
	if(isset($_POST['leave'])){
		$strsql2="Delete FROM Patient where id='".$_SESSION['id']."'";
		//echo $strsql2;
		$result =$mysqli->query($strsql2);
		if($result){
			echo('success!');
			session_destroy();
		}
		else{
			echo "Failed!";
		}
		
	}
	
	
?>
<!--
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" 
   aria-labelledby="myModalLabel" aria-hidden="true">
   <div class="modal-dialog">
      <div class="modal-content">
         <div class="modal-header">
            <button type="button" class="close" 
               data-dismiss="modal" aria-hidden="true">
                  &times;
            </button>
            <h4 class="modal-title" id="myModalLabel" style="text-align: center">
               Prolong!
            </h4>
         </div>
         <div class="modal-body" >
            Input prolong day and pay,200RMB/day:
         </div>
         <div class="form-group" >
	         <div class="col-md-offset-1">
		 	<label for="firstname" class="col-sm-2 control-label " >Days:</label>
			 <div class="col-sm-10">
			    <input type="text" class="input-xlarge days" pattern="^[0-9]*" 
				placeholder="please input days(int)" onchange="daychange(this.value)">
			 </div>
			 </div>
      	</div>
		<div class="form-group">
			<div class="col-md-offset-1">
	         <label style="layout:inline" >Amount:</label>
	         <label style="layout:inline" id="amount">0</label>
	   </div>
    	</div>	
         <div class="modal-footer">
            <button type="button" class="btn btn-default" 
               data-dismiss="modal">close
            </button>
            <button type="submit" class="btn btn-primary">
               pay and conform
            </button>
         </div>
      </div>
</div>
</div>
-->



<script >
	function daychange(obj){
		var passl = document.getElementById("amount"); 
		passl.innerHTML=parseInt(obj)*200;
		
	}
	
	
</script>

</body>

</html>