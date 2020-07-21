// Write your solution in this file!
let driver = {}

// function updateDriverWithKeyAndValue(obj, key, value) {
//     let newObj = {...obj}
//     newObj[key] = value;
//     return newObj
// }

// or

function updateDriverWithKeyAndValue(obj, key, value) {
    return Object.assign({}, obj, { [key]: value})
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
    obj[key] = value
    return obj
}

function deleteFromDriverByKey(obj, key, value) {
    let newObj = {...obj}
    newObj[key] = value;
    // Object.assign({}, obj, {[key]: value})
    delete newObj.key
    return newObj
}

function destructivelyDeleteFromDriverByKey(obj, key) {
    delete obj[key]
    return obj
}