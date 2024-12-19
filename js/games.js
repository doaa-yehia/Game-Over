import {loader} from "./index.js"

export class Games {
    constructor(category) {
        this.category = category;
    }
    async getData() {
        loader.classList.remove("d-none");
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'f1271b796amsh296c2ae070ad2c4p14f64fjsnd2ee0c04bade',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        try{
        let res = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${this.category}`, options);
        let data = await res.json();
        loader.classList.add("d-none")
        return data;
        }catch(error){
            console.error(error);
            
        }
       
    }
}




