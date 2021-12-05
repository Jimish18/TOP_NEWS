console.log("Jay shree Ram..!!");

let newsAccordion = document.getElementById("newsAccordion");

let apiKey = "68b5bf13a8eb4a18ac5f5f497fdaee8b";
let countryCode = "in";
let categories_name = document.getElementById("categories_name");

// initialize xhr request
let xhr = new XMLHttpRequest();

function defaultLoad(){
    
    
    categories_name.innerText = "Top Headlines";

    xhr.open("GET", `https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=${apiKey}`, true);

    xhr.onload = function () {
        if (this.status === 200) {
            let newsListJSON = JSON.parse(this.responseText);
            // console.log(newsListJSON["articles"]);

            listHTML = "";

            newsListJSON["articles"].forEach(function (element, index) {
                news = `<div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="${element.urlToImage}" class="img-fluid rounded-start" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${element.title}</h5>
                                    <p class="card-text">${element.content}.<a href = "${element.url}" target = "_blank">Read more here</a>
                                    </p>
                                    <p class="card-text"><small class="text-muted">${element.publishedAt}</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>` ;

                listHTML += news;
            });

            newsAccordion.innerHTML = listHTML;
        }
    }

    xhr.send();
}

defaultLoad();


let top_headings = document.getElementById("top_headings");

top_headings.addEventListener("click",function()
{
    defaultLoad();
});


let bussiness = document.getElementById("bussiness");

bussiness.addEventListener("click",function()
{
    categories_name.innerText = "Bussiness";

    xhr.open("GET", `https://newsapi.org/v2/top-headlines?country=${countryCode}&category=business&apiKey=${apiKey}`, true);

    xhr.onload = function () {
        if (this.status === 200) {
            let newsListJSON = JSON.parse(this.responseText);
            // console.log(newsListJSON["articles"]);

            listHTML = "";

            newsListJSON["articles"].forEach(function (element, index) {
                news = `<div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="${element.urlToImage}" class="img-fluid rounded-start" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${element.title}</h5>
                                    <p class="card-text">${element.content}.<a href = "${element.url}" target = "_blank">Read more here</a>
                                    </p>
                                    <p class="card-text"><small class="text-muted">${element.publishedAt}</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>` ;

                listHTML += news;
            });

            newsAccordion.innerHTML = listHTML;
        }
    }

    xhr.send();
})

let entertainment = document.getElementById("entertainment");

entertainment.addEventListener("click",function()
{
    categories_name.innerText = "Entertainment";

    xhr.open("GET", `https://newsapi.org/v2/top-headlines?country=${countryCode}&category=entertainment&apiKey=${apiKey}`, true);

    xhr.onload = function () {
        if (this.status === 200) {
            let newsListJSON = JSON.parse(this.responseText);
            // console.log(newsListJSON["articles"]);

            listHTML = "";

            newsListJSON["articles"].forEach(function (element, index) {
                news = `<div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="${element.urlToImage}" class="img-fluid rounded-start" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${element.title}</h5>
                                    <p class="card-text">${element.content}.<a href = "${element.url}" target = "_blank">Read more here</a>
                                    </p>
                                    <p class="card-text"><small class="text-muted">${element.publishedAt}</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>` ;

                listHTML += news;
            });

            newsAccordion.innerHTML = listHTML;
        }
    }

    xhr.send();
})


let health = document.getElementById("health");

health.addEventListener("click",function()
{
    categories_name.innerText = "Health";

    xhr.open("GET", `https://newsapi.org/v2/top-headlines?country=${countryCode}&category=health&apiKey=${apiKey}`, true);

    xhr.onload = function () {
        if (this.status === 200) {
            let newsListJSON = JSON.parse(this.responseText);
            // console.log(newsListJSON["articles"]);

            listHTML = "";

            newsListJSON["articles"].forEach(function (element, index) {
                news = `<div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="${element.urlToImage}" class="img-fluid rounded-start" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${element.title}</h5>
                                    <p class="card-text">${element.content}.<a href = "${element.url}" target = "_blank">Read more here</a>
                                    </p>
                                    <p class="card-text"><small class="text-muted">${element.publishedAt}</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>` ;

                listHTML += news;
            });

            newsAccordion.innerHTML = listHTML;
        }
    }

    xhr.send();
})

let science = document.getElementById("science");

science.addEventListener("click",function()
{
    categories_name.innerText = "Science";

    xhr.open("GET", `https://newsapi.org/v2/top-headlines?country=${countryCode}&category=science&apiKey=${apiKey}`, true);

    xhr.onload = function () {
        if (this.status === 200) {
            let newsListJSON = JSON.parse(this.responseText);
            // console.log(newsListJSON["articles"]);

            listHTML = "";

            newsListJSON["articles"].forEach(function (element, index) {
                news = `<div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="${element.urlToImage}" class="img-fluid rounded-start" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${element.title}</h5>
                                    <p class="card-text">${element.content}.<a href = "${element.url}" target = "_blank">Read more here</a>
                                    </p>
                                    <p class="card-text"><small class="text-muted">${element.publishedAt}</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>` ;

                listHTML += news;
            });

            newsAccordion.innerHTML = listHTML;
        }
    }

    xhr.send();
})

let technology = document.getElementById("technology");

technology.addEventListener("click",function()
{
    categories_name.innerText = "Technology";

    xhr.open("GET", `https://newsapi.org/v2/top-headlines?country=${countryCode}&category=technology&apiKey=${apiKey}`, true);

    xhr.onload = function () {
        if (this.status === 200) {
            let newsListJSON = JSON.parse(this.responseText);
            // console.log(newsListJSON["articles"]);

            listHTML = "";

            newsListJSON["articles"].forEach(function (element, index) {
                news = `<div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="${element.urlToImage}" class="img-fluid rounded-start" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${element.title}</h5>
                                    <p class="card-text">${element.content}.<a href = "${element.url}" target = "_blank">Read more here</a>
                                    </p>
                                    <p class="card-text"><small class="text-muted">${element.publishedAt}</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>` ;

                listHTML += news;
            });

            newsAccordion.innerHTML = listHTML;
        }
    }

    xhr.send();
})

let sports = document.getElementById("sports");

sports.addEventListener("click",function()
{
    categories_name.innerText = "Sports";

    xhr.open("GET", `https://newsapi.org/v2/top-headlines?country=${countryCode}&category=sports&apiKey=${apiKey}`, true);

    xhr.onload = function () {
        if (this.status === 200) {
            let newsListJSON = JSON.parse(this.responseText);
            // console.log(newsListJSON["articles"]);

            listHTML = "";

            newsListJSON["articles"].forEach(function (element, index) {
                news = `<div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="${element.urlToImage}" class="img-fluid rounded-start" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${element.title}</h5>
                                    <p class="card-text">${element.content}.<a href = "${element.url}" target = "_blank">Read more here</a>
                                    </p>
                                    <p class="card-text"><small class="text-muted">${element.publishedAt}</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>` ;

                listHTML += news;
            });

            newsAccordion.innerHTML = listHTML;
        }
    }

    xhr.send();
})


















