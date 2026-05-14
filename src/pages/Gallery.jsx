import { useState, useEffect } from 'react';
import { useInventory } from '../store/InventoryContext';
import { useFavorites } from '../hooks/useFavorites';
import InventoryGallery from '../gallery/InventoryGallery';
import InventoryQuickView from '../gallery/InventoryQuickView';
import FavoritesBar from '../gallery/FavoritesBar';

const Gallery = () => {
  const { items, fetchInventory } = useInventory();
  const { isFavorite, toggleFavorite } = useFavorites();
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => { fetchInventory(); }, []);

  return (
    <div style={{ paddingBottom: '50px' }}>
      <h1 style={{ fontSize: '32px', marginBottom: '30px' }}>🛍️ Каталог товарів</h1>
      <FavoritesBar />

      <InventoryGallery
        items={items}
        isFavorite={isFavorite}
        toggleFavorite={toggleFavorite}
        onCardClick={setSelectedItem}
      />

      {selectedItem && (
        <InventoryQuickView
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
};

export default Gallery;
