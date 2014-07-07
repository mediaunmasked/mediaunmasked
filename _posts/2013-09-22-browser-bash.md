---
layout: post
title: IE11 vs Chrome vs Firefox vs Opera vs Safari
redirect_from:
- /browser-bash/

headline: Browser Bash
featuredimage: http://i.imgur.com/ByQzdAH.jpg
bgsize: 10%
thumb: http://i.imgur.com/ByQzdAH.jpg
excerpt: This is the posts' except. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit corporis, voluptatem omnis quibusdam, quos corrupti! Voluptatem magni, amet consequatur dolor debitis, at nobis recusandae non, totam autem fugit error quae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, quidem, sequi. Possimus minima quis repellat natus, hic id quod similique, vero, qui distinctio ea nostrum dicta consectetur excepturi fuga illo?

date: 2013-09-22 10:00:00
activenav: tutorials
subnav: internet
categories: ['tutorials','internet']
---
#IE11 vs Chrome vs Firefox vs Opera vs Safari
---
Remember when Internet Explorer was always the butt end of internet browsing in comparison to Mozilla Firefox, Google Chrome, Opera, Safari and other popular browsers? Those days are far gone and the days where your internet browser is limited not necessarily by the performance of the browser, but by the apps and extensions offered by the developers in the community. For instance, Google’s new [Chromecast](http://mediaunmasked.com/chromecast) requires you to be using their browser, Chrome, in order to use the device for your TV. They offer the streaming extension in the Chrome store for laptop/desktop computing. It this breakdown, I’ll be comparing the top 5 internet browsers across most operating systems: **Google Chrome** (version 29), **Internet Explorer** (version 11), **Mozilla Firefox** (version 24), **Opera** (version16) and **Safari** (version5).

##Design
Before we get into the nitty-gritty tech specs, let’s consider the layout and design of each browser. While they share many aspects of each other, they have small distinctions that could possibly (though I suggest to not let it) make or break your browser decision.

###Chrome
<img src="http://i.imgur.com/WVSfir7.jpg" class="pull-right thumb-small">Chrome is very simple. You’ve got at the top about 8% of your screen (depending on your screen resolution) which is what you want. You don’t need all those toolbars and links everywhere cluttering up the internet. At the same time, you still have the option to have a bookmark bar and home buttons. You’ve got your standard back and forward buttons as well as refresh. Also, what you type in the omnibox will do a search on your set search engine or other sites based on what you type before it, for instance: With the Wolfram|Alpha extension, I just type "= [tab]" before my search and it will do a Wolfram|Alpha search. To the right of the omnibox you can access other great extensions.

###IE 11
<img src="http://i.imgur.com/zODZ1mD.jpg" class="pull-left thumb-small">IE TabsIE 11 has a very similar vibe with a little different layout. A unique thing IE has is that when an additional tab is opened, it looks like another session of IE is opened in the taskbar. It differs to Chrome in that the ‘omnibox’ does a Bing search, which is unfortunate.

###Firefox
<img src="http://i.imgur.com/wwspFha.jpg" class="pull-right thumb-small">Firefox mirrors the features of the others, but instead of having the omnibox feature, it has its own search box area to the right of the address bar. Firefox has a lot of similar extensions that Chrome has, but I think Chrome’s exclusive extensions are greater than those of Firefox.

###Opera
<img src="http://i.imgur.com/LOwuwu8.jpg" class="pull-left thumb-small">Opera has a sleek look to it, however similar to the others. I think it looks like a combination of Chrome and Firefox, which can be nice. It’s got a ‘speed dial’ which is just like the other new tab screens but it also features a discover option, which is kind of neat. It displays random articles from around the ‘net that you might find interesting.

###Safari
<img src="http://i.imgur.com/RjJA0pR.jpg" class="pull-right thumb-small">Safari ensures its originality, like Apple’s other products, by having almost everything as the competition but introducing it as it if were new and ingenuitive. You can customize what is on the navigation bar by dragging and dropping the features to the screen which somehow makes it new and better than ever. Everything else is just about exactly the same, but with a Mac esque feel to it.

##Benchmarks
Through several benchmarking tests online, we can decide which browser is the best. The best considering factors such as speed, usability, features, and so on. The benchmarking programs will give a score. The score is only relevant if you understand each element in the scoring system or you look into what makes up the score. Otherwise, the scores are only significant based on comparison to the other browsers. That’s what I’ll be doing — comparing each browser to the next. This way, we can find out which of the 5 most popular browsers comes out on top.

##Peacekeeper – Universal Browser Test (Using Javascript)![Peacekeeper](http://i.imgur.com/E0hRncc.png)![Chrome Wins Peacekeeper](http://i.imgur.com/qaZY9sy.png)

Peacekeeper is a web browser benchmarking tool that measures (all browsers) the speed of your browser by looking at how fast it loads a Javascript function. They consider this a benchmark because Javascript is unavoidable and makes up a lot of the internet. The test is said to take about 5 minutes if everything is running smoothly.

*Bonus:* Peacekeeper also has a battery testing function to determine the life of your device’s battery. This test will take much longer (the life of a full charged battery to dead), so it requires a set amount of time to be left alone, however difficult it may be.

###Chrome
After running the physics, HTML 5 rendering and other visual tests Peacekeeper tracks, Chrome had some trouble running a couple of the tests (a message told me that my browser didn’t support the tests [only about two]). This may or may not had to do with the ad blocker I have (I’m just guessing, it could be Chrome’s fault). Whatever the case, my computer and browser ran through the other tests just fine on Chrome and I got a score of **3365**, with an HTML5 capability of **6/7**. When completed, the page displays what looks like a leaderboard of browsers. Chrome (on my computer) obviously outscored most other browsers which were run on phones and other mobile devices.
![Peacekeeper Chrome Score](http://i.imgur.com/u5uuAyc.jpg)

###IE 11
I then pasted the URL into Internet Explorer and ran the test. It started out well, but the WebGL in HTML5 test didn’t show up on my screen — just a white screen. It stayed like this for at least 3 minutes so I refreshed the page and tried the test again. So far I’ve noticed not as smooth transitions in the first part of the test, in comparison to Chrome. Now, the WebGL HTML5 test has failed again, so I will continue on without considering Internet Explorer in the Peacekeeper test.

###Firefox
Now after failing IE 11, I have a go with Firefox. Not surprisingly, it didn’t have any hick-ups. The last of the transition test had some slow and jittery action, but it wasn’t unbearable. The video tests seemed to have a similar quality and run time as Chrome, and the same video codecs that didn’t work in Chrome didn’t work in Firefox. Considering X% of internet users run Chrome and Z% run Firefox, it wouldn’t be smart for developers to make sites using such elements, so it shouldn’t be a big worry. Developers develop for browsers, not the other way around. In all, I did notice the tests themselves (buffer and loading time) take a little bit longer on Firefox than Chrome, but they ran in a similar fashion. Firefox got a whopping **2197** on Peacekeeper and a similar **6/7** HTML5 capability score.
![Peacekeeper Firefox Score](http://i.imgur.com/Zpqz09o.jpg)

###Opera
Next, I ran the same test in Opera. It started out the same as the previous ones, seeming to load the tests a little faster than Firefox. The last transition test was noticeably better than Firefox, however, noticeably different than Chrome. And yet again, there were about three codecs unsupported by the browser. This was a similar problem in the other browsers, but I think there may have been one more codec unsupported in Opera that was supported in Chrome. The dynamics support of the browser seemed to be smoother than Firefox. Other elements were similar to the other browsers. Much to my surprise, Opera beat Chrome with a score of **3457**, but only **5/7** HTML 5 capability.
![Peacekeeper Opera Score](http://i.imgur.com/dpCwwCH.jpg)

###Safari
For the Apple users out there, I ran safari (on a Windows machine [much more powerful than any Apple device]) to see how it stacked up against the other competitors. It handled the transitions decently but unfortunately didn’t run the 3D render, the first video didn’t run smoothly, and all HTML5 video codecs following it weren’t supported. Even the 2D game wouldn’t run as it should. Overall, Safari is a bad browser and nobody should buy a Mac, unless all you plan to do is chat on Facebook, but even then it wouldn’t run all of the games smoothly. Peacekeeper gave Safari a score of **1754** and only **3/7** on the HTML 5 capability.
![Peacekeeper Safari Score](http://i.imgur.com/q8sPUFR.jpg)

##HTML 5 Test – How Each Browser Scores
[html5test.com](http://html5test.com) simple loads and associates a number with your browser. It tests common features of the upcoming standard of the internet — HTML 5. They don’t claim to test the new features of HTML 5, or the functionality of each features, but it will give you an overview of which elements it’s tested under the total score. Bonus points are based on whether or not the browser supports certain audio and video codecs, SVG or MathML embedding in HTML. Because HTML 5 is the future of internet browsing, it is a high valued benchmark, but isn’t the only factor to consider because HTML5 specifications aren’t finished yet. The highest scoring browser for HTML5 capabilities is currently Maxthon. [Maxthon](http://www.maxthon.com/) is a cloud-based browser, meaning that what is on one device will be seen on the others. Chrome has a similar functionality and comes in second place on the HTML5 test score.

###Chrome
![HTML5 Test Chrome Score](http://i.imgur.com/VgtEurS.jpg)
HTML5 Test Chrome ScoreGoogle Chrome has a score of **463/500** with **13** bonus points. It lacks in the following areas:

* MPEG-4 video support
* Ogg Opus audio support
* Elements (time, command, menu [toolbar and context])
* Form input datetime
* Microdata
* Custom content handlers
* Seamless iframe
* Scopes style element

###IE 11
![HTML5 Test IE11 Score](http://i.imgur.com/SunyNTn.jpg)
Internet Explorer 11 has a score of **350/500** with **6** bonus points. It lacks in similar areas of Chrome, but extends beyond the key points.

###Firefox
![HTML5 Test Firefox Score](http://i.imgur.com/BmT7HxE.jpg)
Firefox has a score of **414/500** with **14** bonus points. It seems if Chrome doesn’t have it, it’s not meant to be had (yet). Google Chrome is looking to be the leader in internet browsing, as it’s been.

###Opera
![HTML5 Test Opera Score](http://i.imgur.com/KmOwDMe.jpg)
Opera has a score of **442/500** with **9** bonus points. Opera is putting up a good fight in this battle to see which is best in internet browsing. Unfortunately, until these browsers support common video codecs such as h.264 and MPEG-4, they won’t be able to attract enough attention to use standalone (without the aid of video hosting sites like YouTube).

###Safari
![HTMLL5 Test Safari Score](http://i.imgur.com/Hzvk52L.jpg)
Safari has a score of **319/500** with **9** bonus points. This Apple browser seems to have displaced Internet Explorer in the realm of browsers. Unfortunately, most Mac users still use Safari. Get with it people!

##Octane – Google’s Javascript Benchmark
Octane is another Javascript benchmark, but it’s different and made by Google. It tests many different aspects of the browser such as core language features, math operations, memory & GC, strings & arrays, virtual machine and loading & parsing. Each datum has a score associated with it and then the geometric mean is taken from all the single scores and outputs one score, the Octane Score. Keep in mind, these scores will only have relevance in comparison to the other browser scores.

###Chrome
Chrome has an Octane score of **14495**.
![Chrome Octane Score](http://i.imgur.com/GUkke5O.png)

###IE 11
Internet Explorer 11 has an Octane score of **11207**.
![IE11 Octane Score](http://i.imgur.com/Hrxnbdv.png)

###Firefox
Firefox has an Octane score of **14592**, outscoring Chrome.
![Firefox Octane Score](http://i.imgur.com/TafUFAB.png)

###Opera
Opera has an Octane score of **14426**.
![Opera Octane Score](http://i.imgur.com/zneZjdC.png)

###Safari
Safari has an Octane score of **3187**, giving it the lowest score of the five browsers.
![Safari Octane Score](http://i.imgur.com/xTA9eb6.png)

##Browser Scope – Multipurpose Benchmark

<img src="http://i.imgur.com/BHeOF08.png" class="col-md-6">

<blockquote class="col-md-6">Browserscope is a community-driven project for profiling web browsers. The goals are to foster innovation by tracking browser functionality and to be a resource for web developers.
><footer>http://browserscope.org</footer></blockquote>

###Chrome
After going through a visual test and other backend tests, the browserscope failed to continue on Chrome (I disabled extensions and it still didn’t want to work) so I will take the results from the main graph for this section of the test.
![Browserscope Results Menu](http://i.imgur.com/Yhsmtul.png)

###IE 11
Internet Explorer 11 gave the following results:
![IE11 Browserscope Results](http://i.imgur.com/Fr55v6c.png)

###Firefox
Firefox gave a higher overall score, but still close to IE.
![Firefox Browserscope Results](http://i.imgur.com/ibi30lC.png)

###Opera
Opera has scored an even higher overall number than the others.
![Opera Browserscope Results](http://i.imgur.com/9JA29Gu.png)

###Safari
Safari has yet again scored the lowest out of the browsers.
![Safari Browserscope Results](http://i.imgur.com/8B1fTc9.png)

##Verdict:
On their homepage, Peacekeeper ranks Google Chrome the best overall browser, as of September 19, 2011, but according to my tests, Opera out-scored Chrome in overall score, but Chrome beat Opera in HTML 5 capabilities. Although Opera isn’t as HTML5-ready as Chrome is, I think it’s still worth a look. Most internet browsers are, more or less, the same, except for one factor: the community. The community, the users, is what makes a browser what it is. For that reason, I think **Google Chrome is**, and will be for a long time, **the best browser** for an internet experience. That is, app/extension developers will prioritise the most commonly used browser to develop for. Google’s browser will always be popular as long as they maintain it to industry standards and keep their name on  it. With that, any product or extensions developed by Google will only be available through Google. So for an overall great experience for years to come, I think Google takes the gold with Chrome. It may not be the best, but it’s up to industry standards and with it comes the diverse field of developers. All of these browsers work *okay*. They all have a rather similar format and no more toolbars that take up 20% of the screen. As for under the hood, all but Safari put up a good fight but, unfortunately, what’s under the hood isn’t everything. Google Chrome’s developer community is what makes it the most popular and loved internet browser.

* [Download Google Chrome](https://www.google.com/intl/en/chrome/browser/) or,  for developers, [Google Chrome Canary](https://www.google.com/intl/en/chrome/browser/canary.html)
* [Download Mozilla Firefox](http://www.mozilla.org/en-US/firefox/new/)
* [Download Internet Explorer 11](http://windows.microsoft.com/en-us/internet-explorer/ie-11-release-preview)
* [Download Opera](http://www.opera.com/)
* [Download Apple Safari](http://support.apple.com/downloads/#safari)