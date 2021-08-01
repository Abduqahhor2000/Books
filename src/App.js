import "./App.css";
import { useEffect } from "react";
import AddBook from "./Component/AddBook";
import AddAuthor from "./Component/AddAuthor";
import SignIn from "./Component/SignIn";
import SignUp from "./Component/SignUp";
import Home from "./Component/Home";
import Author from "./Component/Author";
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { updateUserAction } from "./store/actions/userAction";

function App () {
  const store = useSelector(state => state.user.user);
  const dispatch = useDispatch();

    useEffect(()=>{
        const user  = JSON.parse(localStorage.user || '{}');
        const token = localStorage.getItem('token');
        dispatch(updateUserAction({token, user}));
    }, []);
    
    return(
     <>
       <Router>
         <Switch>       
           <Route component={Home} exact path={["/", '/books', '/products']} />
           <Route component={SignIn} exact path="/sign-in" />
           <Route component={SignUp} exact path="/sign-up" />
           <Route component={Author} exact path="/author" />
           <Route component={AddAuthor} exact path="/add-author" />
           <Route component={AddBook} exact path="/add-book" />
         </Switch>
       </Router>
     </>
    )
}

export default App;