import 'regenerator-runtime/runtime';
import 'core-js/stable';

let str = 'string';
const foo = () => {
	console.log(111);
};
const p = new Promise(resolve => {
	resolve(1);
}).then(res => {
	console.log(res);
})
