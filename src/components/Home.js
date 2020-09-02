import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import './Home.css';
import Heroes from "./Heroes.js";
import Pagination from "./Pagination.js";
import axios from "axios";
import api_hero from "../token.json";
import Loader from 'react-loader-spinner'

function Home(){

  const [heroes, setHeroes] = useState("");
  //const [url, setUrl] = useState("");
  const [search, setSearch] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState(false);
  const [error, setError] = useState(false);
  const [error_msg, setError_msg] = useState("deu erro");
  const [load, setLoad] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(20);
  
  //Api request que retorna os herois
  useEffect(() => {
    let url = "";
    if (search === "" || searchTerm===""){
       url = api_hero.base_url + api_hero.token +"/search/b";

    }else{
       url = api_hero.base_url + api_hero.token +"/search/"+search;
       
    }
    axios.get(url)
    .then( ({ data }) =>{
      setHeroes(data.results);
      setStatus(true);
      setLoad(false);
    })
    .catch( (error) => {
      setError(true); 
      setError_msg(error);
      setStatus(true)
    }); 
  },[ search ])

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const searchHero = () => {
      if(searchTerm !== search && searchTerm !== ""){
      setSearch(searchTerm);
      setLoad(true);
    }
  }
  //Pagination
  //definir a quantidade de páginas
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = heroes.slice(indexOfFirstPost, indexOfLastPost);

  //Change page
  //função para definir a página atual
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  //Load spinner
  if(load){
    return (
      <div className="Home-Load">
        <Loader
          type="TailSpin"
          color="#00BFFF"
          height={100}
          width={100}
  
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
          <div className="Home">
            <div className="Home-header">
              <div className="Home-title">
                <h1>InfoHeroes</h1>
              </div>
              <div className="Search-box">
                <input
                  className="Search"
                  type="text"
                  id="search"
                  placeholder="Search"  
                  onChange={handleChange}              
                />
                <button 
                    className="Search-button" 
                    onClick={()=>{searchHero()}}> click!
                    
                </button>
              </div>
            </div>
            <div className="Content">
              <div className="Home-heroes">
                <Heroes heroes = {currentPosts} />
              </div>
              <div className="Home-pagination">
                <Pagination 
                  postsPerPage = {postsPerPage} 
                  totalPosts={heroes.length} 
                  paginate = {paginate} 
                  currentPage = {currentPage}  
                />
              </div>
            </div>
          </div>
        );
      }

    }

  } 
  
}

export default Home;

