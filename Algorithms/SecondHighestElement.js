//Find second highest element in array?
//Given array of integers, our task is to write a program that efficiently finds the second largest element present in the array

//1) Naive approach or Brute force approach
function secondHighestElement(arr){
    //If the array is sorted in ascending order
    let sortedArr = arr.sort((a, b) => a - b);
    return sortedArr[arr.length-2];
    //If the array is sorted in descending order
    let descreasingOrderArr = arr.sort((a, b) => a-b);
    return descreasingOrderArr[1];
}

//Time Complexity => O(N*logN)
//Space complexity => O(1)

function secondHighestElement(arr){
    let maximumElem = -Infinity;
    let secondHighestElement = -Infinity;
    let diffHashtable = {};
    for(let i=0; i < arr.length; i++){
        if(arr[i] > maximumElem){
            maximumElem = arr[i];
        }
    }
    for(let i=0; i < arr.length; i++){
        if(!(arr[i] in diffHashtable) && maximumElem !== arr[i]){
            const diff = maximumElem - arr[i];
            diffHashtable[arr[i]] = diff;
        }
    }
    const minDifference = Math.min.apply(null, Object.values(diffHashtable));
    for(let key in diffHashtable){
        if(diffHashtable[key] === minDifference){
            secondHighestElement = key;
        }
    }
    return secondHighestElement;
}

//Time Complexity => O(N)
//Space Complexity => O(N)
//Three loops are used we can find it in one loop

function secondHighestElement(arr){
    let first = -Infinity, second = -Infinity;
    for(let i=0; i < arr.length; i++){
        if(arr[i] > first){
            second = first;
            first = arr[i];
        }else if(arr[i] > second && arr[i] !== first){
            second = arr[i];
        }
    }
    return second;
}

//Time Complexity => O(N)
//Space Complexity => O(1)