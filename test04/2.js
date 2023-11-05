/* 
  Buffer 
  无须require的一个全局变量
  实现nodejs平台下的二进制数据操作
  不占据V8堆内存大小的内存空间
  内存的使用有Node来控制，由V8的GC回收
  一般配合Stream流使用，充当数据缓冲区
*/

/* const b1 = Buffer.alloc(10)
const b2 = Buffer.allocUnsafe(10)
console.log(b1)
console.log(b2) */

// const b1 = Buffer.from('中')
// console.log(b1)
// console.log(b1.toString())

// const b1 = Buffer.from([0xe4, 0xb8, 0xad])
// console.log(b1)
// console.log(b1.toString())

const b1 = Buffer.alloc(3)
const b2 = Buffer.from(b1)
console.log(b1)
console.log(b2)

b1[0] = 1
console.log(b1)
console.log(b2)
