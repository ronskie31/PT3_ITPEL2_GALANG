<?php 
    require_once('connect.php');

    $input = file_get_contents('php://input');
    $id = $_GET['id'];
    $message = array();

    $query = "Delete from students_tbl where id = '$id' limit 1";

    $result = mysqli_query($con,$query);

    if($query){
        http_response_code(201);
        $message['status'] = 'Success....';
    }else{
        http_response_code(422);
        $message['status'] = 'Error....';
    }

    echo json_encode($message);
    echo mysqli_error($con);
?>