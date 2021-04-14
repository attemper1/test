window.onload=function(){test()};
function test(){
  var depth2=document.getElementsByClassName("depth2");
  var anchor=document.querySelectorAll(".depth1>li>a");
  for(i=0; i<depth2.length; i++){
    console.log(i); //0~4
    depth2[i].onmouseover=function(){
      console.log(i); //5
      anchor[0].classList.add("active");
    }
    depth2[i].onmouseout=function(){
      anchor[0].classList.remove("active");
    }
  }
}