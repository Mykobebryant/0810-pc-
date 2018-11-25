/**
 * Created by Administrator on 2018/11/25.
 */
export default function(){
  const pointNodes = document.querySelectorAll('.content-xiaoyuandian li');
  const liNodes = document.querySelectorAll('.content-lunbotu li');

//设置上一次记录下标，和要点击的下标参数
//上一次下标参数
  let lastIndex = 0;
//下标参数
  let nowIndex = 0;
//当点击的下标大于上一次的下边参数，说明向右点击....在循环体中进行设置
  for (let i = 0; i < pointNodes.length; i++) {
    pointNodes[i].onclick = function(){
      nowIndex = i;
      //点击同一个小圆点不处理
      if(nowIndex === lastIndex) return;
      if( nowIndex > lastIndex ){
        liNodes[nowIndex].className = 'common-title rightShow';
        liNodes[lastIndex].className = 'common-title leftHide';
      }else{
        liNodes[nowIndex].className = 'common-title leftShow';
        liNodes[lastIndex].className = 'common-title rightHide';
      }};
          lastIndex = nowIndex;
    //让小圆点清空，加上active
    pointNodes[lastIndex].className = '';
    pointNodes[nowIndex].className = 'active';

  }



}





