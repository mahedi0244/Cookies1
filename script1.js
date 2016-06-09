$("h1").click(   
	function(){   
		if(Cookies.get('myusr') != null){ 
			$("h1").fadeOut(1000);
			$("h1").fadeIn(2000);
		}
	} 
);


