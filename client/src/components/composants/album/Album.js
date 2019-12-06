import React , {Component , Fragment} from 'react';
import Musicplayer from '../../layouts/musicPlayerBar/Musicplayer';
import Navbar  from '../../layouts/sideBar/Navbar'
import {getOneAlbum} from '../../../actions/album';
import {dispatch, getState , subscribe} from '../../../store'


import "../main.css"
import "./Album.css"




export default class Dashboard extends Component{

    constructor(props){
        super(props)

        this.state = {

            title : '',
            song   : [],
            artist : '',
            artwork:'',
            albumId : this.props.match.params.id


        }


        subscribe(()=>{

           
            this.setState({
                title : getState().album.myalbum.title,
                song : getState().album.myalbum.song,
                artist : getState().album.myalbum.artist,
                artwork : getState().album.myalbum.artwork
            })
        })
    }

    componentDidMount(){
        
        dispatch(getOneAlbum(this.state.albumId))
    }




    render(){

        
        
        const allSongs = this.state.song.map((song , x = 0) => {
        
            x++ 

            return(
                
                <li name = {song.title} key = {song._id} className = 'tracklistRow'>
                    
                    <div className = 'trackCount'>
                        <img clasName src = '/images/icons/play-white.png'/>
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


        
        return (
            
            <Fragment>
                <div id ='mainContainer'>
                    
                    <div id = 'topContainer'>
                        <Navbar/>



                        <div id="mainViewContainer">
                        
                            <div id="mainContent">

                            
                                <div className= "entityInfo">

                                    <div className= "leftSection">

                                        <img src = {this.state.artwork}/>
                                        
                                           
                                    </div>  


                                    <div className= "rightSection">
                                        <h2>{this.state.title}</h2>  
                                    </div>  

                                </div>




                                <div className = "tracklistContainer">
                                    <ul className ="tracklist">
                                        {allSongs}
                                    </ul>
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