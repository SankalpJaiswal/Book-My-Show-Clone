let images = [
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1646041258194_hamewweb.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1643608159306_fb.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1646389098498_offer.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1646035476610_sahweb.jpg"
];

let i = 0;

let container = document.querySelector("#slideshow");
container.innerHTML="";

let img = document.createElement("img");
img.src= images[0];
container.append(img);

setInterval(function(){

    if(i == images.length){
        i = 0;
    }

    let image = images[i]    

    container.innerHTML="";

    let img = document.createElement("img");
    img.src = image;

    container.append(img);

    i++;

}, 2000);

let movieObj = [];

function movies(p,n,r,i){
    this.poster = p;
    this.name = n;
    this.release = r;
    this.imdb = i;
}

let movie1 = new movies("https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODIlICA2N2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00114897-vbhecgxpss-portrait.jpg",
"Gangubai Kathiawadi", "26 Feb 2022", "7");
movieObj.push(movie1);

let movie2 = new movies("https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODQlICAzNWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00129624-ftnryeuyhl-portrait.jpg",
"The Batman", "4 Mar 2022" ,"8.6");
movieObj.push(movie2);

let movie3 = new movies("https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODglICA5ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00077233-wynhpegbjg-portrait.jpg",
"Jhund", "4 Mar 2022", "8");
movieObj.push(movie3);

let movie4 = new movies("https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTclICA0OGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00307433-ettxqehzzn-portrait.jpg",
"Pawan Khind", "18 Feb 2022", "9");
movieObj.push(movie4);

let movie5 = new movies("https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzklICAyMGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00311712-apnnvbnugs-portrait.jpg",
"Unchartered", "7 Feb 2022", "6.5");
movieObj.push(movie5);

let movie6 = new movies("https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODQlICA0NzFrIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00129538-erzxjxflat-portrait.jpg",
"Pushpa - The Rise", "17 Dec 2021", "8.5")
movieObj.push(movie6);


console.log(movieObj);
localStorage.setItem("movies",JSON.stringify(movieObj))

let movieList = JSON.parse(localStorage.getItem("movies"));
console.log(movieList);

display(movieList);

function display(data){
    document.querySelector("#movies").innerHTML = "";

    data.map(function(elem,index){
        let div1 = document.createElement("div");

        let poster = document.createElement("img");
        poster.src = elem.poster;

        let name1 = document.createElement("h3");
        name1.innerText = elem.name;

        let release = document.createElement("h4");
        release.innerText = elem.release;

        let rating = document.createElement("h6");
        rating.innerText=" IMDB Rating : "

        let imdb = document.createElement("h6");
        imdb.innerText = elem.imdb;

        let div2 = document.createElement("div2");
        div2.setAttribute("id","div2")

        div2.append(rating,imdb)
        div1.append(poster,name1,release,div2);
        document.querySelector("#movies").append(div1)
    })
}


function sort(){
    let sorting = document.querySelector("#sort").value;

    if(sorting == "sort-lh")
    {
        movieList.sort(function(a,b){
            return a.imdb-b.imdb;
        })
        display(movieList);
    }

    else if(sorting == "sort-hl")
    {
        movieList.sort(function(a,b){
            return b.imdb-a.imdb;
        })
        display(movieList);
    }
}

    




