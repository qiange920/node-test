/* let b1 = Buffer.from('你好')
let b2 = Buffer.from('世界')

// let b = Buffer.concat([b1, b2])
let b = Buffer.concat([b1, b2], 9)
console.log(b)
console.log(b.toString()) */

let b1 = Buffer.alloc(3)
console.log(Buffer.isBuffer(b1))
