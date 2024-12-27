import {loader} from "./index.js"
export class Details {
    constructor(id) {
        this.id=id;
    }
    async getDetails() {
        loader.classList.remove("d-none");
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'f1271b796amsh296c2ae070ad2c4p14f64fjsnd2ee0c04bade',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        try{
        let res= await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${this.id}`,options);
        let data=await res.json();
        
        loader.classList.add("d-none");
        return data;
    }catch(error){
        console.error(error);
    };
    }

}

// const url = 'https://free-to-play-games-database.p.rapidapi.com/api/game?id=452';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': 'f1271b796amsh296c2ae070ad2c4p14f64fjsnd2ee0c04bade',
// 		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }