/*import axios from "axios";
import token from "./token.json";

const api_key = token.Super_hero;
const base_url = "https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/"+api_key;

let getApi =  {

    getHero( name ){
     return(
       axios
      .get(base_url + "/search/" + name)
      .then(res => console.log(res.data.results))
      .catch(error => console.log(error))
    )  
  }

  , getAll(){
    return(
       axios
      .get(base_url + "/search/batman")
      .then(res => console.log( res.data))
      .catch(error => console.log(error))
    )
  }
}


export default getApi;

*/
