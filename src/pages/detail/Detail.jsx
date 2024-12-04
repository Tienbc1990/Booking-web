import "./detail.css";

import Header from "../../components/Header/Header";
import FormSubcribe from "../../components/FormSubcribe/FormSubcribe";
import Footer from "../../components/Footer/Footer";
import dataFooter from "../../data/footer.json";
import dataNavBar from "../../data/navBar.json";
import NavBar from "../../components/Navbar/NavBar";
import "../../components/Navbar/navBar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocation } from "@fortawesome/free-solid-svg-icons";

const dataDetail = {
  name: "Tower Street Apartments",
  address: "Elton St 125 New york",
  distance: "Excellent location - 500m from center",
  price: "Book a stay over $114 at this property and get a free airport taxi",
  photos: [
    "./images/hotel_detail_1.jpg",
    "./images/hotel_detail_2.jpg",
    "./images/hotel_detail_3.jpg",
    "./images/hotel_detail_4.jpg",
    "./images/hotel_detail_5.jpg",
    "./images/hotel_detail_6.jpg",
  ],
  title: "Stay in the heart of City",
  description:
    "Located a 5-minute walk from St. Florian's Gate in Krakow, Tower Street Apartments has accommodations with air conditioning and free WiFi.The units come with hardwood floors and feature a fully equipped kitchenette with a microwave, a flat - screen TV, and a private bathroom with shower and a hairdryer.A fridge is also offered, as well as an electric tea pot and a coffee machine.Popular points of interest near the apartment include Cloth Hall, Main Market Square and Town Hall Tower.The nearest airport is John Paul II International Kraków - Balice, 16.1 km from Tower Street Apartments, and the property offers a paid airport shuttle service.",
  nine_night_price: 955,
};

function Detail() {
  return (
    /* Tận dụng lại 1 phần của header và navbar */
    <div className="home">
      <div className="headerContainer">
        <div className="headerTop">
          <h3>Booking Website</h3>
          <div className="registerLogin">
            <button>Register</button>
            <button>Login</button>
          </div>
        </div>
        <NavBar props={dataNavBar} />
      </div>

      {/* Hiển thị tên khách sạn, địa chỉ, khoảng cách so với trung tâm, giá cả */}
      <div className="detail">
        <div className="roomInfo_container">
          <div className="roomInfoDetail">
            <h2>{dataDetail.name}</h2>
            <p className="address">
              <FontAwesomeIcon icon="fa fa-map-marker" aria-hidden="true" />

              {dataDetail.address}
            </p>
            <p className="distance">{dataDetail.distance}</p>
            <p className="price">{dataDetail.price}</p>
          </div>
          <button id="btnBooking">Reserve or Book Now</button>
        </div>

        {/* Hiển thị danh sách hình ảnh */}
        <div className="photos">
          {dataDetail.photos.map((photo, index) => (
            <img key={index} src={photo} alt={`Photo ${index + 1}`} />
          ))}
        </div>

        {/* Miêu tả chi tiết khách sạn và giá cả có lợi khi booking cho 9 đêm */}
        <div className="perfect_booking">
          <div className="desc_Detail">
            <h2 className="title">{dataDetail.title}</h2>
            <p className="description">{dataDetail.description}</p>
          </div>
          <div className="perfectPrice">
            <h4>Perfect for a 9-night stay!</h4>
            <p className="locationScore">
              Located in the real heart of Krakow, this property has an
              excellent location score of 9.8!
            </p>
            <p className="dataDetail_nine_night_price">
              <span>${dataDetail.nine_night_price}</span> (9 nights)
            </p>
            <button id="btnBooking">Reserve or Book Now</button>
          </div>
        </div>
      </div>
      
      {/* Tận dụng phần FormSubcribe */}
      <FormSubcribe />

      {/* Tận dụng phần Footer */}
      <Footer props={dataFooter} />
    </div>
  );
}

export default Detail;
