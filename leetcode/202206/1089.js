var duplicateZeros = function(arr) {
    const len = arr.length;
    for(let i = len-1 ; i >= 0 ; i--){
        if(arr[i] === 0){
            arr.splice(i,1,0,0)
        }
    }
    arr.length = len
    return arr

};
