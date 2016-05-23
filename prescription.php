<?php
	include("all_template.html");
?>
<h2>Prescription</h2>
<form action="prescription.php" method="post">
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
                  <option value="1" >a</option>
                  <option value="2">B</option>
                  <option value="3">C</option>
                  <option value="4">D</option>
               </select>
        </td>
        <td>
	    	<input type="text" name="mnum0" class="input-xlarge" pattern="^[0-9]*" 
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
		<td><select class="form-control" name="time0" id="time0">
                  <option value="null" selected="selected">choose date</option>
                  <option value="1" >a</option>
                  <option value="2">B</option>
                  <option value="3">C</option>
                  <option value="4">D</option>
               </select>
        </td>
        <td>
	    	<input type="text" name="tnum0" class="input-xlarge" pattern="^[0-9]*" 
            placeholder="number">
	    </td>
	    <td>
		    <button type="button" class="btn btn-primary" onclick="deletes(2)">delete</button>
		</td>

	</tr>		     
</tbody>
</table>
<label class="col-md-2">Description</label>
<input type="text" class="col-md-8" name="description"/>
<div class="col-md-2"></div>
<input type="submit" value="Submit" />
<!-- <button class="col-sm-offset-5 btn btn-primary btn-lg" >Done!!!</button> -->
</form>
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