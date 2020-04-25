//Leet code challenge
// Move all zeroes to end of the array and non-zero elements in order and don't use extra space

//Solution - 1
function moveZeroesToEnd(arr){
    let result = [];
    let counter = 0;
    for(let i=0; i < arr.length; i++){
        if(arr[i] === 0){
            counter++;
        }else{
            result.push(arr[i]);
        }
    }
    for(let i=0; i < counter; i++){
        result.push(0);
    }
    return result;
}

//Time Complexity => O(N)
//Space Complexity => O(N)

//Solution - 2
//Optimized approach of Solution - 1
function moveZeroesToEnd(arr){
    let counter = 0;
    for(let i=0; i < arr.length; i++){
        if(arr[i] !== 0){
            arr[counter++] = arr[i];
        }
    }
    while(count < arr.length){
        arr[count++] = 0;
    }
    return arr;
}

//Time Complexity => O(N)
//Space Complexity => O(1)

//Solution - 3
//Two pointers approach
function moveZeroesToEnd(arr){
    let n = arr.length;
    if(n === 0 || n === 1){
        return arr;
    }
    let left = 0, right = 0, temp;
    while(right < n){
        if(arr[right] === 0){
           right++;
        }else{
            temp = arr[right];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right++;
        }
    }
    return arr;
}

//Time Complexity => O(N)
//Space Complexity => O(1)