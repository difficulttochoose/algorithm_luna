console.log('App was loaded...');
// const stuff=[
//     {name:'Oleh', salary:'4500', sex:'male', age:37},
//     {name:'Ivan', salary:'500', sex:'male', age:22},
//     {name:'John', salary:'2500', sex:'male', age:27},
//     {name:'Maya', salary:'3500', sex:'female', age:30},
//     {name:'Sveta', salary:'4000', sex:'female', age:35},
//     {name:'Met', salary:'1500', sex:'male', age:30},
// ];
// let sal = prompt('Enter salary:');
// for(let i=0;i<stuff.length;i++){
    
//     (stuff[i].salary > sal ? console.log(`${stuff[i].name}. His salary is ${stuff[i].salary}`) : null);
    
// }
//Math.round(Math.random()*100);
// let res=[];
// for(let i=0;i<10;i++){
//     res[i]=i+1;
//     console.log(res[i]);
// }
// for(let i=9;i>=0;i--){
//     console.log(res[i]);
// }
const card=[4,9,1,6,5,5,2,6,5,3,9,8,1,9,4,9];
console.log(card);
console.log(card.reverse());
for(let i=0;i<card.length;i++){
    if((i+1)%2===0)
    {
        card[i]=card[i]*2;
    }
}
console.log(card);
for(let i=0;i<card.length;i++){
    if(card[i]>9){
        card[i]=String(card[i]).split('');
        for(let o=i, j=0; j<2; j++){
            card[o][j]= Number(card[o][j]);
        }
        let sum=0;
        for(let j=0; j<2; j++){
            sum+=card[i][j];
        }
        card[i]=sum;
    }
} 
console.log(card);
let sum2=0;
for(let i=0;i<card.length;i++){
    sum2+=card[i];
}
console.log(sum2);
if(sum2%10===0){
    console.log("OK");
}else{
    console.log("Not OK");
}