---
layout: home
title: Media Unmasked - Free Video Tutorials, Reviews, and More!
description: Learn web design, motion graphics, video/photo editing, app development; Media Unmasked teaches it all!
priority: 1.0
---
<style>
	.featured-home {
		background: #000 url(http://i.imgur.com/FF3RTJL.jpg) no-repeat -150px 30px;
		height: 350px; width: 100%;
	}
	button.home-cta {
		width: 200px;
		height: 80px;
		position: relative;
		top: 190px;
		left: 65%;
		background: #FF5722;
		margin-left: -100px;
		border: none;
		border-radius: 2px;
		color: white;
		font-size: 2em;
		outline: none;
	}
	button.home-cta:active {
		margin-top: 3px;
	}
	.featured-home-text {
		position: absolute;
		top: 120px;
		left: 50%;
		font-size: 3em;
		color: white;
		font-family: 'Roboto';
		font-weight: 300;
		-webkit-text-stroke-width: 1px;
		-webkit-text-stroke-color: black;
	}
</style>

<div class="featured-home"><span class="featured-home-text">Stay Up To Date</span><a href="{{ site.baseurl }}/follow"><button class="home-cta">Follow Me</button></a></div>

<article class="container-home">

<h2><a href="{{ site.baseurl }}/tutorials">Recent Tutorials</a></h2>
<ul class="postlist">
	{% for post in site.categories.tutorials limit:3 %}
		<li class="col-sm-4">
			<div class="pull-left overlayimg" style="background: url({{ post.thumb }}) center center; background-size: cover;">
				<div class="overlaycontainer"><span class="overlaytxt"><a href="{{ site.baseurl }}{{ post.url }}">{{ post.headline }}</a></span></div>
			</div>
		</li>
	{% endfor %}
</ul>
<div class="clearfix"></div>

<h2><a href="{{ site.baseurl }}/reviews">Recent Reviews</a></h2>
<ul class="postlist">
	{% for post in site.categories.reviews limit:3 %}
		<li class="col-sm-4">
			<div class="pull-left overlayimg" style="background: url({{ post.thumb }}) center center; background-size: cover;">
				<div class="overlaycontainer"><span class="overlaytxt"><a href="{{ site.baseurl }}{{ post.url }}">{{ post.headline }}</a></span></div>
			</div>
		</li>
	{% endfor %}
</ul>
<div class="clearfix"></div>