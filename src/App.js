import React from 'react'
import Child from './child'
import './style.css'


class App extends React.Component {
    state= {
            Position:null,
            Error:''
        }
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position)=>{this.setState({Position:position.coords.latitude})},
            (error)=>{this.setState({Error:error})}
        ) 
    }
    render(){
        if(this.state.Position && !this.state.Error){
            return(
                <div >
                    <Child Hamisphere= {this.state.Position}/>
                </div>
            )
        }else if(!this.state.Position && this.state.Error){
            return(
                <div className='body'>  
                   {/* the error occures: {this.state.Error} */}
                   error
                </div>
            )
        }
        else{
            return(
                <div >Loading...</div>
            )
        }
    }
}
export default App 