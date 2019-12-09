import React , {Component , Fragment} from 'react';
import Musicplayer from '../../layouts/musicPlayerBar/Musicplayer';
import Navbar  from '../../layouts/sideBar/Navbar'
import {getPlaylistInfo , removePlaylist} from '../../../actions/playlist';
import {dispatch, getState , subscribe} from '../../../store'



import "../main.css"
import './myPlaylist.css'





export default class myPlaylist extends Component{

    constructor(props){
        super(props)

        this.state = {

            title  : '',
            playlist : '',
            song : [], 
            playlistId : this.props.match.params.id,
            
        }

        this.handleRemove = this.handleRemove.bind(this)

        subscribe(()=>{

           
            this.setState({
                
                song     : getState().playlist.playlist.song , 
                playlist : getState().playlist.playlist
                

            })
        })
    }


    componentDidMount(){
        
         dispatch(getPlaylistInfo(this.state.playlistId)) 

    }



    handleRemove(e){

        const {playlistId} = this.state
        const history =  this.props.history
        dispatch(removePlaylist(playlistId ,history))
        
        
    }


   

    render(){

        
        console.log(this.state.playlist)

        


        return (
            
            <Fragment>
                <div id ='mainContainer'>
                    
                    <div id = 'topContainer'>
                        <Navbar/>



                        <div id="mainViewContainer">
                        
                            <div id="mainContent">

                            
                                <div className= "entityInfo">

                                    <div className= "leftSection">

                                        <img src = '/images/icons/playlist.png' alt='playlist'/>
                                        
                                           
                                    </div>  


                                    <div className= "rightSection">
                                        <h2 className = 'albumName'>{this.state.playlist.name}</h2> 
                                        <button className = 'black button' onClick = {this.handleRemove}>Delete playlist</button>
                                    </div>  

                                </div>




                                <div className = "tracklistContainer">
                                    <ul className ="tracklist">

                                    {
                                            this.state.song !== null ? ( 
            
                                                this.state.song.map((song , x = 0) => {
                                            
                                                    x++ 
                                    
                                                    return(
                                                        
                                                        <li onClick = {this.handleClick} name = {song.title} key = {song._id} className = 'tracklistRow'>
                                                            
                                                            <div className = 'trackCount'>
                                                                <img className='' src = '/images/icons/play-white.png' alt='play button' />
                                                                <span className='trackNumber'>{x}</span>
                                                            </div>
                                    
                                                            <div className = 'trackInfo'>
                                                                <span className = 'trackName'> {song.title}</span>
                                                            </div>
                                    
                                    
                                                            <div className = 'trackDuration'>
                                                                <span className = 'duration'> {song.duration}</span>
                                                            </div>
                                                        </li>
                                                    )
                                    
                                                
                                    
                                                })
                                    
                                    
                                            ) : null
                                        }
                                        
                                    </ul>
                                </div>

                                
                            </div>

                        </div>

                    </div>


                    

                    <Musicplayer />
                </div>

            </Fragment>
        )
    }
    
}