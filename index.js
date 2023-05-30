const _ = require("lodash");
const simpleArray = require("./data/simple-array.json");
const yogaClasses = require("./data/yoga.json");
const members = require("./data/members.json");
const newMember = require("./data/new-member");

/**
 * Return the number of keys in an object
 * @param {Object} obj -
 * @return {number} The number of keys in the object
 */
function numberOfKeys(obj) {
  return _.keys(obj).length;
};

/**
 * Remove the falsy values in a numbers array and return the sum
 * @param {numbers[]} array - An array of numbers that can also contain some falsy values
 * @return {number} The sum of the numbers in an array
 */
function sumNumbers(array) {
  array = _.compact(array);
  return _.sum(array);
};

/**
 * Convert a two-dimensional array of new member data (each inner array having two values: the first being the key, the second being the value) into an object
 * @param {Array[]} member -
 * @return {number} The sum of the numbers in an array
 */
function newMemberArrayToObject(member) {
  return _.fromPairs(member); // The _.fromPairs() method returns an object composed form key-value pairs. This method is the inverse of _.toPairs() method.
};


/**
 * Return an array of objects that grouped by instructors from the classes array of objects
 * @param {Object[]} collection - an array of yoga class objects
 * @return {Object[]} - the reshaped collection where the classes are grouped by instructor name
 */
function groupClassByInstructor(collection) {
  return _.groupBy(collection, 'instructor'); // creates an object of keys generated from the result of collection, '
};

/**
 * Remove the age key from the members array of object
 * @param {Object} collection - an array of member objects
 * @return {number} The array of member objects, each one without the age field
 */
function omitAgeFromMembers(collection) {
  return _.map(collection, member => _.omit(member, 'age'));// map iterates over each member object in the collection array. member is a variable that is created for fat arrow syntax.
  //omit removes the age inside member which is the variable created from collection and returns the array of member objects, without the age field.
};

/**
 * Return the count of the number of classes a particular instructor teaches
 * @param {Object[]} collection - An array of yoga class objects
 * @param {String} instructorName - The name of the instructor
 * @return {number} The sum of the numbers in an array
 */
function countClassesByInstructor(collection, instructorName) {
  const filteredCollection = _.filter(collection, { 'instructor': instructorName }).length; // filter function filters the collection data based on the predicate instructor and returns a new array containing matches found 
  return filteredCollection > 0 ? filteredCollection : "There is no instructor by that name."; // if filteredCollection which is the length of the filtered array from collection is greater than 0 return the filtered array
  // if the length is 0 or negative then that means there are no instructors inside the filteredCollection
};

/**
 * Remove inactive members from the members array
 * @param {Object} collection - an array of member objects
 * @return {number} The array of member objects with only active members
 */
function removeInactiveMembers(collection) {
  return _.filter(collection, { 'currentMember': true }); // filter iterates through collection and the predicate { 'currentMember': true } is used to specify the condition for filtering which returns an array of filtered currentMember that is true
};

/**
 * Get a list of unique class titles and their price
 * @param {Object} collection - an array of yoga class objects
 * @return {number} An array of objects that have a unique title and a price
 */
function getUniqueClasses(collection) {
  return _.map(_.uniqBy(collection, 'title'), ({ title, priceInCents }) => ({ title, priceInCents })); //uniqBy finds unique objects in collection based on 'title' property and returns the new array which is the first argument
  // we use destructuring to extract title and priceInCents and this is the 2nd argument. the array gets passed through the map function
  // It created a new object for each iteration and returns an array of these new TRANSFORMED objects that represnt the uniq class title and prices.
};

/**
 * Get a list of classes organized by title, then by level.
 * The titles should be in ascending order, the levels should be in descending order
 * @param {Object} collection - an array of yoga class objects
 * @return {number} An array of objects that are organized by title then by level. The array should only have the title, instructor, and level fields
 */
function orderClassesByTitleAndLevel(collection) {
  return _.map(_.orderBy(collection, ['title', 'level'], ['asc', 'desc']), ({ title, instructor, level }) => ({ title, instructor, level })); // orderBy sorts collection based on title in ascending order and level in descending order
  // The sorted collection is passed into _.map which is iterating through each object in collection. During each interation the object is destructure, and the extracted object properties are used to creat a new object with same properties.
}; // It returns an array of objects with title instructor and level properties 

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
