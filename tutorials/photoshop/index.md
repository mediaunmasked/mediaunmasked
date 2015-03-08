---
layout: post
title: Free Photoshop Tutorials, Assets, Scripts, & More!
permalink: /tutorials/photoshop/

headline: Digital Wizardry
featuredimage: http://i.imgur.com/4iE0dV0.jpg
thumb: http://i.imgur.com/4iE0dV0.jpg

activenav: tutorials
subnav: photoshop
---
#Photoshop Tutorials
<ul class="postlist">
	{% for post in site.categories.photoshop %}
		<li class="col-sm-4">
			<div class="pull-left overlayimg" style="background: url({{ post.thumb }}) center center; background-size: cover;">
				<div class="overlaycontainer"><span class="overlaytxt"><a href="{{ site.baseurl }}{{ post.url }}">{{ post.headline }}</a></span></div>
			</div>
		</li>
	{% endfor %}
</ul>
<div class="clearfix"></div>