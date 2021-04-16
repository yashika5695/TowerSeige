class Block{
    constructor(x, y, width, height) {
        var options = {
         restitution:0.4 ,
         friction:0.04            
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visiblity = 225
        World.add(world, this.body);
      }
      score(){
        if(this.visiblity<0 && this.visiblity>-105){
          score ++
        }
      }
      display(){
        if(this.body.speed<3 ){
          
          var angle = this.body.angle;
          var pos= this.body.position;
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          rectMode(CENTER);
          rect(0,0,this.width, this.height);
          pop();
        }
        else{
          World.remove(world , this.body)
          push()
          this.visiblity = this.visiblity-5
          pop()
        }
       
      }
}
