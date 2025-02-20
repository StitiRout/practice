let marks=[23,45,67];
console.log(marks);
 let items =[250,645,300,900,50];
// let i=0;
// for(let val of items){
//     console.log(`the value at index ${i}=${val}`);
//     let offer = val/10;
//     items[i] =items[i] - offer;
//     console.log(`value after offer =${items[i]}`);

//     i++;
// }
for(let i =0;i< items.length;i++){
    let offer = items[i] /10;
    items[i]=items[i]-offer;

}
console.log(items);
let veggies =["potato","tomato","cabage","onion"];
console.log(veggies);
veggies.pop();
console.log(veggies);
console.log(veggies.toString());
let combine = items.concat(veggies);
console.log(combine);
let sp = veggies.splice("kobi","cabage","brinjal");
console.log(sp);
// questions

let companies = ["Bloomberg","Microsoft","Uber","Google","IBM ", "Netflix "];
let re= companies.shift();
console.log(companies);
let se = companies.splice(2,1,"Ola");
console.log(companies);
let te = companies.push("Amazon");
console.log(companies);
//  FUNCTIONS AND METHODS

// FUNCTIONS
function myFirstFxn(){
    console.log("hello world!");
    console.log("this is my first fxn definition");
}
myFirstFxn();

function sum(x,y){
 console.log(x + y);                //output at inspect                     
}
  
function add(a,b){
    s = a + b;
    return s;
}
let v = add(45,76);
console.log(v);

// arrow function
// function mul(s,t){ //output at inspect 1)type arrowmul    2)type 
//                                                //arrowmul(values) 
//     return s * t;
// }
// const arrowmul=(s,t)=> {
//     console.log(s*t);
// };

// const printhello =() => {
//     console.log("hello");
// };


function countvowels(str){
    let count=0;
        for(const char of str){
            if(char === 'a' || char === 'e' || char === 'i' || char === 'i'|| char ==='o' || char === 'u'){
                count++;
            }}
        console.log(count);
    }
const arrowcountvowels=(str)=>{
    let count= 0;
    for(const char of str){
        if(char ==='a' || char ==='e' || char ==='i' || char ==='o' || char === 'u'){
            count++;

        }

    }
    return count;
};

//foreach Loop in Arrays
// normally
let arr=[23,56,89,10,23,54];
console.log("the values");
arr.forEach(function printvalue(valu){
    console.log(valu);

});

// in case of arrowfxn
console.log("the values")
arr.forEach((valu) =>{
    console.log(valu);
});

let arr2=["stiti","smruti","saswoti","trupti","ansita"];
console.log("the names");
arr2.forEach((names,idx) => {
    console.log(names.toUpperCase(),idx);
})
// questions
let arr3=[1,2,3,4,5,6,7,8,9];

 arr3.forEach(function squaring(int){
  console.log( int * int);
    });

    //map method
    let stiti =[29,10,2004];
  let prangya=  stiti.map((rout) =>{
        return rout * 10;
    });
console.log(prangya);
// filter method
let even=[12,33,45,56,79,9,91,23,45,63,89,0,1,12,23,34,45,56,67,78,89,90];
let al = even.filter((ev)=>{
    return ev % 2 ==0;
});
console.log(al);
let ate =even.reduce((res,curr) =>{
    return res + curr;
});
console.log("the total value after summing all numbers is",ate);
    
 //questions 1
 let studentsarr=[87,90,78,90,67,90,56,90,45,90,34,90];

 let filtered= studentsarr.filter((grade)=>{
    return grade >= 90;

 });
 console.log(filtered);
//  questions 2
let n =prompt("give some numbers");
let arr4 =[];
for(let i=0;i<=n;i++){
    arr4[i-1]=i;
}
console.log(arr4);
let suum= arr4.reduce((res,curr) =>{
 return res + curr;
});
console.log("sum of the numbers :",suum);
let muul = arr4.reduce((res,curr)=>{
    return res *curr
;
});
console.log("multiplications of numbers : " ,muul);
