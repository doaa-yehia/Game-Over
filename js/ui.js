
let items = document.querySelector(".items");
let demo = document.getElementById("demo");

export class Ui {
    displayData(data) {
        let blacbox = "";
        for (let i = 0; i < data.length; i++) {
            blacbox += `<div class="col-md-6 col-lg-4 col-xxl-3 ">
                            <div class="card h-100 text-center bg-transparent item" role="button" data-id="${data[i].id}">
                               <div class="">
                                <div class="card-body">
                                    <img class="img-fluid mb-3" src="${data[i].thumbnail}" alt="photo of the game item">
                                    <div class="d-flex align-items-center justify-content-between mb-3">
                                        <h2 class="card-title h6">${data[i].title}</h2>
                                        <span class="badge  p-2 bg-primary">free</span>
                                    </div>
                                    <p class="card-text text-center text-secondary short-description">${data[i].short_description}</p>
                                </div>
                                <div class="card-footer text-body-secondary">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <span class="type badge text-uppercase m-0 py-2 ">
                                        ${data[i].genre}
                                        </span>
                                        <span class="serv badge py-2">
                                        ${data[i].platform}
                                        </span>
                                    </div>
                                    <div>

                                    </div>
                                </div>
                                </div> 
                            </div>
                        </div>`

        }
        items.innerHTML = blacbox;
    }
    displayDetails(data) {
        let blacKbox = "";
        blacKbox = ` <header class="d-flex align-items-center justify-content-between mb-3 mt-5">
                    <h3>Details Game</h3>
                    <button class="btn-close btn-close-white"  id="btnClose"></button>
                </header>
                <div class="row g-3">
                    <div class="col-md-4">
                        <img class="img-fluid" src=${data.thumbnail} alt="Photo of Game">
                    </div>
                    <div class="col-md-8">
                        <div id="itemDetails" class="px-2 mb-5">
                            <ul class="list-unstyled">
                                <li>
                                    <span>
                                        Title: <span class="gameTitle">${data.title}</span>
                                    </span>
                                </li>
                                <li>
                                   <span>
                                        Category: <span
                                            class="gameCategory badge bg-primary text-black text-capitalize">${data.genre}</span>
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Platform: <span
                                            class="gameCategory badge bg-primary text-black text-uppercase">${data.platform}</span>
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Status: <span
                                            class="gameCategory badge bg-primary text-black text-capitalize">${data.status}</span>
                                    </span>
                                </li>
                            </ul>
                            <p class="small gameDis-lon">
                                ${data.description}
                            </p>
                            <a href="${data.game_url}" target="_blank" class="btn btn-outline-warning text-white">Show Game</a>
                        </div>
    
                    </div>
    
                </div>`;

        demo.innerHTML = blacKbox;
        
        
    }
}