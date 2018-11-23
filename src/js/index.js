/**
 * Created by Administrator on 2018/11/23.
 */
//导入less中 index文件
import '../less/index.less';
//实现头部点击切换class
const navLiNodes = document.querySelectorAll('.nav li');
const arrowNode = document.querySelector('.arrow');
const ulList = document.querySelector('#content>ul');
const contentNode = document.querySelector('#content');
//缓存小箭头一半宽度，防止重绘重排
const arrowNodeHalfWidth = arrowNode.offsetWidth/2;
//缓存高度
let contentHeight = contentNode.offsetHeight;
for (let i = 0; i < navLiNodes.length; i++) {
  navLiNodes[i].onclick = function(){
    nowIndex = i
    move(nowIndex)
  };
};
arrowNode.style.left = navLiNodes[0].getBoundingClientRect().left + navLiNodes[0].offsetWidth/2 - arrowNodeHalfWidth + 'px';
// 初始化下标
let nowIndex = 0;
//ie/chrome
document.onmousewheel = wheel;
//firefox
document.addEventListener && document.addEventListener('DOMMouseScroll', wheel);
let wheelTimer = null;
function wheel(event) {
  event = event || window.event;
//函数反抖动，滑动时候不至于太快，取决于最后一次
  clearTimeout(wheelTimer);
  wheelTimer = setTimeout(() =>{
    var flag = '';
    if (event.wheelDelta) {
      //ie/chrome
      if (event.wheelDelta > 0) {
        flag = 'up';
      } else {
        flag = 'down'
      }
    } else if (event.detail) {
      //firefox
      if (event.detail < 0) {
        flag = 'up';
      } else {
        flag = 'down'
      }
    }
    switch (flag) {
      case 'up' :
        if(nowIndex > 0){
          nowIndex--;
          move(nowIndex)
        }
        break;
      case 'down' :
        if(nowIndex < 4){
          nowIndex++;
          move(nowIndex)
        }
        break;
    }
  },200);
  //禁止默认行为
  event.preventDefault && event.preventDefault();
  return false;
}
 function move(){
     for (var j = 0; j < navLiNodes.length; j++) {
       navLiNodes[j].className = '';
     }
     navLiNodes[nowIndex].className = 'active';
     // 切换小箭头位置
     arrowNode.style.left = navLiNodes[nowIndex].getBoundingClientRect().left + navLiNodes[nowIndex].offsetWidth/2 - arrowNodeHalfWidth + 'px';
     //模块高度也随着索引值的变化而变换
     ulList.style.top = - nowIndex * contentHeight + 'px';

 }
 //修正小箭头的位置
window.onresize = function () {
  arrowNode.style.left = navLiNodes[nowIndex].getBoundingClientRect().left + navLiNodes[nowIndex].offsetWidth/2 - arrowNodeHalfWidth + 'px';
//修正ul位置
  contentHeight = contentNode.offsetHeight;
  ulList.style.top = - nowIndex * contentHeight + 'px'
 };


