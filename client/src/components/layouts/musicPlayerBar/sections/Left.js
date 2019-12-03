import React, { Component } from 'react'
import '../Musicplayer.css'

export default class Left extends Component {

    render() {

        return (

            <div id = 'nowPlayingLeft'>
                <div className = 'content'>
                    
                    <span className = 'albumLink' >
                        <img className ='albumArtwork' src='/images/bg.jpg' alt = 'album'/>
                    </span>

                    <div className="trackInfo">

						<span className="trackName">
							<span>Happy Birthday</span>
						</span>

						<span className="artistName">
							<span>Reece Kenney</span>
						</span>

					</div>
                </div>
                
            </div>
        )
    }
}
