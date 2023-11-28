const express = require('express');
const path = require('path');
const app = express();

// 设置静态资源目录
app.use(express.static(path.join(__dirname, 'public')));

// 创建本地服务
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// 添加路由来处理对JSON文件的请求，并设置允许跨域的响应头
app.get('/images', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // 设置允许跨域的响应头
  res.sendFile(path.join(__dirname, 'public', 'images.json'));
});
