const chai = require("chai");
const assert = chai.assert;

const nameInverter = require("../nameInverter");

describe("nameInverter", function() {
  it("should return an empty string when passed an empty string", function() {
    const inputName = "";
    const expectedOutput = "";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it("should return a single name when passed a single name", function() {
    const inputName = "name";
    const expectedOutput = "name";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it("return a single name when passed a single name with extra spaces", function() {
    const inputName = " name ";
    const expectedOutput = "name";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it("return a last-name, first-name when passed a first and last-name", function() {
    const inputName = "first last";
    const expectedOutput = "last, first";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it("return a last-name, first-name when passed a first and last-name with extra spaces around the names", function() {
    const inputName = " first last";
    const expectedOutput = "last, first";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it("return an empty string when passed a single honorific", function() {
    const inputName = "Dr. ";
    const expectedOutput = "";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it("return honorific first-name when passed honorific first-name", function() {
    const inputName = "Dr. first";
    const expectedOutput = "Dr. first";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it("return a honorific last-name, first-name when passed honorific first-name last-name", function() {
    const inputName = "Dr. first last";
    const expectedOutput = "Dr. last, first";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it("return a honorific last-name, first-name when passed honorific first-name last-name with extra spaces around the words", function() {
    const inputName = " Dr. first last ";
    const expectedOutput = "Dr. last, first";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it("throw an error when name is undefined", function() {
    const inputName = undefined;
    assert.throws(() => {
      nameInverter(inputName);
    });
  });
});
