class Dustbin {
    constructor(x, y, width, height) {
      var options = {
          isStatic: true,
          'restitution':0,
          'friction':1,
          'density':0.1
      }
      this.image=loadImage("images/dustbingreen.png");
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = 250;

      World.add(world, this.body);
    }
    display(){
      rectMode(CENTER);

      fill("white");
      imageMode(CENTER)
      image(this.image,600,518,this.width,this.height);

      rect(this.body.position.x, this.body.position.y, this.width, this. height);
    }
  };