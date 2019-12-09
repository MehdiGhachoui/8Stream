import React , {Component , Fragment} from 'react';
import Musicplayer from '../../layouts/musicPlayerBar/Musicplayer';
import Navbar  from '../../layouts/sideBar/Navbar'
import {getOneAlbum} from '../../../actions/album';
import {getPlaylists} from '../../../actions/playlist';
import {addToPlaylist} from '../../../actions/playlist'
import {loadUser} from '../../../actions/auth'
import {dispatch, getState , subscribe} from '../../../store'


import "../main.css"
import "./Album.css"





export default class Album extends Component{

    constructor(props){
        super(props)

        this.state = {

            title : '',
            song   : [],
            artist : '',
            artwork:'',
            userID : '' , 
            playlists : [],
            albumId : this.props.match.params.id,
            songID: ''
            
        }


        this.optionMenu = React.createRef();
        this.container = React.createRef();


        subscribe(()=>{

           
            this.setState({
                
                title : getState().album.myalbum.title,
                song : getState().album.myalbum.song,
                artist : getState().album.myalbum.artist,
                artwork : getState().album.myalbum.artwork,
                userID : getState().auth.user._id,
                playlists : getState().playlist
            })
        })
    }

    componentDidMount(){
        
        dispatch(getOneAlbum(this.state.albumId)).then ( () =>  dispatch(loadUser() ).then(() => dispatch(getPlaylists(this.state.userID))  ) )
        
        
        this.container.current.addEventListener('click', this.hideOptionsClick  );

    }


    

    hideOptionsClick = (e) =>   e.target.className !=='item' && e.target.className !== 'optionsButton' ? (this.optionMenu.current.style.display !== 'none' ? this.optionMenu.current.style.display = 'none' : null): null 


  
        
    
    


    handleOption = (e) => {

        let menuWidth = this.optionMenu.current.getBoundingClientRect().width
        let scrollTop = window.pageXOffset;
        let offsetTop = e.target.getBoundingClientRect().top
        let top = offsetTop - scrollTop 
        let left = e.target.getBoundingClientRect().left
        let position = left - menuWidth


        this.optionMenu.current.style.top = `${top}px`
        this.optionMenu.current.style.left = `${position}px`
        this.optionMenu.current.style.display = "block"
        

        this.setState({songID : e.target.name})
       
    }


    addSong = (playlistID)=> {

        const {songID , userID} = this.state

        dispatch( addToPlaylist({songID , userID , playlistID} ))

    }

    render(){

        
        
        const allSongs = this.state.song.map((song , x = 0) => {
        
            x++ 

            return(
                
                <li onClick = {this.handleClick} name = {song.title} key = {song._id} className = 'tracklistRow'>
                    
                    <div className = 'trackCount'>
                        <img className='' src = '/images/icons/play-white.png' alt='play button'/>
                        <span className='trackNumber'>{x}</span>
                    </div>

                    <div className = 'trackInfo'>
                        <span className = 'trackName'> {song.title}</span>
                    </div>

                    <div className = 'trackOptions'>
                        <img onClick ={this.handleOption} className = 'optionsButton' name= {song._id} src = '/images/icons/more.png' alt='options button'/>
                    </div>

                    <div className = 'trackDuration'>
                        <span className = 'duration'> {song.duration}</span>
                    </div>
                </li>
            )

            

        })

        return (
            
            <Fragment>
                <div id ='mainContainer'>
                    
                    <div id = 'topContainer'>
                        <Navbar/>



                        <div ref = {this.container} id="mainViewContainer">
                        
                            <div id="mainContent">

                            
                                <div className= "entityInfo">

                                    <div className= "leftSection">

                                        <img src = {this.state.artwork} alt = 'album artwork'/>
                                        
                                           
                                    </div>  


                                    <div className= "rightSection">
                                        <h2>{this.state.title}</h2> 
                                        <p><span>{this.state.artist}</span></p>
                                    </div>  

                                </div>




                                <div className = "tracklistContainer">
                                    <ul className ="tracklist">
                                        {allSongs}
                                    </ul>
                                </div>

                                <nav ref = {this.optionMenu} className = 'optionsMenu'>
                                    <input   type = 'hidden' className='songID'/>  
                                    <div className = 'item'>Add to playlist</div>

                                    {   this.state.playlists.playlists!= null  ?  (
                                                    
                                            this.state.playlists.playlists.map((playlist) => {
                                        
                                               return (
                                                    <div className = 'item' onClick={() => this.addSong(playlist._id)}  key= {playlist._id}>{playlist.name}</div>
                                    
                                                )
                                                        
                                            }) 

                                        ) : null 
                                    }
                                </nav>

                            </div>

                        </div>

                    </div>


                    

                    <Musicplayer />
                </div>

            </Fragment>
        )
    }
    
}