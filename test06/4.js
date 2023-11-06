const fs = require('fs')
const path = require('path')
const { promisify } = require('util')

/* 
  异步创建目录
*/

/* function makeDirSync(dirPath) {
	let items = dirPath.split(path.sep)
	console.log(items)
	for (let i = 1; i <= items.length; i++) {
		let dir = items.slice(0, i).join(path.sep)
		try {
			fs.accessSync(dir)
		} catch (error) {
			fs.mkdirSync(dir)
		}
	}
}

makeDirSync('d\\e\\f') */

// 同步创建
/* function mkdir(dirPath, cb) {
	let parts = dirPath.split('/')
	let index = 1

	function next() {
		if (index > parts.length) return cb && cb()
		let current = parts.slice(0, index++).join('/')

		fs.access(current, (err) => {
			if (err) {
				fs.mkdir(current, next)
			} else {
				next()
			}
		})
	}
	next()
}

mkdir('l/m/n', () => {
	console.log('创建成功')
}) */

const access = promisify(fs.access)
const mkdir = promisify(fs.mkdir)

async function myMkdir(dirPath, cb) {
	let parts = dirPath.split('/')
	for (let index = 1; index <= parts.length; index++) {
		const current = parts.slice(0, index).join('/')
		try {
			await access(current)
		} catch (error) {
			await mkdir(current)
		}
	}
	cb && cb()
}

myMkdir('x/y/z', () => {
	console.log('创建成功。。。')
})
