<?php

	include("all_template.php");
?>

<div class="container">
	<img src="images/WBAS.png" class="img-rounded"></img>
<h2 align = "center">Prescription</h2>

<div class = "row">
<form action="prescription.php?uid=<?php echo $_GET['uid']; ?>" method="post">

<table class="table table-striped" style="text-align: center">
<tbody id="medicine">
	<tr>
		<td>Medicine</td>
		<td>Numbers</td>
		<td>
			<button type="button" class="btn btn-primary" onclick="adds(1)">add</button>
		</td>
	</tr>	
	<tr>
		<td><select class="form-control" name="med0" id="med0">

				
                  <option value="null" selected="selected">choose medicine</option>
				  <?php 
					session_start();
					require_once("database_connect.php");
					$strsql="SELECT * FROM Medicine";
					if ($result =$mysqli->query($strsql)) {
						while($obj = $result->fetch_object()){
							echo "<option value='".$obj->ID."'>".$obj->MName."</option>";
						} 
						$result->close(); 
						unset($obj);  
					}

// 					$mysqli->close();
				  ?>
               </select>	
        </td>
        <td>
	    	<input type="text" name="mnum0" class="form-control" pattern="^[0-9]*" 

            placeholder="number">
	    </td>
	    <td>
		    <button type="button" class="btn btn-primary" onclick="deletes(1)">delete</button>
		</td>

	</tr>		     
</tbody>
</table>

<table class="table table-striped" style="text-align: center">
<tbody id="times">
	<tr>
		<td>Day</td>
		<td>Time</td>
		<td>
			<button type="button" class="btn btn-primary" onclick="adds(2)">add</button>
		</td>
	</tr>	
	<tr>

		<td>
			   <input type="text" class="form-control" name="time0" id="time0" required
					   placeholder="Input like 2016-05-05">
        </td>
        <td>
	    	<input type="text" class="form-control" name="tnum0" id="tnum0" required
					   placeholder="Input like 13:00:01">

	    </td>
	    <td>
		    <button type="button" class="btn btn-primary" onclick="deletes(2)">delete</button>
		</td>

	</tr>		     
</tbody>
</table>
<label class="col-md-1 control-label" >Description</label>
<div class="col-md-11"><input type="text" class="col-md-8 form-control" name="description"/>
</div>
<br/><br/>
<div class="form-group">
				<div class="col-sm-offset-5 col-sm-5">
				   <button type="submit" id="btn" class="btn btn-default">submit</button>
				</div>
			</div>
<!-- <button class="col-sm-offset-5 btn btn-primary btn-lg" >Done!!!</button> -->
</form>
</div>
<br/><br/><br/><br/>
</div>

<?php 
	$flag=1;
	if(isset($_POST['description'])){
// 		require_once("database_connect.php");
		$sqlstr="select max(id)as maxx from Prescription;";
// 		echo $sqlstr;
		$result =$mysqli->query($sqlstr);
		$obj = $result->fetch_object();
		
		$id=intval($obj->maxx) +1;
// 		$id=intval("00011");
// 		echo "id is ".$id;
		$sqlstr='insert into Prescription values("'.$id.'","'.$_POST['description'].'","'.$_SESSION['id'].'","'.$_GET['uid'].'");';
		//echo $sqlstr;
		$result =$mysqli->query($sqlstr);
// 		var_dump($result);
		if ($result){
			//echo "success!";
		}else {
			//echo "Failed";
			$flag=0;
		}
// 		$result->close(); 
	}
	
	$x = 0;
	$root="med";
	$tmp=$root.$x;
	while(isset($_POST[$tmp])){
		$x++;
		$sqlstr = "insert into prsct_medi values('".$id."','".$_POST[$tmp]."');";
		$result = $mysqli->query($sqlstr);
		if ($result){
	        //echo "success1!";
		}else {
			//echo "Failed1";
			$flag=0;
		}
// 		$result->close(); 
		$tmp=$root.$x;
	}
	
	$x = 0;
	$root="time";
	$root1="tnum";
	$tmp=$root.$x;
	$tmp1=$root1.$x;
	while(isset($_POST[$tmp]) && isset($_POST[$tmp1])){
		$x++;
		$sqlstr2 = "select ID from wardsbed where patient_id='".$_GET['uid']."' limit 1;";
		$result2 = $mysqli->query($sqlstr2);
		$obj2 = $result2->fetch_object();
		//$sqlstr1 = "insert into treatment values('".$obj2->ID."',,'".$_POST[$tmp]." ".$_POST[$tmp1]."');";
		
		//$mysqli->query($sqlstr1);
		$sqlstr1 = "insert into treatment values('".$obj2->ID."','".$id."','".$_POST[$tmp]." ".$_POST[$tmp1]."');";
		//echo $sqlstr1;
		$result = $mysqli->query($sqlstr1);
		$tmp=$root.$x;
		$tmp1=$root1.$x;
		if ($result){
	        //echo "success2!";
		}else {
			//echo "Failed2";
			$flag=0;
		}
// 		$result->close(); 
	}
	
	
	if(isset($_POST['description'])){
		$mysqli->close();
		if($flag!=0)
			echo "<script>alert('success')</script>";
		else
			echo "<script>alert('failed')</script>";
	}
?>

<script>
var count=0;
var countt=0;
function adds(var1){
	if (var1==1){
		count++;
		var p=document.getElementById("medicine");
		var newnode=p.firstElementChild.nextElementSibling.cloneNode(true);
		newnode.firstElementChild.firstElementChild.setAttribute("name", "med"+count.toString());
		newnode.firstElementChild.nextElementSibling.firstElementChild.setAttribute("name", "mnum"+count.toString());
		p.appendChild(newnode);
	}else{
		countt++;
		var p=document.getElementById("times");
		var newnode=p.firstElementChild.nextElementSibling.cloneNode(true);
		newnode.firstElementChild.firstElementChild.setAttribute("name", "time"+countt.toString());
		newnode.firstElementChild.nextElementSibling.firstElementChild.setAttribute("name", "tnum"+count.toString());
		p.appendChild(newnode);
	}
	
}
function deletes(var1){
	if (var1==1){
		count--;
		var p=document.getElementById("medicine");
		p.removeChild(p.lastElementChild);
	}else{
		countt--;
		var p=document.getElementById("times")
		p.removeChild(p.lastElementChild);
	}
	
}
</script>




<?php	
	include("footer.html");	
	
?>