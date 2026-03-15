import React from 'react';

const Profile = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>👤 Личный кабинет</h2>
      <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
        <div style={{ flex: 1, padding: '20px', background: '#f5f5f5', borderRadius: '10px' }}>
          <span>💰 Баланс</span>
          <h3>0 ₽</h3>
        </div>
        <div style={{ flex: 1, padding: '20px', background: '#f5f5f5', borderRadius: '10px' }}>
          <span>🎁 Бонусы</span>
          <h3>0</h3>
        </div>
      </div>
      <h3>📦 История заказов</h3>
      <p>У вас пока нет заказов</p>
    </div>
  );
};

export default Profile;
