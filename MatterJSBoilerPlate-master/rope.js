class rope {
    constructor(bodyA,bodyB) {
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            length: 12,
            stiffness: 0.02
        }

        this.chain = Constraint.create(options);
        World.add(world,this.chain);
        
    }
    display() {
        var PointAX = this.chain.bodyA.position.x;
        var PointAY = this.chain.bodyA.position.y;
        var PointBX = this.chain.bodyB.position.x;
        var PointBY = this.chain.bodyB.position.y;
        strokeWeight(4);
        line(PointAX,PointAY,PointBX,PointBY);
    }
}