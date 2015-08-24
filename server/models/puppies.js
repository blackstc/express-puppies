function Puppy(id, name, age) {
  this.id = id,
  this.name = name,
  this.age = age;
}

var tempPuppyArray = [];
var newPuppy = new Puppy(1, "Chuck", 10);
var johnPuppy = new Puppy(2, "john", 6);
var dewPuppy = new Puppy(3, "dew", 4);

tempPuppyArray.push(newPuppy, johnPuppy, dewPuppy);

module.exports = {
  Puppy: Puppy,
  tempPuppyArray: tempPuppyArray
};
