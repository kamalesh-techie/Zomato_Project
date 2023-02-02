import React from "react";
import QuickSearchItem from "./QuickSearchItem";

class QuickSearch extends React.Component{

    render(){

        const { quickSearchData } = this.props;
        return(
             <div>
                 <div className="bottomSection">
                    <h1 className="heading">Quick Search</h1> 
                    <h3 className="subHeading">Discover restuarants by type of meal</h3>
                    <div className="boxContainer">
                    {
                    quickSearchData.map((item,p)=>{
                        return  <QuickSearchItem key={p} quickSearchItemData ={item }/>
                    })}
                        
        
                    </div>
                </div>

             </div>
        )
    }
}
export default QuickSearch;