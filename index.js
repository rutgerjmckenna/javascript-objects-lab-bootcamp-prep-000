var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, {[key]: value}, object)
}
function destructivelyUpdateObjectWithkeyAndValue (object, key, value) {
  object[key] = value
  return object
}