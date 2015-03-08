---
layout: post
title: Professional Reviews (Miscellaneous)
permalink: /reviews/misc/

headline: Miscellaneous Reviews
featuredimage: http://i.imgur.com/mFNtdCr.jpg
thumb: http://i.imgur.com/mFNtdCr.jpg
bgsize: 20%

activenav: reviews
---

<ul class="postlist">
	{% for post in site.categories.reviews %}
		{% if post.categories contains 'misc' %}
			<li class="col-sm-4">
				<div class="pull-left overlayimg" style="background: url({{ post.thumb }}) center center; background-size: cover;">
					<div class="overlaycontainer"><span class="overlaytxt"><a href="{{ site.baseurl }}{{ post.url }}">{{ post.headline }}</a></span></div>
				</div>
			</li>
		{% endif %}
	{% endfor %}
</ul>
<div class="clearfix"></div>