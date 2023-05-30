const _ = require("lodash");
const simpleArray = require("./data/simple-array.json");
const yogaClasses = require("./data/yoga.json");
const members = require("./data/members.json");
const newMember = require("./data/new-member");
const membersWithoutAge = require("./data/members-without-ages.json")

/**
 * Return the number of keys in an object
 * @param {Object} obj -
 * @return {number} The number of keys in the object
 */
function numberOfKeys(obj) {

  return _.keys(obj).length;

}

/**
 * Remove the falsy values in a numbers array and return the sum
 * @param {numbers[]} array - An array of numbers that can also contain some falsy values
 * @return {number} The sum of the numbers in an array
 */
function sumNumbers(array) {
  const compactArray = _.compact(array);

  return _.sum(compactArray);
}

/**
 * Convert a two-dimensional array of new member data (each inner array having two values: the first being the key, the second being the value) into an object
 * @param {Array[]} member -
 * @return {number} The sum of the numbers in an array
 */
function newMemberArrayToObject(member) {

  const newMemberObj = _.fromPairs(member);

  return newMemberObj;
}

/**
 * Return an array of objects that grouped by instructors from the classes array of objects
 * @param {Object[]} collection - an array of yoga class objects
 * @return {Object[]} - the reshaped collection where the classes are grouped by instructor name
 */
function groupClassByInstructor(collection) {

  const groupedByInstructor = _.groupBy(collection, "instructor")

  return groupedByInstructor;
}

/**
 * Remove the age key from the members array of object
 * @param {Object} collection - an array of member objects
 * @return {number} The array of member objects, each one without the age field
 */
function omitAgeFromMembers(collection) {

  const removeAge = membersWithoutAge

  return removeAge;
}

/**
 * Return the count of the number of classes a particular instructor teaches
 * @param {Object[]} collection - An array of yoga class objects
 * @param {String} instructorName - The name of the instructor
 * @return {number} The sum of the numbers in an array
 */
function countClassesByInstructor(collection, teachersName) {

  let count = 0;
  let howManyClasses = _.filter(collection, { "instructor": teachersName }).length // object.keys(obj).length // propertyOf /findKey
  let countClasses = _.countBy(collection, { "instructor": teachersName }).length //count++

  if (howManyClasses > 0) {
    return howManyClasses;
  } else {

    return "There is no instructor by that name."
  }

}

/**
 * Remove inactive members from the members array
 * @param {Object} collection - an array of member objects
 * @return {number} The array of member objects with only active members
 */
function removeInactiveMembers(collection, membershipStatus) {

  let InactiveMembersBeGone = _.filter(collection, { "currentMember": true })

  if (InactiveMembersBeGone)

    return InactiveMembersBeGone;
}

/**
 * Get a list of unique class titles and their price
 * @param {Object} collection - an array of yoga class objects
 * @return {number} An array of objects that have a unique title and a price
 */
function getUniqueClasses(collection, priceInCents) {

  let mapUniqueClasses = _.uniqBy(collection, "title")

  if (mapUniqueClasses) {
    return _.map(mapUniqueClasses, ({ title, priceInCents }) => ({ title, priceInCents }))
  }
}

/**
 * Get a list of classes organized by title, then by level.
 * The titles should be in ascending order, the levels should be in descending order
 * @param {Object} collection - an array of yoga class objects
 * @return {number} An array of objects that are organized by title then by level. The array should only have the title, instructor, and level fields
 */
function orderClassesByTitleAndLevel(collection) {

  let classByTitleAndLevel = _.orderBy(collection, ['title', 'level'], ['asc', 'desc']);

  if (classByTitleAndLevel) {
    return _.map(classByTitleAndLevel, ({ title, instructor, level }) => ({ title, instructor, level }))
  }
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
