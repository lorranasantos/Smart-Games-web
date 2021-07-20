import { BrowserRouter, Switch } from "react-router-dom";
import Home from "./pages/Home";

function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Home/>
            </Switch>
        </BrowserRouter>
    );
}
export default Router;