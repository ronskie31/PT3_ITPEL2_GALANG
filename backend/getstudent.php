<?php 

    require_once('connect.php');

    $data = array();
    $id = $_GET['id'];

    $query = mysqli_query($con, "Select * from students_tbl where id = '$id' Limit 1");

    while($row = mysqli_fetch_object($query)){
        $data[]=$row;
    }

    echo json_encode($data);
    echo mysqli_error($con);
?>