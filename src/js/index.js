/**
 * Created by Administrator on 2018/11/23.
 */
//导入less中 index文件
import '../less/index.less';

//实现头部点击切换class
const navLiNodes = document.querySelectorAll('.nav li');
const arrowNode = document.querySelector('.arrow');

for (let i = 0; i < navLiNodes.length; i++) {
   navLiNodes[i].onclick = function(){
     for (var j = 0; j < navLiNodes.length; j++) {
       navLiNodes[j].className = '';
     }
     this.className = 'active';
     // 切换小箭头位置
     arrowNode.style.left = navLiNodes[i].getBoundingClientRect().left + navLiNodes[i].offsetWidth/2 - arrowNode.offsetWidth/2 + 'px';
  };
}arrowNode.style.left = navLiNodes[0].getBoundingClientRect().left + navLiNodes[0].offsetWidth/2 - arrowNode.offsetWidth/2 + 'px';
