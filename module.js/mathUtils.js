//importing modules from math.js
import {sum,square,pi} from "./math.js"
const radius1=5;
const radius2=25;
function areaCircle(radius)
{
    return (pi*radius*radius);
}
console.log(areaCircle(radius1));
console.log(areaCircle(radius2));
console.log("Sum of two radius");
console.log(sum(radius1,radius2));
