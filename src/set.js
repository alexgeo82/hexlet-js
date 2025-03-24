export default (obj, key, value) => {
  if (!Object.hasOwn(obj, key)) {
    obj[key] = value;
  }
};
