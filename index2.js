class rectangle{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    static whoami(){
        return" i am a rectangle"; 
    }
    area(){
return this.width * this.height;
    }
    perimeter(){
return this.width
    }
}
let r1 = new rectangle(1, 2, "red");
let r2 = new rectangle(100, 200, "blue");