class Ball { 
    constructor(x,y, radius){
var options= {
    isStatic:false,
    restitution:1,
    friction:0.3,
    density:1
}
        this.body=Bodies.circle(x,y,radius, options);
        this.radius=radius;
        

        World.add(world, this.body);

    }
display(){
   var pos=this.body.position
   
    ellipseMode(RADIUS);
    fill("red");
    ellipse(pos.x,pos.y,this.radius,this.radius);
}
}