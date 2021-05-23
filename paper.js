class Paper {
    constructor(x, y, r) {
      var options = {
        isStatic: false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
      }

      this.x=x;
      this.y=y;
      this.r = r;
      this.image=loadImage("images/paper.png");
      this.body = Bodies.circle(this.x, this.y,(this.r-20)/2, options);
      
     
      World.add(world, this.body);
      }

    display(){
      //ellipseMode(RADIUS);
  var paperpos=this.body.position;
  push();
  translate(paperpos.x,paperpos.y);
  rectMode(CENTER)   
  
  
  fill("pink");
  imageMode(CENTER)
  image(this.image,0,0,this.r,this.r);
     // circle(this.body.position.x, this.body.position.y, this.radius);
    }
    };