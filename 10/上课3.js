window.onload=function(){
    const items=document.getElementsByClassName('item');
    const week=['haha','hehe','xixi','hhh','qiqi'];
    var week2=['1','2','3','4','5'];
    for(let i=0;i<items.length;i++){
        items[i].onmouseover=function(){
            itmes[i].innerHTML=week[i];
            items[i].style.color='black';
        }
        items[i].onmouseout=function(){
            itmes[i].innerHTML=week2[i];
            itmes[i].style.color='aqua';
        }
        
    }
};