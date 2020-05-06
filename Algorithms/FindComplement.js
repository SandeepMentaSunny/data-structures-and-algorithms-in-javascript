// Number Complement

//Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.

 

// Example 1:

// Input: 5
// Output: 2
// Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.
 

// Example 2:

// Input: 1
// Output: 0
// Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to

//sol-1: 
var findComplement = function(num) {
    let result = [];
  let baseTwo = parseInt(num).toString(2);
  for(let i=0; i < baseTwo.length; i++){
  	if(Number(baseTwo[i]) === 0){
    	result.push(1);
    }else{
    	result.push(0);
    }
  }
  result = result.join('');
  return parseInt(result, 2);  
};

//Time complexity: O(N)
//Space Complexity => O(N)

//sol-2:
var findComplement = function(num){
	let result = 0;
  let i=0;
  while(num){
  	if((num&1) === 0){
    	result += 1 << i;
    }
    i += 1;
    num >>=1;
  }
  return result;
};
//Time complexity => O(N)
//Space Complexity => O(1ss)
