import "./search.css";

import dataNavBar from "../../data/navBar.json";
import NavBar from "../../components/Navbar/NavBar";
import "../../components/Navbar/navBar.css";

import "../../components/Footer/footer.css";

import SearchPopup from "../../components/searchPopup/SearchPopup";

import SearchList from "../../components/SearchList/SearchList";
import dataSearchList from "../../data/search.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Header from "../../components/Header/Header";
import FormSubcribe from "../../components/FormSubcribe/FormSubcribe";
import Footer from "../../components/Footer/Footer";
import dataFooter from "../../data/footer.json";

const Search = ({ props }) => {
  /* Truyền dữ liệu giữa các component thông qua props  */
  return (
    /* Tận dụng lại 1 phần của header và navbar */
    <div className="home">
      {/* Phần  Header */}
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

      {/* Phần trang Search Page */}
      <div className="container">
        <div className="searchPage">
          <SearchPopup />
          <SearchList props={dataSearchList} />
        </div>
      </div>

      {/* Phần Subcribe */}
      <FormSubcribe />

      {/* Phần Footer */}
      <Footer props={dataFooter} />
    </div>
  );
};

export default Search;
