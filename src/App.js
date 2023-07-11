import React,{Component} from "react";

import './App.css';
import Task from "./components/greet";



class App extends Component{
  render(){
    return(
      <div className="App">
        <Task/>
      </div>
    );
  }
}


export default App;