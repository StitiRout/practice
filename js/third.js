// for(let i=1;i<=5;i++){
//     console.log("StitiPrangya");
// }
// for(let i = 1; i<=5;i++){
//     console.log("i =",i)
// }
// let i =1;
// while(i <=10){
//     console.log(i);
//     i++;
// }
// let i =1;
// do{
//     console.log(i);
//     i++
// }while(i <=10);


//FOR-OF AND FOR - IN LOOP
let str ="StitiPrangya ";
let length =0;
for(let i of str){
    console.log(i);
    length ++;

}
console.log("length is",length);
 

let student ={
    sName : "Stiti",
    Redg : 8144,
    sl : 42,
    section : "M1",

};
for( let j in student){
    console.log(j,student[j]);
}
// question1

// for(let i = 0;i<=100;i++){
// if(i%2==0){
//     console.log(i);
// }
// }
// question2
// let game = 25;
// let user=prompt("guess the number");
// while(user != game){
//     user= prompt ("You entered wrong number,guess again");
// }
// console.log("Congratulation, you entered the right number");


// STRING
let strng = "STITI";
console.log(strng);
console.log(strng[0]);
console.log(strng[1]);
console.log(strng[2]);
console.log(strng[3]);
console.log(strng[4]);
let apecialString= `This is an apple`;
console.log(typeof apecialString);
let obj1 ={
    item :"pen",
    price :10,
};
let output = `the cost of the ${obj1.item} is ${obj1.price} rupees`;
console.log(output);
let abc="Stiti   prangya   priyadarshani   rout ";
abc= abc.trim();
console.log(abc);
let s = "abcdef";
s=s.slice(2,4);
console.log(s);
let w = "stiti";
let q ="routttt";
let res= w.concat(q);
console.log(res);
console.log(q.replace("o","a"));
console.log(q.replaceAll("t","l"));
w= w.charAt(4);
console.log(w);
// question

let username = prompt("Enter your full name");

let out ="@"+username+username.length ;
console.log(out);