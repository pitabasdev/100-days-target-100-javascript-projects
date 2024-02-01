function Jokes(){
    fetch('https://v2.jokeapi.dev/joke/Any')
    .then(response=>response.json())
}