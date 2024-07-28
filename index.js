// Code your solution in this file!
// 1. Function to return the first two drivers
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

// 2. Function to return the last two drivers
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

// 3. Array containing the two functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// 4. Higher-order function that returns a function to multiply fare
function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
}

// 5. Function to double the fare
const fareDoubler = createFareMultiplier(2);

// 6. Function to triple the fare
const fareTripler = createFareMultiplier(3);

// 7. Function to select different drivers based on provided function
function selectDifferentDrivers(drivers, driverFunction) {
  return driverFunction(drivers);
}
