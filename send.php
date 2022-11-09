<?php
$servername = "localhost";
$username = "username";
$password = "password";

// Create connection
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$conn = new mysqli($servername, $username, $password);

// Create database
$sql = "CREATE DATABASE myDB";
$conn->query($sql);