class shot {
    constructor(x, y) {
      var options = {
          'restitution':0.5,
          'friction':1.5,
          'density':1.5
      }
      this.body = Bodies.rectangle(x, y, 5, 5, options);
      this.width = 5;
      this.height = 5;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      push()
      translate(pos.x,pos.y)
      rotate(angle)
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };