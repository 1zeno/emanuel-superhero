import React from 'react';
import ReactImageFallback from "react-image-fallback";
import "./Heroes.css";
import HeroInfo from "./HeroInfo.js";
import  { useRoutes } from 'hookrouter';

function Heroes({ heroes }) {

  let infoCard = false;

  //Função para exibição das informações dos Cards
  const changeCard = (id) =>{
    /*
    if(!infoCard){
      
    document.getElementById("image"+id).style.display = "none";
    document.getElementById("text"+id).style.display = "none";
    document.getElementById("info"+id).style.display = "inline";
    infoCard = true;
    }else{
      document.getElementById("image"+id).style.display = "inline";
      document.getElementById("text"+id).style.display = "inline";

      document.getElementById("info"+id).style.display = "none";
      infoCard = false;
    }
    */
  }

  return (
    
    <div className="Conteiner">
      <div className="Row">
          {heroes.map((hero, id)=>(
          <div className="Card" onClick={()=>{changeCard(id)}}> 
            <div className="Card-header">
              <ReactImageFallback 
                  id ={"image"+id}
                  src={hero.image.url}
                  key={id}
                  fallbackImage="imagenotfound.png"
                  alt="cool image should be here"
                  className="Card-img" 
              />
            <div className="Info-hero" id={"info"+id}>
           
              <h4>{hero.name}</h4>
              <p className="Info-int" >Int : {hero.powerstats.intelligence}</p>
              <p className="Info-power" >Power : {hero.powerstats.power}</p>
              <p className="Info-speed" >Speed : {hero.powerstats.power}</p>
              <p className="Info-str" >Strength : {hero.powerstats.power}</p>
            </div>
            </div>
            <div className="Card-text" id={"text"+id}>
              <h5  key={id}>
                    {hero.name}
                    
              </h5>
              <a href={"/info/"+hero.id}> oi</a>
            </div>
          </div>     
        )
      )}
      </div>
    </div>
  )
      
}

export default Heroes;
