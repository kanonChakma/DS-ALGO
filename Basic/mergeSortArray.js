
//Sort two array that are already sorted each
function sortArray(arr1, arr2) {
    
    let i=0; j=0;

    if(arr1.length<1) {
        return arr2;
    }
    
    if(arr2.length<1) {
        return arr1;
    }
    
    const sortedArray = [];
    let firstItem = arr1[0];
    let secondItem = arr2[0];
    
    while(firstItem || secondItem) 
    {
      if(secondItem === undefined || firstItem<secondItem) 
        {
          sortedArray.push(arr1[i]);
          i++;
          firstItem = arr1[i];
        } else {
          sortedArray.push(arr2[j])
          j++;
          secondItem = arr2[j];
       }    
    }

    return sortedArray;
}

function sortArray2(arr1, arr2) {
    
    let i=0; j=0;

    if(arr1.length<1) {
        return arr2;
    }
    
    if(arr2.length<1) {
        return arr1;
    }
    const sortedArray = [...arr1,...arr2];
    return [...arr1,...arr2].sort((a,b) => a-b);
}

console.log(sortArray2([1,13,14,16,20],[2,3,4,30]));



console.log(["", ""].length);








