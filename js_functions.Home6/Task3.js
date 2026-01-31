function checkOrder(available, ordered) {
  if (ordered > available) {
    console.log("Your order is too large, we don’t have enough goods.");
    return;
  } 
  if (ordered === 0) {
    console.log("Your order is empty");
    return;
  }
  if (ordered <= available) {
    console.log("Your order is accepted");
    return;
  }
    console.log("Error message, not a number");
}

checkOrder(200, 300); // "Your order is too large, we don’t have enough goods."
checkOrder(500, 0); // "Your order is empty"
checkOrder(300, 300); // "Your order is accepted"
checkOrder(300, 'were'); // "Error message, not a number"

function checkOrder1(available, ordered) {
  if (ordered > available) {
    console.log("1. Your order is too large, we don’t have enough goods.");
  } else if (ordered === 0) {
    console.log("1. Your order is empty");
  } else if (ordered <= available) {
    console.log("1. Your order is accepted");
  } else {
    console.log("1. Error message, not a number");
  }
}

checkOrder1(100, 200); // "Your order is too large, we don’t have enough goods."
checkOrder1(400, 0); // "Your order is empty"
checkOrder1(200, 100); // "Your order is accepted"
checkOrder1(200, 'were'); // "Error message, not a number"


const checkOrder2 = (available, ordered) =>  {
    if (ordered > available) {
    console.log("2. Your order is too large, we don’t have enough goods.")
    return;
}
    if (ordered === 0) {
    console.log("2. Your order is empty.")
    return;
}
    if (ordered <= available) {
    console.log("2. Your order is accepted")
    return;
}
    console.log("2. Error message, not a number")
}

checkOrder2(400, 500); // "Your order is too large, we don’t have enough goods."
checkOrder2(400, 0); // "Your order is empty"
checkOrder2(400, 300); // "Your order is accepted"
checkOrder2(400, 'were'); // "Error message, not a number"