---
layout: post
title: Media Unmasked - Free Video Tutorials, Reviews, and More!

headline: Media Unmasked
featuredimage: http://i.imgur.com/mFNtdCr.jpg
thumb: http://i.imgur.com/mFNtdCr.jpg

date: 2014-06-29 21:07:51
categories: 
---
#Welcome!
Media Unmasked is designed for educating you in the wonderful world of media. There's never been a better time to learn! This site includes video editing tutorials, Photoshop, Premiere, web design and development and the list goes on. I hope you find what you need to create what you set out to and I hope that when you leave my site, you leave knowing something you didn't know before coming here. I will use this site as a way for me to share my experience and tips and tricks I learn along the way. If you want to stay up to date, follow me on social media or subscribe with your email to get updates.

<div class="col-sm-12 col-md-4">
	<h2>Follow Me On Twitter</h2>
	<a href="http://twitter.com/mediaunmasked"><img src="http://i.imgur.com/eoT6wlQ.png" alt=""></a>
</div>

<div class="col-sm-12 col-md-4">
	<h2>Get Updates Directly To Your Inbox!</h2>
	{% include mail.html %}
	<ul>
		<li>Webmastery</li>
		<li>Videography</li>
		<li>Photography</li>
		<li>No spam, just awesomeness</li>
		<li>FREE</li>
	</ul>
</div>

<div class="col-sm-12 col-md-4">
	<h2>Follow Me On G+</h2>
	<a href="http://google.com/+mediaunmasked"><img src="http://i.imgur.com/cGwRE4z.png" alt=""></a>
</div>

<div class="clearfix"></div>

##Recent Tutorials
<ul class="postlist">
	{% for post in site.categories.tutorials limit:3 %}
		<li class="col-sm-4">
			<div class="pull-left overlayimg" style="background: url({{ post.thumb }}) center center; background-size: cover;">
				<div class="overlaycontainer"><span class="overlaytxt"><a href="{{ site.url }}{{ post.url }}">{{ post.headline }}</a></span></div>
			</div>
		</li>
	{% endfor %}
</ul>
<div class="clearfix"></div>

##Recent Reviews
<ul class="postlist">
	{% for post in site.categories.reviews limit:3 %}
		<li class="col-sm-4">
			<div class="pull-left overlayimg" style="background: url({{ post.thumb }}) center center; background-size: cover;">
				<div class="overlaycontainer"><span class="overlaytxt"><a href="{{ site.url }}{{ post.url }}">{{ post.headline }}</a></span></div>
			</div>
		</li>
	{% endfor %}
</ul>
<div class="clearfix"></div>