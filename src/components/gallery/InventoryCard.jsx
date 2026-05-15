// src/components/gallery/InventoryCard.jsx
import React from 'react';

const InventoryCard = ({ item, isFavorite, onToggleFavorite, onClick }) => {
  return (
    <div className="item-card" onClick={onClick} style={{
      border: '1px solid #eee',
      borderRadius: '15px',
      overflow: 'hidden',
      background: '#fff',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      display: 'flex',
      flexDirection: 'column',
      height: '100%' // Картки будуть однакової висоти
    }}>
      <div style={{ position: 'relative', height: '220px', background: '#f8f9fa' }}>
        <img 
          src={item.inventory_image} 
          alt={item.inventory_name}
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'contain', // Фото не буде обрізатися [cite: 139]
            padding: '10px' 
          }}
        />
        <button 
          onClick={(e) => { e.stopPropagation(); onToggleFavorite(item.id); }}
          style={{
            position: 'absolute', top: '12px', right: '12px',
            background: 'rgba(255,255,255,0.9)', border: 'none',
            borderRadius: '50%', width: '36px', height: '36px',
            cursor: 'pointer', fontSize: '20px', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>

      <div style={{ padding: '20px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ margin: '0 0 10px 0', fontSize: '18px', color: '#2c3e50' }}>
          {item.inventory_name}
        </h3>
        <p style={{ 
          color: '#7f8c8d', 
          fontSize: '14px', 
          lineHeight: '1.5',
          margin: 0,
          display: '-webkit-box',
          WebkitLineClamp: '3', // Текст обрізається після 3 рядків [cite: 156]
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default InventoryCard;