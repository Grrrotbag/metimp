/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */
function splitIndex (input) {
  let number = input.match(/[.\d\/]+/g) || ['1'];
  let unit = input.match(/[a-zA-Z]+/g)[0];

  return [number[0], unit];
  // return input.indexOf(input.match(/[a-zA-Z]/));
};

function checkDivisors(fraction) {
 let numbers = fraction.split('/');
//  console.log("divisors/numbers: ", numbers)

  if (numbers.length > 2) {
    return false;
  }
  return numbers;
}


function ConvertHandler() {

  this.getNum = function (input) {
    // console.log("input: ", input)

    let result = splitIndex(input)[0];

    if (result === undefined) return result = 1;
    let nums = checkDivisors(result);
    if (!checkDivisors) return null
    // console.log("nums: ", nums)

    let num1 = nums[0];
    let num2 = nums[1] || '1';


    if (isNaN(num1) || isNaN(num2)) return null;
    result = parseFloat(num1) / parseFloat(num2);

    return result;
  };

  this.getUnit = function (input) {
    let unit = splitIndex(input)[1];
    const validUnits = ["gal", "l", "mi", "km", "lbs", "kg", "GAL", "L", "MI", "KM", "LBS", "KG"];

    // console.log("unit: ", unit)
    if (!validUnits.includes(unit)) return null;

    if (unit === "L") return unit
    return unit.toLowerCase();
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

    return conversion[initUnit.toLowerCase()];
  };

  this.spellOutUnit = function (unit) {
    const fullUnit = {
      gal: "gallons",
      l: "liters",
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

    result = (initNum * conversion[initUnit.toLowerCase()]).toFixed(5);
    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let convertedUnit = returnUnit.toLowerCase(); 

    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(convertedUnit)}`;
  };
}

module.exports = ConvertHandler;
