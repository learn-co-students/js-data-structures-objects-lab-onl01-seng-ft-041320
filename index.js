// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(obj, key, value) {
  const newObj = {...obj};

  newObj[key] = value;

  return newObj;
}

const newDriver = updateDriverWithKeyAndValue(driver, name, Jim);

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value){
  obj[key] = value;
  return obj;
}

const renamedDriver = destructivelyUpdateDriverWithKeyAndValue(driver, name, Steve);

function deleteFromDriverByKey(driver, key){
  const updateDriver = Object.assign({}, driver);

delete updateDriver[key];
return updateDriver;

}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];
  return driver;
}
