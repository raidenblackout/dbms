<?php
require_once "mysqlConn.php";
$p_id = $_POST['p_id'];
$sql = "SELECT * FROM post_image WHERE post_id = " . $p_id;
$result = $conn->query($sql);
$data = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        //return as json
        $data[] = $row;
    }
}
echo json_encode($data);
?>