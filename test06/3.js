const fs = require('fs')

/* fs.access('a.txt', (err) => {
	if (err) {
		console.log(err)
	} else {
		console.log('有操作权限')
	}
}) */

/* fs.stat('a.txt', (err, statObj) => {
	console.log(statObj)
	console.log(statObj.size)
	console.log(statObj.isFile())
	console.log(statObj.isDirectory())
}) */
/* 
fs.mkdir(
	'a/b/c',
	{
		recursive: true // 递归创建
 	},
	(err) => {
		if (!err) {
			console.log('创建成功')
		} else {
			console.log(err)
		}
	}
) */

/* fs.rmdir('a', { recursive: true }, (err) => {
	if (!err) {
		console.log('删除成功')
	} else {
		console.log(err)
	}
}) */

/* fs.readdir('a/b', (err, file) => {
	console.log(file)
}) */

fs.unlink('a/a.txt', (err) => {
	if (!err) {
		console.log('删除成功')
	}
})
