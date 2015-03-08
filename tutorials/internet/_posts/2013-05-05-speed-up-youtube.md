---
layout: post
title: Speed Up YouTube In 60 Seconds & Avoid ISP Throttling
redirect_from:
- /speed-up-youtube-in-60-seconds/

headline: Speed Up YouTube, Aviod ISP Throttling
featuredimage: http://i.imgur.com/pumlKm3.jpg
bgsize: 50%
thumb: http://i.imgur.com/pumlKm3.jpg

date: 2014-05-05 10:00:00
activenav: tutorials
subnav: internet
categories: ['tutorials','internet']
---
#Speed Up YouTube In 60 Seconds & Avoid ISP Throttling
---

{% include ad-post.html %}

##ISP Throttling
Time Warner Cable (TWC) and a few other internet providers can do a sneaky thing (probably stated in their terms of service somewhere) where they throttle your internet download speed when streaming (and uploading) a youtube (or similar stream based sites such as Netflix, Hulu, Twitch, etc.) video. I have the basic Time Warner Cable package that includes phone, cable and internet. Using <a href="http://speedtest.net/">speedtest.net</a>, I normally had anywhere from 1-10 mb/s download, and always under 1mb/s upload. This is because Time Warner Cable was throttling the internet. They put a limit on the download, or stream, speed that you can download from sites like [YouTube](http://youtube.com/mediaunmasked), [Twitch](http://twitch.tv/), [Netflix](http://gan.doubleclick.net/gan_click?lid=41000000035479067&pubid=21000000000604432&lsrc=17) and [Hulu](http://hulu.com/). Each time you open a video, your computer connects to a server, one that TWC has inherently throttled. Luckily, there is an easy fix to this problem. You’ll need to block the primary connection that is requested. It will then request the default, faster, server (which will speed up the download speed tremendously).

There is an short, easy method of adding this IP block using the command prompt and a longer, more user interface friendly version. They both do the same thing – hope you can follow one of them.

##Short version (Windows 7):

* Start -> type 'cmd'

<img src="http://i.imgur.com/iSDNPAV.png" alt="">

* Type in the following:

<pre>netsh advfirewall firewall add rule name="TWC SUCKS" dir=in action=block remoteip=173.194.55.0/24,206.111.0.0/16 enable=yes</pre>

Hit enter (You should get a confirmative 'Ok.')

<img src="http://i.imgur.com/3rvH6Xt.png" alt="">

*Vuala*, no more slow streaming for you. [Consider tweeting this](http://clicktotweet.com/F4cKH) tutorial (click the link to tweet).

##To Undo This Action (for whatever reason):
Add the following line to your command prompt:

<pre>netsh advfirewall firewall delete rule name="TWC SUCKS"</pre>

##Long version (Windows 7):

* Start -> type 'firewall'

<img src="http://i.imgur.com/Zo8HQFo.png" alt="">

* Click InBound Rules (top left)

<img src="http://i.imgur.com/L2JDXcG.png" alt="">

* Click New Rule

<img src="http://i.imgur.com/rbxj94X.png" alt="">

* Check Custom -> Next

<img src="http://i.imgur.com/srk7Z0W.png" alt="">

* Check All programs -> Next

<img src="http://i.imgur.com/cPePvWF.png" alt="">

* Leave the default settings -> Next

<img src="http://i.imgur.com/8bdpjm8.png" alt="">

* Under **REMOTE** IP addresses, check These IP addresses -> Add…

<pre>173.194.55.0/24 206.111.0.0/16</pre>

<img src="http://i.imgur.com/Vx6CKd1.png" alt="">

* Next
* Block the connextions -> Next

<img src="http://i.imgur.com/fnPrPr4.png" alt="">

* Keep Domain, Private and Public all checked -> Next

<img src="http://i.imgur.com/4fMNM2i.png" alt="">

* Give it a proper name and description -> Finish

<img src="http://i.imgur.com/z3OqYyA.png" alt="">

<a href="http://clicktotweet.com/F4cKH">Consider tweeting</a> this tutorial (click the link to tweet it).