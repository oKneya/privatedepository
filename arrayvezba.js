// 1. Write an array of months in a year. Using console.log display June, October and January
// from the array.

// var godine = ['Jan', 'Feb', 'Mart', 'Apr', 'Maj', 'Jun', 'Jul', 'Avg', 'Sept', 'Okt', 'Nov', 'Dec']
// console.log(godine[0]);

// 2. Write an arrays of days in a week. Using console.log display Sunday from the array.

// var daniunedelji = ['pon', 'uto', 'sre', 'cet', 'pet', 'sub', 'ned']
// console.log(daniunedelji[5])

// 3. Print all negative elements from the array [2, -4, 5, -2, -11].

// var negativnielementi = [2,-4,5,-2,-11]
// console.log(negativnielementi.length)
// console.log(negativnielementi [3])

// 4. Print all elements with indices divisible by 3 from the array [5, 15, -5, 20, 12, 18,
// 72, 14, 9].

// var deljivisatri = [5, 15, -5, 20, 12, 18, 72, 14, 9 ]
// if (deljivisatri[8]%3===0) {
// console.log("deljiv")
// }

// 5. What is the index of number 24 in the following array?
// [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3,
// 10, 26, 7]];

//  var nizbrojeva = [[1,2,1,24],[8,11,9,4],[7,0,7,27],[7,4,28,14],[3,10,26,7]];
//  console.log(nizbrojeva.length)
//  console.log(nizbrojeva [0] [3])
//  console.log(nizbrojeva [2] [1])

// 6. Napisati program koji proverava sumu prvog i poslednjeg
// elementa u nizu, ukoliko je suma 50, dupliraj rezultat.
// Ukoliko je suma veca od 50, pomnozi sumu sa 5.
// Ukoliko je suma manja od 50, rezultat podeli sa 4.

// a = [1,3,5,2,4,6,10]

//   var sumarezultata = [60,3,5,2,4,6,10]
// if (sumarezultata[0]+sumarezultata[sumarezultata.length-1]===50) {
// console.log((sumarezultata[0]+sumarezultata[sumarezultata.length-1])*2)
// } else if (sumarezultata[0]+sumarezultata[6]> 50) {
// console.log((sumarezultata[0]+sumarezultata[sumarezultata.length-1])*5)
// } else if (sumarezultata[0]+sumarezultata[6]< 50) {
// console.log((sumarezultata[0]+sumarezultata[sumarezultata.length-1])/4)
// } ;

/*7. Napisati program koji konkatenira prva dva elemeenta niza.
Prvo treba proveriti da li su elementi "string".
Ukoliko jesu, treba ih sabrati i ispisati u konzoli.
*/

/*a = ["suma", "elemenata", "niza"]

if (typeof a[0]=="string",typeof a[1]==="string",typeof a[2]==="string") {
     console.log((a[0])+(a[1]))
}*/

/*8. Napisati program koji proverava da li je duzina niza neparna.
Ukoliko jeste, smanji duzinu niza na samo prvi element,
Ukoliko nije, pomnozi poslednji element sa 3;

 var a = [1,2,3,4,5,6,7,8,9]
 var b = [2,5,6,7,8,9,0,"deset"]

 if ([a.length]%3===0) {
     console.log(a[0])
 } else if ([a.length]%3==0) {
     console.log(a[8]*3)
 };

if ([b.length]%3==0) {
    console.log(b[0])
} else if ([b.length +1]%3==0) {
    console.log(b[8]*3)
}

9. Napisati program koji proverava da li je duzina niza manja od 3,
Ukoliko jeste dodati 4 elementa na kraj niza(bilo koji tip podatka)
Ukoliko nije pomnoziti drugi i cetvrti element
*/
// a = ["nula", 1, "dva", 3, "cetiri", 5]

// if([a.length]<=3) {
// console.log([a/length +3])
// } else if ([a.length]>=3) {
// console.log(a[1]*a[3])
// }

// console.log(a.length)

// switch_vezbe

// Write a program that shows text representation of a day in a week for a number input from
// 1 to 7. Print output in console.
// For input 1, output should be “Monday”.

// var a = [7,1,17,15,22,33,-1]
// var max = - Infinity
// var min = Infinity

// for (var i=0; i<a.length;i++) {
// if(max<a[i])
// max = a[i]
// if(min>a[i])
// min = a[i]
// }

// var a = [7,1,17,15,22,33,-1]
// (da sve prebacimo u string)

// for(var i=0;i<a.length;i++) {
//  a[i] += "";
//  console.log(a)
// }

// var a = [7,1,17,15,22,33,-1]
//   for(var i=0;i<a.length;i++) {
//  a[i]=a[i]+1
//   }

//   console.log(a)

/* vezbe sreda 15.12.*/

// Write a program that will iterate from 0 to 10 and display squares of numbers.

// var a = [0,1,2,3,4,5,6,7,8,9,10]
// for (var i=0; i<a.length; i++) {
//  a[i]=a[i]*2
// console.log(a)
// }

// 1. Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
// number is odd or even, and display a message to the screen.

// var a = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
//  for ( var i=0; i<=a.length-1; i++ )
// if (a[i]%2==0)
//    { console.log('deljiv')}
//
//   else if (console.log('nijedeljiv'));

//   2. Write a program to sum the multiples of 3 and 5 under 1000.

//   var min1 = a[0];
//   var min2= a[1];
//   var a = [4,3,3,1,2,5]

//   if (min1>min2) {
//     min1 =a[1];
//     min2 =a[0];
//   }

//   for (var i =2; i<a.length;i++) {
//       if (a[i]<min1) {
//         min2 = min1;
//         min1 = a[i]
//       } else if (a[i] < min2) {
//         min2 =a[i];
//       }
//   }

//   console.log(min1,min2)

// 6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
// be read the same way both from the left and the right hand side.
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.

// 15.02.2023

// 1. Write a loop that logs the numbers from 1 to 10 to the console.

// for (var i=1; i<=10;i++) {
//     console.log(i)
// }

// FUNKCIJE 16.02. ****************************************

// var a = 1;                            //<-- vrednost koja stoji van bloka koda se ne racuna u bloku koda
// function korenBroja (funkcija){       //<-- ovo je "function declaration"
//     return Math.sqrt(a());            //<-- ovo je "function expresion"
// }
// function napisiBroj (a){
//     return 3;
// }
// console.log(korenBroja(napisiBroj(a)))

// 1. Write a program that calculates the maximum of two given numbers.

// maximumDvaBroja = function (broj1,broj2) {
//     if (broj1+broj2)
//     console.log(broj1+broj2);
// }

// maximumDvaBroja (15,12)

// 2. Write a program that checks if a given number is odd.

// var daLiJeNeparan = function (nekibroj) {
//     if (nekibroj%2===0)
//     return 'deljivje'
//     return 'nijedeljiv'
// };

// console.log(daLiJeNeparan(11));

// 3. Write a program that checks if a given number is a three digit long number.

// var proveriTrocifreniBroj = function (trocifreni) {
//     if (trocifreni>=1000)
//     return 'ima4cifre';
//     else if (trocifreni>=100)
//     return 'ima3cifre';
//     else if (trocifreni<100)
//     return 'nijetrocifreni'
// };

// console.log(proveriTrocifreniBroj(125))

// 4. Write a program that calculates an arithmetic mean of four numbers.

// var rezultat4broja = function (br1, br2, br3, br4) {
//     return ((br1 +br2 +br3 +br4) / 4)
// };

// console.log(rezultat4broja(2,4,6,8));

// 7. Write a program that calculates a number of digits of a given number.

// function saberibrojeve (nekibroj) {
//     nekibroj+="";
//     return nekibroj.length;
// }

// console.log(saberibrojeve(1122336654546546));

// 9. Write a program that calculates the sum of odd elements of a given array.

// var a = [2, 4, 7, 8, 7, 7, 1];
// function saberiNeparneBr(niz) {
//   var sum = 0;
//   for (var i = 0; i <= niz.length - 1; i++) {
//     if (niz[i] % 2 !== 0) {
//       sum = sum + niz[i];
//     }
     
//   } return sum;
// }
// console.log(saberiNeparneBr(a));

// 8. Write a program that calculates a number of appearances of a given number in a
// given array.


// var a = [2, 4, 7, 8, 7, 7, 1];
// var e = 7
// function appearance (x,y){
//     var counter = 0;
//     for (var i =0; i<x.length; i++) {
//         if (x[i===y])
//         counter=counter+1;                                   
//     }

//     return counter;
// }

// console.log(appearance (a,e))

//VEZBE 17.02. ***************************** FUNKCIJE*/************** */

// 1. Write a function to check whether the `input` is a string or not.

// var a = ""
// var stringiliNe = function (nekiinfo) {
//     if (typeof nekiinfo==typeof a) 
//     return true;
//     return false;
// }
// console.log(stringiliNe(12));

// 2. Write a function to check whether a string is blank or not.


// var BlenkIliNe = function (nekiinfo) {
//     for (var i =0; i<nekiinfo.length; i++) {
//         if (nekiinfo[i]>=0)
//         return false;
//     }  return true;
// }

// console.log(BlenkIliNe(""))

// 11. Write a program that concatenates a given string given number of times. For
// example, if “abc” and 4 are given values, the program prints out abcabcabcabc.

// var a = "abc";
// var b = 5;

// var Konkatenacija = function (a,b) {
//     var c = "" ;
//     for (i=1; i<=b; i++) {
//         if (i<=b) 
//         c = c + a; 
//     } return c;
// }  

// console.log(Konkatenacija(a,b ));

// 3. Write a function that concatenates a given string n times (default is 1).

// var SaberiString = function (string ,puta ) {
//     var novistring = "";
//     for (var i=1; i<=puta;i++) {
//         if (i<=puta)
//         novistring = novistring + string;
//     } return novistring;
// } ;

// console.log(SaberiString("123",3))

// 4. Write a function to count the number of letter occurrences in a string.

// var prebrojslova = function (string, slovo) {
//     var pomnozi = 0;
//     for (var i=0;i<string.length;i++) {
//         if (string[i]===slovo)
//         pomnozi = pomnozi +1;
//     } return pomnozi;
// }
// console.log(prebrojslova("samouseiusvojekljuse", "e"));

// 5. Write a function to find the position of the first occurrence of a character in a string. The
// result should be the position of character. If there are no occurrences of the character, the
// function should return -1




// 1. Write a function that converts an array of strings into an array of numbers. Filter
// out all non-numeric values.


// var array = ["1","31",undefined,"42","1e+3", Infinity];

// function arrStringstoArrNum (arr) {
//     newArr = []; {
//         for (i=0; i <arr.length; i++) {
//             if (arr[i]!== null && arr[i] !== false && arr[i] !== "" && typeof (arr[i]*1) === "number" && arr[i] *1 < Infinity && arr[i]*1 > -Infinity) {
//                 newArr [newArr.length] = parseFloat (arr[i]);
//             }
//         }
//     } return newArr;
// };
// console.log(arrStringstoArrNum(array));



// 2. Write a program to join all elements of the array into a string skipping elements
// that are undefined, null, NaN or Infinity.

