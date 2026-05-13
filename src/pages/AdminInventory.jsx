import { useEffect } from 'react';
import { useInventory } from '../store/InventoryContext';
import InventoryTable from '../components/inventory/InventoryTable';
import { Link } from 'react-router-dom';

const AdminInventory = () => {
  const { items, loading, error, fetchInventory } = useInventory();

  useEffect(() => {
    fetchInventory();
  }, []);

  return (
    <div className="admin-container">
      <h1>Панель управління складом</h1>

      <Link to="/admin/create" className="add-btn">
        + Додати новий товар
      </Link>

      {loading && <p>Завантаження даних...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {!loading && !error && (
        <InventoryTable data={items} />
      )}
    </div>
  );
};

export default AdminInventory;
