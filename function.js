



// function operation(element){
   
//         if(element % 2 == 0){
//             console.log(element*2, ": is even ");
//         } else {
//             console.log(element, "is odd");
//         }
        
// }

// function evenify_all(){
//     for (let i = 0; i < nums.length; i++) {
//         const element = nums[i];
//         if(element % 2 == 0){
//             console.log(element*2, ": is even ");
//         } else {
//             console.log(element, "is odd");
//         }
//     }
        
// }

// const nums = [5,1, 10, 15, 20, 45];
// //evenify_all()

// const op = nums.map((element) => {
//     if(element%2==0){
//         console.log(element*2, ": is even")
//     }

//     else{
//         console.log(element, ": is odd");
//     }
// });

const nums = [1,2,3,4,5,6];
xyz(nums);

function xyz(res){
    var result
    for(let i=0; i<nums.length;i++){
        const res = nums[i];
        var num_arr= [];
        
    }   num_arr.push(evenify(res));
}

function evenify(res){
    if(res%2 !== 0){
        console.log(res, 'is odd');
    } else{
        console.log(res, "is even");
    }
}