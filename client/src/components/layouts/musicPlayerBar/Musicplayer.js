import React , {Component} from  'react';
import Left from './sections/Left'
import Right from './sections/Right'
import Center from './sections/Center'

import './Musicplayer.css'



export default class Musicplayer extends Component{


    render(){

        return(

            <div id = 'nowPlayingBarContainer' >
               <div id = 'nowPlayingBar'>

                   <Left/>
                   <Center/>
                   <Right/>
                   
                </div> 

            </div>
        )
    }

}