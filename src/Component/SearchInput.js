import bannerImg from "../img/bannerImg.png";
import bannerBG from "../img/bannerBG.png";
import starBG from "../img/starBG.svg";
import starDot from "../img/starDot.svg";
import {BiSearchAlt} from "react-icons/bi";

export default function SearchInput(){
    return(
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
    )
}