import React , {Component , Fragment} from 'react';
import Musicplayer from '../../layouts/musicPlayerBar/Musicplayer';
import Navbar  from '../../layouts/sideBar/Navbar'
import {Link} from 'react-router-dom'
import {search} from '../../../actions/search';
import {dispatch, getState , subscribe} from '../../../store'


import "../main.css"
import "./Search.css"




export default class Dashboard extends Component{

    constructor(props){
        super(props)

        this.state = {

            searchInput : '',
            album : null
        }


        subscribe(()=>{

            this.setState({
                album : getState().search.album
            })
        })


    }


    handleChange = (e) =>{

        this.setState({
            [e.target.name] : e.target.value
        })
    }


    handleSubmit = (e) =>{
 
        e.preventDefault();

        dispatch(search(this.state.searchInput) )
        

        
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

                            
                                <div className = 'searchContainer'>

                                    <form onSubmit={this.handleSubmit}>

                                        <input type='text' name='searchInput' className='searchInput' placeholder='Search for Albums...' onChange = {this.handleChange}/>

                                    </form>
                                   

                                </div>


                                <div className= "gridViewContainer">


                                        {
                                            this.state.album ? (

                                                
                                                <div  className = "gridViewItem">
                                                    <img src={this.state.album.artwork} alt = 'artwork' /> 

                                                    <div className ="gridViewInfo" >

                                                        <Link to = {`/album/${this.state.album._id}`} >{this.state.album.title}</Link>

                                                    </div>

                                                </div>

                                            ): null
                                        }

                                
                                    


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