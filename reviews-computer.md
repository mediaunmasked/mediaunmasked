---
layout: post
title: Professional Computer Hardware Reviews
permalink: /reviews/computer/

headline: Computer Reviews
featuredimage: http://i2.wp.com/mediaunmasked.com/wp-content/uploads/2013/09/Phantom-Final-Smalelr.jpg
bgsize: 30%
thumb: http://i2.wp.com/mediaunmasked.com/wp-content/uploads/2013/09/Phantom-Final-Smalelr.jpg?zoom=1.5&resize=900%2C691

date: 2014-06-29 21:07:51
activenav: reviews
categories: ['reviews']
---

<ul class="postlist">
	{% for post in site.categories.computer %}
		<li class="col-sm-4">
			<div class="pull-left overlayimg" style="background: url({{ post.thumb }}) center center; background-size: cover;">
				<div class="overlaycontainer"><span class="overlaytxt"><a href="{{ site.url }}{{ post.url }}">{{ post.headline }}</a></span></div>
			</div>
		</li>
	{% endfor %}
</ul>
<div class="clearfix"></div>