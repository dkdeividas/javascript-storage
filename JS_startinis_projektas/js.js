import data from './data.js';

console.log(data);

// kaip irasyti i local storage
//  const visa_info = {
//     vardas: "Klere",
//     kailis: "Pilkas"
// }
// localStorage.setItem("kate", visa_info);
// localStorage.setItem("suo", "Toris");
// //kaip paversti i string'a 
// localStorage.setItem("kate", JSON.stringify(visa_info));
// // kaip gauti duomenis?
//  const katinas = JSON.parse(localStorage.getItem("kate"));
//  const suva = localStorage.getItem("suo");
//  console.log(suva);
//  console.log(katinas.kailis);

//  console.log("suo")


// const items = (() => {
//     const fieldValue = localStorage.getItem('favorite_items');

//     return fieldValue === null
//     ? []
//     : JSON.parse(fieldValue);
// })();


function classicFunction() {
    const fieldValue = localStorage.getItem("favorite_movies");
    if (fieldValue === null) {
        return [];
    } else {
        return JSON.parse(fieldValue) // grazina objekta kad galetume dirbti su javascript
    }
}


const items = classicFunction();
console.log(items)


// Sukurti funkciją, kuri gauna konkretaus 
//filmo informaciją iš data.js failo, pagal ID

function getMovieFromFile(movieId){
    const favorite_movie = data.find(movie => movie.id === movieId); //turi atitikti funkc movieId
    return favorite_movie;
}
//console.log(getMovieFromFile(985939)); // filmo ID


//Įrašyti į Local Storage "favorite_movies" pasirinkto filmo ID ir Title
const setFavoriteMovie = () => {
    function classicFunction() {
        const kintamasis_tikrinimui = localStorage.getItem("favorite_movies");
        if (kintamasis_tikrinimui === null) {
            return [];
        } else {
            return JSON.parse(kintamasis_tikrinimui) // grazina objekta kad galetume dirbti su javascript
        }
    }
    const movies_array = classicFunction();

    const movie_from_file = getMovieFromFile(829280);
    const new_movie = {
        id: movie_from_file.id,
        title: movie_from_file.title
    }
    // patikrinti ar toks filmas dar neegzistuoja
    movies_array.push(new_movie);
    // paverciam i JSON ir idedam i local storage
    localStorage.setItem('favorite_movies', JSON.stringify(movies_array))

}
// iskviest funkcija, kad rodytu local storag'e
//setFavoriteMovie();


//Sukurti funkciją, kuri gauna reikšmes iš Local
//Storage ir išveda į konsolę informaciją apie user'io filmus,
//įtrauktus į favoritų sąrašą
const getMovieFromLocation = () => {
    const items = JSON.parse(localStorage.getItem('favorite_movies'))
    items.map(item => console.log(item.title));
    
}
getMovieFromFile();

//Sukurti funkciją, kuri ištrina nurodytą filmą 
//pagal ID iš Local Storage "favorite_movies" masyvo
const deleteMovie = (movieID) => {
    const items = JSON.parse(localStorage.getItem('favorite_movies'))
    const index = items.findIndex(movie => movie.id === movieID);
    //console.log(index);
    if(index > -1){
        items.splice(index, 1); // rasom 1 jei norim istrinti viena elementa
    }
    localStorage.setItem('favorite_movies', JSON.stringify(items));
}
//deleteMovie(829280)