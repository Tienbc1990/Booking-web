import "./hotelList.css";

import "../../data/hotel_list.json";

function HotelList({ props }) {
  /* - Hiển thị hình ảnh các thành phố 
     - Dùng phương thức map lặp qua các phần tử mảng hotel_list.json để nhận và hiển thị dữ liệu
     - Sử dụng key={index} để giúp ReactJS xác định phần tử nào đã được thay đổi (ở đây chỉ dùng để tắt cảnh báo warning trong console của browser), key được định danh duy nhất cho mỗi phần tử trong mảng
  */
  return (
    <div div className="hotelList">
      {props.map((hotel, index) => (
        <div className="hotel-card" key={index}>
          <img src={hotel.image_url} alt={`Photo ${hotel.name}`} />
          <h4 className="hotelName">{hotel.name}</h4>
          <p className="hotelCity">{hotel.city}</p>
          <p className="hotelPrice">{`Starting from $ ${hotel.price}`}</p>
          <div className="hotelRateType">
            <p className="hotelRate">{hotel.rate}</p>
            <p className="hotelType">{hotel.type}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HotelList;
