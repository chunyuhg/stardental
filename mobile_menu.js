document.write("<script type='text/javascript' src='./contact_index.js'></script>");
$(document).ready(function() {
	
		
		/*collapse sub menu when the first click again*/
		$('#nav>li>a').click(function(event) {
			
			if(event.target.id=='#ourservice')
			{
				
				 $('#nav li:hover ul').fadeToggle();
				
			};

		});	
		/*when the button click show and collapse the menu in phone modole up */
			
		$('#button_menu').click(function(event) 
		
		{
				// $('#nav').fadeToggle();
				var i=document.getElementById("navMenu")
				
				var a=window.innerWidth;
				
				
				if(i.style.display == "none" || i.style.display == '')
				{
					i.style.display ='block'
				}else{
					i.style.display ='none'
										
				}
				
				
				
		});
		/*when the screen size changed refresh page*/
		$(window).resize(function() {
			var i=document.getElementById("navMenu")
			if ($(window).width() > 700 || $(window).width() < 300 )
			{
				
				i.style.display ='block'
			}else
			{
				i.style.display ='none'
			}
			/*************************************************/
			
			
		});
		$("head").append("<link rel='stylesheet'  type='text/css' href='./contact_index.css'>");
		$("body").append($script);
		
		
		
});
function myFunction() {
			   $(".sub-index").toggle();
			};

