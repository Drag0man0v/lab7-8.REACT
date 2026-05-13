import { createContext, useState, useContext } from 'react';
import { inventoryApi } from '../services/inventoryApi';

const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchInventory = async () => {
    setLoading(true);
    try {
      const response = await inventoryApi.getAll();
      setItems(response.data);
      setError(null);
    } catch (err) {
      setError('Не вдалося завантажити товари');
    } finally {
      setLoading(false);
    }
  };

  const deleteItem = async (id) => {
    try {
      await inventoryApi.delete(id);
      setItems(items.filter(item => item.id !== id));
    } catch (err) {
      alert('Помилка при видаленні');
    }
  };

  return (
    <InventoryContext.Provider value={{ items, loading, error, fetchInventory, deleteItem }}>
      {children}
    </InventoryContext.Provider>
  );
};

export const useInventory = () => {
  const context = useContext(InventoryContext);
  if (!context) {
    console.error('useInventory must be used within an InventoryProvider');
  }
  return context;
};
