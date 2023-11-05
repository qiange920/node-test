let buf = Buffer.alloc(6) // 6个字节

// buf.fill('123')
// buf.fill('123456789')
// buf.fill('123', 1)
// buf.fill('123', 1, 3)
// buf.fill(123)
// console.log(buf)
// console.log(buf.toString())

// buf.write('123')
// buf.write('123', 1)
// buf.write('123', 1, 3)
// console.log(buf)
// console.log(buf.toString())

// buf = Buffer.from('咋打算的')
// console.log(buf)
// console.log(buf.toString('utf-8', 3, 9))

// buf = Buffer.from('你好世界')
// // let b1 = buf.slice(3)
// // let b1 = buf.slice(3, 9)
// let b1 = buf.slice(-3)
// console.log(b1)
// console.log(b1.toString())

// buf = Buffer.from('我爱你,我爱你中国')
// console.log(buf)
// console.log(buf.indexOf('爱', 4))

let b1 = Buffer.alloc(6)
let b2 = Buffer.from('好的')

// b2.copy(b1)
// b2.copy(b1, 3)
// b2.copy(b1, 3, 3)
b2.copy(b1, 3, 3, 6)
console.log(b1.toString())
console.log(b2.toString())
