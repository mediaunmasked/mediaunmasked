---
layout: post
title: Free Photoshop Tutorials, Assets, Scripts, & More!
permalink: /freebies/

headline: Free Digital Stuff!
featuredimage: http://i.imgur.com/YkJ01Cv.jpg
thumb: http://i.imgur.com/YkJ01Cv.jpg

activenav: freebies
categories: ['freebies']
---

<ul class="postlist">
	{% for post in site.categories.freebies %}
		<li class="col-sm-4">
			<div class="pull-left overlayimg" style="background: url({{ post.thumb }}) center center; background-size: cover;">
				<div class="overlaycontainer"><span class="overlaytxt"><a href="{{ post.url }}">{{ post.headline }}</a></span></div>
			</div>
		</li>
	{% endfor %}
</ul>