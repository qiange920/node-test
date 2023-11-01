const EventEmitter = require('events')

const myEvent = new EventEmitter()

// 异步调用监听器
// 监听器函数可以使用 setImmediate() 或 process.nextTick() 方法切换到异步操作模式
myEvent.on('eventName2', (arg1, arg2) => {
	setImmediate(() => {
		console.log('异步执行：1、触发eventName2事件', arg1, arg2)
	})
})

myEvent.emit('eventName2', 'abc', '123')

// 使用方式
myEvent.on('eventName', () => {
	console.log('1、触发eventName事件')
})

myEvent.on('eventName', () => {
	console.log('2、触发eventName事件')
})

myEvent.emit('eventName')

// 添加参数
myEvent.on('eventName1', (arg1, arg2) => {
	console.log('1、触发eventName1事件', arg1, arg2)
})

myEvent.emit('eventName1', 'abc', '123')
