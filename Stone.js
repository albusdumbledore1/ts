class Stone {
    constructor(x,y){
    
      var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = 50;
      this.height = 50;
      
    //this.image = loadImage("sprites/base.png");
    World.add(world, this.body);
     // this.image = loadImage("sprites/bird.png");
    }

    
    display(){
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
      var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        //imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
  }



 