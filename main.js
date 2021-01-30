// first plus button event handler
const firstPlusButton = document.getElementById('firstPlusButton');
firstPlusButton.addEventListener('click', function () {
  plusQuantity('firstClassQuantity');
  updatePrice();
})

// first minus button event handler
const firstMinusButton = document.getElementById('firstMinusButton');
firstMinusButton.addEventListener('click', function () {
  const firstClassQuantity = parseFloat(document.getElementById('firstClassQuantity').value);
  if (firstClassQuantity > 0) {
    minusQuantity('firstClassQuantity');
  }
  updatePrice();
})

// second plus button event handler
const secondPlusButton = document.getElementById('secondPlusButton');
secondPlusButton.addEventListener('click', function () {
  plusQuantity('economyClassQuantity');
  updatePrice();
})

// second minus button event handler
const secondMinusButton = document.getElementById('secondMinusButton');
secondMinusButton.addEventListener('click', function () {
  const economyClassQuantity = parseFloat(document.getElementById('economyClassQuantity').value);
  if (economyClassQuantity > 0) {
    minusQuantity('economyClassQuantity');
  }
  updatePrice();
})

// Plus Quantity function
function plusQuantity(id) {
  const quantityString = document.getElementById(id).value;
  const quantity = parseFloat(quantityString) + 1;
  document.getElementById(id).value = quantity;
}

// Minus Quantity function
function minusQuantity(id) {
  const quantityString = document.getElementById(id).value;
  const quantity = parseFloat(quantityString) - 1;
  document.getElementById(id).value = quantity;
}

// Update price function
function updatePrice() {
  const firstClassQuantity = parseFloat(document.getElementById('firstClassQuantity').value);
  const economyClassQuantity = parseFloat(document.getElementById('economyClassQuantity').value);
  const firstClassPrice = firstClassQuantity * 150;
  const economyClassPrice = economyClassQuantity * 100;
  const subtotal = firstClassPrice + economyClassPrice;
  document.getElementById('subtotal').innerText = subtotal;
  const vat = subtotal * 0.1;
  document.getElementById('vat').innerText = vat;
  const total = subtotal + vat;
  document.getElementById('total').innerText = total;
}

// Book now button event handler
const bookNowButton = document.getElementById('bookNowButton');
bookNowButton.addEventListener('click', function () {
  const bookingContent = document.getElementById('bookingPage');
  bookingContent.style.display = 'none';
  const body = document.getElementById('body');
  body.style.background = 'none';
  const bookingInfo = document.getElementById('bookingInfo');
  bookingInfo.style.display = 'block';
})