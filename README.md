# node api

- \_\_filename: 返回正在执行脚本文件的绝对路径
- \_\_dirname: 返回正在执行脚本所在目录
- timer 类函数: 执行顺序与事件循环间的关系
- process: 提供与当前进程互动的接口
- require: 实现模块的加载，使用 ts,可以使用 ESM 模块
- module、exports: 模块导出

- basename() 获取路径中基础名称
- dirname()
- extname() 获取路径中扩展名称
- isAbsolute() 获取路径是否为绝对路径
- join() 拼接多个路径片段，返回可用的完整路径

- resolve() 返回绝对路径
- parse() 解析路径
- format() 序列化路径
- normalize() 规范化路径

### Buffer 实例方法

- fill 使用数据填充 buffer
- write 向 buffer 中写入数据
- toString 从 buffer 中提取数据
- slice 截取 buffer
- indexOf 在 buffer 中查找数据
- copy 拷贝 buffer 中的数据

### 文件操作 Api

- readFile 从指定文件中读取数据
- writeFile 向指定文件中写入数据
- appendFile 追加的方式向指定文件中写入数据
- copyFile 将某个文件中的数据拷贝至另一文件
- watchFile 对指定文件进行监控

### 常见目录操作 Api

- access 判断文件或目录是否具有操作权限
- stat 获取目录及文件信息
- mkdir 创建目录
- rmdir 删除目录
- readdir 读取目录中内容
- unlink 删除指定文件
