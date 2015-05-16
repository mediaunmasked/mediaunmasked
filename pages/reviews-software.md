---
layout: post
title: Professional Software Reviews
permalink: /reviews/software/

headline: Software Reviews
featuredimage: http://i.imgur.com/suO5exH.png
bgsize: 30%
thumb: http://i.imgur.com/suO5exH.png

activenav: reviews
categories: ['reviews']
---

<ul class="postlist">
	{% for post in site.categories.software %}
		<li class="col-sm-4">
			<div class="pull-left overlayimg" style="background: url({{ post.thumb }}) center center; background-size: cover;">
				<div class="overlaycontainer"><span class="overlaytxt"><a href="{{ site.baseurl }}{{ post.url }}">{{ post.headline }}</a></span></div>
			</div>
		</li>
	{% endfor %}
</ul>
<div class="clearfix"></div>