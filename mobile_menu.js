$(document).ready(function() {
		
		$('#nav>li>a').click(function(event) {
			
			if(event.target.id=='#ourservice')
			{
				

				//event.preventDefault();
				 $('#nav li:hover ul').fadeToggle();
				
			};
		
			//event.preventDefault();
			//$('#nav>li>a').toggleClass('active');
			//$('#nav>li').toggleClass('hover');
			
			//alert(1);

		});	
		$('#button_menu').click(function(event) 
			
			
		{
				
				var i=document.getElementById("navMenu")
				//alert(i.style.display);
				if(i.style.display == "none" || i.style.display == '')
				{
					i.style.display ='block'
				}else{
					i.style.display='none'
				};
				
				
		});
		
});