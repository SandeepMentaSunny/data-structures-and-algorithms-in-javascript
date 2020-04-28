//Sort the zeroes and ones of given array

//1) Naive solution
function sortData(arr){
    return arr.sort((a, b) => a - b);
}

//Time Complexity => O(N*logN)
//Space Complexity => O(1)

//2) Efficient approach
function sortData(arr){
    let j=-1;
    for(let i=0; i < arr.length; i++){
        if(arr[i] < 1){
            j++;
            let temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}

//Time Complexity => O(N)
//Space Complexity => O(1)

//3) Efficient approach
function sortData(arr){
    let countZeroes = 0;
    for(let i=0; i < arr.length; i++){
        if(arr[i] === 0){
            countZeroes++;
        }
    }
    for(let i=0; i < countZeroes; i++){
        arr[i] = 0;
    }
    for(let i=count; i < arr.length; i++){
        arr[i] === 1;
    }
    return arr;
}

//Time Complexity => O(N + P + Q);
//Space Complexity => O(1);

//4) Efficient approach
function sortData(arr){
    let left = 0;
    let right = arr.length-1;
    while(left < right){
        while(arr[left] === 0 && left < right){
            left++;
        }
        while(arr[right] === 1 && left < right){
            right++;
        }
        if(left < right){
            arr[left] = 0;
            arr[right] = 1;
            left++;
            right--;
        }
    }
    return arr;
}

//Two pointers approach
//Time Complexity => O(N)
//Space Complexity => O(1)