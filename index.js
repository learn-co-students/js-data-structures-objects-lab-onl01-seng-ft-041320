// Write your solution in this file!
const driver = {}

//This function should not mutate the driver 
//should return a new driver that has an updated value for the key passed in.
function updateDriverWithKeyAndValue(driver, key, value){
  //creates a new driver (obj) that is same as the one passed in
  const newDriver = {...driver};
  console.log(newDriver)
  // changes the value of the key passed in on the new obj
  newDriver[key] = value;
  // returns the new driver
  return newDriver;
}

// updates an object desctructively
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  //over-writes the value for the given key
  driver[key] = value
  // returns the updated driver
  return driver
}

// Should delete the key/value pair for the key that was passed in from the driver Object. 
// This should all not actually mutate the driver passed in.
function deleteFromDriverByKey(driver, key){
  // creates a copy of driber
  const newDriver = { ... driver };
  // deletes the key(and value of key) in the new driver
  delete newDriver[key]
  // returns the new driver
  return newDriver
}

// destructively deletes a key from driver
function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key]
  return driver
}