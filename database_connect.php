<?php
    $mysql_server_name="127.0.0.1"; //数据库服务器名称
    $mysql_username="root"; // 连接数据库用户名
    $mysql_password="mysql"; // 连接数据库密码
    $mysql_database="WardsBedSystem"; // 数据库的名字
    
    // 连接到数据库
/*
    $conn=mysqli_connect($mysql_server_name, $mysql_username,
                        $mysql_password);
                mysql_select_db($mysql_database, $conn);
    if (!$conn) {
    echo "Error: Unable to connect to MySQL." . PHP_EOL;
    echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
    echo "Debugging error: " . mysqli_connect_error() . PHP_EOL;
    exit;
}
*/
	$mysqli = new mysqli($mysql_server_name, $mysql_username,
                        $mysql_password, $mysql_database);

/* check connection */
if ($mysqli->connect_errno) {
    printf("Connect failed: %s\n", $mysqli->connect_error);
    exit();
}

// echo "Success: A proper connection to MySQL was made! The my_db database is great." . PHP_EOL;
?>