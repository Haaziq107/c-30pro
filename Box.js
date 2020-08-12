class Block extends BaseClass {
  constructor(x, y) {
      super(x,y,50,50);
      this.image = loadImage("sprites/images.png");
      this.visiblity=255;
      World.add(world, this.body);
  }

  display(){
    var pos =this.body.position;
      console.log(this.body.speed);
      if(this.body.speed<10){
        super.display();
      }else{
        World.remove(world,this.body)
        push();
        this.visiblity=this.visiblity-10;
        tint(255,this.visiblity);
        image(this.image,this.body.position.x,this.body.position.y);
        pop();
      }
  }
};
