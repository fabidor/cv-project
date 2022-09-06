import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";
import FormParent from "./components/FormParent.js"

class App extends Component{
  constructor(){
    super();
    this.state={
      basicInfo:
      {name: '',
        phone:'',
        title:''
      },
    }
    this.handleInfo = this.handleInfo.bind(this);
    /*this.handleTitle = this.handleTitle.bind(this); */

  }
  handleInfo = (e) =>{
    this.setState({
      basicInfo:{
        ...this.state.basicInfo,
        [e.target.id]: e.target.value
      }
    })
  }
  /*handleTitle = (e) =>{
    this.setState({
      basicInfo:{
        ...this.state.basicInfo,
        title:e.target.value
      }
    })
    console.log(this.state.basicInfo.name);
  } */
  render(){
    return(
      <div className="App">
      <header className="App-header">
        <FormParent basicInfo={this.state.basicInfo} handleInfo = {this.handleInfo} />
        {this.state.basicInfo.name}
        {this.state.basicInfo.title}
    
      </header>
    </div>
    )
  }
}

export default App;
