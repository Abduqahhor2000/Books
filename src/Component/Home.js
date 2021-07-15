import userImg from "../img/userImg.png";

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

            </div>
            <div className="main-home">

            </div>
        </div>
    </div>
  );
}

export default Home;
