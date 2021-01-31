/*
 *
 *
 *       FILL IN EACH UNIT TEST BELOW COMPLETELY
 *       -----[Keep the tests in the same order!]----
 *       (if additional are added, keep them at the very end!)
 */

const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("Unit Tests", function () {
  suite("Function convertHandler.getNum(input)", function () {
    test("Whole number input", function (done) {
      let input = "32L";
      assert.equal(convertHandler.getNum(input), 32);
      done();
    });

    test("Decimal Input", function (done) {
      let input = "32.3l";
      assert.equal(convertHandler.getNum(input), 32.3);
      done();
    });

    test("Fractional Input", function (done) {
      let input = "33/3l";
      assert.equal(convertHandler.getNum(input), 11);
      done();
    });

    test("Fractional Input w/ Decimal", function (done) {
      let input = "32.3/3l";
      assert.equal(convertHandler.getNum(input), 10.77);
      done();
    });

    test("Invalid Input (double fraction)", function (done) {
      let input = "3/2/2l";
      assert.equal(convertHandler.getNum(input), "invalid number");
      done();
    });

    test("No Numerical Input", function (done) {
      let input = "l";
      assert.equal(convertHandler.getNum(input), 1);
      done();
    });
  });

  suite("Function convertHandler.getUnit(input)", function () {
    test("For Each Valid Unit Inputs", function (done) {
      let input = ["gal", "l", "mi", "km", "lbs", "kg", "GAL", "L", "MI", "KM", "LBS", "KG"];
      input.forEach((ele) => {
        let test = "10" + ele;
        assert.equal(convertHandler.getUnit(test), ele.toLowerCase());
      });
      done();
    });

    test("Unknown Unit Input", function (done) {
      let input = "32oi";
      assert.equal(convertHandler.getUnit(input), "invalid unit");
      done();
    });
  });

  suite("Function convertHandler.getReturnUnit(initUnit)", function () {
    test("For Each Valid Unit Inputs", function (done) {
      let input = ["gal", "l", "mi", "km", "lbs", "kg"];
      let expect = ["L", "gal", "km", "mi", "kg", "lbs"];
      input.forEach(function (ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
  });

  suite("Function convertHandler.spellOutUnit(unit)", function () {
    test("For Each Valid Unit Inputs", function (done) {
      let input = ["gal", "l", "mi", "km", "lbs", "kg"];
      let expect = ["gallons", "litres", "miles", "kilometres", "pounds", "kilograms"];
      input.forEach(function (ele, i) {
        assert.equal(convertHandler.spellOutUnit(ele), expect[i]);
      });
      done();
    });
  });

  suite("Function convertHandler.convert(num, unit)", function () {
    test("Gal to L", function (done) {
      let input = [1, "gal"];
      let expected = 3.78541;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
      done();
    });

    test("L to Gal", function (done) {
      let input = [10, "l"];
      let expected = 2.64172;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
      done();
    });

    test("Mi to Km", function (done) {
      let input = [1, "mi"];
      let expected = 1.60934;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
      done();
    });

    test("Km to Mi", function (done) {
      let input = [1, "km"];
      let expected = 0.62137;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
      done();
    });

    test("Lbs to Kg", function (done) {
      let input = [1, "lbs"];
      let expected = 0.45359;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
      done();
    });

    test("Kg to Lbs", function (done) {
      let input = [1, "kg"];
      let expected = 2.20462;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
      done();
    });
  });
});
