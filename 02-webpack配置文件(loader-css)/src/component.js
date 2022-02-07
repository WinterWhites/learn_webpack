import './css/index.css';
import './css/test.less';
function component() {
	const el = document.createElement('div');
	el.textContent = ['hello', 'world'].join(' ');
	el.className = 'active';
	return el;
}
 
document.body.append(component());
