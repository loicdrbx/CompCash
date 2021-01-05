import React from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import './DNav.css';

function DNav() {
  return (
    <div className="col-2 dnav h-100">
      <nav>
        <ul className="nav-menu-items">
          <li className="nav-item">
            <Link to="/dashboard" className="green nav-links">
              <div className="row align-items-center">
                <AiIcons.AiFillHome size="1.5em" />
                <p className="m-0 ml-3 nav-text">Home</p>
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard/guide" className="dark nav-links">
              <div className="row align-items-center">
                <AiIcons.AiFillBook size="1.5em" />
                <p className="m-0 ml-3 nav-text">Guide</p>
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard/boxes" className="dark nav-links">
              <div className="row align-items-center">
                <FaIcons.FaBox size="1.5em" />
                <p className="m-0 ml-3 nav-text">New Box</p>
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard/community" className="dark nav-links">
              <div className="row align-items-center">
                <RiIcons.RiCommunityFill size="1.5em" />
                <p className="m-0 ml-3 nav-text">Community</p>
              </div>
            </Link>
          </li>
          <li className="nav-item pb-3">
            <Link to="/dashboard/store" className="dark nav-links">
              <div className="row align-items-center">
                <FaIcons.FaStore size="1.5em" />
                <p className="m-0 ml-3 nav-text">Store</p>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default DNav;
