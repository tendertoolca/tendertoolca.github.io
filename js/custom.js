$(document).ready(function() {

//Flikr

$('#flickr').jflickrfeed({
	limit: 			10,
	qstrings: 		{id: '52617155@N08'},
	itemTemplate: 	'<li><a href="{{image_b}}" rel="colorbox"><img src="{{image_s}}" alt="{{title}}" /><span class="hover-effect"></span></a></li>'
	},function(data){$('#flickr a').colorbox({rel:'colorbox'});}
);


//Tooltip
$('.custom-tooltip').tooltip();


//Mobile menu
$('#navigation').mobileMenu({
	triggerMenu:'#navigation-toggle',
	subMenuTrigger: ".sub-nav-toggle",
	animationSpeed: 500 
});

});