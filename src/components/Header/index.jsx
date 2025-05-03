import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    // Header Start
    <header>
      {/* Top Strip Start */}
      <div className="top-strip py-2 border-t-[1px] border-b-[1px] border-gray-300">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="col1 w-[50%]">
              <p className="text-[12px] font-[500]">
                Get upto 50% off new season styles, limited time only
              </p>
            </div>
            <div className="flex items-center justify-end">
              <ul className="flex items-center gap-3">
                <li className="list-none">
                  <Link
                    to="/help-center"
                    className="text-[12px] link font-[500] transition"
                  >
                    Help Center
                  </Link>
                </li>
                |
                <li className="list-none">
                  <Link
                    to="/order-tracking"
                    className="text-[12px] link font-[500] transition"
                  >
                    Order Tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Top Strip End */}

      {/* Main Header Start */}
      <div className="header">
        <div className="container flex items-center justify-between">
          <div className="col1"></div>
          <div className="col2"></div>
          <div className="col3"></div>
        </div>
      </div>
      {/* Main Header End */}
    </header>
    // Header End
  );
};

export default Header;
