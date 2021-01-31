/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

function ConvertHandler() {
  this.splitIndex = (input) => {
    return input.indexOf(input.match(/[a-zA-Z]/));
  };

  this.getNum = function (input) {
    let splitAt = this.splitIndex(input);
    let number = splitAt === 0 ? 1 : input.slice(0, splitAt);
    let doubleFraction = /(?:.*(?:\b(?:\/)\b)){2}/;

    // check for double fractions
    if (doubleFraction.test(number)) return "invalid input";

    // check the result
    if (!eval(number)) return "invalid input";

    // check if not a number
    if (isNaN(parseFloat(number))) return "invalid input";

    return eval(number).toFixed(2);
  };

  this.getUnit = function (input) {
    const validUnits = ["gal", "l", "mi", "km", "lbs", "kg"];
    const pattern = /[a-zA-Z]+$/;
    let unit = input.match(pattern);

    if (validUnits.includes(unit[0].toLowerCase())) return unit[0].toLowerCase();

    return "invalid unit";
  };

  this.getReturnUnit = function (initUnit) {
    const conversion = {
      gal: "L",
      l: "gal",
      mi: "km",
      km: "mi",
      lbs: "kg",
      kg: "lbs",
    };

    return conversion[initUnit];
  };

  this.spellOutUnit = function (unit) {
    const fullUnit = {
      gal: "gallons",
      l: "litres",
      mi: "miles",
      km: "kilometres",
      lbs: "pounds",
      kg: "kilograms",
    };

    return fullUnit[unit];
  };

  this.convert = function (initNum, initUnit) {
    let result;
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    const conversion = {
      gal: galToL,
      l: 1 / galToL,
      mi: miToKm,
      km: 1 / miToKm,
      lbs: lbsToKg,
      kg: 1 / lbsToKg,
    };

    result = Math.round(initNum * conversion[initUnit.toLowerCase()] * 10 ** 5) / 10 ** 5;
    // return initNum * conversion[initUnit];
    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    if (isNaN(initNum) || isNaN(returnNum) || initUnit === "undefined" || returnUnit === "undefined") {
      return "invalid input";
    }
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
}

module.exports = ConvertHandler;
