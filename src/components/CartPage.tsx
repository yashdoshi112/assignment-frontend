import React, { useState } from 'react';

const CartPage = () => {
  const [cart, setCart] = useState<any[]>([]);
  const [discountCode, setDiscountCode] = useState('');
  const [order, setOrder] = useState<any>(null);

  const addItemToCart = async (item: { id: string; name: string; price: number }) => {
    const response = await fetch('http://localhost:3001/cart/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: item }),
    });
    setCart([...cart, item]);
  };

  const checkout = async () => {
    const response = await fetch('http://localhost:3001/cart/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: cart }),
    });
    const data = await response.json();
    setOrder(data.order);
    setCart([]); // Clear cart after successful checkout
  };

  return (
    <div>
      <h2>Cart</h2>
      <button onClick={() => addItemToCart({ id: '1', name: 'Item 1', price: 100 })}>
        Add Item 1 to Cart
      </button>
      <button onClick={() => addItemToCart({ id: '2', name: 'Item 2', price: 200 })}>
        Add Item 2 to Cart
      </button>
      <button onClick={() => addItemToCart({ id: '2', name: 'Item 3', price: 300 })}>
        Add Item 3 to Cart
      </button>
      <button onClick={() => addItemToCart({ id: '2', name: 'Item 4', price: 400 })}>
        Add Item 4 to Cart
      </button>
      <button onClick={() => addItemToCart({ id: '2', name: 'Item 5', price: 500 })}>
        Add Item 5 to Cart
      </button>
      <button onClick={() => addItemToCart({ id: '2', name: 'Item 6', price: 600 })}>
        Add Item 6 to Cart
      </button>

      <div>
        <h3>Cart Items</h3>
        {cart.map((item, index) => (
          <p key={index}>{item.name} - ${item.price}</p>
        ))}
      </div>

      <button onClick={checkout}>Checkout</button>

      {order && (
        <div>
          <h3>Order Summary</h3>
          <p>Total: ${order.total}</p>
          {order.discountApplied && <p>Discount Applied: ${order.discountAmount}</p>}
        </div>
      )}
    </div>
  );
};

export default CartPage;
