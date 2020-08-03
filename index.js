// Write your solution in this file!
 const driver = {key: "value"};

 function updateDriverWithKeyAndValue(driver, key, value){
     return Object.assign({}, driver, { [key]: value});
 };

 function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
     driver[key] = value;
     return driver;
 };

 function deleteFromDriverByKey(driver, key){
    const newDriver = Object.assign({}, driver);
     delete newDriver[key];
     return newDriver;
 };

 function destructivelyDeleteFromDriverByKey(driver, key){
     delete driver[key];
     return driver;

 };





 // variable driver defined and assigned to an Object [X]
 // function updateDriverWithKeyAndValue(driver, key, value), shouldn't mutate the `driver`
 // and should return new driver that has an update value for key passed in   [X]
 //destructivelyUpdateDriverWithKeyAndValue() same as updateDriverWithKeyAndValue() 
 //but it should mutate the driver parameter passed in.                 [X]
 //deleteFromDriverByKey() - takes in a driver Object and a key. 
 // deletes from driver object This should all not actually mutate the driver passed in. []
 // destructivelyDeleteFromDriverByKey() same as deleteFromDriverByKey() 
 // but it should mutate the driver passed in. 