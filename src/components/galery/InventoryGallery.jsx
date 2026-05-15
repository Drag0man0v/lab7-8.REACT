import InventoryCard from './InventoryCard';

const InventoryGallery = ({ items, isFavorite, toggleFavorite, onCardClick }) => {
  if (!items || items.length === 0) {
    return <div style={{ textAlign: 'center', padding: '50px', color: '#95a5a6' }}>Товарів не знайдено</div>;
  }

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', // Адаптивна сітка [cite: 139, 157]
      gap: '30px',
      padding: '20px 0'
    }}>
      {items.map(item => (
        <InventoryCard 
          key={item.id}
          item={item}
          isFavorite={isFavorite(item.id)}
          onToggleFavorite={toggleFavorite}
          onClick={() => onCardClick(item)}
        />
      ))}
    </div>
  );
};

export default InventoryGallery;