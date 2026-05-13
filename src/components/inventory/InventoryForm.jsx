import { useState } from 'react';
import { inventoryApi } from '../../services/inventoryApi';
import { useNavigate } from 'react-router-dom';

const InventoryForm = ({ mode, itemId }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setError('Назва товару є обов\'язковим полем');
      return;
    }

    try {
      if (mode === 'create') {
        const formData = new FormData();
        formData.append('inventory_name', name);
        formData.append('description', description);
        if (file) formData.append('inventory_image', file);
        await inventoryApi.create(formData);
      } else {
        await inventoryApi.update(itemId, {
          inventory_name: name,
          description: description
        });
        if (file) {
          await inventoryApi.updatePhoto(itemId, file);
        }
      }
      navigate('/admin');
    } catch (error) {
      console.error('Помилка при збереженні:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px' }}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="text"
        placeholder="Назва товару"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Опис товару"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
      <button type="submit">Зберегти</button>
    </form>
  );
};

export default InventoryForm;
