let studentRecords = [
          {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ];

//question 1
let Cap = studentRecords.map( item => item.name.toUpperCase() );
console.log(Cap);

//question 2
let Scored = studentRecords.filter( item => item.marks > 50 );

console.log(Scored);

//question 3
let scorednId = studentRecords.filter( item => item.marks >50 && item.id > 120 );
console.log(scorednId);

//question 4
let sum =null;
for(let item of studentRecords){
    sum+=item.marks;
}

console.log(sum);

//question 5
let names =[];
for(let item of studentRecords){

    if(item.marks > 50){
   names.push(item.name)
}
}
console.log(names);

//question 6
let ar =studentRecords.filter(item => item.id>120);
let sumofmark = ar.reduce( (a,c) => a+c.marks,0);
console.log(sumofmark);
//question 7

for(let item of studentRecords){
    if(item.marks<50){
        item.marks+=15;
    }
}
let g = studentRecords.filter(item => item.marks>50);
console.log(g);

//create objects
const Obj =class{

    constructor(name,Class,rollno){
this.name =name;
this.Class =Class;
this.rollno =rollno;
    }
}

let ob1 =new Obj("dpr",10,1010);
let ob2 =new Obj("vimal",10,1011);
let ob3 =new Obj("vijay",10,1012);
let ob4 =new Obj("siva",10,1013);
let ob5 =new Obj("sam",10,1014);
let ob6 =new Obj("abdul",10,1015);

let  x =[{...ob1},{...ob2},{...ob3},{...ob4},{...ob5},{...ob6}];

console.log(x);
