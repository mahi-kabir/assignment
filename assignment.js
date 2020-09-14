//feet to mile 

function feetToMile(num){
    num = num*0.0001894;
    return num;
}

var out = feetToMile(4);
console.log(out);


// woodCalculator

function woodCalculator(chair, table, bed){
  var woodQuantity = (chair*1) + (table*3) + (bed*5);
  return woodQuantity;
}

console.log(woodCalculator(3,10,6));



//brickCalculator
var floorNumbers;
var floorHeight;

function brickCalc(brickNumbers){
  
  if(floorNumbers>1 && floorNumbers<=10){
     floorHeight = 15;
    if(floorHeight){
      brickNumbers1 = floorHeight*1000;
    }

    else(floorNumbers>10 && floorNumbers<=20){
      floorHeight = 12;
      if(floorHeight){
        brickNumbers2 = brickNumbers1 + (brickNumbers2 * floorHeight);
      }
    }
  }
}

console.log(brickCalc(5));




//tinyFriend:

var friends = ['rahim', 'karimUdiin', 'sogirMia'];

function tinyFriend(friend){
    let min = friend[0].length;
    friend.map(fr => min = Math.min(min, fr.length));
    var tinyOne = friend.filter(fr => fr.length == min);
    return tinyOne;
}

console.log(tinyFriend(friends));




 