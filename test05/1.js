const fs = require('fs')
const path = require('path')

// fs.readFile(path.resolve('data.txt'), 'utf-8', (err, data) => {
// 	if (!null) {
// 		console.log(data)
// 	}
// 	console.log(err)
// })

/* fs.writeFile('data.txt', 'hello node.js', (err) => {
	if (!err) {
		fs.readFile('data.txt', 'utf-8', (err, data) => {
			console.log(data)
		})
	}
}) */

/* fs.writeFile(
	'data1.txt',
	'123',
	{
		mode: 438,
		// flag: 'r+', // 不会清空
		flag: 'w+', // 内容会被清空
		encoding: 'utf-8'
	},
	(err) => {
		if (!err) {
			fs.readFile('data.txt', 'utf-8', (err, data) => {
				console.log(data)
			})
		}
	}
) */

/* fs.appendFile('data.txt', '123456你好啊', (err) => {
	console.log('写入成功')
}) */

/* fs.copyFile('data.txt', 'data2.txt', (err) => {
	console.log('拷贝成功')
}) */

fs.watchFile('data.txt', { interval: 20 }, (curr, prev) => {
	if (curr.mtime !== prev.mtime) {
		console.log('文件变动')
		fs.unwatchFile('data.txt') // 取消监控
	}
})
