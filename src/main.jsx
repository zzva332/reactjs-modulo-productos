import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './index.css'
import LayoutDashboard from './components/Layout.jsx';
import { ProductoProvider } from './context/producto.jsx';


createRoot(document.getElementById('root')).render(
  <ProductoProvider>
    <LayoutDashboard/>
  </ProductoProvider>
)
