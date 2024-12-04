import "./searchList.css";
import "../../data/search.json";
import { useNavigate } from "react-router-dom";

function SearchList({ props }) {
  const navigate = useNavigate();

  //Hàm chuyển sang trang detail xem chi tiết phòng được click
  const handleSeeAvailability = () => {
    navigate("/detail", {
      replace: true,
    });
  };

  return (
    /* - Hiển thị hình ảnh các thành phố 
     - Dùng phương thức map lặp qua các phần tử mảng search.json để nhận và hiển thị dữ liệu
     - Sử dụng key= {index} để giúp ReactJS xác định phần tử nào đã được thay đổi (ở đây chỉ dùng để tắt cảnh báo warning trong console của browser), key được định danh duy nhất cho mỗi phần tử trong mảng
  */
    <div className="searchList">
      {props.map((itemSearch, index) => (
        /* Chia mỗi phần tử mảng search.json thành thành 3 phần: */
        <div key={index} className="searchListItem">
          {/* 1. Phần hình ảnh */}
          <img src={itemSearch.image_url} />

          {/* 2. Phần thông tin chi tiết về phòng */}
          <div className="roomInfo">
            <h2>{itemSearch.name}</h2>
            <p className="distance">{itemSearch.distance} from center</p>
            <span className="tagRoom">{itemSearch.tag}</span>
            <p className="descriptionRoom">{itemSearch.description}</p>
            <p className="typeRoom">{itemSearch.type}</p>

            {/* Sử dụng toán tử 3 ngôi để xác định việc có/không có phần tử p với className là free_cancel bên dưới */}
            <p className="free_cancel">
              {itemSearch.free_cancel ? (
                <div>
                  <div className="free_cancel_1">Free cancellation</div>
                  <div className="free_cancel_2">
                    You can cancel later,so lock in this great price today
                  </div>
                </div>
              ) : null}
            </p>
          </div>

          {/* 3. Phần đánh giá chất lượng phòng */}
          <div className="evaluateRoom">
            <div className="rate">
              <p className="rate_text">{itemSearch.rate_text}</p>
              <p className="rate_point">{itemSearch.rate}</p>
            </div>

            <div className="money">
              <p className="price">${itemSearch.price}</p>
              <p className="taxesAndFees_text">Includes taxes and fees</p>
              <button onClick={handleSeeAvailability}>See availability</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SearchList;
