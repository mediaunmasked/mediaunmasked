---
layout: post
title: Free Online Web Design & Coding Tutorials
permalink: /tutorials/coding/

headline: Web Design & Development
featuredimage: http://i.imgur.com/JWifsPG.jpg
thumb: http://i.imgur.com/JWifsPG.jpg
bgsize: 20%

activenav: tutorials
subnav: coding
---
#Coding Tutorials
<ul class="postlist">
	{% for post in site.categories.coding %}
		<li class="col-sm-4">
			<div class="pull-left overlayimg" style="background: url({{ post.thumb }}) center center; background-size: cover;">
				<div class="overlaycontainer"><span class="overlaytxt"><a href="{{ site.baseurl }}{{ post.url }}">{{ post.headline }}</a></span></div>
			</div>
		</li>
	{% endfor %}
</ul>
<div class="clearfix"></div>