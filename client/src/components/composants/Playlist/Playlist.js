import React , {Component , Fragment} from 'react';
import Musicplayer from '../../layouts/musicPlayerBar/Musicplayer';
import Navbar  from '../../layouts/sideBar/Navbar'
import {Link} from 'react-router-dom'
import {createPlaylist , getPlaylists} from '../../../actions/playlist';
import {dispatch, getState , subscribe} from '../../../store'
import {loadUser} from '../../../actions/auth';

import "../main.css"
import "./Playlist.css"






export default class Playlist extends Component{

    constructor(props){
        super(props)

        this.state = {

            playlists : [],
            userID   : null
        }

        subscribe(()=>{

            this.setState({
                
                userID : getState().auth.user._id,
                playlists : getState().playlist

            })
           
        })

        
        
    }

    componentDidMount(){

        dispatch(loadUser()).then (() => {return dispatch(getPlaylists( this.state.userID))})
        
    }
    
    
    createPlaylist = () =>{

        const {userID} = this.state
        
        let alert = prompt('please enter your name')

        const history = this.props.history
        
        if(alert !== null) {
            dispatch(createPlaylist({userID , alert} , history ))
        }

        
        
    }

    

    render(){

        
        console.log(this.state)


        return (
            
            <Fragment>
                <div id ='mainContainer'>
                    
                    <div id = 'topContainer'>
                        <Navbar/>



                        <div id="mainViewContainer">
                        
                            <div id="mainContent">

                                

                                <div className = 'playlistsContainer'>

                                    <div className = 'gridViewContainer'>
                                        <h2 className= "pageHeadingBig">PLAYSITS</h2>

                                        <div className = "buttonItems">
                                            <button className = "button green" onClick = {this.createPlaylist}>New Playlist</button>
                                        </div>


                                        <div>
                                            
                                            {    this.state.playlists.playlists!= null  ?  (
                                                    
                                                    this.state.playlists.playlists.map((playlist) => {
                                                
                                                        return(
                                                            
                                                            <div key = {playlist._id} className = "gridViewItem">
                                                
                                                                
                                                                <img src='/images/icons/playlist.png' alt = 'artwork' />
                                                
                                                                <div className ="gridViewInfo" >
                                                
                                                                    <Link className ='playlistLink' to = {`/myplaylist/${playlist._id}`} >{playlist.name}</Link>
                                                
                                                                </div>
                                                                
                                                                
                                                            </div>
                                                                
                                                                
                                                            
                                                        )
                                                    }) 

                                                ) : null 

                                            }
                                        </div>
                                    </div>

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