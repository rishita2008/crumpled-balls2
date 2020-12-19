class Ground{
    constructor(){
        this.ground=Bodies.rectangle(width/2,height-35,width,10,{isStatic: true})
        World.add(world,this.ground);
    }

    display(){
      rectMode(CENTER)
      fill("red")
      rect(this.ground.position.x,this.ground.position.y,1200,10)  
    }
}