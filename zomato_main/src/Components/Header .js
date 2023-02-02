import React from "react";
import Modal from 'react-modal';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

import '../Styles/Header.css';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border: 'solid 1px brown',
      backgroundColor: 'antiquewhite'
    },
  };

class Header extends React.Component{
    constructor(){
        super();
        this.state={
            backgroundcolor:'',
            display: 'none',
            loginModalIsOpen: false,
            isLoggedIn: false,
            loggedInUser: undefined
        }
    }
    componentDidMount(){
        const path = this.props.history.location.pathname;
        this.setAttributes(path);
    }
    setAttributes = (path) =>{
        let bg, display;
        if(path === '/'){
            bg ='black';
            display = 'none';
        }
        else{
            bg='red';
            //  display='inline-black'
        }
        this.setState({backgroundColor:bg, display: display})
    }
    handleLogin = ()=>{
        this.setState({loginModalIsOpen : true});
    }
    handleCancel = () =>{
        this.setState({loginModalIsOpen : false,});
    }
    responseGoogle = (res) => {
        console.log(res);
      }
      responseFacebook = (response) => {
        console.log(response.name);
        this.setState({isLoggedIn: true, loggedInUser:response.name, loginModalIsOpen: false })
      }  
      
    
    render(){
        const { backgroundColor, display, loginModalIsOpen, isLoggedIn, loggedInUser} = this.state;
        return(
                <div className=" empty" style={{backgroundColor:backgroundColor}}>
                      <div className="log" style={{display: display}}>Zomato</div>
                      { !isLoggedIn ?
                      <div>
                        <button className="button">create an account</button>
                        <button className="login" onClick={this.handleLogin}>Login</button>
                      </div>
                      : 
                      <div>
                         <button className="button" onClick={this.handleLogedOut}>Log Out</button>
                         <button className="login">{loggedInUser}</button>
                      </div>}
                      <Modal
                            isOpen={loginModalIsOpen}
                             style={customStyles}
                            >
                    <div>
                            <h2>LogIn</h2>
                            <input type="Text" placeholder="Enter Email"/>
                            <br/>
                            <br/>
                            <input type="Text" placeholder="Enter Password"/>
                            <br/>
                            <br/>
                         <div>
                                <button>Login</button>
                                <button onClick={this.handleCancel}>Cancel</button>
                         </div>
                         <br/>
                         <div>
                            <GoogleLogin
                            clientId="93588346744-1o1k2bea21hakl9qh64im590joq13kll.apps.googleusercontent.com"
                            buttonText="Continue With Google"
                            onSuccess={this.responseGoogle}
                            onFailure={this.responseGoogle}
                            cookiePolicy={'single_host_origin'}/>
                          </div>
                          <br/>
                          <div>
                          <FacebookLogin
                            appId="1862883824061823"
                            autoLoad={true}
                            fields="name,email,picture"
                            onClick={this.componentClicked}
                            callback={this.responseFacebook} />
                          </div>
                        
                    </div>
                      </Modal>
                 </div>

        
        )
    }
}
export default Header; 