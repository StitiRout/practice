let a = 3;
let b = 2;
console.log(a +b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
// exponential or power
console.log(a**b); 
// unary operators (++  --)
a++;
console.log("a=",a);
a--;
console.log(a);
console.log("++a=",++a);
console.log("--a=",--a);
// assignment operator
a += 4;                    //a=a+4
console.log(a);
// comparision operator
console.log(a==b);
console.log(a!=b);
console.log(a===b);     //stict comparision eg=string not equal to number
console.log(a!==b);  
console.log(a>=b);   
console.log(a<=b);
let s = 3;
let t = 1;
let cond1 = s > t;
let cond2 = s==3;
console.log(cond1 && cond2);
console.log(s > t || s==t);
// conditional statement
let age = 10;
if(age >= 18){
    console.log("you can vote");
}
if(age < 18){
    console.log("you cannot vote");
}
let mode = "dark";
let color;
if(mode === "dark"){
    color = "black";
}
// if(mode !== "dark"){      
//     color = "white";}
else{
    color ="white";
}
console.log(color);
// compact if else
 let myAge = 20;
// myAge > 18 ? console.log("adult") :console.log( "Not adult");
let result = myAge > 18? "adult" : "not adult";
console.log(result);
// user input (alert and promt)
alert("hey StitiPrangya");     // ye shirf msg dega
let input =prompt("hey StitiPrangya");    //ye msg k saath saath input dalne ko dega       
console.log(input);
// question1
let inp = prompt("enter a number");
if (inp % 5 == 0){
    console.log("yes", inp,"is a multiple  of 5" );
}
else{
    console.log(inp," is not a multiple of 5");
}
// question2
let mark = prompt("enter your mark");
if(mark >=80 && mark <=100){
    console.log("A");
}
else if (mark >= 70 && mark <=79){
    console.log("B");
}
else if (mark >=60 && mark <=69){
    console.log("C");
}
else if (mark >=50 && mark <= 59){
    console.log("D");
}
else {
    console.log("F");
}


