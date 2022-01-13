<?php
$u_id = $_POST['u_id'];
require_once "mysqlConn.php";
$sql = "SELECT * FROM post INNER JOIN user ON user.u_id = post.u_id ORDER BY p_datetime DESC";
$result=$conn->query($sql);
$data = array();
if($result->num_rows > 0){
    while($row = $result->fetch_assoc()){
        //return as json
        $data[] = $row;
    }
}
echo json_encode($data);
?>
