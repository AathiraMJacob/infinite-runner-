class Pig{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
       // this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadAnimation("p1.png","p2.png","p3.png");
       // World.add(world, this.body);
      }
      display(){
       // var angle = this.body.angle;
        push();
       // translate(this.body.position.x, this.body.position.y);
       // rotate(angle);
        imageMode(CENTER);
        animation(this.image, 70, 250, this.width, this.height);
        pop();
      }
}