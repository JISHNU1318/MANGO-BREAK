class Stone{
    constructor(){
        this.image=loadImage("images/stne.png");
        this.stone=Bodies.circle(260,441,25);
        World.add(world,this.stone);
    }
    display(){
        push();
        translate(this.stone.position.x,this.stone.position.y);
        imageMode(CENTER);
        ellipseMode(CENTER);
        image(this.image,0,0,50,50);
    }
}