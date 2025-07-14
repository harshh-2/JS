function fiboitr(a){
    let arr=[0,1];
    for(let i=2;i<a;i++){
        var sum=0;
        sum+=arr[i-1]+arr[i-2];
        arr.push(sum);
    }
    return arr;
}
alert(fiboitr(8));