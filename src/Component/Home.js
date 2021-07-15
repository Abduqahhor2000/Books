import userImg from "../img/userImg.png";
import bannerImg from "../img/bannerImg.png";
import bannerBG from "../img/bannerBG.png";
import starBG from "../img/starBG.svg";

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
                    <div><p>temuriylar davri adabiyoti</p></div>
                    <img className="starBG" src={starBG} alt="fghfhgj"></img>
                    <img className="starBG1" src={starBG} alt="fghfhgj"></img>
                    <img className="starBG2" src={starBG} alt="fghfhgj"></img>
                </div>
            </div>
            <div className="main-home">

            </div>
        </div>
    </div>
  );
}

export default Home;
