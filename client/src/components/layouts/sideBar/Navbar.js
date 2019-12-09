import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import {logout} from '../../../actions/auth';
import {dispatch} from '../../../store';
import './Navbar.css'

export default class Navbar extends Component {


    handleLog = () =>{

        dispatch(logout())
    }


    render() {
        return (
            <div id = 'navBarContainer'>

                <nav className="navBar">

                    <NavLink to="/home" className="logo">
                        <img src="/images/icons/logo.png" alt = 'logo' />
                    </NavLink>

                    <div className="group">

						<div className="navItem">
							<NavLink activeStyle={{ color:'white' }} to="/search" className="navItemLink">Search
								<img src="/images/icons/search.png" className="icon" alt="Search" />
							</NavLink>
						</div>

				    </div>

				    <div className="group">
						<div className="navItem">
							<NavLink  to="/home" activeStyle={{ color:'white' }} className="navItemLink active">Browse</NavLink>
						</div>

						<div className="navItem">
							<NavLink to="/playlist"  activeStyle={{ color:'white' }} className="navItemLink">Your Music</NavLink>
						</div>

						<div className="navItem">
							<NavLink to="#!" onClick = {this.handleLog} className="navItemLink">Log out</NavLink>
						</div>
					</div>


                </nav>
                
            </div>
        )
    }
}
