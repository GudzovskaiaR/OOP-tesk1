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
