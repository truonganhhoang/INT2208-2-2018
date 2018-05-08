const express = require('express')
const app = express()

app.use(express.static('public'));

app.listen(process.env.PORT || 3001, () => console.log('Example app listening on port 3001!'))