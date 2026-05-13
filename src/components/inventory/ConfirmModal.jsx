import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInventory } from '../../store/InventoryContext.jsx';
import ConfirmModal from './ConfirmModal.jsx';

const InventoryTable = ({ data }) => {
  const navigate = useNavigate();
  const { deleteItem } = useInventory();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  if (!data || data.length === 0) {
    return <p style={{ textAlign: 'center', marginTop: '20px' }}>Список товарів порожній.</p>;
  }

  const handleDeleteClick = (id) => {
    setSelectedId(id);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    deleteItem(selectedId);
    setIsModalOpen(false);
  };

  return (
    <>
      <table border="1" style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#f4f4f4' }}>
            <th>Фото</th>
            <th>Назва</th>
            <th>Опис</th>
            <th>Дії</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} style={{ textAlign: 'center' }}>
              <td>
                {item.inventory_image ? (
                  <img
                    src={`http://localhost:5000${item.inventory_image}`}
                    alt={item.inventory_name}
                    width="60"
                    style={{ borderRadius: '4px' }}
                  />
                ) : (
                  'Немає фото'
                )}
              </td>
              <td>{item.inventory_name}</td>
              <td>{item.description}</td>
              <td>
                <button onClick={() => navigate(`/admin/details/${item.id}`)}>Переглянути</button>
                <button onClick={() => navigate(`/admin/edit/${item.id}`)}>Редагувати</button>
                <button
                  onClick={() => handleDeleteClick(item.id)}
                  style={{ color: 'red', cursor: 'pointer' }}
                >
                  Видалити
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ConfirmModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmDelete}
        message="Ви впевнені, що хочете видалити цю позицію?"
      />
    </>
  );
};

export default InventoryTable;
