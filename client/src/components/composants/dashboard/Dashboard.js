import React , {Component , Fragment} from 'react';

import Musicplayer from '../../layouts/musicPlayerBar/Musicplayer';
import Navbar  from '../../layouts/sideBar/Navbar'

import "./Dashboard.css"
export default class Dashboard extends Component{


    render(){


        return (
            
            <Fragment>
                <div id ='mainContainer'>
                    
                    <div id = 'topContainer'>
                        <Navbar/>
                    </div>

                </div>

                
                <Musicplayer/>
            </Fragment>
        )
    }
    
}