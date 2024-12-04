import "./searchPopup.css";

function SearchPopup() {
  return (
    <div className="searchPopup">
      <h2>Search</h2>

      {/* Phần để nhập thông tin điểm đến và ngày check-in  */}
      <div>
        <div className="destination-and-check">
          <h4>Destination</h4>
          <input type="text" />
        </div>
        <div className="destination-and-check">
          <h4>Check-in Date</h4>
          <input type="text" placeholder="06/24/2024 to 06/24/2024" />
        </div>
      </div>

      {/* Phần chứa các lựa chọn khác để tìm kiếm */}
      <div className="options">
        <h4>Options</h4>
        <div className="optionItems">
          <div className="option-item">
            <p>Min price per night</p>
            <input type="text" />
          </div>
          <div className="option-item">
            <p>Max price per night</p>
            <input type="text" />
          </div>
          <div className="option-item">
            <p>Adult</p>
            <input type="text" placeholder="1" />
          </div>
          <div className="option-item">
            <p>Children</p>
            <input type="text" placeholder="0" />
          </div>
          <div className="option-item">
            <p>Room</p>
            <input type="text" placeholder="1" />
          </div>
        </div>
        <button>Search</button>
      </div>
    </div>
  );
}

export default SearchPopup;
