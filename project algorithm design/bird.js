
class bird {
    constructor (x,y){
       
        this.body =  Bodies.circle(x,y,10,{'restitution': 0.5,'friction':1.3,'density':1});
        this.radius = 10;
        
        World.add(world,this.body);
        
    }

    display(){
        var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        var angle = this.body.angle;
        push();
        translate(5,5);
        rotate(angle);
        
        strokeWeight(2);
        stroke("black");
        fill("red" );
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius);
        pop();
        
    }
}


