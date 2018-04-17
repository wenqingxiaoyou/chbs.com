
$(document).ready(function(){

	current = 1;
	button = 1;
	images = 3;
	width = 345;
	
	$('#p1').animate({"left":"0px"},400,"swing");
	
	$("#next").click(function(){
		button = current;
		current++
		if(current==(images + 1)){
			current = 1
		}
		animateLeft(current, button)
	});
	
	$("#previous").click(function(){
		button = current;
		current--
		if(current == 0){
			current = images
		}
		animateRight(current, button)
	});
	
	$("#abuttons li").mouseover(function(){
		button = current;
		clickButton = $(this).attr('id');
		current = parseInt(clickButton.slice(1));
		if(current > button){
			animateLeft(current, button)
		}
		if(current < button){
			animateRight(current, button)
		}
	});
	
	function animateLeft(current, button){
		$('#p' + current).css("left", width + "px");
		$('#p' + current).animate({"left": "0px"},400,"swing");
		$('#p' + button).animate({"left": -width + "px"},400,"swing");
		setbutton()
	}
	
	function animateRight(current, button) {
		$('#p' + current).css("left", -width + "px");
		$('#p' + current).animate({"left": "0px"},400,"swing");
		$('#p' + button).animate({"left": width + "px"},400,"swing");
		setbutton()
	}
	
	function setbutton(){
		$('#a' + button).children("a").removeClass("current");
		$('#a' + current).children("a").addClass("current");
	}

});

