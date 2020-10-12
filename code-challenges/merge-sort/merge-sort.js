function mergesort(arr){
  let n =arr.length;
  if(n > 1){
    let mid =  Math.floor(n / 2);
    let left = arr.slice(0 , mid);
    let right = arr.slice(mid);
    mergesort(left);
    // sort the right side
    mergesort(right);
    // merge the sorted left and right sides together
    merge(left, right, arr);
  }
  return arr;
}

function merge(left, right, arr){
  let i = 0;
  let j = 0;
  let k = 0;

  while( i < left.length && j < right.length){
    if(left[i] <= right[j]){
      arr[k] = left[i];
      i = i + 1;
    }
    else{
      arr[k] = right[j];
      j = j + 1;
    }
    k = k + 1;
  }
  if(i === left.length){
    for(let l = j ; l < right.length ; l++){
      arr[k] = right[l];
      k++;
    }
  }
  else
  {
    for(let l = i ; l < left.length ; l++){
      arr[k] = left[l];
      k++;
    }
  }
}
mergesort([100, 20, 3, 15,1,8]);

module.exports=mergesort;
