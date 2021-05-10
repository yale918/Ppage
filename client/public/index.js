//import profile from "./routers/profile.js";
//import todolist from "../routers/todolist.js";
//import WSchat from "../routers/WSchat.js";
//import IGclone from "../routers/IGclone.js";

import * as profile from '/routers/profile.js';
import * as todolist from '/routers/todolist.js';
//import profile from "./routers/profile.js";
//import renderTodolist from "./routers/todolist.js";
const app = document.querySelector("#app")

document.addEventListener("click",(e)=>{
    const url = e.target.href
    e.preventDefault()
    //console.log(url)
    history.pushState(null,null,url)
    const pathname =location.pathname
    //console.log(pathname)
    /*
    if(pathname==="/" || pathname==="/profile"){
        app.innerHTML = "profile"
    }else if(pathname==="/todolist"){
        app.innerHTML = "todolist"
    }else if(pathname==="/wschat"){
        app.innerHTML = "wschat"
    }else if(pathname==="/igclone"){
        app.innerHTML = "igclone"
    }
    */
    if(pathname==="/" || pathname==="/profile" || pathname=== 'http://localhost:5555/profile'){
        //const p = profile()
        app.innerHTML = profile.getHtml()
    }else if(pathname==="/todolist"){
        app.innerHTML = todolist.getHtml()
    }else if(pathname==="/wschat"){
        app.innerHTML = WSchat.getHtml()
    }else if(pathname==="/igclone"){
        app.innerHTML = IGclone.getHtml()
    }
})