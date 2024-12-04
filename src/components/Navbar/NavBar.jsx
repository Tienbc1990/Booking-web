import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./navBar.css";
import "../../data/navBar.json";

function NavBar({ props }) {
  /* - Hiển thị hình ảnh các thành phố 
     - Dùng phương thức map lặp qua các phần tử mảng navBar.json để nhận và hiển thị dữ liệu
     - Sử dụng key= {index} để giúp ReactJS xác định phần tử nào đã được thay đổi (ở đây chỉ dùng để tắt cảnh báo warning trong console của browser), key được định danh duy nhất cho mỗi phần tử trong mảng
  */
  return (
    <nav className="navBar">
      <ul className="nav-list">
        {props.map((item, index) => (
          /* Toán tử 3 ngôi để bật tắt class active, cho phép bật, tắt border cho các nav-item */
          <li key={index} className={`nav-item ${item.active ? "active" : ""}`}>
            <FontAwesomeIcon icon={item.icon} className="nav-icon" />
            {item.type}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
