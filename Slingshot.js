class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.5,
            length: 10
        }
        this.pointB = pointB
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot);
    }
    attach(body){
        this.Slingshot.bodyA=body;
    }

    fly(){
        this.slingshot.bodyA=null;
    }
    display(){
        push();
        if (this.slingshot.bodyA){
            var pA=this.slingshot.bodyA.position;
            var pB=this.pointB;
            strokeWeight(4);
            line(pA.x,pA.y,pB.x,pB.y);
                }
        pop();
    }
    };
    
