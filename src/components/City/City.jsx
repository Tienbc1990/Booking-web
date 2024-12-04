import "./city.css";
import "../../data/city.json";

const City = ({ props }) => {
  /* - Hiển thị hình ảnh các thành phố 
     - Dùng phương thức map lặp qua các phần tử mảng city.json để nhận và hiển thị dữ liệu
     - Sử dụng key={index} để giúp ReactJS xác định phần tử nào đã được thay đổi (ở đây chỉ dùng để tắt cảnh báo warning trong console của browser), key được định danh duy nhất cho mỗi phần tử trong mảng
  */
  return (
    <div className="city-list">
      {props.map((city, index) => (
        <div key={index} className="city-card">
          <img src={city.image} alt={`Photo ${city.name}`} />
          <div className="city-details">
            <h2>{city.name}</h2>
            <p>{city.subText}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default City;
