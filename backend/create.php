<?php 

    require_once('connect.php');
    session_start();

    $input = file_get_contents('php://input');
    $data = json_decode($input,true);
    $message = array();

    $student_no = $data ['student_no'];
    $student_name = $data['student_name'];
    $course = $data['course'];
    $year = $data['year'];
    $email = $data['email'];
    $contact_no = $data['contact_no'];
    $address = $data['address'];

    //create the sql query

    $query = mysqli_query($con, "insert into students_tbl1(student_no,student_name, course, year ,email,contact_no,address,reg_date) values('$student_no','$student_name','$email','$course','$year','$contact_no','$address',NOW())");
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