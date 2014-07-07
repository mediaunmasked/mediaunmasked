---
layout: post
title: How To Use A TI-83 Calculator As An Intervalometer
redirect_from:
- /ti83-calculator-as-intervalometer/

headline: TI-83 Calculator as Intervalometer
featuredimage: http://i.imgur.com/cKJOMvf.jpg
bgsize: 50%
thumb: http://i.imgur.com/cKJOMvf.jpg
vid-n: kmGzKUKQFf8

date: 2014-05-04 10:00:00
activenav: tutorials
subnav: photography
categories: ['tutorials','photography']
---
#TI-83 Calculator as Intervalometer
---

<img src="http://i.imgur.com/ergRjBL.gif" alt="" class="thumbnail thumb-med pull-left">

To create a quality time lapse video (such as the one I made below this), you’ll need an intervalometer and patience. Although quite a few do, a lot of common DSLR cameras don’t come with a built in intervalometer (NIKON cameras usually have them, Canon do not). You can <a href="http://www.amazon.com/s/?_encoding=UTF8&camp=1789&creative=390957&field-keywords=intervalometer&linkCode=ur2&rh=i%3Aaps%2Ck%3Aintervalometer&sepatfbtf=true&sprefix=intervalo%2Caps&tag=mediunma0d-20&tc=1367687898706&url=search-alias%3Daps" class="amazon">buy one on Amazon</a>, <a href="http://www.instructables.com/id/Intervalometer-for-Canon-and-Nikon-cameras/">build your own</a> or use your calculator as one. In this tutorial, I’ll be showing you how to use your high school (or college) calculator as an intervalometer. Keep in mind, this is a make-shift solution to an intervalometer so it isn’t perfect. It is a fun idea, but if you’d rather optimize your timelapse technology and you don’t have any intervalometer hardware, use a free camera hack called [Magic Lantern](http://magiclantern.fm/). Magic Lantern has many other features that are very helpful for photographers and videographers.

<div class="clearfix"></div>

##Texas Instruments Intervalometer
<img src="http://i.imgur.com/QcKkhue.jpg" alt="" class="thumbnail">

##You’ll need:

* Digital Single Lens Reflex (DSLR) Camera with a remote shutter release socket (2.5mm)
* TI-83 Calculator
* Link Cable (should come with the calculator)

Now you’ll need to create the program by doing the following:

<pre>
	//Press the PRGM key
	//Press the Right arrow twice to highlight "New"
	//Press ENTER
</pre>

You are now ready to insert the following program. The functions prompt, while, for, and end can be found by pressing the PRGM key again. The function Send has to be selected by press 2nd -> 0 (catalog).

##TI-83 or TI-84
<pre>
	//Prompt A
	//While 1
	//For (H,1,A,1)
	//End
	//Send(A)
	//End
</pre>

##TI-89
<pre>
	//(Program)
	//Camera (pics,delay)
	//Prgm 0->x
	//While x < pics
	//For y,0,delay,1
	//EndFor
	//Try
	//x+1->x
	//SendChat a
	//Else
	//ClrErr
	//EndTry
	//EndWhile
	//EndPrgm
	//(End Program)
</pre>

<iframe class="imgur-album" width="100%" height="550" frameborder="0" src="http://imgur.com/a/Jv5t3/embed"></iframe>

Connect the cord to your camera and take your tripod, calculator and camera to the spot that you want to record the time lapse.

Another Example:

{% include vid-n.html %}

The next step is to connect your calculator and camera with <a href="http://www.amazon.com/gp/product/B008O7K9FW/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B008O7K9FW&linkCode=as2&tag=mediunma0d-20" class="amazon">the connection cord</a> and start the program. It will prompt a value for A, which will represent the time. NOTE: the time is not in seconds. According to the <a href="http://www.instructables.com/id/Turn-a-TI-Graphing-Calculator-into-an-Intervalomet/">Instructables</a> this is based on, "I think about 100 of these make a second, but this can change depending on battery life and your calculator model." To turn the program off, just press the ON button. From here, I recommend you read my time lapse tutorial in order to create the highest quality time lapse you can.