
class box {
    constructor (x,y,width,height){
       
        this.body =  Bodies.rectangle(x,y,width,height,{'restitution': 1,'friction':1.3,'density':2});
        this.width= width;
        this.height = height;
       World.add(world,this.body);
        
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(5,5);
        rotate(angle);
        
        strokeWeight(1);
        stroke(0);
        fill( rgb(226,145,38));
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        pop();
        
    }
}

