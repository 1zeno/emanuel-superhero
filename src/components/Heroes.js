import React from 'react';
import "./Heroes.css";

function Heroes({ heroes }) {

  return (
    
    <div className="Conteiner">
      <div className="Row">
          {heroes.map((hero)=>(
          <div className="Card"> 
            <div className="Card-header">
              <img className="Card-img" src={hero.image.url} ></img>
            </div>
            <div>
              <h5 className="Card-text" key={hero.id}>
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
