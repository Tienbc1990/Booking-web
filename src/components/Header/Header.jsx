import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { useNavigate } from "react-router-dom";

import React, { useState } from "react";

/* Import phần hiển thị lịch DatePicker */
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

function Header() {
  const navigate = useNavigate();

  // Hàm chuyển sang trang "/search"
  const handleSearch = () => {
    console.log(`search`);
    navigate("/search", {
      replace: true,
    });
  };

  // Khởi tạo state để quản lý việc hiển thị của modal
  const [showModal, setShowModal] = useState(false);

  // Khởi tạo state cho ngày tháng được chọn
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  // Hàm để xử lý việc thay đổi ngày tháng
  function handleSelect(ranges) {
    setDateRange([ranges.selection]);
  }

  // Hàm để toggle modal
  function toggleModal() {
    setShowModal(!showModal);
  }

  return (
    <div className="header">
      <h1>A lifetime of discount? It's Genius</h1>
      <p className="headerContent">
        Get rewarded for your travels - unlock instant saving of 10% or more
        with a free account
      </p>
      <button className="btnSignIn">Sign in / Register</button>

      <div className="searchContainer">
        <div className="iconSearch_bed">
          <FontAwesomeIcon icon="fa-bed" />
          <input type="text" placeholder="Where are you going?" />
        </div>

        <div className="iconSearch_calendar">
          <FontAwesomeIcon icon="fa-calendar" />
          <input
            type="text"
            placeholder="06/09/2024 to 06/09/2024"
            onClick={toggleModal}
            readOnly
          />
        </div>

        <div className="iconSearch_female">
          <FontAwesomeIcon icon="fa-female" />
          <input type="text" placeholder="1 adult 0 children 1 room" />
        </div>

        <button className="btnSearch" onClick={handleSearch}>
          Search
        </button>
      </div>

      {/* Dùng toán tử && để thêm hoặc bỏ component <DateRange/> */}
      {showModal && (
        <DateRange
          editableDateInputs={true}
          onChange={handleSelect}
          moveRangeOnFirstSelection={false}
          ranges={dateRange}
          className="datePicker"
        />
      )}
    </div>
  );
}

export default Header;
