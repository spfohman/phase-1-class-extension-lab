// Your code here
class Polygon{
    constructor(array){
        this.array = array
    }
    get countSides(){
        return this.array.length;
    }
    get perimeter(){
        let sum = 0;
        for(let n of this.array){
            sum += n;
        }
        return sum;
    }
}
class Triangle extends Polygon{
    constructor(array){
        super(array)
        super.countSides
        super.perimeter
    }
    get isValid(){
        let side1 = this.array[0];
        let side2 = this.array[1];
        let side3 = this.array[2];
        return((side1+side2>side3)&&(side2+side3>side1)&&(side3+side1>side2))
        
        

    }
    get perimeter(){
        return super.perimeter
    }
}
class Square extends Polygon{
    constructor(array){
        super(array)
        super.countSides
        super.perimeter
    }
    get isValid(){
        let side1=this.array[0]
        let side2=this.array[1]
        let side3=this.array[2]
        let side4=this.array[3]
        return((side1==side2)&&(side1==side3)&&(side1==side4))
    }
    get area(){
        let side1 = this.array[0]
        let side2 = this.array[1]
        return side1 * side2;
    }
}