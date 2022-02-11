import 'core-js/stable';
import 'regenerator-runtime/runtime';

const msg: string = 'hello world';
const log = (str: string) => {
	console.log(str);
}
log(msg);

const p = new Promise(resolve => {
	resolve(100)
}).then(res => {
	console.log(res);
})
export {}