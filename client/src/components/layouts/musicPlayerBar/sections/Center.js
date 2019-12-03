import React, { Component } from 'react'
import '../Musicplayer.css'

export default class Center extends Component {

    render() {

        return (

            <div id = 'nowPlayingCenter'>

                <div className = 'content playerControls'>

                    <div className='buttons'>
                        <button className = 'controlButton shuffle' title = 'shuffle button'>
                            <img src='/images/icons/shuffle.png'  alt = 'shuffle'/>
                        </button>

                        <button className = 'controlButton previous' title = 'previous button'>
                            <img src='/images/icons/previous.png'  alt = 'previous'/>
                        </button>

                        <button className = 'controlButton play' title = 'play button'>
                            <img src='/images/icons/play.png'  alt = 'play'/>
                        </button>

                        <button className = 'controlButton pause' title = 'pause button' style = {{display : 'none'}}>
                            <img src='/images/icons/pause.png'  alt = 'pause'/>
                        </button>

                        <button className = 'controlButton next' title = 'next button'>
                            <img src='/images/icons/next.png'  alt = 'next'/>
                        </button>

                        <button className = 'controlButton repeat' title = 'shuffle button'>
                            <img src='/images/icons/repeat.png'  alt = 'repeat'/>
                        </button>

                    </div>

                    <div className = 'playbackBar'>
                        <span className = 'progressTime current'>0.00</span>

                        <div  className = 'progressBar'>

                            <div className = 'progressBarBg'>
                                <div className = 'progress'></div>
                            </div>
                        </div>

                        <span className = 'progressTime remaining'>0.00</span>
                    </div>

                </div>
                
            </div>
        )
    }
}
