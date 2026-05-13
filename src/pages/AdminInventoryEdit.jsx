import { useParams } from 'react-router-dom';
import InventoryForm from '../components/inventory/InventoryForm';

const AdminInventoryEdit = () => {
  const { id } = useParams();

  return (
    <div className="admin-container">
      <h2>Редагувати товар #{id}</h2>
      <InventoryForm mode="edit" itemId={id} />
    </div>
  );
};

export default AdminInventoryEdit;
