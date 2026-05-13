import InventoryForm from '../components/inventory/InventoryForm';

const AdminInventoryCreate = () => {
  return (
    <div className="admin-container">
      <h2>Додати новий товар</h2>
      <InventoryForm mode="create" />
    </div>
  );
};

export default AdminInventoryCreate;
