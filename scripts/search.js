// Ude Import export (MANDATORY)

import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();


import {fetchres,appenddata} from "./fetch.js";
let query=localStorage.getItem("query");
let container=document.getElementById("results");
fetchres(query).then((data)=>
        {
           appenddata(data.articles,container);
        })

