// (function (doc, win) {
//    var docEl = doc.documentElement,
//   resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
//   recalc    = function () {
//          var clientWidth = docEl.clientWidth;
//          if (clientWidth>=640) {
//             clientWidth = 640;
//          };
//          if (!clientWidth) return;
//        docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
//   };
//   if (!doc.addEventListener) return;
//   win.addEventListener(resizeEvt, recalc, false);
//   doc.addEventListener('DOMContentLoaded', recalc, false);
// })(document, window);

//当窗口大小重新发生变化的时候触发
window.onresize = function(){
	resizeFont();
}
resizeFont();
//重置当前rem的基本参照字体大小
function resizeFont(){
	//当前设备宽度
	var _w = window.screen.width;
	document.documentElement.style.fontSize = _w/10 + 'px';
}