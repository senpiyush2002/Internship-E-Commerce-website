<?php
    
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$phno = $_POST['phno'];
$city = $_POST['city'];
$landmark = $_POST['landmark'];
$pin = $_POST['pin'];
$adrs = $_POST['adrs'];
$items = $_POST['items'];


    // database details
    $host = "localhost";
    $username = "root";
    $password = "";
    $dbname = "piyushshop";

    // creating a connection
    $con = mysqli_connect($host, $username, $password, $dbname);

    // to ensure that the connection is made
    if (!$con)
    {
        die("Connection failed!" . mysqli_connect_error());
    }

    // using sql to create a data entry query
    $sql = "INSERT INTO orders (fname, lname, phno, city, landmark, pin, adrs, items) VALUES ('$fname', '$lname', '$phno', '$city', '$landmark', '$pin', '$adrs', '$items')";
  
    // send query to the database to add values and confirm if successful
    $rs = mysqli_query($con, $sql);
    if($rs)
    {
        mysqli_close($con);
        header("Location: payment.html");
        exit;

    }
  
    

?>