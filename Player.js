class Player{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.spt = createSprite(this.x,this.y,50,50);
        this.spt.shapeColor="white"
        this.spt.addAnimation("player",playerImg);
        this.spt.scale=0.08;
    }

    move(xdir,ydir){
        this.spt.x += xdir;
        this.spt.y += ydir;
    }
}