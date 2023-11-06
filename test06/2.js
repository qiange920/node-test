const fs = require('fs')

/* 
  打开a文件，用read将数据保存到Buffer中暂存起来
  打开b文件，利用write将buffer中的数据写入到b文件中
*/

let buf = Buffer.alloc(10)

/* fs.open('a.txt', 'r', (err, fd) => {
	fs.open('b.txt', 'w', (err, wfd) => {
		fs.read(fd, buf, 0, 10, 0, (err, readBytes, buffer) => {
			fs.write(wfd, buf, 0, 10, 0, (err, written) => {
				console.log('写入成功')
			})
		})
	})
}) */

const BUFFER_SIZE = buf.length
let readOffset = 0

fs.open('a.txt', 'r', (err, fd) => {
	fs.open('b.txt', 'w', (err, wfd) => {
		function next() {
			fs.read(fd, buf, 0, BUFFER_SIZE, readOffset, (err, readBytes) => {
				if (!readBytes) {
					fs.close(fd)
					fs.close(wfd)
					console.log('拷贝完成')
					return
				}
				readOffset += readBytes
				fs.write(wfd, buf, 0, readBytes, (err, written) => {
					next()
				})
			})
		}
		next()
	})
})
