// Write your solution in this file!
const driver = Object.assign({})

const updateDriverWithKeyAndValue = (obj, key, value) => {
    const newObj = {...obj};
    newObj[key] = value;
    return driver, newObj;
}

const destructivelyUpdateDriverWithKeyAndValue = (obj, key, value) => {
    obj[key] = value;
    return obj;
}

const deleteFromDriverByKey = (obj, key) => {
    const newObj = {...obj};
    delete newObj[key];
    return newObj;
}

const destructivelyDeleteFromDriverByKey = (obj, key) => {
    delete obj[key];
    return obj;
}
