import userImg from "../img/userImg.png";
import bannerImg from "../img/bannerImg.png";
import bannerBG from "../img/bannerBG.png";
import starBG from "../img/starBG.svg";
import starDot from "../img/starDot.svg";
import ornament from "../img/ornament.svg";
import {BiSearchAlt} from "react-icons/bi";
import Katalog from "./Katalog";

function Home() {
  return (
    <div className="home">
        <div className="container-home">
            <div className="header-home">
              <div className="brand-home">
                 <h1>Badiiyat</h1>
              </div>
              <div className="nav-home">
                  <ul>
                    <li>Bosh sahifa</li>
                    <li>Nasr</li>
                    <li>Nazm</li>
                    <li>Maqolalar</li>
                    <li>Forum</li>
                  </ul>
                  <div className="user-img">
                      <img src={userImg}></img>
                  </div>
              </div>
            </div>
            <div className="banner-home">
                <div className="banner-img">
                    <img className="bannerBG" src={bannerBG} alt="fghfhgj"></img>
                    <img className="bannerImg" src={bannerImg} alt="fghfhgj"></img>
                    <div className="div1"><p>temuriylar davri adabiyoti</p></div>
                    <div className="slider-button">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <img className="starBG" src={starBG} alt="fghfhgj"></img>
                    <img className="starBG1" src={starBG} alt="fghfhgj"></img>
                    <img className="starBG2" src={starBG} alt="fghfhgj"></img>
                    <img className="starDot" src={starDot} alt="fghfhgj"></img>
                    <img className="starDot1" src={starDot} alt="fghfhgj"></img>
                    <img className="starDot2" src={starDot} alt="fghfhgj"></img>
                </div>
                <div className="search-div">
                  <h2>qidirish</h2>
                  <form>
                    <input type="text" placeholder="Adiblar, kitoblar, audiolar, maqolalar..."></input>
                    <button type="button"><BiSearchAlt /> Izlash</button>
                  </form>
                </div>
            </div>
            <div className="main-home">
                <h2>Asosiy kategoriyalar</h2>
                <ul>
                  <li>Temuriylar davri </li>
                  <li>Jadid adabiyoti </li>
                  <li>Sovet davri </li>
                  <li>Mustaqillik davri </li>
                </ul>
               <Katalog />
            </div>
        </div>
          <img className="ornament" src={ornament} alt="jnknjk"></img>
        
    </div>
  );
}

export default Home;
