class stick {
    constructor (x,y,height,angle){
       
        this.body =  Bodies.rectangle(x,y,20,height,{'friction':1.0,'density':1.0});
        this.width= 20;
        this.height = height;
        Matter.Body.setAngle(this.body,angle);
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