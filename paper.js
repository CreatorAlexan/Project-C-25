class Paper{
    constructor(){
        this.image = loadImage("paper.png")
        var options={
            isStatic: false,
            restitution:0.3,
            friction:0,
            density:1.2
        }
        this.body = Bodies.circle(this.x,this.y,(this.r-20)/2,options)
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.image)
        pop()
    }
}