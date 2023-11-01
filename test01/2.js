const http = require('http')

// CPU密集型操作并不适合在node中处理，如下
// 适合IO密集型任务
const sleepTime = (time) => {
	const sleep = Date.now() + time * 1000
	while (Date.now() < sleep) {
		console.log('sleeping...')
	}
	return
}

sleepTime(6)

const server = http.createServer((req, res) => {
	res.end('hello world......')
})

server.listen(8080, () => {
	console.log('启动服务......')
})
