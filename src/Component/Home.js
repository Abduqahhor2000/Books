import Navbar from "./Navbar";
import SearchInput from "./SearchInput";
import Main from "./Main";
import ornament from "../img/ornament.svg";

function Home() {
 
  return(
         <div className="home">
           <div className="container-home">
             <Navbar /> 
             <SearchInput />
             <Main />
           </div>
           <img className="ornament" src={ornament} alt=""></img>
         </div>
  );
  
}

export default Home;
