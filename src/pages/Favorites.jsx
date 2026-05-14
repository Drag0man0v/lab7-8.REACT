import { useInventory } from '../store/InventoryContext';
import { useFavorites } from '../hooks/useFavorites';
import InventoryCard from '../gallery/InventoryCard';

const Favorites = () => {
  const { items } = useInventory();
  const { favorites, isFavorite, toggleFavorite } = useFavorites();

  const favoriteItems = items.filter(item => favorites.includes(item.id));

  return (
    <div>
      <h1>Улюблені товари ❤️</h1>
      {favoriteItems.length === 0 ? (
        <p style={{ color: '#95a5a6' }}>Ти ще не додав жодного товару до улюблених.</p>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '20px'
        }}>
          {favoriteItems.map(item => (
            <InventoryCard
              key={item.id}
              item={item}
              isFavorite={true}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
