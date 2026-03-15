import React from 'react';

const Cart = () => {
  // Пока пустая корзина для теста
  const cart: any[] = [];

  return (
    <div style={{ padding: '20px' }}>
      <h2>🛒 Корзина</h2>
      {cart.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <div>
          {/* Здесь будут товары */}
        </div>
      )}
      <button style={{
        width: '100%',
        padding: '15px',
        background: '#2e7d32',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        fontSize: '16px',
        marginTop: '20px',
        cursor: 'pointer'
      }}>
        💳 Оформить заказ
      </button>
    </div>
  );
};

export default Cart;
