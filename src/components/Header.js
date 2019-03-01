import React, { Component } from 'react';
import Logo from './image.svg';
import Search from './search.png';

class Header extends Component {
    render() {
        return (
            <div className="col-lg-12 col-md-12 col-sm-12" style={{background:'white',borderBottom:'2.5px solid #F6510E'}}>
                <div className="col-lg-10 col-md-10 col-sm-10" >
                    <div className="col-lg-6 col-md-8 col-sm-12" > 
                        <img src={Logo} style={{width:'auto',cursor:'pointer'}} alt="Logo"/>
                    </div>
                   
                     <div className="col-lg-6 col-md-10 col-sm-12" style={{paddingTop:'2em'}}>
                     <nav className="navbar navbar-inverse" style={{border:'none'}}>
                    <div className="container-fluid" style={{backgroundColor:'white'}}>
                        <div className="navbar-header" >
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar" style={{background:'black'}}>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>                        
                        </button>
                       
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar" style={{backgroundColor:'white'}}>
                       
                        <ul className="nav navbar-nav navbar-right">
                            <li className="li"><a style={{color:'black',fontFamily:'Montserrat,sans-serif',fontSize:'1em'}} href="https://skateboard-react.herokuapp.com/"><img src={Search} style={{width:'auto'}} alt=""/>SEARCH</a></li>
                            <li><a style={{color:'black',fontFamily:'Montserrat,sans-serif',fontSize:'1em'}} href="https://skateboard-react.herokuapp.com/">
                          
                            SUPPORT</a></li>
                           
                            <li><a style={{color:'black',fontFamily:'Montserrat,sans-serif',fontSize:'1em'}} href="https://skateboard-react.herokuapp.com/">GIFT CARD</a></li>       
                            <li><a style={{color:'black',fontFamily:'Montserrat,sans-serif',fontSize:'1em'}} href="https://skateboard-react.herokuapp.com/">LOGIN</a></li>
                          
                        </ul>
                        </div>
                    </div>
                    </nav>
           </div>

            </div>
                

            </div>
        );
    }
}

export default Header;