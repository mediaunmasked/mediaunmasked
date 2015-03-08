---
layout: post
title: User Experience - Feedback, Recovery, Simplicity, Goal Oriented
redirect_from:
- /user-experience-part-2/

headline: User Experience Part 2
featuredimage: http://i.imgur.com/porMGjN.gif
bgsize: 50%
thumb: http://i.imgur.com/porMGjN.gif
vid-n: yIedljapuz0

date: 2014-06-02 10:00:00
activenav: tutorials
subnav: misc
categories: ['tutorials','misc']
---
#User Experience - Feedback, Recovery, Simplicity, Goal Oriented
---

<div class="bg-warning">This post is a continuation to part 1 on user experience. You can check out that post first by clicking <a href="{{ site.url }}{{ site.baseurl }}/tutorials/misc/user-experience-part-1">here</a>.</div>

{% include vid-n.html %}

##Usability Standards
<table class="table table-striped">
	<tr class="info text-center">
		<td>8 Compiled Usability Standards</td>
	</tr>
	<tr>
		<td>1. Consistency</td>
	</tr>
	<tr>
		<td>2. Familiarity</td>
	</tr>
	<tr>
		<td>3. Recognition over Recall</td>
	</tr>
	<tr>
		<td>4. Error Prevention</td>
	</tr>
	<tr>
		<td>5. Feedback</td>
	</tr>
	<tr>
		<td>6. Recovery from Mistakes</td>
	</tr>
	<tr>
		<td>7. Simplicity</td>
	</tr>
	<tr>
		<td>8. Goal Oriented</td>
	</tr>
</table>
The last 4 usability standards for a good user experience are just as important as the [first four]({{ site.url }}/tutorials/misc/user-experience-part-1), if not, *more* important.

##Feedback
>Over the past four decades, researchers have found consistently that an interactive system's responsiveness is the most important factor in determining user satisfaction ... Systems that display poor responsiveness do not meet human time deadlines. They don't keep up with users and impede users' productivity and frustrate and annoy them.
><footer>Johnson, Jeff<br><a href="http://amzn.to/1oTiNcc" class="amazon book">Designing with the Mind in Mind</a></footer>

Application/website feedback is a response to a user's input and can be the difference between, what appears to be, an unresponsive website and one that is loading. A great example of website feedback is YouTube's loading bar at the top of the page. It indicates how much of the page has loaded and gives its users a sense of responsiveness. As the video describes, this is largely important because our brains are wired to adhere to cause and effect. If you kick a ball, you expect to see that ball move (within around 0.1 seconds). At the same time, if you click a button, you expect to see something happen (within around 0.1 seconds). Often times, websites aren't this responsive, which can lead the user to click the button again. This is especially important to pay attention to with buy buttons; you don't want people to double spend for anything because of poor user experience design. If your site doesn't adhere to normal hand-eye coordination, your users will also be slowed down. Here are some responsive deadlines you should consider:

<table class="table table-striped">
	<tr class="info">
		<td>Action</td>
		<td>Response</td>
	</tr>
	<tr>
		<td>Clicking a button</td>
		<td>0.1 seconds</td>
	</tr>
	<tr>
		<td>Move / resize</td>
		<td>0.1 seconds</td>
	</tr>
	<tr>
		<td>Busy for 1+ seconds</td>
		<td>Display a busy indicator</td>
	</tr>
	<tr>
		<td>Loading for 1-3 seconds</td>
		<td>Display a progress bar</td>
	</tr>
</table>

>Those deadlines are psychological time constants, wired into us... They are not arbitrary targets that we can adjust at will to match the limitations of the Web or of any technology platform... If an interactive system does not meet those deadlines, users will consider its responsiveness to be poor.
><footer>Johnson, Jeff<br><a href="http://amzn.to/1oTiNcc" class="amazon book">Designing with the Mind in Mind</a></footer>

##Recovery From Mistakes
This category is a reminder that troubleshooting is an important aspect of using a tool. If something goes wrong, users need some recognition and diagnostics to recover from errors. The most used and well-known examples of this is Ctrl-Z (undo). This feature allows people to be more creative and adventurous in their work. They can trust the software and try new things with the safety net of knowing they can simply undo it if they don't like it. People stick to things they're familiar with to reduce anxiety. Apple's OSX Guidelines says that "people need to feel that they can try things without damaging the system or jeopardizing their data." Another example of this is when software allows you to recover from an autosave after a crash. From a website's point of view, I use a Chrome extension called [Lazarus](http://goo.gl/Vr8qlM) that autosaves forms you've recently written in. This is helpful for instances when you've just written an essay in an online form and when you hit submit, it clears the forms and says you timed out. Recovery from mistake is one of the most frustrating steps for the users, when ignored.

##Simplicity
Simplicity has a lot to do with the design of the software or website. It should be easy to navigate and each design decision should be thoughtful and purposeful. For example, Google's search engine is much more popular than others because it has focused on one thing – search – while others (like yahoo) try to make it have many different functions and it became too busy and overwhelming. Simplicity is really one of the most important categories. It can be divided into four subcategories:

* Hierarchy
* Structure
* Design
* Vocabulary

###Hierarchy
Hierarchy is the *order* of buttons that are shown in an order of importance. Quite simply, if a function (button) is used by many people, it should be more visible than the ones not often used. Functions that fewer people use (experts) can be more hidden. The speed users navigate your website or tool is largely dependant on a clean and consistent hierarchy. Having a proper hierarchy also lowers the learning curve, allowing for more users. Price exemplifies this by looking at a car. Everything you need is in reach and in prominent positions. The steering wheel, gas, and brake are all in places easily accessible and things that aren't needed as often are put along the dashboard. The same ideology should be used when making a website or application. Make the most clicked and most useful items very prominent by using color, size, and contrast.

####Fitt's Law
`MT = a + b log2 (2A/W + c)`

Eric Reis, of Usable Usability: Simple Steps for Making Stuff Better, says that "this rather soophisticated mathematical equation predicts that the time required to rapidly move to a target area is a function of the distance to the target and the size of the target," which basically means that a small button is harder to click than a big one. So, again, make more important and most used buttons in more prominent locations.

###Structure
<img src="http://i.imgur.com/kFr3ZVt.png" alt="" class="pull-left">The next part of simplicity is how components are placed in relation to each other. This ideology was outlined in the Gestalt Principles by some smart guys who said that the human brain sees order in the form of shapes, figures, and objects. You might see two faces in the image to the left (black) or a lamp (white). Johnson points out that "the most important Gestalt principles are: proximity, similarity, continuity, closure, symmetry, figure/ground, and common fate." This can be seen in word processing programs like Google Docs, where similar tools are grouped together.

###Design
In college, early design classes taught us that basic design elements are **contrast**, **repetition**, **alignment**, and **proximity**. Which, when put as a acronym, spell CRAP. *Oh, college*. Your text should be clearly visible on any screen. Contrast difference is recommended to be as high as possible, while still looking okay. Furthermore, since people are reading on a monitor and not necessarily a tablet or phone, keep in mind the font size when designing a site for multiple devices. The recommended font size for good readability on a computer monitor is actually 16 pixels. However, since 12 pixels is a good size for books, the same can be said for tablets and phones.
![](http://i.imgur.com/XfiMphT.png)

###Vocabulary
Avoid jargon and say less. Johnson recommends "don't force [your users] to learn a whole new vocabulary... familiar words are easier to read and understand because they can be recognized automatically." Krug advices "the most important thing you can do, is to just understand the basic principle of eliminating question marks." Don't let the vocabulary of your site or app slow the process of using it. " ... just by being there, all the extra words suggest that you may actually need to read them to understand what's going on ... which often makes pages seem more daunting than they already are."

##Goal Oriented
>We focus on our goals and pay little attention to our tools.
><footer>Johnson, Jeff<br><a href="http://amzn.to/1oTiNcc" class="amazon book">Designing with the Mind in Mind</a></footer>

This is the most important principle when using software or a website. When people have a goal in mind, their focus is primarily targeted on the goals and not the tools. Websites should be easy to navigate and not have popups or other interruptions so that the user can learn or accomplish what they came for. Johnson claims "this tendency of people to notice only things on a computer display that match their goal, and the literal thinking that they exhibit when performing a task on a computer has been called ‘following the scent of information toward the goal.' Most software design guidelines state that software applications and most websites should not call attention to themselves; they should fade into the background and allow users to focus on their own goals. Cognitive psychologists call the gap between what a user wants and the operations the tool provides ‘the gulf of execution'." It's the gap between your end result and where you start. Depending on how user-friendly a design is, the gulf of execution will be shallow or deep. There should be, from the home page, a clear path for all users to begin their journey.
If this article helped, consider sharing it to let other designers and developers make the world a more user-friendly place! Thanks!