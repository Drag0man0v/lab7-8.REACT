import { useState, useEffect } from 'react';
import { useInventory } from '../store/InventoryContext';
import { useFavorites } from '../hooks/useFavorites';
import InventoryGallery from '../components/gallery/InventoryGallery';
import InventoryQuickView from '../components/gallery/InventoryQuickView';

const Gallery = () => {
  const { items, fetchInventory } = useInventory();
  const { isFavorite, toggleFavorite } = useFavorites();
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => { fetchInventory(); }, []);

  return (
    <div style={{ paddingBottom: '50px' }}>
      <h1 style={{ fontSize: '32px', marginBottom: '30px' }}>🛍️ Каталог товарів</h1>

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
