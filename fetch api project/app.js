const URL = " https://api.thecatapi.com/v1/images/search";
let promise = fetch(URL);

console.log(promise);

let getfacts = async() => {
    console.log("data is coming broooo .....wait for it");
    let response =  await fetch(URL);
    console.log(response)

    let data =  await response.json();
    console.log(data);
}