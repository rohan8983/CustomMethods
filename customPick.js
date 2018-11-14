export const pick = (object, requiredValues) => {
  let filteredObj = {};
  for (let i = 0; i < requiredValues.length; i++) {
    filteredObj[requiredValues[i]] = object[requiredValues[i]];
  }
  return filteredObj;
};
