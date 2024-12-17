const express = require('express');
const path = require('path');
const routes = require('./routes/index');

const app = express();
const port = 5501;

app.use(express.static(path.join(__dirname, '../public')));
app.use('/', routes);

app.listen(port, () => {
    console.log(`서버가 http://localhost:${port}에서 실행 중입니다.`);
});