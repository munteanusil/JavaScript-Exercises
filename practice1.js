// true;
// console.log(javascriptIsFun);
// let javascriptIsFun = true;

// const massMark= 78;
// const heightMark= 1.69;
// const massJohn =92;
// const heightJohn= 1.95;   

// const massMark= 95;
// const heightMark= 1.88;
// const massJohn =85;
// const heightJohn= 1.76;



/* const BMIMARK =massMark/heightMark**2;
// const BMIJhon = massJohn/(heightJohn*heightJohn);


// markHigherBMI = BMIMARK>BMIJhon;
 console.log(BMIJhon, BMIMARK, markHigherBMI);*/


//Lections 20 -Type Coversion type Coercion


// Type conversion
  /*  var inputYear = "1991";
    console.log(Number(inputYear),inputYear);
    console.log (Number(inputYear)+18);

    console.log(Number('Jonas'));

    console.log(String(23), 23);

//type coercion

console.log('I am '+23+'years old');
console.log('23'-'10'-3);
console.log('23' / '2');

let n= '1'+1;// string "11"
n= n-1; // din cauza lui - , oriunde avem minus va converti un string sau mai multe  a intr-un numar
console.log(n);*/


// lection 21. Truthy and Falsy Values
 

// 5 falsy values: 0,'', undefined, null, NaN

/*console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money =100;
if(money){
  console.log("Don't spend it all;");
} else{
  console.log('You should get a job!');
}

let height= 0;
if(height){
  console.log('YAY! Height is defined')
} else{
  console.log('Height is UNDEFINED')
}*/ 

//22. Equality Operators: == vs. ===

// const age =18;
// if(age === 18) console.log('You just became an adult ;D');  //=== strict equality operator.

// == loose equality operator,


/*const favourite = Number(prompt("Whar's your favourite numar?"));
console.log(favourite);
console.log(typeof favourite);

if(favourite === 23){ //'23' == 23
  console.log('Cool! 23 is an amazing number!')
} else if(favourite === 7){
  console.log('7 is also a cool number')
} else if(favourite === 9 ){
  console.log(' 9 is also a cool number')
}
else{
  console.log('Number is not 23 or 7 or 9')
}

if (favourite !== 23) console.log('Why not 23?');*/


//24. Logical Operators

// const hasDriversLicense = true; //A
// const hasGoodVision = true; //B
// console.log(hasDriversLicense && hasGoodVision );
// console.log(hasDriversLicense || hasGoodVision );
// console.log(!hasDriversLicense );


// if( hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive')
// } else {
//   console.log('Someone else should drive...')
// }

// const isTired = false;// C
// console.log(hasDriversLicense &&  hasGoodVision && isTired);

//  if( hasDriversLicense && hasGoodVision && !isTired) {
//   console.log('Sarah is able to drive')
// } else {
//   console.log('Someone else should drive...')
// }


// 25. Coding Challenge #3

//1. Calculating the average of both teams

// const scoreDolphins = (96+ 108+ 89)/3;
// const scoreKoalas = (88+91+110)/3;
// console.log(scoreDolphins, scoreKoalas);

//2. Compare the team's average score

// if(scoreDolphins>scoreKoalas){
//   console.log('Dolphins win the tropthy');
// } else if(scoreKoalas>scoreDolphins){
//   console.log('Koalas win the trophy');
// } else if (scoreDolphins===scoreKoalas){
//   console.log('Both win the tropty')
// }

//Bonus 1

/*const scoreDolphins = (97+ 112+ 80)/3;
const scoreKoalas = (109+95+50)/3;
console.log(scoreDolphins, scoreKoalas);

if(scoreDolphins > scoreKoalas && scoreDolphins >= 
  100) {
  console.log('Dolphins win the tropthy');
} else if(scoreKoalas>scoreDolphins && scoreKoalas 
   >=100){
  console.log('Koalas win the trophy');
} else if (scoreDolphins===scoreKoalas && scoreDolphins >= 100 && scoreKoalas
  >= 100){
  console.log('Both win the tropty');
}else{
  console.log('No one wins the trophy');
}
*/

// const day = 'friday';
//  switch(day){
//    case 'monday': //day ==='monday'
//       console.log('Plan course structure');
//       console.log('Go to coding meetup');
//      break;
//     case 'tuesday':
//       console.log('Prepare theory videos');
//       break;
//     case "wednesday":
//     case "thursday":
//       console.log('Write code examples');
//       break;
//     case 'friday':
//       console.log('Record videos');
//       case 'saturday':
//       case 'sunday':
//         console.log('Enjoy the weekend :D');
//         break;
//       default:
//         console.log('Not a valid day!');
//  }

//  if (day === 'friday') {
//   console.log('Plan course structure');
//   console.log('Go to coding meetup');
// }else if( day === 'tuesday'){
//   console.log('Prepare theory videos');
// } else if(day === 'wednesday'|| day === 'thursday'){
//   console.log('Write code examples');
// } else if(day ==='friday'){
//   console.log('Record videos');
//  }else if(day ==='saturday' || day === 'sunday'){
//   console.log('Enjoy the weekend :D');
//  } else {
//   console.log('Not a valid day!')
//  }


// if (23 > 10) {
//   const str='23 is bigger';
// }
// const me='Jonas'
// console.log( `I'am ${2037-1991} years old ${me}.`)

const age = 23;
age >= 18 ? console.log('I like to drink wine 🍷') :
console.log('I like to drink water 💧');

const drink = age >=18 ? "wine 🍷": 'water 💧';
console.log(drink);

let drink2;
if(age >= 18){
  drink2= "wine 🍷";
} else{
  drink='water 💧';
}
 console.log(drink2);














