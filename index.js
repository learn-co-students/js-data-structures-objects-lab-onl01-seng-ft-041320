// Write your solution in this file!
let driver = {} //same as - new Object()

function updateDriverWithKeyAndValue(obj, key, val) {
    const newObj = {...obj} //same as - Object.assign({}, obj)

    newObj[key] = val

    return newObj
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, val) {
    obj[key] = val

    return obj
}

function deleteFromDriverByKey(obj, key) {
    const newObj = {...obj}

    delete newObj[key]

    return newObj
}

function destructivelyDeleteFromDriverByKey(obj, key) {
    delete obj[key]

    return obj
}