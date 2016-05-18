<!DOCTYPE html>
<html>
<head>
   <title>Wards bed arrangement system</title>
<!--
   <link href="http://libs.baidu.com/bootstrap/3.0.3/css/bootstrap.min.css" rel="stylesheet">
   <script src="http://libs.baidu.com/jquery/2.0.0/jquery.min.js"></script>
   <script src="http://libs.baidu.com/bootstrap/3.0.3/js/bootstrap.min.js"></script>
-->
<link href="bootstrap.min.css" rel="stylesheet" type="text/css"/>
<script src="jquery2.js"></script>
<script src="bootstrap/js/bootstrap.min.js"></script>

</head>
<body>

<nav class="navbar navbar-inverse" role="navigation">
   <div class="navbar-header">
      <a class="navbar-brand" href="index.php">WBAS</a>
   </div>
   <div>
      <ul class="nav navbar-nav">
         <li ><a href="index.php">Login</a></li>
         <li class="active"><a href="reg.php">Registration</a></li>
         
      </ul>
   </div>
</nav>
<div class="container">
   <img src="images/WBAS.png" class="img-rounded"></img>
   <div class="row">
      <form class="form-horizontal" role="form" action="reg.php" method="post" 
enctype="multipart/form-data">
      <div class="form-group">
            <label for="identity" class="col-sm-2 control-label">Identity</label>
            <div class="col-sm-10">
               <select class="form-control" id="identity" onchange="javascript:identity()">
                  <option value="null" selected="selected">choose your identity</option>
                  <option value="Patient" >Patient</option>
                  <option value="Doctor">Doctor</option>
                  <option value="Nurse">Nurse</option>
                  <option value="Manager">Manager</option>
               </select>
            </div>
      </div>
      <div class="form-group">
         <label for="firstname" class="col-sm-2 control-label">name</label>
         <div class="col-sm-10">
            <input type="text" class="form-control" id="username" required
               placeholder="please input your username">
         </div>
      </div>
      <div class="form-group">
         <label for="pwd1" class="col-sm-2 control-label">password</label>
         <div class="col-sm-10">
            <input type="password" class="form-control" id="pwd1" 
               placeholder="please input your password " required onchange="checkPasswords()">
         </div>
      </div>
      <div class="form-group">
         <label for="pwd2" class="col-sm-2 control-label">Verify password</label>
         <div class="col-sm-10">
            <input type="password" class="form-control" id="pwd2" 
               placeholder="please input your password " required onchange="checkPasswords()">
         </div>
      </div>
      <div class="form-group">
         <label for="symptone" class="col-sm-2 control-label">Symptom</label>
         <div class="col-sm-10">
            <input type="text" class="form-control" id="symptone" 
               placeholder="please input your symptone">
         </div>
      </div>
      <div class="form-group">
         <label for="age" class="col-sm-2 control-label">Age</label>
         <div class="col-sm-10">
            <input type="text" class="input-xlarge" pattern="^[0-9]*" 
            placeholder="please input your age(int)">
         </div>
      </div>
      <div class="form-group">
         <label for="Intro" class="col-sm-2 control-label">Introduction</label>
         <div class="col-sm-10">
            <input type="text" class="form-control" id="intro" 
               placeholder="please input your Introductions">
         </div>
      </div>
      
      <div class="form-group">
            <label for="depart" class="col-sm-2 control-label">Department</label>
            <div class="col-sm-10">
               <select class="form-control" id="depart" onchange="javascript:department()">
                  <option value="null" selected="selected">choose the department</option>
<!--
                  <option value="Patient" >Patient</option>
                  <option value="Doctor">Doctor</option>
                  <option value="Nurse">Nurse</option>
                  <option value="Manager">Manager</option>
-->					
				<?php
					
				?>
               </select>
            </div>
      </div>
	  <div class="form-group">
	  <label for="file" class="col-sm-2 col-md-2 control-label">Picture:</label> 
	  <div class='col-md-4'>
	  <input type="file" name="file" id="file" class="form-control"/> 
	  </div>
	  </div>
	  
      <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
               <button type="submit" class="btn btn-default">submit</button>
            </div>
      </div>

   </form>
   </div>
</div>


</div>

<?php 
if ((($_FILES["file"]["type"] == "image/gif") 
|| ($_FILES["file"]["type"] == "image/jpeg") 
|| ($_FILES["file"]["type"] == "image/pjpeg")) 
&& ($_FILES["file"]["size"] < 20000)) 
{ 
if ($_FILES["file"]["error"] > 0) 
{ 
echo "Error: " . $_FILES["file"]["error"] . "<br />"; 
} 
else 
{ 
echo "Upload: " . $_FILES["file"]["name"] . "<br />"; 
echo "Type: " . $_FILES["file"]["type"] . "<br />"; 
echo "Size: " . ($_FILES["file"]["size"] / 1024) . " Kb<br />"; 
echo "Stored in: " . $_FILES["file"]["tmp_name"]; 
move_uploaded_file($_FILES["file"]["tmp_name"], 
"upload/" . $_POST['username']); 
} 
} 
else 
{ 
echo "Invalid file"; 
} 
?> 
<script>  
      $(document).ready(function(){ 
        $('#identity').change(function(){ 
            var passl = document.getElementById("identity");  
            // alert(passl.value);
            if(passl.value!='Patient')
               $('#symptone').prop('disabled', true);
            else
               $('#symptone').prop('disabled', false);
        })
     })
        function checkPasswords() {  
            var passl = document.getElementById("pwd1");  
            var pass2 = document.getElementById("pwd2");  
            if (passl.value != pass2.value)  
                passl.setCustomValidity("the two password must much!");  
            else  
                passl.setCustomValidity('');  
        }  
  
        function check() {  
            document.getElementById('ok').disabled = 'disabled';  
        }  
</script> 





<footer class="footer navbar-fixed-bottom ">
	<hr>
    <div class="container">
	    &copy;Powered by doitlater team
    </div>
</footer>
 
</body>

</html>