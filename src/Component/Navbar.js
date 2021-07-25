import { useContext } from "react";
import GlobalContext, {initailState} from "../contexts/GlobalContext";
import userImg from "../img/userImg.png";
import {Link} from "react-router-dom";

export default function Navbar(){
    const context = useContext(GlobalContext);

    const SignOutHendler = () => {
        localStorage.clear();
        context.setAuthDetails(initailState);
    }

    console.log(context.token);
    return(
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
                {
                   (context.token) ? <div className="user-img">
                                        <div className="SignOut">
                                            <a href="#" onClick={SignOutHendler} className="SignOutBtn">Sign Out</a>
                                            <span>{context.user.firstName} {context.user.lastName}</span>
                                        </div>
                                        <img src={userImg} alt=""></img>
                                     </div>
                                      : 
                                     <div className="SignInPanel">
                                        <Link to="/sign-in">Sign in</Link>
                                        <Link to="/sign-up">Sign up</Link>
                                     </div>
                }
               
            </div>
        </div>
    )
}