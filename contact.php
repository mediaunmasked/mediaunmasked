<?php

if(isset($_POST['submit'])) {

	$to ='5.codysaylor@gmail.com';
	$subject = "Media Unmasked Contact Form";
	$initial_message = $_POST["message"];
	$name = $_POST["name"];
	$email = $_POST["email"];
	$message = "
	From: $name ($email)\n\n
	$initial_message\n
	";
	$header = "From: mediaunmasked.com";
	$send = mail($to,$subject,$message,$header);

	$send;

	if($send){
	echo "Your message has been sent.";
	}
	else {
	echo "Oops, something went wrong. Try sending me a tweet.";
	}

}

?>