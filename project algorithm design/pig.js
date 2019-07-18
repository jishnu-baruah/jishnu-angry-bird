
class pig {
    constructor (x,y){
       
        this.body =  Bodies.circle(x,y,39,{'restitution': 0.5,'friction':1.3,'density':1});
        this.radius = 39;
        
        World.add(world,this.body);
        
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(5,5);
        rotate(angle);
        
        strokeWeight(2);
        stroke("yellow");
        fill("green" );
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius);
        pop();
        
    }
}


