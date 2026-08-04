let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(name, price){
  cart.push({name, price});
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(name + ' added to cart');
}

function renderCart(){
  const container = document.getElementById('cart-items');
  if(!container) return;

  let subtotal = 0;
  container.innerHTML = '';

  cart.forEach(item => {
    subtotal += item.price;

    container.innerHTML += `
      <div class="cart-item">
        <p>${item.name}</p>
        <p>₦${item.price.toLocaleString()}</p>
      </div>
    `;
  });

  const delivery = 5000;
  const total = subtotal + delivery;

  document.getElementById('subtotal').innerText =
    '₦' + subtotal.toLocaleString();

  document.getElementById('total').innerText =
    '₦' + total.toLocaleString();
}

function checkout(){
  window.location.href = 'checkout.html';
}

function goToPayment(){
  window.location.href = 'payment.html';
}

function redirectPayment(){
  window.location.href = 'https://paystack.com/pay/demo-payment';
}

renderCart();
