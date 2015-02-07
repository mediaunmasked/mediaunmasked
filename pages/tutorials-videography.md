---
layout: post
title: Free Videography Tutorials, Tips, Reviews, and More!
permalink: /tutorials/videography/

headline: Videography Tips & Tricks
featuredimage: http://i.imgur.com/RgjFzbv.jpg
thumb: http://i.imgur.com/Rf54SBb.jpg
bgsize: 27%

activenav: tutorials
subnav: videography
categories: ['tutorials','videography']
---
#Videography Tutorials
<ul class="postlist">
	{% for post in site.categories.videography %}
		<li class="col-sm-4">
			<div class="pull-left overlayimg" style="background: url({{ post.thumb }}) center center; background-size: cover;">
				<div class="overlaycontainer"><span class="overlaytxt"><a href="{{ site.baseurl }}{{ post.url }}">{{ post.headline }}</a></span></div>
			</div>
		</li>
	{% endfor %}
</ul>
<div class="clearfix"></div>