//String Properties


let movie={
    name : 'bahubali',
    releaseYear : '2017',
    rating : 4.5,
    director : 'rajamouli'
}
function don (obj){
for(let key in obj)
if(typeof obj[key]==="string")
console.log(key,obj[key])
}
don(movie)
