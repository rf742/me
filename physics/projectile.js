console.log("Init script working");
const c = document.getElementById('prcan');
const ctx = c.getContext('2d');
var raf;
console.log("Init script finished");

function clearCanvas(){
	ctx.clearRect(0, 0, c.width, c.height);
}

class Shape {

	constructor(x,y,r,theta,startheight){
		this.x = x;
		this.y = y;
		this.r = r;
		theta = (theta * Math.PI)/180;
		this.vy = 100*Math.sin(theta);
		this.vx = 100*Math.cos(theta);
		this.y0 = startheight;
	}
	move(dt){
		//ctx.clearRect(0,0,c.width,c.height);
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
		ctx.fillStyle = "#FF0000";
		ctx.fill(); 
		//increment the movement of the projectile. Takes the total amount of time elapsed so far.
		this.x =  this.vx * dt;
		this.y = this.y0 + (.5*9.81*dt*dt - this.vy * dt);
//  		window.requestAnimationFrame(draw);
	}
}

function letMeCallYou()
{
	var theta, text;
	theta = document.getElementById("myform").elements["posx"].value;
	console.log(theta);
	if (isNaN(theta) || theta < 0 || theta > 90){
		text = "Please input a number between 0 and 90.";
		document.getElementById("validangle").innerHTML = text;	
	}
	else {
		text = "Launching projectile at " + theta + " degrees.";
		document.getElementById("validangle").innerHTML = text;
		console.log(c.height + "is the height of the canvas"); 
		projectile = new Shape(0,c.height,10, theta, c.height);
		console.log("canvas height: " + c.height);
		var count = 0;
		while (count < 200 && projectile.y <= c.height){
			projectile.move(count/4);
			count = count + 1;
		}
			
		

	
}
}
