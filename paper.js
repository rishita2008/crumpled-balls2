class Paper {
    constructor(){
        var options={
            isStatic: false,
            restitution: 0.5,
            friction: 0.5,
            density: 2    

        }
        this.image=loadImage("paper.png");
        
      this.body=Bodies.circle(110,20,70,options)  
      World.add(world,this.body)
    }
    
    display(){
     push();
     translate(this.body.position.x,this.body.position.y);
     rotate();
     imageMode(CENTER);
     image(this.image,0,0,70); 
     pop();
    }
}