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
