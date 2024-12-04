import "./footer.css";
import "../../data/footer.json";

function Footer({ props }) {
  /* - Hiển thị hình ảnh các thành phố 
     - Dùng phương thức map lặp qua các phần tử mảng footer.json để nhận và hiển thị dữ liệu
     - Sử dụng key={index} hay key = footerCol.col_number để giúp ReactJS xác định phần tử nào đã được thay đổi (ở đây chỉ dùng để tắt cảnh báo warning trong console của browser), key được định danh duy nhất cho mỗi phần tử trong mảng
  */
  return (
    <div className="footer-Card">
      {props.map((footerCol) => (
        <div key={footerCol.col_number} className="footerCol">
          {footerCol.col_values.map((footerValue, index) => (
            <div key={index} className="footerValue">
              {footerValue}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Footer;
