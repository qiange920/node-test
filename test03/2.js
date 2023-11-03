// 资源：cpu 内存
// Buffer.alloc(1001)
// console.log(process.memoryUsage())
// console.log(process.cpuUsage())

// 运行环境：运行目录、node环境、cpu架构、用户环境、系统平台
// console.log(process.cwd())
// console.log(process.version)
// console.log(process.versions)
// console.log(process.arch)
// console.log(process.env)
// console.log(process.env.USERPROFILE) // mac 平台使用HOME
// console.log(process.platform)

// 运行状态：启动参数、PID、运行时间
// console.log(process.argv)
// console.log(process.argv0)
// console.log(process.execArgv)
// console.log(process.pid)
// console.log(process.uptime())
// setTimeout(() => {
// 	console.log(process.uptime())
// }, 3000)

// 事件
// process.on('exit', (code) => {
// 	console.log('exit ' + code)
// 	// 只能写同步代码，不能写异步代码
// })

// process.on('beforeExit', (code) => {
// 	console.log('beforeExit ' + code)
// })
// console.log(123)
// process.exit() // 顺序

// 标准输出 输入 错误
/* console.log = function (data) {
	process.stdout.write('----' + data + '\n')
}
console.log(111)
console.log(222) */

/* const fs = require('fs')
fs.createReadStream('test.txt').pipe(process.stdout) */

// process.stdin.pipe(process.stdout)

process.stdin.setEncoding('utf-8')
process.stdin.on('readable', () => {
	let chunk = process.stdin.read()
	if (chunk != null) {
		process.stdout.write('data ' + chunk)
	}
})
