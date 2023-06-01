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
  return _.keys(obj[0]).length

}
console.log(numberOfKeys(yogaClasses))

/**
 * Remove the falsy values in a numbers array and return the sum
 * @param {numbers[]} array - An array of numbers that can also contain some falsy values
 * @return {number} The sum of the numbers in an array
 */


function sumNumbers(array) {
 const newArray= _.remove(array, function(n){
    return n 
  })
  return newArray.reduce((a,b)=>a+b);

} ; 
console.log(sumNumbers(simpleArray))
/**
 * Convert a two-dimensional array of new member data (each inner array having two values: 
 * the first being the key, the second being the value) into an object
 * @param {Array[]} member -
 * @return {number} The sum of the numbers in an array
 */

function newMemberArrayToObject(member) {// there was a typo says Sum so i left so you can see the method i used
 
  filtered= member.filter((element=>
     _.pick(element)))//lodash method implemented
    
    
    const newFilter=filtered[5][1].replace(/-/g, '')//removing hyphens from telephone
      
    const nums= [newFilter.split("")]//splitting telephone
    
     let sum= nums.reduce((a,b)=>a+b)
  newObj= Object.assign({},sum)//phoneNumber in Array  
   
   return Number(newObj[0])+Number(newObj[1])+Number(newObj[2])+
  Number(newObj[3])+Number(newObj[4])+Number(newObj[5])+   Number(newObj[6])+Number(newObj[7])+Number(newObj[8])
     +Number(newObj[9])+filtered[3][1]+filtered[6][1]//converting string values to number and adding telephonestring numericalvalue
     // +plus skilllevel value+ age value
     
  }
  
  ; 
  
  console.log(newMemberArrayToObject(newMember))

  function newMemberArrayToObject(member) {
 
    filtered= member.filter((element=>
       _.pick(element)))//lodash method implemented
    object= Object.assign({},filtered)
     answer=  "{"+JSON.stringify( object[0][0]+": "+object[0][1]+
             " "+object[1][0]+": "+object[1][1]+
             " "+object[2][0]+": "+object[2][1]+
             " "+object[3][0]+": "+object[3][1]+
             " "+object[4][0]+": "+object[4][1]+
            " "+ object[5][0]+": "+object[5][1]+
             " "+object[6][0]+": "+object[6][1]+
        "}");
      answerObj= Object.assign(({answer}))
      return Object.values(answerObj)
    }
      console.log(newMemberArrayToObject(newMember))
/**
 * Return an array of objects that are grouped by instructors from the classes array of objects
 * @param {Object[]} collection - an array of yoga class objects
 * @return {Object[]} - the reshaped collection where the classes are grouped by instructor name
 */

function groupClassByInstructor(collection){

  return _.groupBy(collection,'instructor');{

 }

}

console.log(groupClassByInstructor(yogaClasses))
/**
 * Remove the age key from the members array of object WORKING ON STILL-------------------
 * @param {Object} collection - an array of member objects
 * @return {number} The array of member objects, each one without the age field
 */
function omitAgeFromMembers(collection) {

  const omit= _.remove(collection, function(n){
    if(Object.keys(collection)=== "age"){
      return true;
    }

  })
  return omit
}
console.log(omitAgeFromMembers(members))

/**
 * Return the count of the number of classes a particular instructor teaches
 * @param {Object[]} collection - An array of yoga class objects
 * @param {String} instructorName - The name of the instructor
 * @return {number} The sum of the numbers in an array
 */
function countClassesByInstructor(collection, instructor) {

           _.flatMapDeep((collection)=> (instructor ===Object.keys(collection)))
return
}

countClassesByInstructor(yogaClasses,"Lazuli Moon")
/**
 * Remove inactive members from the members array
 * @param {Object} collection - an array of member objects
 * @return {number} The array of member objects with only active members
 */
function removeInactiveMembers(collection) {
  const removeMember= collection.sort((element)=>{
    if(element.currentMember === false){

      return _.pull(collection,element.age)
    }
  })
  return removeMember

}

/**
 * Get a list of unique class titles and their price
 * @param {Object} collection - an array of yoga class objects
 * @return {number} An array of objects that have a unique title and a price
 */
function getUniqueClasses(collection) {
let wrapped=_([collection]);
return Array.from(wrapped);


}
getUniqueClasses(yogaClasses)
/**
 * Get a list of classes organized by title, then by level.
 * The titles should be in ascending order, the levels should be in descending order
 * @param {Object} collection - an array of yoga class objects
 * @return {number} An array of objects that are organized by title then by level. The array should only have the title, instructor, and level fields
 */
function orderClassesByTitleAndLevel(collection) {
  myOrder= _.orderBy(collection,["title","level"],["asc","desc"]);{


  }
  return myOrder
}
console.log(orderClassesByTitleAndLevel(yogaClasses))

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
