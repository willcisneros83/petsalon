let eric={
    name: "Eric",
    eamil: "eric@gmail.com",
    gpa:3.9
}
let david={
    name:"David",
    email:"david@gmail.com",
    gpa:4.0
}
let will={
    name:"Will",
    email:"will@gmail.com",
    gpa:3.5
}
let davion={
    name:"Davion",
    email:"davion@gmail.com",
    gpa:3.8
}
let students=[eric,david,davion,will,"Mark","Michael","Regis","Brandon"];
students[3]="Miguel";



//travel the array
for(let i=0;i<students.length;i++){
    document.write(`<li>${students[i]}<li>`);
}

let gpas=[2.5,3.1,4.0,3.6,2.9,2.8];
///travel the array
let total=0;
for(let j=0;j<gpas.length;j++){
    document.write(`<li>${gpas[j]}</li>`);
    total=total+gpas[j];
    console.log(`iteration ${j} = ${total}`);
}

