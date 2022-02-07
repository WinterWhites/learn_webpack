import '../css/index.css';
import '../css/test.less';

function component() {
	const el = document.createElement('div');
	el.textContent = ['hello', 'world'].join(' ');
	el.className = 'active';
	const img = new Image(200, 200);
	img.src = require('../img/img1.jpeg');
	const img1 = new Image(100, 100);
	img1.className = 'active-img2';
	img1.src = require('../img/img2.png');
	document.body.append(img, img1);
	// 字体图标
	const iEl = document.createElement('i');
	iEl.className = 'iconfont icon-xunzhang custom-icon';
	document.body.append(iEl);
	return el;
}
 
document.body.append(component());
