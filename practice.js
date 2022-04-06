//LECTURE: Values and Variables
//1. Declare variables called 'country', 'continent' and 'population' and
///assign their values according to your own country (population in millions)
//2. Log their values to the console


// let country = "Portugal";
// let continent = "Europe";
// let population = 10;

// console.log(country);
// console.log(continent);
// console.log(population);

// let contry1 ="Romania";
// let continent1= 'Europe';
// let population1 = "18";

// console.log(contry1);
// console.log(continent1);
// console.log(population1);
// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// // console.log(typeof true);
// console.log(typeof javascriptIsFun);
// // console.log(typeof 23);
// // console.log(typeof 'Jonas');
// javascriptIsFun = 'Yes!';
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);
// console.log(typeof null);

// const birthYear= 1991;
// birthYear= 1990; 
// const now = 2037;
// const ageJonas = now-1991;
// const ageSaharh = now - 2018;
// console.log(ageJonas,ageSaharh);
// console.log(ageJonas*2,ageJonas/10,2**3);

// const firstName = 'Jhonas';
// const lastName = 'Schemedthmann';
// console.log(firstName+" "+ lastName);

// let x = 10 + 5;
// x +=10;
// x*=4;
// let y =10;
// y /= 5;
// x++;
// console.log(x);
// console.log(y);

// //Comparison operators
// console.log (ageJonas>ageSaharh);
// console.log(ageSaharh >= 18);
// const isFullAge= ageSaharh >= 18;
// console.log(isFullAge)


// const now = 2037;
// const ageJonas = now-1991;
// const ageSaharh = now - 2018;
// console.log(now-1991 > now- 2018)

// let x, y;
// x=y=25-10-5;
// console.log(x,y);

// const averageAge = (ageJonas+ ageSaharh)/2
// console.log(ageJonas,ageSaharh,averageAge);

// const firstName= 'Jonas';
// const job= 'teacher';
// const birthYear= 1991;
// const year = 2037;

// const jonas= "I'm "+ firstName+ ', a '+ ( year- birthYear)+" years old"+job+"!";
// console.log(jonas);

// const jonasNew=` I'm ${firstName},a ${year-birthYear} year old ${job}`;
// console.log(jonasNew);

// console.log(`just a regular string`);

// console.log(`String
// multiple
// line`)

// const age= 15;


// if(age>=18){
// console.log('Sarah can start driving license')
// } else{
//     const yearsLeft=18-age;
//     console.log(`Sarah is to young.Wait another ${yearsLeft} years ;)`);
// }

// let century;
// const birthYear =1998;
// if(birthYear<=2000){
//     century = 20;
// } else{
//     century=21;
// }
// console.log(century);


const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJhon = 1.95;


// const BMIMark = massMark /heightMark**2;
// const BMIJohn = massJohn/ (heightJhon*heightJhon);
// const markHigherBMI = BMIMark > BMIJohn;
// console.log(BMIMark,BMIJohn,markHigherBMI);

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJhon = 1.76;


const BMIMark = massMark /heightMark**2;
const BMIJohn = massJohn/ (heightJhon*heightJhon);


if(BMIMark>BMIJohn){
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)

}else{
    console.log(`John's BMI(${BMIJohn}) is higher than Marks's(${BMIMark}!`)
}