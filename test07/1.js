class PubSub {
	constructor() {
		this._events = {}
	}

	// 注册
	subscribe(event, cb) {
		if (this._events[event]) {
			// 如果当前event存在，往后添加当前监听操作
			this._events[event].push(cb)
		} else {
			// 不存在，订阅此事件
			this._events[event] = [cb]
		}
	}

	// 发布
	publish(event, ...args) {
		const items = this._events[event]
		if (items && items.length) {
			items.forEach(function (cb) {
				cb.call(this, ...args)
			})
		}
	}
}

let ps = new PubSub()
ps.subscribe('事件1', (...args) => {
	console.log('事件1执行', args)
})

ps.publish('事件1')
ps.publish('事件1', 1, 2, 3)
