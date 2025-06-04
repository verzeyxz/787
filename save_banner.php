<?php
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

if (isset($data['image']) && isset($data['link'])) {
    file_put_contents("banner.json", json_encode($data, JSON_PRETTY_PRINT));
    echo json_encode(["status" => "success"]);
} else {
    echo json_encode(["status" => "error", "message" => "Invalid data"]);
}
?>
