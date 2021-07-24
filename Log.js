class Log{
    constructor(speed){
        this.x = random([100,500,900]);
        this.y = random([50,150]);
        this.width = 1500;
        this.height = 300;
        this.speed = speed;
        this.spt = createSprite(this.x,this.y,this.width,this.height);
        this.spt.velocityX = this.speed;
        this.spt.shapeColor = "cyan";
        this.spt.addAnimation("log",random([logAnimation,logA]))
        this.spt.scale=0.1;
    }

   
}