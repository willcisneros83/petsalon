console.log("Register page");
let salon={
    name:"The Fashion Pet",
    address:{
        street:"University",
        number:"758",
        zip:"22569",
        state:"CA",
        city:"San Diego",
    },
    hours:{
        open:"9:00 am",
        close:"20:00 pm",
    },
    pets:[
        {
            name:"Scooby",
            age:60,
            gender:"Male",
            breed:"Dane",
            service:"Grooming",
            owner:"Shaggy",
            phone:"555-555-5555",

        },
        {
            name:"Scrappy",
            age:50,
            gender:"Male",
            breed:"Mixed",
            service:"Nails but",
            owner:"Shaggy",
            phone:"666-666-6666",

        },
        {
            name:"Brian",
            age:40,
            gender:"Male",
            breed:"Mixed",
            service:"Friend",
            owner:"Peter",
            phone:"777-777-7777",
        },
        {
            name:"Garfield",
            age:80,
            gender:"Male",
            breed:"unknown",
            service:"Eating",
            owner:"John",
            phone:"888-888-8888",
        }
    ]
}
console.log(salon.address.city);
console.log(salon.pets);
alert(salon.pets.length+" register pets");

function simpleDisplay(){
    //dispaly scooby on the consol
    for(i=0; i<salon.pets.length;i++){
        console.log(salon.pets[i].name);
}
}
simpleDisplay();