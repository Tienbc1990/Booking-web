import "./hotelType.css";

import "../../data/type.json";

function HotelType({ props }) {
  /* - Hiển thị hình ảnh các thành phố 
     - Dùng phương thức map lặp qua các phần tử mảng type.json để nhận và hiển thị dữ liệu
     - Sử dụng key= hotelType.name để giúp ReactJS xác định phần tử nào đã được thay đổi (ở đây chỉ dùng để tắt cảnh báo warning trong console của browser), key được định danh duy nhất cho mỗi phần tử trong mảng
  */
  return (
    <div className="hotelTypeList">
      {props.map((hotelType, index) => (
        <div className="hotelType-card" key={hotelType.name}>
          <img src={hotelType.image} alt={`Photo ${hotelType.name}`} />
          <div className="hotelType-detail">
            <h4>{hotelType.name}</h4>
            <p>{hotelType.count} hotels</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HotelType;
