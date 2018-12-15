// Number of drops in the screen
ndrops = 1000;
// Width and Height of the screen
wW = $(window).width();
WH = $(window).height();
// Loop
for(i=0; i<=ndrops; i++){
	// drop
	dp = "<li class='d" + i + "'></li>"
	// Ramdon values for X, Y position
	dX =  Math.floor((Math.random()*wW)+1) + "px";
	dY =  Math.floor((Math.random()*WH)+1) + "px";
	// Ramdon values for scale
	dS = Math.floor((Math.random()*1)+1) * 0.3;
	// Ramdon values for Opacity, Width and Height
	dO = (Math.floor((Math.random()*2)+1) * 0.5);
	dW = "25px" //Math.floor((Math.random()*30)+30) + "px";
	dH = Math.floor((Math.random()*20)+18) + "px";
	// Append the drops
	$("ul").append(dp);
	// Apply the random values
	$(".d" + i).css("opacity",dO).css("width",dW).css("height",dH).css({x: dX, y:dY, scale: dS});
}
