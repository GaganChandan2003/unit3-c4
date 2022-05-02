let fetchres= async (query)=>
{
    let res=await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`);
    let data=await res.json();
    return data;
}
let appenddata=(data,container)=>
{
    data.forEach(({title,description,urlToImage})=>
    {
       let box=document.createElement("div");
       let head=document.createElement("h2");
       let des=document.createElement("h4");
       let image=document.createElement("img");
       let box1=document.createElement("div");

       box.setAttribute("id","box");
       image.setAttribute("id","image");
       box1.setAttribute("id","box1");
       
       image.src=urlToImage;
       head.innerText=title;
       des.innerText=description;
       box1.append(head,des);
       box.append(image,box1);
       container.append(box);
    })
}

export {fetchres,appenddata};