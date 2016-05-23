<!DOCTYPE html>
<html>
<head>
   <title>Wards bed arrangement system</title>
<!--
   <link href="http://libs.baidu.com/bootstrap/3.0.3/css/bootstrap.min.css" rel="stylesheet">
   <script src="http://libs.baidu.com/jquery/2.0.0/jquery.min.js"></script>
   <script src="http://libs.baidu.com/bootstrap/3.0.3/js/bootstrap.min.js"></script>
-->
 <script src="http://libs.baidu.com/jquery/2.0.0/jquery.min.js"></script>
<link href="bootstrap.min.css" rel="stylesheet" type="text/css"/>
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
               <select class="form-control" name="identity" id="identity">
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
            <input type="text" class="form-control" name="username" required
               placeholder="please input your username">
         </div>
      </div>
      <div class="form-group">
         <label for="pwd1" class="col-sm-2 control-label">password</label>
         <div class="col-sm-10">
            <input type="password" class="form-control inputtxt" id="pwd1" name="pwd"
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
            <input type="text" class="form-control" name="symptone" id="symptone"
               placeholder="please input your symptone">
         </div>
      </div>
      <div class="form-group">
         <label for="age" class="col-sm-2 control-label">Age</label>
         <div class="col-sm-10">
            <input type="text" name="age" class="input-xlarge" pattern="^[0-9]*" 
            placeholder="please input your age(int)">
         </div>
      </div>
      <div class="form-group">
         <label for="Intro" class="col-sm-2 control-label">Introduction</label>
         <div class="col-sm-10">
            <input type="text" class="form-control" name="intro" id="introduction" 
               placeholder="please input your Introductions">
         </div>
      </div>
         <div class="form-group">
         <label for="symptone" class="col-sm-2 control-label">Phone</label>
         <div class="col-sm-10">
            <input type="text" class="form-control" name="phone" id="phone"
               placeholder="please input your phone number">
         </div>
      </div>
         <div class="form-group">
         <label for="symptone" class="col-sm-2 control-label">Email</label>
         <div class="col-sm-10">
            <input type="text" class="form-control" name="email" id="email"
               placeholder="please input your email address">
         </div>
      </div>
      <div class="form-group">
               <label for="age" class="col-sm-2 control-label">Department_id</label>
         <div class="col-sm-10">
            <input type="text" name="depid" id="depid" class="form-control" pattern="^[0-9]*" 
            placeholder="please input the department id(int)">
         </div>
         
      </div>

      <div class="form-group">
               <label for="age" class="col-sm-2 control-label">Doctor_id</label>
         <div class="col-sm-10">
            <input type="text" name="docid" id="docid" class="form-control" pattern="^[0-9]*" 
            placeholder="please input the doctor id(int)">
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
               <button type="submit" id="btn" class="btn btn-default">submit</button>
            </div>
      </div>

   </form>
   </div>
</div>

<div id="erro"></div>
</div>

<?php 
if(isset($_FILES['file']["filename"])){
	
	if ((($_FILES["file"]["type"] == "image/gif") 
	|| ($_FILES["file"]["type"] == "image/jpeg") 
	|| ($_FILES["file"]["type"] == "image/jpg")
	|| ($_FILES["file"]["type"] == "image/png")) 
	&& ($_FILES["file"]["size"] < 100000)) 
	{ 
		if ($_FILES["file"]["error"] > 0) 
			{ 
				echo "Error: " . $_FILES["file"]["error"] . "<br />"; 
			} 
			else 
			{ 
/*
				echo "Upload: " . $_FILES["file"]["name"] . "<br />"; 
				echo "Type: " . $_FILES["file"]["type"] . "<br />"; 
				echo "Size: " . ($_FILES["file"]["size"] / 1024) . " Kb<br />"; 
*/
				move_uploaded_file($_FILES["file"]["tmp_name"], 
				"upload/" .$_POST['identity']."/". $_POST['username']); 
			} 
	} 
	else 
	{ 
// 		echo "<script>alert('Invalid file')</script>"; 
			echo "the file is too big or is not gif/jpeg/jpg/png format";	
	} 
}
if ($_POST["identity"]=="Patient"){
	require_once("database_connect.php");
	$sqlstr="select max(id) from Patient;";
	$result =$mysqli->query($sqlstr);
	$id=(int)($result->field_count)+1;
	$sqlstr='insert into Patient values('.$id.',"'.$_POST['username'].'",'.$_POST['pwd'].','.$_POST['age'].',"'.$_POST['symptone'].'",'.$_POST['docid'].',null,null);';
// 	echo $sqlstr;	
	$result =$mysqli->query($sqlstr);
	if ($result){
	         echo "success!";
	}else {
	         echo "Failed";
	}

}elseif($_POST["identity"]=="Doctor"){
	require_once("database_connect.php");
	$sqlstr="select max(id) from Doctor;";
	$result =$mysqli->query($sqlstr);
	$id=(int)($result->field_count)+1;
// 	echo"id=".$id;
	$sqlstr="insert into Doctor values(".$id.',"'.$_POST['username'].'",'.$_POST['pwd'].','.$_POST['age'].',"'.$_POST['depid'].'",'.$_POST['phone'].',"'.$_POST['email'].'","'.$_POST['intro'].'");';
// 	echo $sqlstr;	
	$result =$mysqli->query($sqlstr);
	if ($result){
	         echo "success!";
	}else {
	         echo "Failed";
	}
}elseif($_POST["identity"]=="Nurse"){
	require_once("database_connect.php");
	$sqlstr="select max(id) from Nurse;";
	$result =$mysqli->query($strsql);
	$id=(int)($result->field_count)+1;
	$sqlstr="insert into Nurse values(".$id.',"'.$_POST['username'].'",'.$_POST['pwd'].',"'.$_POST['depid'].'",'.$_POST['age'].',"'.$_POST['intro'].'");';
	echo $sqlstr;
	$result =$mysqli->query($sqlstr);
	if ($result){
	         echo "success!";
	         
	}else {
	         echo "Failed";
	}
	
}elseif($_POST["identity"]=="Manager"){
	require_once("database_connect.php");
	$sqlstr="select max(id) from Manager";
	$result =$mysqli->query($sqlstr);
	$id=(int)($result->field_count)+1;
	$sqlstr="insert into Manager values(".$id.',"'.$_POST['username'].'",'.$_POST['pwd'].','.$_POST['age'].',"'.$_POST['intro'].'");';
// 	echo $sqlstr;	
	$result =$mysqli->query($sqlstr);
	if ($result){
	         echo "success!";
	}else {
	         echo "Failed";
	}

}
// header("Location:index.php");
?> 
<script>  
/*
	function identity(){ 
            var passl = document.getElementById("identity");  
            alert(passl.value);
            if(passl.value!='Patient')
               $('#symptone').prop('disabled', true);
                $('#doctor').prop('disabled', true);
            else
               $('#symptone').prop('disabled', false);
               $('#doctor').prop('disabled', false);
        }
*/
      $(document).ready(function(){ 
        $('#identity').change(function(){ 
            var passl = document.getElementById("identity");  
            if(passl.value=='Patient'){
               $('#symptone').prop('disabled', false);
               $('#docid').prop('disabled', false);
                $('#introduction').prop('disabled', true);
                $('#phone').prop('disabled', true);
                $('#email').prop('disabled', true);
                $('#depid').prop('disabled', true);
                }
            else if(passl.value=='Doctor'){
	           $('#symptone').prop('disabled', true);
               $('#docid').prop('disabled', true);
                $('#introduction').prop('disabled', false);
                $('#phone').prop('disabled', false);
                $('#email').prop('disabled', false);
                $('#depid').prop('disabled', false);               }
            else if(passl.value=='Nurse'){
	             $('#symptone').prop('disabled', true);
               $('#docid').prop('disabled', true);
                $('#introduction').prop('disabled', false);
                $('#phone').prop('disabled', true);
                $('#email').prop('disabled', true);
                $('#depid').prop('disabled', false);       
	            
            }
            else{
	            $('#symptone').prop('disabled', true);
               $('#docid').prop('disabled', true);
                $('#introduction').prop('disabled', false);
                $('#phone').prop('disabled', true);
                $('#email').prop('disabled', true);
                $('#depid').prop('disabled', true); 
	            
            }
        })
     })
        function checkPasswords() {  
            var passl = document.getElementById("pwd1");  
            var pass2 = document.getElementById("pwd2");  
            var e = document.getElementById("erro");
            var btn = document.getElementById("btn");
            if (passl.value != pass2.value) {
//                 passl.setCustomValidity("the two password must much!"); 
				 e.innerHTML="the two password must much!";
				 btn.disabled="disabled";
				 }
            else  {
//                 passl.setCustomValidity('');  
                e.innerHTML="";
                btn.disabled="";
				}
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