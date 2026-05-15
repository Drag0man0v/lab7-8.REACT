import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminInventory from './pages/AdminInventory';
import AdminInventoryCreate from './pages/AdminInventoryCreate';
import AdminInventoryEdit from './pages/AdminInventoryEdit';
import AdminInventoryDetails from './pages/AdminInventoryDetails';
import Gallery from './pages/Gallery.jsx';
import Favorites from './pages/Favorites.jsx';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{
    padding: '15px 30px',
    background: '#2c3e50',
    color: '#fff',
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 100
  }}>
    <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>🛍️ Магазин</Link>
    <Link to="/favorites" style={{ color: 'white', textDecoration: 'none' }}>❤️ Улюблені</Link>
    <Link to="/admin" style={{ color: 'white', marginLeft: 'auto', textDecoration: 'none', opacity: '0.8' }}>⚙️ Адмінка</Link>
  </nav>
);

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/admin" element={<AdminInventory />} />
          <Route path="/admin/create" element={<AdminInventoryCreate />} />
          <Route path="/admin/edit/:id" element={<AdminInventoryEdit />} />
          <Route path="/admin/details/:id" element={<AdminInventoryDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
