import userImg from "../img/userImg.png";
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {clearUserAction} from "../store/actions/userAction";

export default function Navbar(){
    const user = useSelector(state => state.user.user);
    const token = useSelector(state => state.user.token);
    const dispatch = useDispatch();

    const SignOutHendler = () => {
        localStorage.clear();
        dispatch(clearUserAction());
    }

    console.log(token);
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
                   (token) ? <div className="user-img">
                                        <div className="SignOut">
                                            <a href="#" onClick={SignOutHendler} className="SignOutBtn">Sign Out</a>
                                            <span>{user.firstName} {user.lastName}</span>
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