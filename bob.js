class Bob {
    constructor(x, y, r) {
      var options = {
        isStatic: false,
        restitution:0.3,
        friction:0.5,
        density:1.2
      }
      this.body = Bodies.circle(x, y,r, options);
      this.r=r;
       
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill("red");
      ellipse(0, 0, this.r);
      pop();
    }
  };
  function keyPressed(){
if(keyCode === UP_ARROW){
Matter.Body.applyForce(p.body,p.body.position,{x:20,y:-10})

}
  }