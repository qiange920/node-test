console.log('test...')

// const express = require('express')
// 使用ts，用ESM语法即可
import express from 'express'
import { DataStore } from './fetchData'

console.log(DataStore.data)

const app = express()

app.get('/', (req, res) => {
	// res.end('hello world！！！')
	res.json(DataStore.data)
})

app.listen(8080, () => {
	console.log('服务启动成功...')
})
