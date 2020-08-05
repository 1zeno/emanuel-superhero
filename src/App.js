import React, { useState, useEffect } from 'react';
import './App.css';
import Heroes from "./components/Heroes.js";
import Pagination from "./components/Pagination.js";
import axios from "axios";
import api_hero from "./token.json";
import Loader from 'react-loader-spinner'

function App(){

  const [heroes, setHeroes] = useState("");
  const [status, setStatus] = useState(false);
  const [error, setError] = useState(false);
  const [error_msg, setError_msg] = useState("deu erro");
  const [load, setLoad] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(20);
  
  //Api request que retorna os herois
  useEffect(() => {
    const url = api_hero.base_url + api_hero.token;
    axios.get(url+"/search/b")
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

  //Pagination
  //definir a quantidade de páginas
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = heroes.slice(indexOfFirstPost, indexOfLastPost);

  //Change page
  //função para definir a página atual
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  //Load spinner
  if(!load){
    return (
      <div className="App-Load">
        <Loader
          type="TailSpin"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
  
        />
      </div>
    );
  }else{
    //Error page
    // caso ocorra erro na requisição da api
    if(error){
      return (
          <h2>Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.</h2> 
      );
    }else{
      if(status){
        return (
          <div className="App">
            <div className="App-title">
              <h1>InfoHeroes</h1>
            </div>
            <Heroes heroes = {currentPosts} />
            <Pagination postsPerPage = {postsPerPage} totalPosts={heroes.length} paginate = {paginate} currentPage = {currentPage}  />
          </div>
        );
      }

    }

  } 
  
}

export default App;

