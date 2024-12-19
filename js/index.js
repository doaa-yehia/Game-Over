"use strict"
import { Games } from "./games.js";
import { Details } from "./details.js";
import { Ui } from "./ui.js";


let categories = document.querySelectorAll(".categories li a")
let firstActive=document.querySelector(".first");
let gameItem=document.getElementById("details")

let home=document.getElementById("home")
export const loader=document.querySelector(".loading");

let gamesApper = new Ui();

function openModel() {
    home.classList.add("d-none");
    home.classList.remove("d-block");
    gameItem.classList.replace("d-none","d-block");
}
 function closeModel() {
    home.classList.remove("d-none");
    home.classList.add("d-block");
    gameItem.classList.replace("d-block","d-none");
}


async function getItemData() {
    let items = document.querySelectorAll(".item");
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener("click", async (e) => {
            
            let item = new Details(items[i].attributes[2].value);
            let itemData = await item.getDetails();
            

            openModel();
            gamesApper.displayDetails(itemData);
            
            
            gameItem.classList.replace("d-none","d-block");
           let btnClose=document.getElementById ("btnClose");
           btnClose.addEventListener("click",closeModel);
           
        })
    }
}

async function getFirstData(params){
    
    let allGames = new Games(params.attributes[1].value);
    loader.classList.remove("d-none");
    let gamesData = await allGames.getData();
    
    gamesApper.displayData(gamesData);
    loader.classList.add("d-none");
    getItemData()
}

// function reload () {
//     window.addEventListener("load",()=>{
        
//         loader.classList.add("loaderHidden");
//         loader.addEventListener("transitionend",()=>{
//             while (loader.hasChildNodes()) {
//                 loader.removeChild(loader.firstChild);
//               }
//         })
//     })
// }

getFirstData(firstActive);

(function () {
    categories.forEach(navLinkEle=>{
        navLinkEle.addEventListener("click",()=>{
            document.querySelector(".active").classList.remove("active");
            navLinkEle.classList.add("active");
        })
    })
})();


for (let i = 0; i < categories.length; i++) {
    categories[i].addEventListener("click", async () => {
        
        getFirstData(categories[i]);
    })



};





