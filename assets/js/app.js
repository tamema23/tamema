$(document).ready(
function(){
    $(".btn-collapse").click(function(){
    	$("aside").toggle(1000);
        
    })
    
	var car = $("#slider")
	
	
$("#bg-2 h1").animate({
	fontSize: "100",
}, 700);
$("#bg-2 h1").animate({
	fontSize: "70",
	fontWeight: "900"
}, 700, function(){
			$("#show-it").fadeIn(1000);
			});
	
	
});