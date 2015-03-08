---
layout: post
title: Professional Computer Hardware Reviews
permalink: /reviews/computer/

headline: Computer Reviews
featuredimage: http://i.imgur.com/0woW7mL.jpg
bgsize: 30%
thumb: http://i.imgur.com/0woW7mL.jpg

activenav: reviews
---

<ul class="postlist">
	{% for post in site.categories.computer %}
		<li class="col-sm-4">
			<div class="pull-left overlayimg" style="background: url({{ post.thumb }}) center center; background-size: cover;">
				<div class="overlaycontainer"><span class="overlaytxt"><a href="{{ site.baseurl }}{{ post.url }}">{{ post.headline }}</a></span></div>
			</div>
		</li>
	{% endfor %}
</ul>
<div class="clearfix"></div>