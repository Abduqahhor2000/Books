import { useContext } from "react";
import AuthContext, {initailState} from "../contexts/AuthContext";
import userImg from "../img/userImg.png";
import {Link} from "react-router-dom";

export default function Navbar(){
    const context = useContext(AuthContext);

    const SignOutHendler = () => {
        localStorage.clear();
        context.contextValue.setAuthDetails(initailState);
    }

    console.log(context.contextValue.token);
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
                   (context.contextValue.token) ? <div className="user-img">
                                        <div className="SignOut">
                                            <button onClick={SignOutHendler} className="SignOutBtn">Sign Out</button>
                                            <span>{context.contextValue.user.firstName} {context.contextValue.user.lastName}</span>
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