/* setTimeout(() => {
	console.log('1')

	Promise.resolve().then(() => {
		console.log('p1')
	})

	Promise.resolve().then(() => {
		console.log('p2')
	})
})

setTimeout(() => {
	console.log('2')

	Promise.resolve().then(() => {
		console.log('p3')
	})

	Promise.resolve().then(() => {
		console.log('p4')
	})
}) */

/* 
  浏览器事件循环机制，微任务和宏任务分别是两个事件队列
  
  1、同步代码先执行，遇到微任务和宏任务分别压入到对应的事件队列中

  2、同步代码执行完成后，会清空一次微任务队列里面的事件

  3、微任务队列清空后，开始执行宏任务队列中的事件，按照队列先进先出的原则执行

  4、在处理宏任务事件时，遇到微任务事件，则插入到微任务事件队列中，待宏任务里面的同步代码执行完成后，开始再一次清空微任务事件队列

  5、微任务事件队列清空后，则继续执行宏任务事件队列中下一个事件

*/

/* setTimeout(() => {
	console.log('s1')
	Promise.resolve().then(() => {
		console.log('p2')
	})
	Promise.resolve().then(() => {
		console.log('p3')
	})
})

Promise.resolve().then(() => {
	console.log('p1')
	setTimeout(() => {
		console.log('s2')
	})
	setTimeout(() => {
		console.log('s3')
	})
}) */
// p1 s1 p2 p3 s2 s3

/* 
    Node.js的事件循环机制与浏览器的事件循环机制有所不同
    队列：
    timers：执行setTimeout 和 setInterval 回调
    pending callbacks: 执行系统操作的回调，例如tcp udp
    idle，prepare: 只在系统内部进行使用
    poll: 执行与I/O相关的回调
    check： 执行setImmediate中的回调
    close callbacks: 执行close事件的回调

    其中微任务队列中有一个例外： process.nextTick 的优先级 高于 promise，即使process.nextTick是后进入队列的

    执行同步代码，将不同的任务添加至相应的队列
    所有同步代码执行后回去执行满足条件的微任务
    所有微任务代码执行后会执行timer队列中满足的宏任务
    timer中的所有宏任务执行完成后就好依次切换队列
    在完成队列切换之前会先清空微任务代码
*/

setTimeout(() => {
	console.log('s1')
})

Promise.resolve().then(() => {
	console.log('p1')
})

console.log('start')

process.nextTick(() => {
	console.log('tick')
})

setImmediate(() => {
	console.log('setimmediate')
})

console.log('end')
// start end tick p1 s1 setimmediate
