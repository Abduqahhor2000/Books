import Navbar from "./Component/Navbar";
import SearchInput from "./Component/SearchInput";
import Main from "./Component/Main";
import ornament from "./img/ornament.svg";
import "./App.css";

function App() {
  return (
    <div className="home">
      <div className="container-home">
        <Navbar /> 
        <SearchInput />
        <Main />
      </div>
      <img className="ornament" src={ornament} alt="jnknjk"></img>
    </div>
  );
}

export default App;
