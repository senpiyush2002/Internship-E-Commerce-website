<?php
    
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$email = $_POST['email'];
$phno = $_POST['phno'];
$msg = $_POST['msg'];


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
    $sql = "INSERT INTO contactus (fname, lname, email, phno, msg) VALUES ('$fname', '$lname', '$email', '$phno', '$msg')";
  
    // send query to the database to add values and confirm if successful
    $rs = mysqli_query($con, $sql);
    if($rs)
    {
        // close connection
        mysqli_close($con);
        header("Location: contact-submission.html");
        exit;
    }
  
    

?>