import React from 'react';
import ReactImageFallback from "react-image-fallback";
import "./Heroes.css";


function Heroes({ heroes, onSearch, search }) {

  return (
    
    <div className="Conteiner">
      
      <div className="Row">
          {heroes.map((hero, id)=>(
          <div className="Card" > 
            <div className="Card-header">
              <ReactImageFallback 
                  src={hero.image.url}
                  key={id}
                  fallbackImage="imagenotfound.png"
                  alt="cool image should be here"
                  className="Card-img" 
              />
            </div>
            <div>
              <h5 className="Card-text" key={id}>
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
