const fs = require('fs')
const path = require('path')
const marked = require('marked')
const browserSync = require('browser-sync')

let mdPath = path.join(__dirname, process.argv[2])
let cssPath = path.resolve('css.css')
let htmlPath = mdPath.replace(path.extname(mdPath), '.html')

fs.watchFile(mdPath, (curr, prev) => {
	if (curr.mtime !== prev.mtime) {
		fs.readFile(mdPath, 'utf-8', (err, data) => {
			// 将md ----> html
			let htmlStr = marked.parse(data)
			fs.readFile(cssPath, 'utf-8', (err, data) => {
				let retHtml = tempString
					.replace('{{content}}', htmlStr)
					.replace('{{style}}', data)

				// 写入html文件中
				fs.writeFile(htmlPath, retHtml, (err) => {
					console.log('生成html。。。')
				})
			})
		})
	}
})

browserSync.init({
	browser: '',
	server: __dirname,
	watch: true,
	index: path.basename(htmlPath)
})

const tempString = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title></title>
        <style>
            .markdown-body {
                box-sizing: border-box;
                min-width: 200px;
                max-width: 1000px;
                margin: 0 auto;
                padding: 45px;
            }
            @media (max-width: 750px) {
                .markdown-body {
                    padding: 15px;
                }
            }
            {{style}}
        </style>
    </head>
    <body>
        <div class="markdown-body">
            {{content}}
        </div>
    </body>
    </html>
`
