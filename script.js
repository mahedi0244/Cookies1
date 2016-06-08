/*
document.getElementById("myh1").onclick = function(){   
	document.getElementById("myh1").innerHTML = "This is the updated header" 
};

document.getElementById("myp").onclick = function(){   
	alert(document.getElementById("myp").innerHTML)
};
*/



$(document).ready(function(){  
	if(Cookies.get('myusr') != null){
		
		$("#myh1").text("Welcome "+Cookies.get('myusr'));
		$("h1").click(   
			function(){    
				$("h1").fadeOut(1000);
				$("h1").fadeIn(2000);
			} 
		);
	}
	
});


function validate(){
      
     var usr = document.getElementById("username").value;
     var mail = document.getElementById("email").value;
     
     Cookies.set('myusr', usr);
     Cookies.set('mymail', mail);

 }
