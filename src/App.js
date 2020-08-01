import React, { useState, useEffect } from 'react';
import './App.css';
import Heroes from "./components/Heroes.js";
import axios from "axios";
import api_hero from "./token.json";

function App(){

  const [heroes, setHeroes] = useState("herozao");
  const [status, setStatus] = useState(false);
  const [error, setError] = useState(false);
  const [error_msg, setError_msg] = useState("deu erro");
  const [load, setLoad] = useState(false);
  
  useEffect(() => {
    const url = api_hero.base_url + api_hero.token;
    axios.get(url+"/search/batman")
    .then( ({ data }) =>{
      setHeroes(data.results);
      setStatus(true);
      console.log(data.results);
      setLoad(true);
    })
    .catch( (error) => {
      setError(true); 
      setError_msg(error);
      setStatus(true)
    }); 
  },[])
    
  if(!load){
    return (
      <div className="App">
        <h1>carregando...</h1>
      </div>
    );
  }else{
    if(error){
      return (
        <div className="App">
          <h1>deu erro</h1>
        </div>
      );
    }else{
      if(status){
        return (
          <div className="App">
            <Heroes heroes = {heroes} load = {load}/>
          </div>
        );
      }

    }

  } 
  
}

export default App;

