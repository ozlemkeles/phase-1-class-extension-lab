// Your code here
class Polygon {
    constructor(sides) {
      this.sides = sides;
    }
  
    get countSides() {
      return this.sides.length;
    }
  
    get perimeter() {
      return this.sides.reduce((acc, side) => acc + side, 0);
    }
  }
  
  class Triangle extends Polygon {
    constructor(sides) {
      super(sides);
    }
  
    get isValid() {
      if (this.countSides === 3) {
        const [a, b, c] = this.sides.sort();
        return a + b > c;
      } else {
        return false;
      }
    }
  }
  
  class Square extends Polygon {
    constructor(sides) {
      super(sides);
    }
  
    get isValid() {
      return new Set(this.sides).size === 1;
    }
  
    get area() {
      return this.sides[0] ** 2;
    }
  }
  