import React from 'react';
import InventoryDetails from '../inventory/InventoryDetails';

const InventoryQuickView = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="quick-view-overlay" onClick={onClose} style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.6)',
      display: 'flex',
      justifyContent: 'flex-end', // Slide-over ефект з правого боку
      zIndex: 1000,
      transition: 'all 0.3s'
    }}>
      <div className="quick-view-content" onClick={e => e.stopPropagation()} style={{
        background: 'white',
        width: '100%',
        maxWidth: '500px',
        height: '100%',
        padding: '30px',
        boxShadow: '-5px 0 15px rgba(0,0,0,0.2)',
        overflowY: 'auto',
        position: 'relative'
      }}>
        <button onClick={onClose} style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          border: 'none',
          color: '#000000',
          backgroundColor: '#ffffff',
          borderRadius: '50%',
          cursor: 'pointer'
        }}>ВИХІД</button>
        
        <div style={{ marginTop: '20px' }}>
          <InventoryDetails item={item} />
        </div>
      </div>
    </div>
  );
};

export default InventoryQuickView;