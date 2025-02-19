// console.log("Hello world!");
// console.log("Stiti Prangya Priyadarshani Rout");
// console.log("i love java Script");
// name="Tony";
// console.log(name);
// age=24;
// console.log(age);
// x=null;
// console.log(x);
// y=undefined;
// console.log(y);
// isConfirm=false;
// console.log(isConfirm);
// let names="tony sony ";
// console.log(names);
// let agee=45;
// agee=54;
// console.log(agee);
// const ages=43;
// console.log(ages);
// // const cannot be redeclared or updated but let cannot be redeclared but can updated 
// { let a =10;
//     console.log(a);
// }
// {
//     let a =29;
//     console.log(a);
// }
// // let z=BigInt("1234");
// let s=Symbol("hello");
// // same process in data types of number,string,boolean,undefined,null
// // object
// const student = {
//     fullName : "Stiti prangya",
//     age : 20,
//     cgpa : 8.5,
//     isPass : true,

// };
// console.log(student.age);
// // or we can print
// console.log(student["age"]);
// student.age=student.age+1;
// console.log(student.age);
// const product={
//     productName: "pen",
//     poductPrice : 270,
//     productStar: 4,
//     productViews : 7002,
//     isDeal: true,
//     productDiscount :5,
// };
// console.log(product);
// let secured =[23,45,67,89,56];
// console.log(secured);
// console.log(secured.length);
// let heroes =["vasudev krishna","hanuman","mahadev","vishnu"];
// // for(let i = 0;i< heroes.length;i++){
// //     console.log(heroes[i]);
// // }
// for(let i of heroes){
//     console.log(i);
// }
let secured =[23,45,67,89,56];
let sum= 0;
let avg=0;
for(let i of secured){
    sum=sum+i;
    
}
avg = sum/secured.length;
console.log(avg);

let offer =[250,645,300,900,50];
console.log(offer);
let total=0;
for(let i of offer){
    console.log(`value at index ${total } = ${i}`    );
    let offer = i/10;
    offer[total]=offer[total] -offer;
    console.log(`value after offer=${offer[total]}`);
    total++;

total=(90/100)*i;
}
console.log(total);