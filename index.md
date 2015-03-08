---
layout: home
title: Media Unmasked - Free Video Tutorials, Reviews, and More!
description: Learn web design, motion graphics, video/photo editing, app development; Media Unmasked teaches it all!
priority: 1.0
---

<section class="container-home">

<h2><a href="{{ site.baseurl }}/tutorials">Recent Tutorials</a></h2>
<ul class="postlist">
	{% for post in site.categories.tutorials limit:3 %}
		<li class="col-sm-4">
			<div class="pull-left overlayimg" style="background: url({{ post.thumb }}) center center; background-size: cover;">
				<div class="overlaycontainer"><h3 class="overlaytxt"><a href="{{ site.baseurl }}{{ post.url }}">{{ post.headline }}</a></h3></div>
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
				<div class="overlaycontainer"><h3 class="overlaytxt"><a href="{{ site.baseurl }}{{ post.url }}">{{ post.headline }}</a></h3></div>
			</div>
		</li>
	{% endfor %}
</ul>
<div class="clearfix"></div>