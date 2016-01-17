$(document).ready(function(){
  var button1 = document.getElementById('btn1');
  button1.onclick = function(){
    alert("document width:" + document.body.clientWidth);
  };

  $("#btn2").click(function(){
    alert($(window).outerWidth());
  });
})