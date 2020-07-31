import React, {Component} from 'react';

class Heroes extends Component {
  render(){
  return this.props.heroes.map((hero)=>(<h1>{hero.name}</h1>))
   
    
  }
}

export default Heroes;
