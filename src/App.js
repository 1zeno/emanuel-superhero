import React from 'react';
import './App.css';
import Heroes from "./components/Heroes.js";
import axios from "axios";
import api_hero from "./token.json";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      heroes : "herozao",
      status : false,
      error : false,
      error_msg : "",
    };
  }
  
  componentDidMount(){
    const url = api_hero.base_url + api_hero.token;
    axios.get(url+"/search/batman").then( ({ data }) =>{this.setState({heroes : data.results, status : true})}).catch( (error) => this.setState({error : true, error_msg: error}))
  }
  

  render(){
    
    if(this.state.error){
      return (
        <div className="App">
          <h1>deu erro</h1>
        </div>
      );
    }

    if(this.state.status && !this.state.error){
    console.log(this.state.heroes);
    return (
      <div className="App">
        <Heroes heroes = {this.state.heroes}/>
      </div>
    );
    }else{
      console.log(this.state.heroes);
      return (
        <div className="App">
        </div>
      );
    }
  }
}

export default App;
