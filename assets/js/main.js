$(function(){
	// Change active nav color
	var activenav = $('#activenav').text();
	$('.active').removeClass('active');
	$('ul.nav a[href="http://mediaunmasked.com/'+activenav+'"]').parent().addClass('active');

	// Add subnav colors
	var subnav = $('#subnav').text();
	if (subnav == 'coding') {
		// $('.active a').addClass('menucoding');
		$('.active a').append("<img class='imgnav' src='http://i.imgur.com/kQayRdS.png'>");
	}
	if (subnav == 'internet') {
		// $('.active a').addClass('menuinternet');
		$('.active a').append("<img class='imgnav' src='http://i.imgur.com/60bvRYD.png'>");
	}
	if (subnav == 'misc') {
		// $('.active a').addClass('menumisc');
		$('.active a').append("<img class='imgnav' src='http://i.imgur.com/o3NkCfu.png'>");
	}
	if (subnav == 'photography') {
		// $('.active a').addClass('menuphotography');
		$('.active a').append("<img class='imgnav' src='http://i.imgur.com/WPHAbPi.png'>");
	}
	if (subnav == 'photoshop') {
		// $('.active a').addClass('menuphotoshop');
		$('.active a').append("<img class='imgnav' src='http://i.imgur.com/0mbnoRO.jpg'>");
	}

	// Remove link image from images
	$('img').parent().addClass('imglink');

	// Open external links in new window and add rel=nofollow
	var a = $(this);
	var href = a.attr('href');

	$("a[href^='http://']").each(function () {
		if(this.href.indexOf(location.hostname) == -1) {
			$(this).attr('target', '_blank');
			$(this).attr('title', 'Click to open in a new window');
			$(this).attr('rel', 'nofollow');
		}
	});
	$("a[href^='https://']").each(function () {
		if(this.href.indexOf(location.hostname) == -1) {
			$(this).attr('target', '_blank');
			$(this).attr('title', 'Click to open in a new window');
			$(this).attr('rel', 'nofollow');
		}
	});

}); // End all

// Get youtube video title
// var video_id = $('#sitemap-vid').text();

// $.getJSON('http://gdata.youtube.com/feeds/api/videos/'+video_id+'?v=2&alt=jsonc',function(data,status,xhr){
// 	$("#sitemap-vid").text(data.data.title);
// });