const InventoryDetails = ({ item }) => {
  if (!item) return null;

  return (
    <div style={{ lineHeight: '1.6' }}>
      <h1 style={{ color: '#2c3e50', marginBottom: '20px' }}>
        {item.inventory_name}
      </h1>

      <div style={{
        textAlign: 'center',
        marginBottom: '25px',
        background: '#f9f9f9',
        padding: '15px',
        borderRadius: '12px',
        border: '1px solid #eee'
      }}>
        {item.inventory_image ? (
          <img
            src={`http://localhost:5000${item.inventory_image}`}
            alt={item.inventory_name}
            style={{ width: '100%', maxHeight: '450px', objectFit: 'contain', borderRadius: '8px' }}
          />
        ) : (
          <div style={{ width: '100%', height: '250px', background: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>
            <span style={{ color: '#7f8c8d' }}>Зображення відсутнє</span>
          </div>
        )}
      </div>

      <div>
        <h3 style={{ borderBottom: '2px solid #6c5ce7', display: 'inline-block', paddingBottom: '5px' }}>
          Опис товару:
        </h3>
        <p style={{ fontSize: '18px', color: '#34495e', marginTop: '10px' }}>
          {item.description || 'Опис для цього товару ще не додано.'}
        </p>
      </div>

      <div style={{ marginTop: '40px', paddingTop: '15px', borderTop: '1px dotted #ccc', color: '#95a5a6', fontSize: '14px' }}>
        <p>ID: <strong>{item.id}</strong></p>
      </div>
    </div>
  );
};

export default InventoryDetails;
