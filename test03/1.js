// console.log(global)
console.log(__filename)
console.log(__dirname)

// 默认情况this是空对象，和global不一样，区别于浏览器
console.log(this)
console.log(this == global) // false
;(function () {
	console.log(this == global) // true
})()
