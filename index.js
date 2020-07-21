const driver = {};


//should return a new driver that has 
//an updated value for the key passed in
function updateDriverWithKeyAndValue(driver, key ,value) {
    return Object.assign({}, driver, { [key]: value });
} 

//mutate the driver parameter passed in.
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
  
    return driver;
  }
//should delete the key/value pair for the
//key that was passed in from the driver Object. 
//This should all not actually mutate the driver passed in
  function deleteFromDriverByKey(driver, key){
    const newObj = Object.assign({}, driver);
    delete newObj[key];
    return newObj;
  }

//it should mutate the driver passed in. Be sure and consider 
//whether dot-notation or bracket-notation might affect your solution.
  function destructivelyDeleteFromDriverByKey (driver, key) {
    delete driver[key];
    return driver;
  }