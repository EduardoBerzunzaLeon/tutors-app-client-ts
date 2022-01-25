import { Outlet } from 'react-router-dom';
import MenuTop from '../../../components/menuTop/MenuTop';

import '../../../layout/flags/flags.css';
import '../../../layout/layout.scss';
import './adminLayout.scss';

const AdminLayout = () => (
  <div className="layout-wrapper layout-overlay">
    <MenuTop />
    <div className="layout-main">
      <div className="p-grid">
        <div className="p-col-12">
          <div className="card">
            <Outlet />
          </div>
        </div>
      </div>
    </div>

  </div>

);

export default AdminLayout;
