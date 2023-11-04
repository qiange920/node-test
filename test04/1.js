const path = require('path')

// 获取路径中的基础名称
// console.log(__filename)
// console.log(path.basename(__filename))
// console.log(path.basename(__filename, '.js'))
// console.log(path.basename(__filename, '.css'))
// console.log(path.basename('/a/b/c')) // 返回路径的最后部分，不论是文件还是目录
// console.log(path.basename('/a/b/c/'))

// 获取路径目录名(路径)
// console.log(path.dirname(__filename))
// console.log(path.dirname('/a/b/c'))
// console.log(path.dirname('/a/b/c/'))

// 获取路径的扩展名
/* console.log(path.extname(__filename))
console.log(path.extname('/a/b/c'))
console.log(path.extname('/a/b/c/'))
console.log(path.extname('/a/b/index.html.js.css'))
console.log(path.extname('/a/b/index.html.js.')) */

// 解析路径
// const obj = path.parse('/a/b/c/index.html')
// const obj = path.parse('/a/b/c/')
// const obj = path.parse('./a/b/c/')
// console.log(obj)

// 序列化路径
// const obj = path.parse('./a/b/c/')
// console.log(path.format(obj))

// 判断当前路径是否为绝对路径
// console.log(path.isAbsolute('abc'))
// console.log(path.isAbsolute('/a/b/c'))
// console.log(path.isAbsolute('///a'))
// console.log(path.isAbsolute(''))
// console.log(path.isAbsolute('.'))
// console.log(path.isAbsolute('../bar'))

// 拼接路径
/* console.log(path.join('a/b', 'c', 'index.html'))
console.log(path.join('/a/b', 'c', 'index.html'))
console.log(path.join('/a/b', 'c', '../', 'index.html'))
console.log(path.join('/a/b', 'c', './', 'index.html'))
console.log(path.join('/a/b', 'c', '', 'index.html'))
console.log(path.join('')) */

// 规范化路径
// console.log(path.normalize('a/b/c/d'))
// console.log(path.normalize('a//b/c../d'))

// 绝对路径
// console.log(path.resolve())
console.log(path.resolve('a', 'b'))
console.log(path.resolve('a', '/b'))
console.log(path.resolve('/a', '/b'))
console.log(path.resolve('/a', 'b'))
console.log(path.resolve('index.html'))
