// Create a dog object with name and numLegs properties, and set them to a string and a number, respectively.
let dog = {
  name: "Marta",
  numLegs: 4,
};

// Print both properties of the dog object to your console.
let dog = {
  name: "Spot",
  numLegs: 4,
};
console.log(`Name: ${dog.name}, numLegs:${dog.numLegs}`);

// Using the dog object, give it a method called sayLegs. The method should return the sentence This dog has 4 legs.
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function () {
    return "This dog has " + dog.numLegs + " legs.";
  },
};

dog.sayLegs();

// Modify the dog.sayLegs method to remove any references to dog. Use the duck example for guidance

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function () {
    return "This dog has " + this.numLegs + " legs.";
  },
};

dog.sayLegs();

// Create a constructor, Dog, with properties name, color, and numLegs that are set to a string, a string, and a number, respectively.

function Dog() {
  this.name = "Marta";
  this.color = "ginger";
  this.numLegs = 4;
}

// Use the Dog constructor from the last lesson to create a new instance of Dog, assigning it to a variable hound

function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
let hound = new Dog;

// Create another Dog constructor. This time, set it up to take the parameters name and color, and have the property numLegs fixed at 4. Then create a new Dog saved in a variable terrier. Pass it two strings as arguments for the name and color properties.

function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;

}

let terrier = new Dog;

// Create a new instance of the House constructor, calling it myHouse and passing a number of bedrooms. Then, use instanceof to verify that it is an instance of House.

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

let myHouse = new House;
myHouse.numBedrooms = 2;
myHouse instanceof House
 
// Add the own properties of canary to the array ownProps

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
for(let prop in canary){
  if(canary.hasOwnProperty(prop)){
    ownProps.push(prop)
  }
}

// Add a numLegs property to the prototype of Dog
function Dog(name) {
  this.name = name;
}
 
let beagle = new Dog("Snoopy");
Dog.prototype.numLegs = 4;

// Add all of the own properties of beagle to the array ownProps. Add all of the prototype properties of Dog to the array prototypeProps.

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];
for(let prop in beagle){
  if(beagle.hasOwnProperty(prop)){
    ownProps.push(prop) 
  
  }else{
    prototypeProps.push(prop)
  }
}
// Write a joinDogFraternity function that takes a candidate parameter and, using the constructor property, return true if the candidate is a Dog, otherwise return false.
function Dog(name) {
  this.name = name;
}
function joinDogFraternity(candidate) {
return candidate.constructor === Dog
  
}
// Add the property numLegs and the two methods eat() and describe() to the prototype of Dog by setting the prototype to a new object.

function Dog(name) {
  this.name = name;
}

Dog.prototype = {
 numLegs: 4,
 eat: function(){
   console.log('I want to eat!')
 },
 describe:function(){
console.log(`I have  ${this.numLegs} legs.`)
 }

};
// Define the constructor property on the Dog prototype.

function Dog(name) {
  this.name = name;
}

Dog.prototype = {
constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

// Use isPrototypeOf to check the prototype of beagle.

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);

// Modify the code to show the correct prototype chain

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle); 


Object.prototype.isPrototypeOf(Dog.prototype);

// The eat method is repeated in both Cat and Bear. Edit the code in the spirit of DRY by moving the eat method to the Animal supertype.

function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
 
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
  
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
   eat: function() {
    console.log("nom nom nom");
  }

};
// Use Object.create to make two instances of Animal named duck and beagle.

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};


let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);

// Modify the code so that instances of Dog inherit from Animal.

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

Dog.prototype = Object.create(Animal.prototype);


let beagle = new Dog();

// Fix the code so duck.constructor and beagle.constructor return their respective constructors.

function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);


Bird.prototype.constructor = Bird;

Dog.prototype.constructor = Dog;


let duck = new Bird();
duck.constructor;
let beagle = new Dog();
beagle.constructor;

// Add all necessary code so the Dog object inherits from Animal and the Dog's prototype constructor is set to Dog. Then add a bark() method to the Dog object so that beagle can both eat() and bark(). The bark() method should print Woof! to the console.
 
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.eat = function(){
  console.log("nom nom nom")
};
Dog.prototype.bark = function(){
  console.log("Woof!")
};






let beagle = new Dog();

// Override the fly() method for Penguin so that it returns the string Alas, this is a flightless bird.

function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;
Penguin.prototype.fly = function() { return "Alas, this is a flightless bird."; };







let penguin = new Penguin();

// Create a mixin named glideMixin that defines a method named glide. Then use the glideMixin to give both bird and boat the ability to glide.

let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

let glideMixin = function(obj){
  obj.glide  = function(){
    console.log("Glide!")
  }
}
glideMixin(bird);
glideMixin(boat);

// Change how weight is declared in the Bird function so it is a private variable. Then, create a method getWeight that returns the value of weight 15.

function Bird() {
  let weight = 15;
  this.getWeight = function(){
    return weight;
  }


}
// Rewrite the function makeNest and remove its call so instead it's an anonymous immediately invoked function expression (IIFE).

(function () {
  console.log("A cozy nest is ready");
})();

// Create a module named funModule to wrap the two mixins isCuteMixin and singMixin. funModule should return an object.

let isCuteMixin = function(obj) {
  obj.isCute = function() {
    return true;
  };
};
let singMixin = function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
};

let funModule = (function(){
  return{
   isCuteMixin:function(obj) {
  obj.isCute = function() {
    return true;
  };
},
singMixin:function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
}

  }
})();
