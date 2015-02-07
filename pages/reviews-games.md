---
layout: post
title: Video Game Reviews, Tutorials, Tips &amp; Tricks
permalink: /reviews/games/

headline: Game Reviews
featuredimage: http://i.imgur.com/vNVugWg.png
bgsize: 50%
thumb: http://i.imgur.com/vNVugWg.png

activenav: reviews
categories: ['reviews']
---

<ul class="postlist">
	{% for post in site.categories.games %}
		<li class="col-sm-4">
			<div class="pull-left overlayimg" style="background: url({{ post.thumb }}) center center; background-size: cover;">
				<div class="overlaycontainer"><span class="overlaytxt"><a href="{{ site.baseurl }}{{ post.url }}">{{ post.headline }}</a></span></div>
			</div>
		</li>
	{% endfor %}
</ul>
<div class="clearfix"></div>