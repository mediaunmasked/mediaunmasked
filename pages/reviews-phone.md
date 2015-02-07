---
layout: post
title: Professional Phone Reviews
permalink: /reviews/phone/

headline: Phone Reviews
featuredimage: http://i.imgur.com/0XE0lyT.jpg
bgsize: 30%
thumb: http://i.imgur.com/0XE0lyT.jpg

activenav: reviews
categories: ['reviews']
---

<ul class="postlist">
	{% for post in site.categories.phone %}
		<li class="col-sm-4">
			<div class="pull-left overlayimg" style="background: url({{ post.thumb }}) center center; background-size: cover;">
				<div class="overlaycontainer"><span class="overlaytxt"><a href="{{ site.baseurl }}{{ post.url }}">{{ post.headline }}</a></span></div>
			</div>
		</li>
	{% endfor %}
</ul>
<div class="clearfix"></div>