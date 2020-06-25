import React, { Component } from 'react';
import { BrowserRouter as Router ,Link } from 'react-router-dom'

class Nav extends Component {
    render() { 
        return ( 
            <nav>
                <Router>
                <Link to ='/'>
                   <span className=" btn m-1 btn-sm btn-link">Form</span> 
                </Link>

                <Link to ='/table'>
                   <span className=" btn m-1 btn-sm btn-link">Table</span> 
                </Link>
                </Router>
            </nav>
         );
    }
}
 
export default Nav;