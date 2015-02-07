---
layout: post
title: Thank You For Your Donation To Media Unmasked
permalink: /thanks/

headline: Thank You
featuredimage: http://i.imgur.com/1O8GiUy.jpg
bgsize: 30%
thumb: http://i.imgur.com/1O8GiUy.jpg

activenav: thanks
categories: ['thanks']
---
<div class="bg-success text-center">
	<h2>Thank You For Your Donation</h2>
	<h3>Send me a message so I can thank you personally!</h3>
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