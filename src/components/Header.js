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
                     <nav className="navbar navbar-default" style={{border:'none'}}>
                        <div className="container-fluid" style={{background:'white'}}>
                           
                            <ul className="nav navbar-nav">
                            <li ><a href="https://skateboard-react.herokuapp.com/"><img src={Search} alt=""/>SEARCH</a></li>
                            <li><a href="https://skateboard-react.herokuapp.com/">SUPPORT</a></li>
                            <li><a href="https://skateboard-react.herokuapp.com/">GIFT CARD</a></li>
                            <li><a href="https://skateboard-react.herokuapp.com/">LOGIN</a></li>
                            </ul>
                        </div>
                     </nav>
           </div>

            </div>
                

            </div>
        );
    }
}

export default Header;