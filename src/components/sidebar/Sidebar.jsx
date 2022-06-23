import './sidebar.css';

import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <strong>Home</strong>
              </li>
            </Link>

            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <strong>Products</strong>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
