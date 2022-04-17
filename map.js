//question 1

let str ="abcadeecfb";

let ns = new Set(str);
let nstr ="";
for(item of ns){
    nstr+=item;
}
str =nstr;
console.log(str);

//question 2
let str2 ="abcadeecfb";
let myMap = new Map();

let c = 0;
str2.split("").forEach(item => {

     if(myMap.has(item)==true){   

         c = myMap.get(item)+1;
         myMap.set(item,c);
     }
     else{
         myMap.set(item,1);
     }     
     
});

console.log(myMap);

for(let [keys,val] of myMap.entries() ){
    console.log( keys+ " - "+val );
}
