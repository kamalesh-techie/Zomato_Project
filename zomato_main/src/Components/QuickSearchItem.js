import React from "react";
import { withRouter } from "react-router-dom";
 
class QuickSearchItem extends React.Component{
  handleNavigate = (meal_type)=>{
    console.log(meal_type)
    const location_id = sessionStorage.getItem('location_id');
    if(location_id){
    this.props.history.push(`/filter?meal_type=${meal_type}&location_id=${location_id}`);
    }else{
      this.props.history.push(`/filter?meal_type=${meal_type}`);
    }
  }
  render(){
      const { name, content, meal_type, image } = this.props.quickSearchItemData;
        return(
            <div className="boxes" onClick={()=>this.handleNavigate(meal_type)}>
          <div className="boxContent">
            <img
              src={image}
              alt="idly"
              className="qsImage"
            />
            <h4 className="itemHeading">{name}</h4>
            <p className="itemDescription">
              {content}
            </p>
          </div>
          
        </div>
        )
    }
}
export default withRouter(QuickSearchItem); 