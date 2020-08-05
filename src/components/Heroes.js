import React from 'react';
import ReactImageFallback from "react-image-fallback";
import "./Heroes.css";


function Heroes({ heroes }) {
  console.log(heroes)
  let mudou = false;
  const change = (id) =>{
    if(!mudou){

    document.getElementById("image"+id).style.display = "none";
    document.getElementById("text"+id).style.display = "none";
    document.getElementById("info"+id).style.display = "inline";
    mudou = true;
    }else{
      document.getElementById("image"+id).style.display = "inline";
      document.getElementById("text"+id).style.display = "inline";

      document.getElementById("info"+id).style.display = "none";
      mudou = false;
    }
  }
  return (
    
    <div className="Conteiner">
      
      <div className="Row">
          {heroes.map((hero, id)=>(
          <div className="Card" onClick={()=>{change(id)}}> 
            <div className="Card-header">
              <ReactImageFallback id ={"image"+id}
                  src={hero.image.url}
                  key={id}
                  fallbackImage="imagenotfound.png"
                  alt="cool image should be here"
                  className="Card-img" 
              />
              {console.log("aqui "+hero)}
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
            </div>
          </div>     
        )
      )}
      </div>
    </div>
  )
      
}

export default Heroes;
