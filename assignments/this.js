/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 */


//1. Window Binding - is the entire javascript or the global.


///////////////////////////////////////////////


//2. Implicit Binding - points to object on which functionn called, (left of the.)


///////////////////////////////////////////////////


//3. New Binding - use new keyword, creates object and 'this points to it


////////////////////////////////////////////////////////////////


//4. Explicit Binding - tells javascript to set 'this' to point to certain value, using call, apply or bind


///////////////////////////////////////////////////////////////////


//write out a code example of each explanation above


// Principle 1

// code example for Window Binding


function hello() {
    console.log(this.greet);
}

const greet = "helllo there";

hello();
console.log(this);




// Principle 2

// code example for Implicit Binding


let mydog = {
    name: 'Kaylee',
    sound: '2 wof wof',
    speak: function() {
        console.log(this.sound);
    }
}
mydog.speak();




//Principle 3

// code example for New Binding


function Doggy(saying) {
    this.fact = saying;
}
let mydogb = new Doggy('3 Kaylee is all bark, no bite');
console.log(mydogb.fact);





// Principle 4

//code example for Explicit Binding

function animal() {
    console.log(this.speak);
}
const dog = {
    name: 'Kaylee',
    speak: '4 woooooooof',
}
animal.call(dog);