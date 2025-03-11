//document.getElementById('fact')
fact.textContent = "Loading...";

//get a random cat fact
fetch("https://catfact.ninja/fact")
.then(response => response.json())
.then(data => {
    console.log(data);
    console.log(data.fact);

    //shows on screen instead of console
    fact.textContent = data.fact;
})

//get a random cat image
fetch("https://cataas.com/cat/gif?type=medium&json=true")
.then(response => response.json())
.then(data=>{
    console.log(data.url);

    catimage.src = data.url;
})