namespace L11_SeaworldInheritance {
    export class Saturn extends MovingObject{

        radius: number;
       

        constructor() {
            super();
            this.setRandomPosition();
            this.setRandomRadius();
        }

        
        setRandomPosition(): void {
            this.x = Math.random() * canvas.width - 200;
            this.y = Math.random() * canvas.height - 100;
        }


        setRandomRadius(): void {
            this.radius = Math.random() * 10;
           
        }
draw(){


    let img = new Image(); 
    img.src = 'Saturn.png'; 
    crc2.drawImage(img,this.x,this.y, 200, 200); 

}
        move(): void {
            this.x -= Math.random()+40;
            this.y -= Math.random()*10;
        
        if (this.x > canvas.width) {
        this.x = 0;
    }
       if (this.x < 0) {
        this.x = canvas.width;
    }      
if (this.y > canvas.height) {
        this.y = 0;
    }
       if (this.y < 0) {
        this.y = canvas.height;
    }       }

    } //class BubblesLeft zu
} //namespace zu