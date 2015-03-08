---
layout: post
title: Free Photography Tutorials, Tips, Reviews, and More!
permalink: /tutorials/photography/

headline: Photography Tips & Tricks
featuredimage: http://i.imgur.com/RgjFzbv.jpg
thumb: http://i.imgur.com/RgjFzbv.jpg
bgsize: 27%

activenav: tutorials
subnav: photography
---
#Photography Tutorials
<ul class="postlist">
	{% for post in site.categories.photography %}
		<li class="col-sm-4">
			<div class="pull-left overlayimg" style="background: url({{ post.thumb }}) center center; background-size: cover;">
				<div class="overlaycontainer"><span class="overlaytxt"><a href="{{ site.baseurl }}{{ post.url }}">{{ post.headline }}</a></span></div>
			</div>
		</li>
	{% endfor %}
</ul>
<div class="clearfix"></div>