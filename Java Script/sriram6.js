//string properties

let movie={
    name :'rrr',
    releaseDate: 2022,
    director : 'rajamouli'
};
properties(movie);
function properties(movie){
    for(key in movie)
    console.log(key,movie[key])
}

