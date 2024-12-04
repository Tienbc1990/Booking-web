import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./home.css";

import dataNavBar from "../../data/navBar.json";
import NavBar from "../../components/Navbar/NavBar";

import Header from "../../components/Header/Header";

import dataCity from "../../data/city.json";
import City from "../../components/City/City";

import dataHotelType from "../../data/type.json";
import HotelType from "../../components/hotelType/HotelType";

import dataHotelList from "../../data/hotel_list.json";
import HotelList from "../../components/HotelList/HotelList";

import FormSubcribe from "../../components/FormSubcribe/FormSubcribe";

import Footer from "../../components/Footer/Footer";
import dataFooter from "../../data/footer.json";

const Home = ({ props }) => {
  /* Truyền dữ liệu giữa các component thông qua props  */
  return (
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
        <Header />
      </div>
      <City props={dataCity} />

      <h3>Browse by property type</h3>

      <HotelType props={dataHotelType} />

      <h3>Homes guests love</h3>

      <HotelList props={dataHotelList} />
      
      <FormSubcribe />

      <Footer props={dataFooter} />
    </div>
  );
};

export default Home;
