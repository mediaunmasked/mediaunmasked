---
layout: post
title: Contact Media Unmasked
permalink: /contact/success/

headline: Message Sent
featuredimage: http://i2.wp.com/mediaunmasked.com/wp-content/uploads/2013/09/Phantom-Final-Smalelr.jpg
bgsize: 30%
thumb: http://i2.wp.com/mediaunmasked.com/wp-content/uploads/2013/09/Phantom-Final-Smalelr.jpg?zoom=1.5&resize=900%2C691

date: 2014-06-29 21:07:51
activenav: contact
categories: ['contact']
---
<div class="bg-success text-center">
	<h2>Your message has been sent.</h2>
</div>

<form style="margin: 0 auto; max-width: 800px;" action="http://getsimpleform.com/messages?form_api_token=f62694a077723efa7c7bf7421e0482aa" method="post">
	<!-- the redirect_to is optional, the form will redirect to the referrer on submission -->
	<input type='hidden' name='redirect_to' value='{{ site.url }}/contact/success' />
	<!-- all your input fields here.... -->
	<div class="form-group"><input class="form-control" type="name" placeholder="Name" name="name"></div>
	<div class="form-group"><input class="form-control" type="email" placeholder="Email" name="email"></div>
	<div class="form-group"><textarea class="form-control" name="message" id="" cols="30" rows="10" placeholder="Message"></textarea></div>
	<div class="form-group" style="max-width: 60px;"><input class="form-control" type="submit" value="Send"></div>
</form>