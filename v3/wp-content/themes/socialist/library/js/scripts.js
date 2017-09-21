!function ($) {

	$(document).ready(function() {
		
	});
	
	$(window).on("load", function() {
		
		init();
		
	});
	
	/* ================================================== */
	/* Initialize Application                             */
	/* ================================================== */
	
	function init() {
		
		// Define Namespace
		
		$.app = {};
		
		$.app.stage = $("#stage");
		
		$.app.scrollbar_width = get_scrollbar_width();
		
		// Disable certain links in docs
		
		$('[href^=#]').click(function (e) {
			
			e.preventDefault();
			
		});
		

		// hide iPhone/iPod only things when not an iPhone/iPod

		if (!navigator.userAgent.match(/(iPhone|iPod)/)) {

			$(".iphone-only").hide();

		}

		// Establish default window resize event
		
		$(window).resize(function () { 
			
			window_resize();
			
		});
		
		window_resize();
		
		// Establish default window scroll event
		
		$(window).scroll(function () { 
			
			window_scroll();
			
		});
		
		window_scroll();
		
		// Initialize Bootstrap Dropdown Plugin
		
		$().dropdown();
		
		// Initialize Bootstrap Tooltip Plugin
		
		$('.has-tooltip').each(function() {
			
			if($(this).hasClass('tooltip-on-focus')) {
					
				$(this).tooltip({
					
					'html'		: true,
					'trigger'	: 'focus'
					
				});
				
			} else {
					
				$(this).tooltip({
					
					'html'		: true,
					'trigger'	: 'hover'
					
				});
				
			}
				
		});
		
		// Backstretch
		
		$('.backstretch').each(function() {
			
			if($(this).data('backstretch-image')) {
				
				$(this).backstretch($(this).data('backstretch-image'));
				
				if($(this).data('backstretch-image-retina')) {
					
					$(this).find('img').retina('@2x');
					
				}
				
			}
			
		});
		
		// Initialize Retina Replace
		
		$('.retina-replace').retina('@2x');
		
		// Resize Modal
		
		modal_resize();
		
		// Update Element Position/Size
		
		$('.size-to-fit').sizeToFit();
		$('.fill-vertical').fillVertical();
		$('.center-vertical').centerVertical();
		$('.center-horizontal').centerHorizontal();
		$('.vertically-balanced').verticallyBalanced();
		
		// Initialize Scroller
		
		$('.container-scrollable').scroller({
			
			customClass: "advanced",
			trackMargin: 10
			
		});
		
		$('.container-scrollable').scroller("reset");
		
		// Code Pretty Print
		
		window.prettyPrint && prettyPrint();
		
		// Simulate placeholders for older browsers
		
		simulate_placeholders();
		
		// Initialize Scroll To
		
		init_scroll_to(500);
		
		// Initialize Views
		
		views_init();
				
	}
	
	/* ================================================== */
	/* Initialize Views                                   */
	/* ================================================== */
	
	function views_init() {
		
		if($.app.stage.hasClass("home")) {
			
			view_home_init();
				
		}
		
		if($.app.stage.hasClass("pricing")) {
			
			view_pricing_init();
				
		}
				
	}
	
	/* ================================================== */
	/* View Methods: Home                                 */
	/* ================================================== */
	
	function view_home_init() {
		
		$(window).scroll(function () { 
			
		});
		
		$(window).resize(function () { 
			
			view_home_resize();
			
		});
		
		view_home_resize();
   		
		$('#introduction-iphone-screens').rotational({
			
			delay				:	6000,
			navigation			:	false
			
		});
		
		$('#home-footer-mailing-list').ajaxChimp({
			
			url: 'http://sociali.us3.list-manage.com/subscribe/post?u=426ef9c1463439e43367d4566&amp;id=d99a4b8e6c',
			
			callback: function(resp) {
				
				console.log(resp);
				
				if (resp.result === 'success') {
					
					// Show Success Message
					
					$('#home-footer-mailing-list-submit').attr('value', '✓ Success');
					$('#home-footer-mailing-list-submit').removeClass('button-primary');
					$('#home-footer-mailing-list-submit').addClass('button-success');
					
					$('#home-footer-mailing-list-first-name').removeClass('form-group-error');
					$('#home-footer-mailing-list-first-name').addClass('form-group-success');
					
					$('#home-footer-mailing-list-last-name').removeClass('form-group-error');
					$('#home-footer-mailing-list-last-name').addClass('form-group-success');
					
					$('#home-footer-mailing-list-email').removeClass('form-group-error');
					$('#home-footer-mailing-list-email').addClass('form-group-success');
					
					//$('#home-footer-mailing-list-email label').html("You've just been sent an email to confirm your email address.");
					
				} else {
					
					// Show Error Message
					
					$('#home-footer-mailing-list-submit').attr('value', 'Subscribe');
					$('#home-footer-mailing-list-submit').removeClass('button-success');
					$('#home-footer-mailing-list-submit').addClass('button-primary');
					
					if(!$('#home-footer-mailing-list-first-name input').val()) {
						
						$('#home-footer-mailing-list-first-name').removeClass('form-group-success');
						$('#home-footer-mailing-list-first-name').addClass('form-group-error');
						
					} else {
						
						$('#home-footer-mailing-list-first-name').removeClass('form-group-error');
						
					}
					
					if(!$('#home-footer-mailing-list-last-name input').val()) {
						
						$('#home-footer-mailing-list-last-name').removeClass('form-group-success');
						$('#home-footer-mailing-list-last-name').addClass('form-group-error');
						
					} else {
						
						$('#home-footer-mailing-list-last-name').removeClass('form-group-error');
						
					}
					
					if((!$('#home-footer-mailing-list-email input').val()) || (!is_email($('#home-footer-mailing-list-email input').val()))) {
						
						$('#home-footer-mailing-list-email').removeClass('form-group-success');
						$('#home-footer-mailing-list-email').addClass('form-group-error');
						
					} else {
						
						$('#home-footer-mailing-list-email').removeClass('form-group-error');
						
					}
					
					//$('#home-footer-mailing-list-email label').html(data.Message);
					
				}
				
			}
			
		});
		
	}
	
	function is_email(email) {
		
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regex.test(email);
		
	}
	
	function view_home_resize() {
		
		var responsive_viewport = $(window).width() + $.app.scrollbar_width;
	    
	    if (responsive_viewport < 768) {
			
	    }
	    
	    if (responsive_viewport >= 768) {
	    	
	    }
		
	}
	
	/* ================================================== */
	/* View Methods: Pricing                              */
	/* ================================================== */
	
	function view_pricing_init() {
		
		$(window).scroll(function () { 
			
		});
		
		$(window).resize(function () { 
			
			view_pricing_resize();
			
		});
		
		view_pricing_resize();
		
		$("select#pricing_options").change(function() {
			
			view_pricing_select_pricing_tier($(this).val());
			
		});
		
	}
	
	function view_pricing_resize() {
		
		var responsive_viewport = $(window).width() + $.app.scrollbar_width;
	    
	    if (responsive_viewport < 768) {
			
	    }
	    
	    if (responsive_viewport >= 768) {
	    	
	    }
		
	}
	
	function view_pricing_select_pricing_tier(index) {
		
		$("td[data-tiers]").each(function() {
			
			$(this).html($(this).data("tiers")[index]);
			
		});
		
	}
	
	/* ================================================== */
	/* Modals Resize                                      */
	/* ================================================== */
	
	function modal_resize() {
		
		$('.modal').each(function(index, value) { 
			
			// Add display:block for resizing calculations
			
			if($(this).hasClass('fade') && !$(this).hasClass('in')) {
				
				$(this).css({
					
					display:    'block'
					
				});
				
			}
			
			var modal_header = $(this).find('.modal-header');
			var modal_footer = $(this).find('.modal-footer');
			var modal_body = $(this).find('.modal-body');
			var modal_body_content = $(this).find('.modal-body-content');
			
			var window_height = $(window).height();
			var modal_header_height = modal_header.outerHeight();
			var modal_footer_height = modal_footer.outerHeight();
			var modal_body_height = modal_body.height();
			var modal_body_padding = modal_body.outerHeight() - modal_body_height;
			var modal_body_content_height = modal_body_content.outerHeight();
			var modal_total_height = modal_header_height + modal_body_padding + modal_body_content_height + modal_footer_height;
			var modal_margins = 15;
			
			if ((modal_total_height + (2 * modal_margins)) > window_height) {
				
				modal_body.css({
					
					'height'	:	window_height - modal_header_height - modal_body_padding - modal_footer_height - (2 * modal_margins)
					
				});
				
			} else {
				
				modal_body.css({
					
					'height'	:	modal_body_content_height
					
				});
				
			}
			
			$(this).css({
				
				'margin-top'	:	-1 * ($(this).outerHeight() / 2)
				
			});
			
			// Remove display:block for resizing calculations to avoid element covering screen
			
			if($(this).hasClass('fade') && !$(this).hasClass('in')) {
				
				$(this).css({
					
					display:    'none'
					
				});
				
			}
			
		});
		
		// Updated Scroller
		
		$('.container-scrollable').scroller("reset");
		
	}
	
	/* ================================================== */
	/* Window Resize                                      */
	/* ================================================== */
	
	function window_resize() {
		
	    // Get Viewport width
	    
	    var responsive_viewport = $(window).width() + $.app.scrollbar_width;
	    
	    // If Viewport is below 481px
	    
	    if (responsive_viewport < 481) {
	    
	    }
	    
		// If Viewport is larger than 481px
	    
	    if (responsive_viewport > 481) {
	        
	    }
	    
	    // If Viewport is above or equal to 768px
	    
	    if (responsive_viewport >= 768) {
	        
	    }
	    
	    // If Viewport is above or equal to 1030px
	    
	    if (responsive_viewport > 1030) {
	        
	    }
		
		/* --------------------------------------------------
		Scroll
		-------------------------------------------------- */
		
		window_scroll();
		
		/* --------------------------------------------------
		Resize Modal
		-------------------------------------------------- */
		
		modal_resize();
		
		// Update Element Position/Size
		
		$('.size-to-fit').sizeToFit();
		$('.fill-vertical').fillVertical();
		$('.center-vertical').centerVertical();
		$('.center-horizontal').centerHorizontal();
		$('.vertically-balanced').verticallyBalanced();
		
		/* --------------------------------------------------
		Scroller
		-------------------------------------------------- */
		
		$('.container-scrollable').scroller("reset");
	}
	
	/* ================================================== */
	/* Window Scroll                                      */
	/* ================================================== */
	
	function window_scroll() {
		/*
		var scroll_top = $(window).scrollTop() - $('#stage').offset().top;
		
		var header = $('#header');
		var page_header = $('#page-header');
		var page_content = $('#page-content');
		
		var threshold_one = page_header.outerHeight() - header.outerHeight();
		var threshold_two = threshold_one + 20;
		
		if(scroll_top >= threshold_one) {
			
			header.addClass('fixed');
			
		} else {
			
			header.removeClass('fixed');
			
		}
		*/
	}
	
	/* ================================================== */
	/* Fill Elements Vertically                           */
	/* ================================================== */
	
	$.fn.fillVertical = function() {
		
		return this.each(function(i) {
			
			var innerHeight = $(this).height();
			var paddingHeight = $(this).outerHeight() - innerHeight;
			var contentHeight = $(this).find(".fit-content").height();
			var newHeight = $(window).height() - paddingHeight;
			var minHeight = $(this).data('fill-min-height');
			
			if (contentHeight > newHeight) {
				
				newHeight = contentHeight;
				
			}
			
			if (newHeight < minHeight) {
				
				newHeight = minHeight;
				
			}
			
			// Change height
			
			$(this).height(newHeight);
			
		});
		
	}
	
	/* ================================================== */
	/* Center Elements Vertically                         */
	/* ================================================== */
	
	$.fn.centerVertical = function() {
		
		return this.each(function(i){
			
			var parent = $(this).parent();
			var h = $(this).height();
			var oh = $(this).outerHeight();
			var mt = (h + (oh - h)) / 2;
			
			$(this).css({
				
				"margin-top":	"-" + mt + "px",
				"top":			"50%",
				"position":		"absolute"
				
			});
			
			parent.css({
				
				"position":		"relative"
				
			});
			
		});	
		
	};
	
	/* ================================================== */
	/* Center Elements Horizontally                       */
	/* ================================================== */
	
	$.fn.centerHorizontal = function() {
		
		return this.each(function(i){
			
			var parent = $(this).parent();
			var w = $(this).width();
			var ow = $(this).outerWidth();
			var ml = (w + (ow - w)) / 2;
			
			$(this).css({
				
				"margin-left":	"-" + ml + "px",
				"left":			"50%",
				"position":		"absolute"
				
			});
			
			parent.css({
				
				"position":		"relative"
				
			});
			
		});	
		
	};
	
	/* ================================================== */
	/* Size Elements to Fit                               */
	/* ================================================== */
	
	$.fn.sizeToFit = function() {
		
		return this.each(function(i){
			
			var ratio = $(this).data('size-to-fit-ratio');
			
			switch ($(this).data('size-to-fit')) {
					
				case 'height':
					
					var new_height = $(this).parent().height();
					var new_width = new_height * ratio;
					
					break;
					
				case 'width':
				default:
					
					var new_width = $(this).parent().width();
					var new_height = new_width * ratio;
					
					break;
				
			};
			
			$(this).css("width", new_width);
			$(this).css("height", new_height);
			
		});	
		
	};
	
	/* ================================================== */
	/* Vertically Balanced Columns                        */
	/* ================================================== */
	
	$.fn.verticallyBalanced = function() {
		
	    // Get Viewport width
	    
	    var responsive_viewport = $(window).width() + $.app.scrollbar_width;
		
		return this.each(function(i){
			
			var vertically_balanced_columns = $(this).find('.vertically-balanced-column');
		    
		    var vertically_balanced_screen_size_min = 0;
		    
		    if($(this).data('vertically-balanced-screen-size-min')) {
		    	
		    	vertically_balanced_screen_size_min = $(this).data('vertically-balanced-screen-size-min')
		    	
		    }
		    
		    console.log(vertically_balanced_screen_size_min);
		    
			// If Viewport is less than 768px
		    
		    if (responsive_viewport < vertically_balanced_screen_size_min) {
				
				vertically_balanced_columns.each(function() {
					
					$(this).css({
						
						'height':	'auto'
						
					});
					
					if($(this).hasClass('vertically-balanced-column-center-vertical')) {
						
						var vertically_balanced_column_inner = $(this).find('.vertically-balanced-column-inner');
						
						vertically_balanced_column_inner.css({
							
							"margin-top":	"auto",
							"top":			"none",
							"position":		"relative"
							
						});
						
					}
					
				});
				
		    }
		    
		    // If Viewport is above or equal to 768px
		    
		    if (responsive_viewport >= vertically_balanced_screen_size_min) {
		    	
				var vertically_balanced_columns_height_max = 0;
			    
				vertically_balanced_columns.each(function() {
					
					var vertically_balanced_column_inner = $(this).find('.vertically-balanced-column-inner');
					
					if (!vertically_balanced_column_inner.length) {
						
						$(this).wrapInner("<div class='vertically-balanced-column-inner'></div>");
						
						vertically_balanced_column_inner = $(this).find('.vertically-balanced-column-inner');
						
					}
					
					if (vertically_balanced_column_inner.height() > vertically_balanced_columns_height_max) {
						
						vertically_balanced_columns_height_max = vertically_balanced_column_inner.height();
						
					}
					
				});
				
				vertically_balanced_columns.each(function() {
					
					var offset_h = $(this).outerHeight() - $(this).height();
					
					$(this).css({
						
						'height':	vertically_balanced_columns_height_max + offset_h
						
					});
					
					if($(this).hasClass('vertically-balanced-column-center-vertical')) {
						
						var vertically_balanced_column_inner = $(this).find('.vertically-balanced-column-inner');
						
						var vertically_balanced_column_inner_height = vertically_balanced_column_inner.height();
						var vertically_balanced_column_inner_outer_height = vertically_balanced_column_inner.outerHeight();
						var vertically_balanced_column_inner_margin_top = (vertically_balanced_column_inner_height + (vertically_balanced_column_inner_outer_height - vertically_balanced_column_inner_height)) / 2;
						
						vertically_balanced_column_inner.css({
							
							"margin-top":	"-" + vertically_balanced_column_inner_margin_top + "px",
							"top":			"50%",
							"position":		"absolute",
							"width":		'100%'
							
						});
						
						$(this).css({
							
							"position":		"relative"
							
						});
						
					}
					
				});
		    	
		    }
			
		});
		
	};
	
	/* ================================================== */
	/* Placeholder Browser Fix                            */
	/* ================================================== */
	
	function simulate_placeholders() {
		
		var input = document.createElement("input");
		
		if(('placeholder' in input) == false) {
			
			$('[placeholder]').focus(function() {
				
				var i = $(this);
				
				if(i.val() == i.attr('placeholder')) {
					
					i.val('').removeClass('placeholder');
					
					if(i.hasClass('password')) {
						
						i.removeClass('password');
						this.type='password';
						
					}
							
				}
				
			}).blur(function() {
				
				var i = $(this);	
				
				if(i.val() == '' || i.val() == i.attr('placeholder')) {
					
					if(this.type=='password') {
						
						i.addClass('password');
						this.type='text';
						
					}
					
					i.addClass('placeholder').val(i.attr('placeholder'));
					
				}
				
			}).blur().parents('form').submit(function() {
				
				$(this).find('[placeholder]').each(function() {
					
					var i = $(this);
					
					if(i.val() == i.attr('placeholder')) {
						
						i.val('');
						
					}
					
				})
				
			});
			
		}
				
	}
	
	/* ================================================== */
	/* Get Browser Dimensions                             */
	/* ================================================== */
	
	function get_browser_dimensions() {
		
		var dimensions = {
			
			width: 0,
			height: 0
			
		};
		
		if ($(window)) {
			
			dimensions.width = $(window).width();
			dimensions.height = $(window).height();
			
		}
		
		return dimensions;
		
	}
	
	/* ================================================== */
	/* Get Scrollbar Width                                */
	/* ================================================== */
	
	function get_scrollbar_width() {
		
	    var div = $('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div></div>'); 
	    $('body').append(div); 
	    var w1 = $('div', div).innerWidth(); 
	    div.css('overflow-y', 'auto'); 
	    var w2 = $('div', div).innerWidth(); 
	    $(div).remove(); 
	    return (w1 - w2);
	    
	}
	
	/* ================================================== */
	/* Get Scrollbar Width                                */
	/* ================================================== */
	
	function init_scroll_to(speed) {
		
		$('a[href*=#]:not([href=#])').click(function() {
			
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				
				var target = $(this.hash);
				
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				
				if (target.length) {
					
					$('html,body').animate({
						
						scrollTop: target.offset().top
						
					}, speed);
					
					return false;
					
				}
				
			}
			
		});
		
	}
	
}(window.jQuery)

/* ================================================== */
/* IE8 Polyfill for GetComputed Style                 */
/* ================================================== */

if (!window.getComputedStyle) {
    window.getComputedStyle = function(el, pseudo) {
        this.el = el;
        this.getPropertyValue = function(prop) {
            var re = /(\-([a-z]){1})/g;
            if (prop == 'float') prop = 'styleFloat';
            if (re.test(prop)) {
                prop = prop.replace(re, function () {
                    return arguments[2].toUpperCase();
                });
            }
            return el.currentStyle[prop] ? el.currentStyle[prop] : null;
        }
        return this;
    }
}

/* ================================================== */
/* A fix for the iOS orientationchange zoom bug.      */
/* ================================================== */

(function(w){
	
	// This fix addresses an iOS bug, so return early if the UA claims it's something else.
	
	if( !( /iPhone|iPad|iPod/.test( navigator.platform ) && navigator.userAgent.indexOf( "AppleWebKit" ) > -1 ) ){ return; }
    var doc = w.document;
    if( !doc.querySelector ){ return; }
    var meta = doc.querySelector( "meta[name=viewport]" ),
        initialContent = meta && meta.getAttribute( "content" ),
        disabledZoom = initialContent + ",maximum-scale=1",
        enabledZoom = initialContent + ",maximum-scale=10",
        enabled = true,
		x, y, z, aig;
    if( !meta ){ return; }
    function restoreZoom(){
        meta.setAttribute( "content", enabledZoom );
        enabled = true; }
    function disableZoom(){
        meta.setAttribute( "content", disabledZoom );
        enabled = false; }
    function checkTilt( e ){
		aig = e.accelerationIncludingGravity;
		x = Math.abs( aig.x );
		y = Math.abs( aig.y );
		z = Math.abs( aig.z );
		// If portrait orientation and in one of the danger zones
        if( !w.orientation && ( x > 7 || ( ( z > 6 && y < 8 || z < 8 && y > 6 ) && x > 5 ) ) ){
			if( enabled ){ disableZoom(); } }
		else if( !enabled ){ restoreZoom(); } }
	w.addEventListener( "orientationchange", restoreZoom, false );
	w.addEventListener( "devicemotion", checkTilt, false );
	
})( this );