let sriram = {
    name : 'don',
    age : 26,                      //object
    designation : 'qa',
    city : 'ravulapaleum'
}
for(x in sriram){
console.log(x,sriram[x])
}


//Array
let colors = ['red','blue','green']
for(key in colors)
console.log(key, colors[key])


//break
let i=0;
while(i<=10){
    if(i===5) break;
    console.log(i);
    i++;
}

for(i =0;i<10;i++){
    if(i===5) break;
    console.log(i)
}

// continue
for(x=0;x<4;x++){
    if (x===1)continue
    console.log(x);
}


//Exercises:

function mountain(height,width){
    if(height>width);
    console.log(height>width);
}
mountain(1,2)