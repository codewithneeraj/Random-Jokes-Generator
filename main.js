const btn = document.getElementById("btn");
const joke = document.getElementById("joke");

const url = "https://icanhazdadjoke.com/";


btn.addEventListener("click", ()=>{
    fetchRandomJoke();
})
const fetchRandomJoke = async ()=>{
    joke.textContent = "Loading..."
    try {
        const response = await fetch(url, {
            headers: {
                Accept: 'application/json',
                'User-Agent': 'learning app',
            },
        });
        if(!response.ok){
            throw new Error("There was an error")
        }
       
        const data = await response.json();
        joke.textContent = data.joke;
    } catch (error) {
        joke.textContent="There was an error"
    }
   

}

fetchRandomJoke();