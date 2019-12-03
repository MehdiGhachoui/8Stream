import React, { Component } from 'react'
import '../Musicplayer.css'

export default class Right extends Component {

    render() {

        return (

            <div id = 'nowPlayingRight'>

                <div className="volumeBar">

                    <button className="controlButton volume" title="Volume button">
                        <img src="/images/icons/volume.png" alt="Volume"/>
                    </button>

                    <div className="progressBar">
                        <div className="progressBarBg">
                            <div className="progress"></div>
                        </div>
                    </div>

                </div>
                
            </div>
        )
    }
}
