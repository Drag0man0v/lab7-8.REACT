import React from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../../hooks/useFavorites';

const FavoritesBar = () => {
  const { favorites } = useFavorites();

  if (favorites.length === 0) return null;

  return (
    <div style={{
      background: '#fff3cd',
      padding: '10px 20px',
      borderRadius: '8px',
      marginBottom: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      border: '1px solid #ffeeba'
    }}>
      <span>У тебе вже <strong>{favorites.length}</strong> улюблених товарів</span>
      <Link to="/favorites" style={{ 
        color: '#856404', 
        fontWeight: 'bold',
        textDecoration: 'underline' 
      }}>
        Переглянути всіх
      </Link>
    </div>
  );
};

export default FavoritesBar;