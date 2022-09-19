import { Switch, Route } from "react-router-dom";
import HomePage from "./Pages/home";
import LoginPage from "./Pages/Login";
import RegisterPage from "./Pages/Register";

const Routes = () =>{
    return(
        <Switch>
            <Route exact path="/"><HomePage/></Route>
            <Route exact path="/login"><LoginPage/></Route>
            <Route exact path="/register"><RegisterPage/></Route>
        </Switch>
    )
};

export default Routes;

