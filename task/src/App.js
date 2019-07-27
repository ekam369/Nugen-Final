import React, { Component } from 'react';
import Loader from './Loader';
import './App.css';

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      loader1 : false,
      email: 'No Email'
    }
    // setTimeout(() => {
    //   this.setState({
    //     loader1 : false
    //   })
    //   document.getElementById("butts").style.visibility = "visible";
    // },2000)
  }
 
  toggleLoader = () => {
    this.setState(
      {
        loader1 : !this.state.loader1
      }    
    )
    console.log("Hello");
    document.getElementById("butts").style.visibility = "hidden";
  }

  changeEmail = (e) => {
    
    this.setState({
      email: e.target.value
    });
  }
  
  render(){

    return (
      <div>
        {
          this.state.email
        }
        <br/>
        <button id="butts" onClick={this.toggleLoader}>Submit</button>
        <input type="text" onChange={this.changeEmail}  />
        <Loader loader={this.state.loader1} />
      </div>
    );
  }
}

export default App;