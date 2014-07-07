---
layout: post
title: Photography, Videography, Media & Everything Else!
permalink: /tutorials/misc/

headline: Media Mogulry
featuredimage: http://i.imgur.com/mFNtdCr.jpg
thumb: http://i.imgur.com/mFNtdCr.jpg

date: 2014-06-29 21:07:51
activenav: tutorials
subnav: misc
categories: ['tutorials','misc']
---
#Miscellaneous Tutorials
<ul class="postlist">
	{% for post in site.categories.misctut %}
		<li class="col-sm-4">
			<div class="pull-left overlayimg" style="background: url({{ post.thumb }}) center center; background-size: cover;">
				<div class="overlaycontainer"><span class="overlaytxt"><a href="{{ site.url }}{{ post.url }}">{{ post.headline }}</a></span></div>
			</div>
		</li>
	{% endfor %}
</ul>
<div class="clearfix"></div>