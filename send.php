<?php

$first = "First Name: " . $_POST["first_name"] . "\r\n";
$last = "Last Name: " . $_POST["last_name"] . "\r\n";
$email = "Email: " . $_POST["email"] . "\r\n";
$company = "Company: " . $_POST["company"];
$message = $first . $last . $email . $company;

$to = "shobhit@highstartgroup.com";
$from = "no-reply@wevo.highstartgroup.com";
$subject = "New Wevo Early Access Request";

mail( $to, $subject, $message, "From: $from\n");

setcookie( "earlyAccess", "true", time()+7776000, "/");

header( "Location: http://wevo.highstartgroup.com/" );

?>