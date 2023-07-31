function splitTheBill() {
  const amount = parseFloat(document.getElementById("amount").value);
  const numberOfPeople = parseInt(document.getElementById("numberOfPeople").value);
  const warningElement1 = document.getElementById("warning1");
  const warningElement2 = document.getElementById("warning2");

  // Check if the amount is a valid positive number
  if (isNaN(amount) || amount <= 0) {
      warningElement1.textContent = "Amount should not be zero.";
      return;
  } else {
      warningElement1.textContent = "";
  }

  // Check if the number of people is greater than one
  if (isNaN(numberOfPeople) || numberOfPeople <= 1) {
      warningElement2.textContent = "Number of people should be greater than one.";
      return;
  } else {
      warningElement2.textContent = "";
  }

  // Calculate the split amount
  const splitAmount = amount / numberOfPeople;
  document.getElementById("result").value = `Each person should pay: ${splitAmount.toFixed(2)}`;

}
  