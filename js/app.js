$(document).ready(function () {
	$(".ryu").mouseenter(function(){
		$(".ryu-still").hide();
		$(".ryu-ready").show();
	})
	.mouseleave(function(){
		$(".ryu-ready").hide();
		$(".ryu-still").show();
	});
});

$(document).ready(function(){

	$(".ryu").mouseenter(function(){
		$(".ryu-still").hide();
		$(".ryu-ready").show();
	})
	.mouseleave(function(){
		$(".ryu-ready").hide();
		$(".ryu-still").show();

	})
	.mousedown(function(){
		//play hadouken sound
		playHadouken();
		$(".ryu-ready").hide();
		$(".ryu-throwing").show();
		//introduced an object
		$(".hadouken").finish().show().animate(
			{"left": "1020px"},500,
			function(){
				$(this).hide();
				$(this).css("left", "520px");
			}
			);
	// animate it to the right of the screen
})
	.mouseup(function(){
		$(".ryu-throwing").hide();
		$(".ryu-ready").show();

	});
});

function playHadouken() {
	$("#hadouken-sound")[0].volume= 1;
	$("#hadouken-sound")[0].load();
	$("#hadouken-sound")[0].play();
}
$(document).keydown(function(event){

	if(event.which == 90){//while y is a mere variable 90 stands for the z key on the keyboard
		console.log("cool pose");
		$(".ryu-still").hide();
		$(".ryu-ready").hide();
		$(".ryu-cool").show();
	}
});