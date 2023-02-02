import React from "react";
import axios from "axios";
import { withRouter } from 'react-router-dom'
import '../Styles/Wallpaper.css'

class Wallpaper extends React.Component{
constructor(){
  super();
  this.state = {
    restaurent : [],
    inputText : '',
    suggestions: []

  }
}

  handleLocation = (s) => {
    console.log(s.target.value)
    const location_id = s.target.value;
    sessionStorage.setItem('location_id',location_id);
    axios({
      method : 'GET',
      url :`http://localhost:3002/api/restaurent/getRestaurent/${location_id}`,
      headers: { 'Content-Type': 'application/json'}
    })
    .then(response => {
      this.setState({restaurent: response.data.data.restaurent})
      console.log(response.data.data.restaurent)
    })
    .catch(err =>console.log(err));
  }
  handleSearch = (event) =>{
    let inputText = event.target.value;
    const { restaurent } = this.state;
    const suggestions = restaurent.filter(item => item.name.toLowerCase().includes(inputText.toLowerCase() ));
   this.setState({ suggestions, inputText});
  } 
  showSuggestion = () => {
    const { suggestions, inputText } = this.state;
    if(suggestions.length == 0 && inputText == undefined){
      return null;
    }
    if(suggestions.length > 0 && inputText == ''){
      return null;
    }
    if(suggestions.length == 0 && inputText ){
    return <ul>
      <li className="noSearch">No Search Found</li> 
           </ul>
    }
    return(
      <ul>{
        suggestions.map((item, index) => (<li className="noSearch" key={index} onClick={() => this.selectingRestaurent(item)}>{`${item.name}  -  ${item.locality},${item.city}`}</li>))
        }</ul>
    );
      }
selectingRestaurent = (resObj) => {
this.props.history.push(`/details2?restaurent=${resObj._id}`);
}
  
    render(){
      const { restaurentData } = this.props;
        return(
            <div>
                <img src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png"
                     alt="Zomato"
                     className="homeImage" />
      <div className="topSection">
      <div className="logo">Zomato</div>
      <div className="headerText">Discover the best food & drinks in Salem</div>
      <div className="searchOptions">
        <span>
          <select className="locationBox" onChange={s => this.handleLocation(s)}>
            <option value= "0">Select City</option>
            {restaurentData.map((item, i) => {
              return  <option value={item.location_id} key={i}> {`${item.name} , ${item.city}`}</option>
            })}
            
          </select>
        </span>
        <span className="searchBox">
          <i className="bi bi-search searchIcon"></i>
          <input
            type="text"
            className="searchInput"
            placeholder="Search for Restuarants"
            onChange={this.handleSearch} 
             />
            
        </span>
       {/* .... */}
        <div >
        {this.showSuggestion()}
        </div>
        {/* ... */}
      </div>
    </div>
            </div>
        )
    }
}
export default withRouter(Wallpaper);

 
