class FichaRedonda extends TipoFicha{

    constructor(posX, posY, radius, fill, context){
        super(posX, posY, fill, context)
        this.radius = radius
    }

    draw(){
        super.draw();
        ctxj1.beginPath();
        ctxj1.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
        ctxj1.fill();
        ctxj1.closePath();
        ctxj2.beginPath();
        ctxj2.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
        ctxj2.fill();
        ctxj2.closePath();
    }

    getRadius(){
        return this.radius;
    }

    isPointInside(x,y){
        let _x = this.posX - x;
        let _y = this.posY - y;        
        return Math.sqrt(_x * _x * _y * _y) < this.radius;
    }
}