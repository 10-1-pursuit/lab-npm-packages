const _ = require("lodash");
const simpleArray = require("./data/simple-array.json");
const yogaClasses = require("./data/yoga.json");
const members = require("./data/members.json");
const newMember = require("./data/new-member");
const membersNoAge = require("./data/members-without-ages.json")
/**
 * Return the number of keys in an object
 * @param {Object} obj -
 * @return {number} The number of keys in the object
 */
function numberOfKeys(obj) {

return _.keys(obj).length    //this retrives all the keys(property names) and returns them as an array. Getting the length to count nunber of

}
//console.log(numberOfKeys(yogaClasses))
/**
 * Remove the falsy values in a numbers array and return the sum
 * @param {numbers[]} array - An array of numbers that can also contain some falsy values
 * @return {number} The sum of the numbers in an array
 */
function sumNumbers(array) {

  let correctArray = _.compact(array)  // this function weeds out all falsy values (null, undefined, 0, "") and returns an array of true values.
  return _.sum(correctArray)  // called on numbers-finds the sum.
}
//console.log(sumNumbers(simpleArray))
/**
 * Convert a two-dimensional array of new member data (each inner array having two values: the first being the key, the second being the value) into an object
 * @param {Array[]} member -
 * @return {number} The sum of the numbers in an array
 */
function newMemberArrayToObject(member) {

 return  _.fromPairs(member);   // takes an array of key/value pairs and returns objected created from them. Where the first element of each becomes the key and the second element becomes the value.
  
}

/**
 * Return an array of objects that grouped by instructors from the classes array of objects
 * @param {Object[]} collection - an array of yoga class objects
 * @return {Object[]} - the reshaped collection where the classes are grouped by instructor name
 */
function groupClassByInstructor(collection) {

 return _.groupBy(collection,"instructor" );     // a function with 2 argu. the array and the criterion your looking for. Creates a object where the keys are the "instructor" and the values are there stuff. 
}

/**
 * Remove the age key from the members array of object
 * @param {Object} collection - an array of member objects
 * @return {number} The array of member objects, each one without the age field
 */
function omitAgeFromMembers(collection) {

  return _.map(collection, (members) => _.omit(members, "age"));   // using .map to apply a function/.omit to each object.. Omit creates a new object by omitting the criterion this case age (as a string)
}

/**
 * Return the count of the number of classes a particular instructor teaches
 * @param {Object[]} collection - An array of yoga class objects
 * @param {String} instructorName - The name of the instructor
 * @return {number} The sum of the numbers in an array
 */
function countClassesByInstructor(collection, instructorName) {
//(instructor != undefined) ? _.countBy(collection, instructor) : "There is no instructor by that name."
const filteredCollection = _.filter(collection, {'instructor': instructorName}).length;  //this will filter the collection by the name as a string and result in an array of objects.
 return (filteredCollection > 0) ? filteredCollection : "There is no instructor by that name.";  // a ternary ? = if; : = else

}

/**
 * Remove inactive members from the members array
 * @param {Object} collection - an array of member objects
 * @return {number} The array of member objects with only active members
 */
function removeInactiveMembers(collection) {

let filteredMembers = _.filter(collection, (members) => members.currentMember)    //if the method finds a true value it keeps it, if false it removes it.
return filteredMembers;
}

/**
 * Get a list of unique class titles and their price
 * @param {Object} collection - an array of yoga class objects
 * @return {number} An array of objects that have a unique title and a price
 */
function getUniqueClasses(collection) {
                                                            //destructuring each elment uses the (title, price in cents) and {returns price in cents}
  let NewClassInfo = _.map(_.uniqBy(collection, "title"), ({title, priceInCents }) => ({title, priceInCents})); // calling _.map to apply a function to each index of our array. 
  return NewClassInfo                // .creates a  unique array based on the title key property, creating a new object with the first occurence of it found. 
}

/**
 * Get a list of classes organized by title, then by level.
 * The titles should be in ascending order, the levels should be in descending order
 * @param {Object} collection - an array of yoga class objects
 * @return {number} An array of objects that are organized by title then by level. The array should only have the title, instructor, and level fields
 */
function orderClassesByTitleAndLevel(collection) {
  let reorganizedByClasses = _.map(                                // A. .map 2 arguements: 1. the reorder array created by Orderby. 2. callback function.
    _.orderBy(collection, ['title', 'level'], ['asc', 'desc']),  // B. OrderBy 3 arguments:1. the array of yoga classes, 2. the portion to be sorted (in our case an array of title/level), 3. the order which is asc/dec 
    ({ title, instructor, level }) => ({ title, instructor, level })  // destructured assignment that (uses) the title, instructor and level (key value pairs) and {returns} only those properties.
  );
 
   return reorganizedByClasses;
}

module.exports = {
  numberOfKeys,
  sumNumbers,
  newMemberArrayToObject,
  groupClassByInstructor,
  omitAgeFromMembers,
  countClassesByInstructor,
  removeInactiveMembers,
  getUniqueClasses,
  orderClassesByTitleAndLevel,
};
