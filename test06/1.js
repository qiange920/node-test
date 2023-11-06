const fs = require('fs')

// read: 将数据从磁盘文件中写入到Buffer中
let buf = Buffer.alloc(10)

/* 
   fd 定位当前被打开的文件
   buf 表示当前缓冲区
   offset 表示当前从buf 的哪个位置开始执行写入
   length 当前写入的长度
   position 当前从文件的哪个位置开始读取
*/
/* fs.open('data.txt', 'r', (err, fd) => {
	console.log(fd)
	fs.read(fd, buf, 0, 3, 1, (err, readBytes, data) => {
		console.log(readBytes)
		console.log(data)
		console.log(data.toString())
	})
}) */

// write 将缓冲区里的内容写入到磁盘文件中
buf = Buffer.from('1234567890')
fs.open('b.txt', 'w', (err, fd) => {
	fs.write(fd, buf, 0, 3, 0, (err, written, buffer) => {
		console.log(written)
		console.log(buffer)
		console.log(buffer.toString())
		fs.close(fd)
	})
})
