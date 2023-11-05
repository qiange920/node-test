const fs = require('fs')
const path = require('path')

/* fs.open(path.resolve('data.txt'), 'r', (err, fd) => {
	console.log(fd)
}) */

fs.open('data.txt', 'r', (err, fd) => {
	fs.close(fd, (err) => {
		console.log('关闭成功')
	})
})
