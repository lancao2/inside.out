import { Switch, Route } from "react-router-dom";
import HomePage from "./Pages/home";

const Routes = () =>{
    return(
        <Switch>
            <Route exact path="/"><HomePage/></Route>
            <Route exact path="/login"><h1>Login</h1></Route>
            <Route exact path="/register"><h1>Register</h1></Route>
        </Switch>
    )
};

export default Routes;

