const nameInverter = function(name) {
  const regex = /^(Mr\.|Mrs\.|Ms\.|Dr\.)\s/; // regex to match honorifics
  const secondRegex = /(Mr\.|Mrs\.|Ms\.|Dr\.)\s\w+/; // regex to match honorifics with first name
  const thirdRegex = /(Mr\.|Mrs\.|Ms\.|Dr\.)\s\w+\s\w+/; // regex to match honorifics with first name and last name

  if (name === undefined) {
    // throw error if name is undefined
    throw "Error";
  }
  if (name.match(thirdRegex)) {
    // if name matches honorifics with first name and last name
    name = name.trim();
    let firstLast = name.substring(0, 3); // get the honorific
    let temp = name.replace(regex, ""); // remove the honorific
    temp = temp.split(" ").reverse().join(", "); // reverse the first and last name
    name = firstLast + " " + temp; // combine the honorific and the reversed first and last name
    return name;
  }
  if (name.match(secondRegex)) {
    // if name matches honorifics with first name
    return name;
  }

  if (name.match(regex)) {
    // if name matches honorifics
    return "";
  }

  name = name.trim(); // remove extra spaces

  if (name === "") {
    // if name is empty
    return "";
  }

  name = name.split(" ").reverse().join(", "); // reverse the first and last name

  return name;
};

module.exports = nameInverter;
