class Boulder{
	constructor(x,y,r){
	var options ={
		resistution:0.3,
		friction:5,
		density:1,
	}
		this.x=x;
		this.y=y;
		this.r=r
        this.image = loadImage("boulder.png");
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var boulpos=this.body.position;		
			push()
			translate(boulpos.x, boulpos.y);
            imageMode(CENTER);
			ellipseMode(CENTER);
            ellipse(0,0,this.r,this.r)
            image(this.image, 0, 0, this.r,this.r);
			pop()
	}
}