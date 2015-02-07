---
layout: post
title: Professional Camera Gear Reviews
permalink: /reviews/gear/

headline: Gear Reviews
featuredimage: http://i.imgur.com/QooCAvp.jpg
bgsize: 30%
thumb: http://i.imgur.com/QooCAvp.jpg

activenav: reviews
categories: ['reviews']
---

<ul class="postlist">
	{% for post in site.categories.gear %}
		<li class="col-sm-4">
			<div class="pull-left overlayimg" style="background: url({{ post.thumb }}) center center; background-size: cover;">
				<div class="overlaycontainer"><span class="overlaytxt"><a href="{{ site.baseurl }}{{ post.url }}">{{ post.headline }}</a></span></div>
			</div>
		</li>
	{% endfor %}
</ul>
<div class="clearfix"></div>