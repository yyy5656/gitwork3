function $() {
    return obj = document.getElementsByTagName("P");
}
$()
var obj = document.getElementsByTagName("P");
console.log(obj)

function $() {
    return myld = document.getElementById("myld").innerHTML;
}
$()
console.log(myld);

function $() {
    return myclass= document.getElementsByClassName("myclass");
}
$()
var myclass= document.getElementsByClassName("myclass");
// var myclass= document.getElementsByClassName("myclass")[0];//我只能获取到这个标签名，或者只有一个，没法获取到里面的内容，太难了。

console.log(myclass)





