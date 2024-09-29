const api = "https://v2.jokeapi.dev/joke/Any?type=single";

const resultId = document.getElementById('joke');
const refreshBtn = document.getElementById('refresh')


fetch(api)
.then(response => response.json())
.then((data)=>{

    // console.log(data)
    resultId.innerText = `${data.joke}`;

}).catch(err => console.error(err))

refreshBtn.addEventListener('click',(e)=>{
    location.reload(); 
})