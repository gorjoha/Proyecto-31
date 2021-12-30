class Particle
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0,
			friction:1,
			density:1.2
			}
		this.x=x;
		this.y=y;
		this.r=r
		//this.image=loadImage("polygon.png");
		this.color=color(random(0, 255), random(0, 255), random(0, 255));
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var particlepos=this.body.position;		
			push()
			translate(particlepos.x, particlepos.y);
			// rectMode(CENTER)
			rotate(this.body.angle)
			//fill(random(0, 255), random(0, 255), random(0, 255)) Se hace Gamer 
			fill(this.color);
			imageMode(CENTER);
			ellipseMode(RADIUS)
            ellipse(0,0,this.r,this.r);
			//image(this.image, 0,0,this.r*2, this.r*2)
			pop()
			
	}

}