const express = require('express');
const app = express();
const router = require('./router');

require('./database/index')


app.use(express.json());
app.use(router);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
