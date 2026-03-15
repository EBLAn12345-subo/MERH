import React, { useState, useEffect } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  sizes: string[];
}

const Catalog = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedSize, setSelectedSize] = useState<Record<number, string>>({});

  useEffect(() => {
    // Пока заглушка, потом подключим к бэкенду
    setProducts([
      {
        id: 1,
        name: "Футболка с логотипом",
        price: 1990,
        image: "https://via.placeholder.com/200",
        description: "Хлопковая футболка",
        sizes: ["S", "M", "L", "XL"]
      },
      {
        id: 2,
        name: "Кружка",
        price: 890,
        image: "https://via.placeholder.com/200",
        description: "Керамическая кружка",
        sizes: ["300ml", "400ml"]
      }
    ]);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>🛍 Каталог</h2>
      <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '10px' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p style={{ fontSize: '20px', fontWeight: 'bold' }}>{product.price} ₽</p>
            <div style={{ display: 'flex', gap: '10px', margin: '10px 0' }}>
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize({...selectedSize, [product.id]: size})}
                  style={{
                    padding: '5px 10px',
                    background: selectedSize[product.id] === size ? '#2e7d32' : '#f0f0f0',
                    color: selectedSize[product.id] === size ? 'white' : 'black',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
            <button style={{
              width: '100%',
              padding: '10px',
              background: '#2e7d32',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}>
              🛒 В корзину
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
