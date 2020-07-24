let driver = {}

function updateDriverWithKeyAndValue(obj, key, value) {
    let newobj = {...obj }
    newobj[key] = value;
    return newobj;
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj
}

function deleteFromDriverByKey(obj, key) {
    let newobj = {...obj};
    delete newobj[key];
    return newobj;
}

function destructivelyDeleteFromDriverByKey(obj, key) {
    delete obj[key];
    return obj;
}