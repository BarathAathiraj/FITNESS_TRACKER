<?php
// Database configuration
$servername = "localhost";
$username = "root";
$password = "password";
$dbname = "activity_log";

// Create connection
$conn = new mysqli($localhost, $root, $password, $activity_log);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


