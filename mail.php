<?php
require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);
try {
    $mail->isSMTP();
	$mail->SMTPDebug  = 0;
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'adrian.arjoca18@gmail.com'; // email
    $mail->Password   = 'np11hl42&*00'; //  password
    $mail->SMTPSecure = 'tls';
    $mail->Port       = 587; // TCP port

    $mail->setFrom($_POST["email"], $_POST["name"]);
    $mail->addAddress('adrian.arjoca18@gmail.com', 'Ardox'); // Add a recipient

    $mail->isHTML(false);
    $mail->Subject = $_POST["subject"];
    $mail->Body    = $_POST["message"];

    $mail->send();

    echo '<script type="text/javascript">
            alert("Email sent successfully");
            console.log("Message sent!");
          </script>';
} 
catch (Exception $e) {
    echo '<script type="text/javascript">
            alert("Failed sending message");
            console.log("failed sending message")
          </script>';
}
?>
