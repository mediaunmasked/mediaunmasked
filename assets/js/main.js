$(function(){

	// Activate isotope
	$('#isotope').isotope({
	itemSelector : '.item',
	});

	// Filter items when filter link is clicked
	$('#filters button').click(function(){
	var selector = $(this).attr('data-filter');
	$('#isotope').isotope({ filter: selector });
	return false;
	});

});

// Get youtube video title
// var video_id = $('#sitemap-vid').text();

// $.getJSON('http://gdata.youtube.com/feeds/api/videos/'+video_id+'?v=2&alt=jsonc',function(data,status,xhr){
// 	$("#sitemap-vid").text(data.data.title);
// });