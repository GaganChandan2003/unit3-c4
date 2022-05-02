// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

import {fetchres,appenddata} from "./fetch.js"



let query="twitter"
            fetchres(query).then((data)=>
            {
            appenddata(data.articles,container);
            })





let searchfun=(e)=>
{
     if(e.key=="Enter")
        {
          let searchinput=document.getElementById("search_input").value;
            localStorage.setItem("query",searchinput);
            window.location.href="search.html";
        }
}
document.getElementById("search_input").addEventListener("keydown",searchfun);



let contry=document.getElementById("sidebar").children;
for( let ele of contry)
{
    ele.addEventListener("click",confun)
}




import {countrynews,appenddata1} from "./fetch1.js";
let container=document.getElementById("results");
function confun()
{
    container.innerHTML=null;
   let connews = this.id;
   countrynews(connews).then((data)=>
{
    console.log(data);
    appenddata1(data.articles,container);
})
}








