import React from "react";
import axios from 'axios';

import '../Styles/Home.css';

import QuickSearch from "./QuickSearch";
import Wallpaper from "./Wallpaper";

class Home extends React.Component{
    constructor(){
        super();
            this.state = {
                restaurent : [],
                mealTypes : []
            }
        }
    componentDidMount(){
        sessionStorage.clear();
        axios({
            method: 'GET',
            url: 'http://localhost:3002/api/restaurent/getRestaurent',
            headers: { 'Content-Type': 'application/json'}
        })
        .then(response => {
            this.setState({ restaurent : response.data.data.restaurent})
            //console.log(response.data.data.restaurent);
          
        })
        .catch(err => console.log(err));

        axios({
            method: 'GET',
            url: 'http://localhost:3002/api/mealtype/getAllMealTypes',
            headers: { 'Content-Type': 'application/json'}
        })
        .then(response => {
            this.setState({ mealTypes : response.data.data})
            //console.log(response.data.data);
          
        })
        .catch(err => console.log(err));
    }

    render(){
        const { restaurent, mealTypes } = this.state;
        return(
            <div>
     <Wallpaper restaurentData = { restaurent }/>
     <QuickSearch quickSearchData = { mealTypes }/>
    
            </div>
        )
    }
}
export default Home;