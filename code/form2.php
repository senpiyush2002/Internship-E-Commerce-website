<?php
    
$t1 = intval($_POST['t1']);
$t2 = intval($_POST['t2']);
$t3 = intval($_POST['t3']);
$t4 = intval($_POST['t4']);
$t5 = intval($_POST['t5']);
$t6 = intval($_POST['t6']);
$t7 = intval($_POST['t7']);
$t8 = intval($_POST['t8']);
$t9 = intval($_POST['t9']);
$t10 = intval($_POST['t10']);
$t11 = intval($_POST['t11']);
$t12 = intval($_POST['t12']);
$t13 = intval($_POST['t13']);
$t14 = intval($_POST['t14']);
$t15 = intval($_POST['t15']);
$t16 = intval($_POST['t16']);
$t17 = intval($_POST['t17']);
$t18 = intval($_POST['t18']);



    // database details
    $host = "localhost";
    $username = "root";
    $password = "";
    $dbname = "piyushshop";

    // creating a con
    $con = mysqli_connect($host, $username, $password, $dbname);

    // to ensure that the con is made
    if (!$con)
    {
        die("Connection failed!" . mysqli_connect_error());
    }

    // Retrieve the last row from the database
$query = "SELECT * FROM inventory ORDER BY id DESC LIMIT 1";
$result = mysqli_query($con, $query);

if ($result && mysqli_num_rows($result) > 0) {
    $lastRow = mysqli_fetch_assoc($result);

    // Get the values from the last row
    $p1 = intval($lastRow['p1']);
    $p2 = intval($lastRow['p2']);
    $p3 = intval($lastRow['p3']);
    $p4 = intval($lastRow['p4']);
    $p5 = intval($lastRow['p5']);
    $p6 = intval($lastRow['p6']);
    $p7 = intval($lastRow['p7']);
    $p8 = intval($lastRow['p8']);
    $p9 = intval($lastRow['p9']);
    $p10 = intval($lastRow['p10']);
    $p11 = intval($lastRow['p11']);
    $p12 = intval($lastRow['p12']);
    $p13 = intval($lastRow['p13']);
    $p14 = intval($lastRow['p14']);
    $p15 = intval($lastRow['p15']);
    $p16 = intval($lastRow['p16']);
    $p17 = intval($lastRow['p17']);
    $p18 = intval($lastRow['p18']);

    // Calculate the differences
    $diff1 = $p1 - $t1;
    $diff2 = $p2 - $t2;
    $diff3 = $p3 - $t3;
    $diff4 = $p4 - $t4;
    $diff5 = $p5 - $t5;
    $diff6 = $p6 - $t6;
    $diff7 = $p7 - $t7;
    $diff8 = $p8 - $t8;
    $diff9 = $p9 - $t9;
    $diff10 = $p10 - $t10;
    $diff11 = $p11 - $t11;
    $diff12 = $p12 - $t12;
    $diff13 = $p13 - $t13;
    $diff14 = $p14 - $t14;
    $diff15 = $p15 - $t15;
    $diff16 = $p16 - $t16;
    $diff17 = $p17 - $t17;
    $diff18 = $p18 - $t18;

    // Insert the differences as the next row in the database
    $insertQuery = "INSERT INTO inventory (p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18) VALUES ('$diff1', '$diff2', '$diff3', '$diff4', '$diff5', '$diff6', '$diff7', '$diff8', '$diff9', '$diff10', '$diff11', '$diff12', '$diff13', '$diff14', '$diff15', '$diff16', '$diff17', '$diff18')";
    $insertResult = mysqli_query($con, $insertQuery);

    if ($insertResult) {
        mysqli_close($con);
        header("Location: payment-successful.html");
        exit;
    } else {
        echo "Error inserting row: " . mysqli_error($con);
    }
} else {
    echo "Error retrieving last row: " . mysqli_error($con);
}

// Close the database con
mysqli_close($con);
?>