// Project 1: Online Store Order Processing System
function processOrders(orders) {
  let totalRevenue = 0;
  let successfulOrders = 0;
  let skippedInRow = 0;
  let stockFailures = 0;
  let stopMessage = null;

  for (let i = 0; i < orders.length; i++) {
    const order = orders[i];
    const isSkipped =
      order.status === "cancelled" ||
      order.status === "invalid" ||
      order.stockAvailable === false;

    if (isSkipped) {
      skippedInRow += 1;

      if (order.stockAvailable === false) {
        stockFailures += 1;
      }

      if (skippedInRow >= 3 || stockFailures >= 3) {
        stopMessage = "System stopped due to critical failure";
        return {
          totalRevenue: totalRevenue,
          successfulOrders: successfulOrders,
          processedOrdersCount: successfulOrders,
          stopMessage: stopMessage,
        };
      }

      continue;
    }

    if (order.status === "valid" && order.stockAvailable === true) {
      totalRevenue += order.amount;
      successfulOrders += 1;
      skippedInRow = 0;
    }
  }

  return {
    totalRevenue: totalRevenue,
    successfulOrders: successfulOrders,
    processedOrdersCount: successfulOrders,
    stopMessage: stopMessage,
  };
}

// Coding Problem 1: Check if array is sorted ascending
function isSortedAscending(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}

// Coding Problem 2: Return numbers greater than a value
function numbersGreaterThan(arr, value) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > value) {
      result.push(arr[i]);
    }
  }

  return result;
}

// Example usage
const orders = [
  { id: 1, status: "valid", stockAvailable: true, amount: 200 },
  { id: 2, status: "valid", stockAvailable: true, amount: 150 },
  { id: 3, status: "cancelled", stockAvailable: true, amount: 100 },
  { id: 4, status: "valid", stockAvailable: false, amount: 300 },
  { id: 5, status: "valid", stockAvailable: true, amount: 250 },
  { id: 6, status: "invalid", stockAvailable: true, amount: 120 },
  { id: 7, status: "valid", stockAvailable: true, amount: 180 },
];

console.log("Order processing result:");
console.log(processOrders(orders));

console.log("Sorted check:");
console.log(isSortedAscending([1, 2, 3, 4, 5]));
console.log(isSortedAscending([1, 3, 2, 4]));

console.log("Numbers greater than value:");
console.log(numbersGreaterThan([10, 5, 20, 3, 15], 8));
