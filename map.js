//creates a new array

const arr=['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];

const new_arr=arr.map((ele)=>{
 if(ele==' ')
   ele='empty string'
   return ele
});
console.log(new_arr);
console.log(arr);