var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  Object.assign({}, {key: value}, object)
  return object
}
