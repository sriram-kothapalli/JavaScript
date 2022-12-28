//job of this function is construct or create an object
//camel notation: sriramKothapalli
//pascal notation : SriramKothapalli
function Circle (radius) {
        this.radius = radius;
      
        this.draw = function () {
            console.log('draw');
        };
    }
// Circle.call({},1)//target of this.//not understand
// Circle.apply({}[1])//not understand
let circle = new Circle(1);


console.log(circle)
