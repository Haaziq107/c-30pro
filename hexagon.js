class Hexagon {
    constructor(x, y, width, height) {
      var options = {
      //isStatic:false,
      //density:1.2,
      restitution:0.1,
      friction:0.1
     
      }
      this.image = loadImage("sprites/Hexagon-Small-Blue-PNG.png");
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      //translate(pos.x,pos.y);
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,40,40);
      //fill("blue");
      //rect(pos.x,pos.y, this.width, this.height);
      pop();
    }
  };
  