function getType(param) {
  const { toString } = Object.prototype;
  return toString.call(param).slice(8, -1);
}

export default getType;
