var thisElement=document.getElementById('square');

//注意大小写
setInterval(function () {
  var today=new Date();
  thisElement.innerHTML="北京时间："+ today+"<br />"+"今天是星期:"+today.getDay();
}, 100);//不断循环执行，间隔时间为指定的时间,时间越短越准确
//settimeout用法:在指定的时间后执行函数(延迟多少秒执行函数，且只执行一次)
/*循环
var clickNumber=1;
thisElement.onclick=function(){
  if(clickNumber%2==0){
    this.className="squ1";
  }
  else{
    this.className="squ1-squ2";
  }
  clickNumber++;
}*/

/*只能实现点击一次执行一个事件再点击一次执行另一事件 第三次点击无效 不循环
thisElement.onclick=function(){
    this.className="squ1-squ2";
    this.onclick=function(){
    this.className="squ1";
  }
}*/

var flag=true;
thisElement.onclick=function(){
  if(flag){
    this.className="squ1-squ2";
  }
  else{
    this.className="squ1";
  }
  flag=!flag;
}

