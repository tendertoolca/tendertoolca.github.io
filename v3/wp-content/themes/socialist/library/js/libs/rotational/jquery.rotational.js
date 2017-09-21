(function($) {
	
	$.fn.rotational = function(options) {
		
		// Defaults options
		
		var defaults = {
        	
			delay				:	5000,
			activeClass			:	'active',
			inactiveClass		:	'inactive',
			prevButton			:	null,
			nextButton			:	null,
            afterSlideChange	:	function(){},
            navigation			:	false
			
		};
        
        // Extend default options
        
        var options = $.extend(defaults, options); 
        
        return this.each(function() {
	        
	        // Define Variables
	        
            var heros = $(this);
			var activeSlide = 0;
			var numberSlides = 0;				
			var prevActiveSlide = 0;
			var slideDirection;
            var clock;
            var navItems = [];
            
            // Initialize slides
            
            var slides = [];
            
            heros.children().each(function() {
                
                if(!$(this).hasClass('fixed')) {
					
					slides.push($(this));
                	
	                animateOut(numberSlides);
					
					$(this).find('input').focus(function() {
						
						stopClock();
						
					}).blur(function() {
						
						startClock();
						
					});
					
					numberSlides++;
					
				}
				
			});
	        
			// If there is only 1 slide, cancel animation
			
			if(slides.length == 1) {
				
				return false;
				
			}
            
            // If prevButton trigger set
            
            if(options.prevButton != null) {
	            
	            options.prevButton.click(function () {
					
					stopClock();
					animate("prev");
					startClock(); 
	            	
	            });
	            
            }
            
            // If prevButton trigger set
            
            if(options.nextButton != null) {
	            
	            options.nextButton.click(function () {
					
					stopClock();
					animate("next");
					startClock();
	            	
	            });
	            
            }
            
            // If navigation
            
            if(options.navigation == true) {
            	
            	var nav = $("<ul class='rotational-nav'></ul>");
            	
            	nav.appendTo(heros);
            	
            	for (var i = 0; i < slides.length; i++) {
            		
	            	var nav_item = $("<li><a href='' data-slide-index='" + i + "'><span>" + i + "</span></a></li>");
	            	
	            	nav_item.appendTo(nav);
	            	
	            	nav_item.find('a').click(function(e) {
		            	
		            	e.preventDefault();
		            	stopClock();
		            	animateTo(this.getAttribute("data-slide-index"));
		            	startClock();
		            	
	            	});
	            	
	            	navItems.push(nav_item);
	            	
            	}
            	
            }
            
            // Set initial front photo z-index and fades it in
			
			animateIn(activeSlide);
				
			options.afterSlideChange(slides[activeSlide]);
            
            startClock();
	        
            /* ------------------------------------------------------- */
            /* Start Clock                                             */
            /* ------------------------------------------------------- */
            
			function startClock() {
				
				clock = setInterval(function(e) {
					
					animate("next"); 
					
				}, options.delay);
				
			}
	        
            /* ------------------------------------------------------- */
            /* Stop Clock                                              */
            /* ------------------------------------------------------- */
			
	        function stopClock() {
	        	
				clearInterval(clock);
				
	        }
	        
            /* ------------------------------------------------------- */
            /* Animate In Sequence                                     */
            /* ------------------------------------------------------- */
	        
	        function animateIn(index) {
        		
		        slides[index].removeClass(options.inactiveClass);
		        slides[index].addClass(options.activeClass);
		        
		        if(navItems[index]) {
		        	
		        	navItems[index].addClass(options.activeClass);
		        	
		        }
		        
	        }
	        
            /* ------------------------------------------------------- */
            /* Animate Out Sequence                                    */
            /* ------------------------------------------------------- */
	        
	        function animateOut(index) {
		        
		        slides[index].removeClass(options.activeClass);
		        slides[index].addClass(options.inactiveClass);
		        
		        if(navItems[index]) {
		        	
		        	navItems[index].removeClass(options.activeClass);
		        	
		        }
		        
	        }
	        
            /* ------------------------------------------------------- */
            /* Animate                                                 */
            /* ------------------------------------------------------- */
            
			function animateTo(index) {
				
				// If there is only 1 slide, cancel animation
				
				if(slides.length == "1") {
					
					return false;
					
				}
				
				// Store the previously activeSlide
				
				prevActiveSlide = activeSlide;
				activeSlide = index;
				
				// Animate out previousSlide
				
				animateOut(prevActiveSlide);
				
				// Animate in activeSlide
				
				animateIn(activeSlide);
				
				options.afterSlideChange(slides[activeSlide]);
				
			}
	        
            /* ------------------------------------------------------- */
            /* Animate                                                 */
            /* ------------------------------------------------------- */
            
			function animate(direction) {
				
				// Store the previously activeSlide
				
				prevActiveSlide = activeSlide;
				slideDirection = direction;
				
				// If there is only 1 slide, cancel animation
				
				if(slides.length == "1") {
					
					return false;
					
				}					
					
				// Determine the activeImage
				
				if(direction == "next") {
					
					activeSlide++
					
					if(activeSlide == numberSlides) {
						
						activeSlide = 0;
						
					}
					
				} else if(direction == "prev") {
					
					activeSlide--
					
					if(activeSlide < 0) {
						
						activeSlide = numberSlides - 1;
						
					}
					
				} else {
					
					activeSlide = direction;
					
					if (prevActiveSlide < activeSlide) { 
						
						slideDirection = "next";
						
					} else if (prevActiveSlide > activeSlide) { 
						
						slideDirection = "prev"
						
					}
					
				}
				
				// Animate out previousSlide
				
				animateOut(prevActiveSlide);
				
				// Animate in activeSlide
				
				animateIn(activeSlide);
				
				options.afterSlideChange(slides[activeSlide]);
								
			}
			
        });
        
    }
    
})(jQuery);