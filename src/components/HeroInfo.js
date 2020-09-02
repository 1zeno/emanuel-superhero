import React, { useState, useEffect } from 'react';
import './Home.css';
import axios from "axios";
import api_hero from "../token.json";
import Loader from 'react-loader-spinner';
import Heroes from './Heroes.js';

function HeroInfo( {heroId} ){

    const [hero, setHero] = useState("");
    const [status, setStatus] = useState(false);
    const [error, setError] = useState(false);
    const [error_msg, setError_msg] = useState("deu erro");
    const [load, setLoad] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(20);
    
    //Api request que retorna os herois
    useEffect(() => {
      const url = api_hero.base_url + api_hero.token + "/" +heroId;
      console.log("opa!! "+ url)
      axios.get(url)
      .then( ({ data }) =>{
        setHero(data);
        setStatus(true);
        setLoad(false);
      })
      .catch( (error) => {
        setError(true); 
        setError_msg(error);
        setStatus(true)
      }); 
    },[])

    return(

        <h1>{hero.name}</h1>

    )
}

export default HeroInfo;