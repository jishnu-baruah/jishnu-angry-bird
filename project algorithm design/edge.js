class edge {
    constructor (x,y,width,height){
       
        this.body =  Bodies.rectangle(x,y,width,height,{'isStatic':true,'density':6});
        this.width= width;
        this.height = height;
        World.add(world,this.body);
        
    }

    display(){
        var pos = this.body.position
        stroke(rgb(65,42,24));
        fill(rgb(65,42,24));
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        
    }
}