import React from "react";
import { Route, BrowserRouter} from 'react-router-dom';


import Home from '../Components/Home';
import Filter from '../Components/Filter';
//import Details from '../Components/Details';
import Details2 from "../Components/Details2";
import Header from "./Header ";


function Router(){
    return(
<BrowserRouter>
<Route path="*" component ={Header}/>
<Route exact path = '/' component ={Home}/>
<Route path = '/filter' component={Filter}/>
<Route path = '/details2' component={Details2}/>
</BrowserRouter>
    )
}   
export default Router;
