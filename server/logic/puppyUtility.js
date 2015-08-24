var Puppy = require("../models/puppies");
var puppyData = require("../models/puppies");
var tempArray = puppyData.tempPuppyArray;

function handleAll() {
  return tempArray;
}

function handleSingleGet(id) {
  var pup = tempArray.filter(function(puppy){
    return puppy.id === +id;
  });

  if (pup.length>0){
    return pup[0];
  } else {
    return {message:"Puppy ain't existing here"};
  }
}

function handlePost(id, name, age) {
  var pup = tempArray.filter(function(puppy){
    return puppy.id === +id;
  });

  if (pup.length > 0) {
    return {message: "That puppy already exists!"};
  } else {
    var newPostPuppy = new Puppy(+id, name, +age);
    tempArray.push(newPostPuppy);
    return {message: "success", puppy: newPostPuppy};
  }
}

function handlePut(id, submittedBodyObject) {
  if (Object.keys(submittedBodyObject).length === 0) {
    return {message: "Please enter a age or a name"};
  }
  if (submittedBodyObject.age && isNaN(+submittedBodyObject.age)) {
    return {message: "Please enter a number for puppies age"};
  }
  var pup = tempArray.filter(function(puppy){
    return puppy.id === +id;
  });
  if (pup.length>0){
    for (var i = 0; i < tempArray.length; i++) {
      if (tempArray[i].id === +id) {
        for (var key in submittedBodyObject) {
          if (key === 'name') {
            tempArray[i].name = submittedBodyObject.name;
          } else if (key === 'age'){
            tempArray[i].age = submittedBodyObject.age;
          }
        }

      }
    }
    return tempArray;
  } else {
    return {message: "Puppy ain't existing here"};
  }
}

function handleDelete(id) {
  var pup = tempArray.filter(function(puppy){
    return puppy.id === +id;
  });
  if (pup.length > 0) {
    for (var i = 0; i < tempArray.length; i++) {
      if (tempArray[i].id === +id) {
        var tempPuppy = tempArray.splice(i, 1);
        return {
          message: "that puppy is gone!",
          puppy: tempPuppy
        };
      }
    }
  } else {
    return "puppy already dead";
  }
}

module.exports = {
  handleAll: handleAll,
  handleSingleGet: handleSingleGet,
  handlePost: handlePost,
  handlePut: handlePut,
  handleDelete: handleDelete
};
