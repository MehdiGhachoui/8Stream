import React , {Component , Fragment} from 'react';
import Musicplayer from '../../layouts/musicPlayerBar/Musicplayer';
import Navbar  from '../../layouts/sideBar/Navbar'
import {Link} from 'react-router-dom'
import {getAlbums} from '../../../actions/album';
import {dispatch, getState , subscribe} from '../../../store'

import "../main.css"
import './Dashboard.css'




export default class Dashboard extends Component{

    constructor(){
        super()

        this.state = {

            albums : [],

        }


        subscribe(()=>{

           
            this.setState({
                albums : getState().album.albums
            })
        })
        
    }

    componentDidMount(){
        
        dispatch(getAlbums())
    }




    render(){

        const allAlbums = this.state.albums.map((album) => {
        
            return(
                
                <div key = {album._id} className = "gridViewItem">

                    
                    <img src={album.artwork} alt = 'artwork' />

                    <div className ="gridViewInfo" >

                        <Link className ='albumLink' to = {`/album/${album._id}`} >{album.title}</Link>

                    </div>
                    
                    
                </div>
                    
                    
                
            )

        })


        console.log(this.state)
        return (
            
            <Fragment>
                <div id ='mainContainer'>
                    
                    <div id = 'topContainer'>
                        <Navbar/>



                        <div id="mainViewContainer">
                        
                            <div id="mainContent">

                                <h1 className= "pageHeadingBig">You Might Like :  </h1>

                                <div className= "gridViewContainer">

                                    {allAlbums}

                                </div>

                            </div>

                        </div>

                    </div>


                    

                    <Musicplayer/>
                </div>

            </Fragment>
        )
    }
    
}