const arr=[1,1,1,2,2,3,4,4,5,5,5];
function uniq(arr) {
    var temp=[];
    for(var i=0;i<arr.length;i++){
        if(arr.indexOf(arr[i])==i){
        temp.push(arr[i])
    }
}
return temp;
}

console.log(uniq(arr));